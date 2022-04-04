/* eslint-disable prettier/prettier */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Login,Home} from '../pages';

const Stack = createStackNavigator();

function Routes () {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login"
    screenOptions={{
        headerShown:false,
    }}>
    <Stack.Screen name="Login" component={Login}/>
    <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
</NavigationContainer>
  );
}

export default Routes;
