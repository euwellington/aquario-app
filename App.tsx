import { StatusBar } from 'expo-status-bar';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
import { storeContext } from './src/stores';
import { ramalIpSelecionado } from './src/utils/boardUtil';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {

  const { socketStore, authStore, acionamentoStore, equipamentoStore } = useContext(storeContext);

  useEffect(() => {
    Promise.all([
      socketStore.getIpBoard(),
      authStore.verifyToken(),
      acionamentoStore.listar()
    ])
    .then(() => {
      (async () => {
        if(authStore.usuario)
        {
          equipamentoStore.definirSelecionado(authStore.usuario.equipamentoId);
        }
      })();
      
    })
  }, []); 

  return <Routes/>;
}

export default observer(App);