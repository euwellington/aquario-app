import React, { FC, useContext, useEffect, useState } from 'react';
import { NativeStackHeaderProps} from '@react-navigation/native-stack';
import { Text, TouchableOpacity, View, Modal, Alert, TextInput, Switch, ScrollView, Image, FlatList, TouchableHighlight, Platform } from 'react-native';
import { style } from './styles/Historic.style';
import { observer } from 'mobx-react-lite';
import { storeContext } from '../../stores';
import { FontAwesome, Octicons } from '@expo/vector-icons'; 

const Historic: FC<NativeStackHeaderProps> = ({ navigation }) => {

    const { eventoStore } = useContext(storeContext);

    useEffect(() => 
    {
        eventoStore.listar();
    }, []);

    return(
        <View style={style.container}>
            <View style={style.header}>
                <View>
                    <Text style={style.headertitle}>Histórico</Text>
                </View>
                
            </View>
            
            <FlatList
                data={eventoStore.eventos}
                refreshing={eventoStore.loading}
                style={{marginBottom: 50}}
                onRefresh={() => eventoStore.listar()}
                renderItem={({ item, index, separators }) => (
                    <TouchableHighlight
                    key={item.id}
                    onShowUnderlay={separators.highlight}
                    onHideUnderlay={separators.unhighlight}>
                    <View style={style.content}>
                        <View style={style.viewIcon}>
                            <Octicons name="light-bulb" style={style.icon} />
                        </View>
                        <View style={{alignSelf: 'center', width:'80%'}}>
                            <Text style={style.contenttitle}>{item.acionamentoNome}</Text>
                            <Text style={style.contentsubtitle}>
                                Acionamento feito pelo app do usuario {item.usuarioNome}
                            </Text>
                            <Text style={style.contentData}>{item.dataHoraEvento}</Text>
                        </View>
                    </View>
                    </TouchableHighlight>
                )}
            />

        </View>
    )
}


export default observer(Historic);
