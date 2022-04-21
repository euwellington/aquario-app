import React, { FC } from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { style } from './styles/init.style';
import imghome from '../../../assets/img/home.png';
import { observer } from 'mobx-react-lite';

const Init: FC<NativeStackHeaderProps> = ({ navigation: { navigate } }) => {
    return(
        <View style={style.container}>
            <Image source={imghome} style={style.img} />
            <Text style={style.title}>Autotech home App</Text>
            <Text style={style.subtitle}>
                Sistema de controle de aquário automatizado de forma simples, prático e com baixo custo!
            </Text>
            <TouchableOpacity style={style.btn} onPress={() => navigate('login')}>
                <Text style={style.titleBtn}>Ir para página de login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default observer(Init);
