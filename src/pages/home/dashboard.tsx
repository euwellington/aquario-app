import React, { FC, useContext, useEffect, useState } from 'react';
import { NativeStackHeaderProps} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, TouchableOpacity, View, Modal, Alert, TextInput, Switch, ScrollView, Image, ActivityIndicator } from 'react-native';
import { style } from './styles/home.style';
import { SimpleLineIcons } from '@expo/vector-icons';
import imgfish from '../../../assets/img/fish.png';
import MqttAPI from '../../api/MqttAPI';
import { useAcionamento } from '../../hooks/Acionamento.hook';
import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';
import { socket } from '../../services/socket';
import { storeContext } from '../../stores';
import { observer } from 'mobx-react-lite';
import { Acionamento } from '../../interface/Acionamento.Interface';
import { AntDesign } from '@expo/vector-icons'; 


const Dashboard: FC<NativeStackHeaderProps> = ({ navigation }) => {

    const { authStore, acionamentoStore } = useContext(storeContext);
    const { acionar, loading } = useAcionamento();

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

    useEffect(() => 
    {
        authStore.listarUsuario();
        // acionamentoStore.listar();
    }, []);

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
                                    disabled={loading}
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
        <ScrollView style={style.container}>
            <StatusBar style={'light'} backgroundColor='#4951EC' />
            <View style={style.header}>
                <View>
                    <Text style={style.user}>Olá, {authStore.usuario?.nome ? authStore.usuario?.nome.split(' ')[1].toLocaleLowerCase() : ''}</Text>
                    <Text style={style.userInfo}>Seja bem vindo de volta!</Text>
                </View>
                <TouchableOpacity style={style.btnSettings} onPress={() => navigation.navigate('Configurações')}>
                    <AntDesign name="user" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <Text style={style.textTitle}>Acionamentos</Text>
            <View style={style.viewContent}>
                {
                    acionamentoStore.acionamentos.map((acionamento, i) => renderAcionamento(acionamento, i))
                }
            </View>
            <View style={style.contentFish}>
                <Image source={imgfish} style={style.imgfish} />
                <View style={{alignSelf:'center'}}>
                    <Text style={style.textFish}>
                        Seu aquário cada vez mais prático, rápido e bonito!
                        Caso queira deixar alguma sugestão é só clicar no botão abaixo
                    </Text>
                    <TouchableOpacity style={style.btnComment}>
                        <Text style={style.titleBtnComment}>Deixar um comentário</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}


export default observer(Dashboard);