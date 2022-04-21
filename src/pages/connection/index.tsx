import React, { FC, useContext, useEffect, useState } from 'react';
import { NativeStackHeaderProps} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, TouchableOpacity, View, Modal, Alert, TextInput, Switch, ScrollView, Image } from 'react-native';
import { style } from './styles/conexao.style';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Video } from 'expo-av'
import WebView from 'react-native-webview';
import { useAcionamento } from '../../hooks/Acionamento.hook';
import imginternet from '../../../assets/img/internet.png';
import { socket } from '../../services/socket';
import Socket from '../../hooks/Socket.hook';
import { observer } from 'mobx-react-lite';
import { storeContext } from '../../stores';
// import { useMqtt } from '../../mqtt';

interface Message 
{
    text: string;
}


const Conexao: FC<NativeStackHeaderProps> = ({ navigation }) => {

    const { socketStore, equipamentoStore } = useContext(storeContext);
    const [acionaRele1, setAcionaRele1] = useState(false);
    const [acionaRele2, setAcionaRele2] = useState(false);

    return(
        <View style={style.container}>
            <Image source={imginternet} style={style.img} />
            <Text style={style.contentInfoTitle}>Conectado com o equipamento {equipamentoStore.equipamento?.nome}: V {equipamentoStore.equipamento?.versao}</Text>
            <View>
                <Text style={style.ip}>{equipamentoStore.equipamento?.ip}</Text>
            </View>
        </View>
    )
}


export default observer(Conexao);
