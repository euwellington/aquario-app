import { useContext, useEffect, useState } from "react";
import AuthAPI from "../api/AuthAPI";
import { Auth } from "../interface/Auth.interface";
import AsyncStorage  from "@react-native-async-storage/async-storage";
import { NativeStackHeaderProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, Link } from "@react-navigation/native";
import UsuarioAPI from "../api/UsuarioAPI";
import { storeContext } from "../stores";
import { utilToken } from "../utils/decodeToken";


const useAuth = () =>
{

    const { authStore } = useContext(storeContext);
    const { decodeToken } = utilToken();
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        setErro(false);
    }, [erro]);

    const login = async (auth: Auth, navigate: NativeStackNavigationProp<ParamListBase, string, undefined>) =>
    {
        setLoading(true);
        try
        {
            const rertono = await AuthAPI.login(auth);
            await AsyncStorage.setItem('@token', rertono.data);
            console.log(rertono.data)
            if(rertono.data)
            {
                let user: any = decodeToken(rertono.data)
                const { data } = await UsuarioAPI.listarUsuario(user.user);
                if(data.nome)
                {
                    await AsyncStorage.setItem('@equipamento', data.equipamentoId);
                    authStore.selecionarUsuario(data);
                    navigate.navigate('home');
                    setLoading(false);

                }
            }
            else
            {
                setErro(true);
                setLoading(false);
            }
            
    }
        catch(e)
        {
            setErro(true);
            setLoading(false);
            console.log(e)
        }
    }


    return {
        login,
        loading,
        erro,
        setErro
    }

}

export { useAuth };