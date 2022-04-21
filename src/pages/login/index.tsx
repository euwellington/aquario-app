import React, { FC, useState } from 'react';
import { Image, Text, View, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { style } from './styles/Login.style';
import login from '../../../assets/img/login.png';
import { AntDesign, FontAwesome5, FontAwesome } from '@expo/vector-icons'; 
import { Auth, AuthRequest } from '../../interface/Auth.interface';
import { useAuth } from '../../hooks/Auth.hook';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { observer } from 'mobx-react-lite';

const Login: FC<NativeStackHeaderProps> = ({ navigation }) => {

    const AuthHook = useAuth(); 
    const [form, setForm] = useState<AuthRequest>({});

    const Authenticate = () => 
    {
        AuthHook.login(form as Auth, navigation);
    }

    if(AuthHook.erro)
    {
        Alert.alert('Ops!', 'Usuário ou senha incorreto', [
            { text: 'Fechar'},
        ]);
    }

    return (
        <View style={style.container}>
        <Image source={login} style={style.img} />
        <Text style={style.title}>Olá, seja bem vindo!</Text>
        <Text style={style.subtitle}>Preencha os campo abaixo para ter acesso ao aplicativo!</Text>
        <View style={style.viewInput}>
            <TextInput placeholder='Email' style={style.input} value={form.email || ''} onChangeText={(e) => setForm({ ...form, email: e })} />
            <TextInput secureTextEntry placeholder='*******' style={style.input} value={form.senha || ''} onChangeText={(e) => setForm({ ...form, senha: e })} />
        </View>

        <TouchableOpacity style={style.btn} onPress={() => Authenticate()}>
            {
                AuthHook.loading
                ?
                <ActivityIndicator color={'#fff'} />
                :
                <Text style={style.titleBtn}>Entrar</Text>
            }
        </TouchableOpacity>

        <Text style={{ textAlign: 'center', color: 'rgba(0,0,0,0.6)', marginTop: 25 }}>Redes Sociais</Text>
        <View style={style.viewAccounts}>
            <TouchableOpacity style={style.btnFacebook}>
                <FontAwesome5 name="facebook-square" style={style.iconF} />
            </TouchableOpacity>
            <TouchableOpacity style={style.btnIntagram}>
                <AntDesign name="instagram" style={style.iconI} />
            </TouchableOpacity>
            <TouchableOpacity style={style.btnFacebook}>
                <FontAwesome name="twitter" style={style.iconF} />
            </TouchableOpacity>
        </View>
        </View>
    )
}

export default observer(Login);