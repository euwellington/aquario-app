import React, { FC, useContext, useEffect } from 'react';
import { NativeStackHeaderProps} from '@react-navigation/native-stack';
import { Text, TouchableOpacity, View } from 'react-native';
import { style } from './styles/home.style';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './dashboard';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import Settings from '../settings';
import CamIP from '../cam';
import Conexao from '../connection';
import { observer } from 'mobx-react-lite';
import { storeContext } from '../../stores';
import historic from '../historic';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function Hitorico() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hitórico!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const Home: FC<NativeStackHeaderProps> = ({ navigation }) => {

  const { authStore } = useContext(storeContext);

  useEffect(() => {
    authStore.listarUsuario();
  }, [authStore]);
  
    return(
        <Tab.Navigator 
            initialRouteName='Dashboard'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === 'Dashboard') {
                    iconName = 'layers';
                  } else if (route.name === 'Câmera') {
                    iconName = focused ? 'camrecorder' : 'camrecorder';
                  } else if (route.name === 'Conexão') {
                    iconName = focused ? 'feed' : 'feed';
                  }
                  else if (route.name === 'Histórico') {
                    iconName = focused ? 'book-open' : 'book-open';
                  }
                  else if (route.name === 'Configurações') {
                    iconName = focused ? 'wrench' : 'wrench';
                  }
      
                  // You can return any component that you like here!
                  return <SimpleLineIcons name={iconName as any} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#4951EC',
                tabBarInactiveTintColor: 'gray',
              })}
            >
            <Tab.Screen 
                name="Dashboard" 
                component={Dashboard}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Câmera" 
                component={CamIP}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Conexão" 
                component={Conexao}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Histórico" 
                component={historic}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Configurações" 
                component={Settings}
                options={{
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}


export default observer(Home);
