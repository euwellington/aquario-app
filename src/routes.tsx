import React, { FC, useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, NavigationContainerProps } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackHeaderProps} from '@react-navigation/native-stack';
import Init from './pages/init';
import Home from './pages/home';
import Login from './pages/login';
import { observer } from 'mobx-react-lite';
import { storeContext } from './stores';
import AsyncStorage  from "@react-native-async-storage/async-storage";
import init from './pages/init';

const Stack = createNativeStackNavigator();


const Routes = () => {

    const { authStore } = useContext(storeContext);
    
    if(authStore.loading && !authStore.usuario?.nome)
    {
        return(
            <View>
                <Text>CARREGANDO...</Text>
            </View>
        )
    }

    return(
        <NavigationContainer>
                <Stack.Navigator initialRouteName={authStore.authenticate ? 'home' : 'init'}>
                    <Stack.Screen
                            name='init'
                            component={Init}
                            options={{
                                headerShown: false
                            }}
                        />
                        <Stack.Screen
                            name='login'
                            component={Login}
                            options={{
                                headerShown: false
                            }}
                        />
                        <Stack.Screen
                            name='home'
                            component={Home}
                            options={{
                                headerShown: false
                            }}
                        />
                   </Stack.Navigator>
                    
        </NavigationContainer>
    )
}

export default observer(Routes);