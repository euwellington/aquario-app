import React, { FC, useContext, useEffect, useState } from 'react';
import { NativeStackHeaderProps} from '@react-navigation/native-stack';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { style } from './styles/setting.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SimpleLineIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { observer } from 'mobx-react-lite';
import { storeContext } from '../../stores';

const Settings: FC<NativeStackHeaderProps> = ({ navigation: { navigate } }) => {

    const { authStore } = useContext(storeContext);
    const [usuario, setUsuario] = useState('');

    const listOption = [
        {
            icon: <SimpleLineIcons name="envelope" size={24} color="#4951EC" />,
            label: 'Notificação',
            info: 'Notficação sobre os eventos',
            value: 'notificacao'
        },
        {
            icon: <SimpleLineIcons name="bubbles" size={24} color="#4951EC" />,
            label: 'Notas',
            info: 'Nota de aviso',
            value: 'msn'
        },
        {
            icon: <SimpleLineIcons name="info" size={24} color="#4951EC" />,
            label: 'Sobre',
            info: 'Tudo sobre o APP',
            value: 'ajuda'
        },
        {
            icon: <SimpleLineIcons name="logout" size={24} color="#4951EC" />,
            label: 'Sair',
            info: 'Sair do aplicativo',
            value: 'sair'
        },
    ]

    return(
        <View style={style.container}>
            <StatusBar style={'light'} backgroundColor='#4951EC' />
            <View style={style.HeaderUser}>
                <Image source={{ uri: 'https://blog.nubank.com.br/wp-content/uploads/2019/10/03_square.png'}} style={style.img} />
                <View style={{alignSelf: 'center'}}>
                    <Text style={style.user}>{authStore.usuario?.nome.split(' ')[1]}</Text>
                    <TouchableOpacity>
                        <Text style={style.edit}>Editar perfil</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                {
                    listOption.map((menu, i) => (
                        <TouchableOpacity key={i} style={style.content}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{alignSelf: 'center'}}>
                                    {menu.icon}
                                </View>
                                <View style={{alignSelf: 'center', marginLeft: 20}}>
                                    <Text style={style.text}>{menu.label}</Text>
                                    <Text style={style.textInfo}>{menu.info}</Text>
                                </View>
                            </View>
                            <SimpleLineIcons name="arrow-right" style={style.icon} />
                        </TouchableOpacity>
                    ))
                }
            </View>
    </View>
    )
}

export default observer(Settings);
