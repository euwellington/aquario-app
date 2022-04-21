import React, { FC, useContext, useEffect, useState } from 'react';
import { NativeStackHeaderProps} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, TouchableOpacity, View, Modal, Alert, TextInput, Switch, ScrollView, ActivityIndicator } from 'react-native';
import { style } from './styles/camip.style';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Video } from 'expo-av'
import WebView from 'react-native-webview';
import { useAcionamento } from '../../hooks/Acionamento.hook';
import { StatusBar } from 'expo-status-bar';
import { observer } from 'mobx-react-lite';
import { storeContext } from '../../stores';
import Slider from '@react-native-community/slider';
import { Acionamento } from '../../interface/Acionamento.Interface';

const CamIP: FC<NativeStackHeaderProps> = ({ navigation }) => {

    const { acionamentoStore } = useContext(storeContext);
    const { acionar, loading } = useAcionamento();
    const [acionaRele1, setAcionaRele1] = useState(false);
    const [acionaRele2, setAcionaRele2] = useState(false);

    // useEffect(() => 
    // {
    //     acionamentoStore.listar();
    // }, []);
    
    const toggleSwitch = (acionamento: Acionamento) => 
    {
        acionamentoStore.definirSelecionado(acionamento.id);
        acionar(acionamento)
    };

    const toggleSlide = (acionamento: Acionamento, value?: number) => 
    {
        acionamentoStore.definirSelecionado(acionamento.id);
        acionar(acionamento, value)
        console.log(value)
    };
    
    const renderAcionamento = (acionamento: Acionamento, key: number) =>
    {
        return( 
            <View key={key}>
                <View style={style.contentAcionamento}>
                    <View style={style.contentHeader}>
                        <SimpleLineIcons name="power" size={20} color="#4951EC" style={{alignSelf: 'center'}} />
                        {
                            acionamento.tipo === 0
                            ?
                            (
                                acionamentoStore.selecionado?.id === acionamento.id && loading
                                ?
                                    <ActivityIndicator size="small" color="#4951EC" style={{ alignSelf: 'center', margin: 14 }} />
                                :
                                <Switch
                                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                                    thumbColor={acionamentoStore.selecionado?.id === acionamento.id ? '#4951EC' : '#f4f3f4'}
                                    onValueChange={() => toggleSwitch(acionamento)}
                                    value={acionamento.estado ? true : false}
                                    // disabled={loading}
                                />
                            )
                            :
                            (
                                <Slider
                                    style={{height: 40,  width: 100}}
                                    minimumValue={0}
                                    maximumValue={255}
                                    minimumTrackTintColor="#4951EC"
                                    maximumTrackTintColor="#000000"
                                    thumbTintColor={'#4951EC'}
                                    onValueChange={(e) => toggleSlide(acionamento, e)}
                                    value={parseFloat(acionamento?.flag)}
                                    // disabled={loading}
                                />
                            )
                        }
                    </View>
                    <View style={style.contentInfo}>
                        <Text style={style.contentInfoTitle}>{acionamento.nome}</Text>
                        <Text style={style.contentInfoSubTitle}>Liga e desliga o H20 do aquário</Text>
                    </View>
                </View>
        </View>
        )
    }

    return(
        <View style={style.container}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={style.header}>
                    <View style={{flexDirection: 'row'}}>
                        <SimpleLineIcons name="camrecorder" size={24} color="#4951EC" style={{alignSelf: 'center'}} />
                        <Text style={style.title}>Visualização da câmera</Text>
                    </View>
                    <Text style={style.subtitle}>Video em tempo real do aquário</Text>
                </View>
            </View>

            <View style={style.video}>
                {/* <Video
                    source={{
                    uri: 'http://outkeyapp:fb05a350-65dc-48e8-9986-0e03b82dc6cf@htexnet.hiseg.net.br:94/mjpegstream.cgi?camera=000117',
                    }}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    style={style.video}
                /> */}
                 <WebView
                    style={style.video}
                    javaScriptEnabled={true}
                    source={{
                    uri: 'http://outkeyapp:fb05a350-65dc-48e8-9986-0e03b82dc6cf@htexnet.hiseg.net.br:94/mjpegstream.cgi?camera=000117',
                    }}
                />
            </View>
            <ScrollView style={{marginBottom: 60}}>
                <View style={style.viewContent}>
                    {
                        acionamentoStore.acionamentos.map((acionamento, i) => renderAcionamento(acionamento, i))
                    }
                </View>
            </ScrollView>
        </View>
    )
}


export default observer(CamIP);
