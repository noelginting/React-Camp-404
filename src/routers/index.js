/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BottomNavigator from '../component/BottomNavigator';
import {Login,Home} from '../pages';

const Stack = createStackNavigator();
const Tap = createBottomTabNavigator();

function MainApp (){
  return (
    <Tap.Navigator
    initialRouteName="Home"
    tabBar={props => <BottomNavigator {...props} />}>
      <Tap.Screen name ="Home" component={Home}/>
      <Tap.Screen name ="Setting" component={Home}/>
    </Tap.Navigator>
  );
}
function Routes () {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login"
    screenOptions={{
        headerShown:false,
    }}>
    <Stack.Screen name="Login" component={Login}/>
    <Stack.Screen name="MainApp" component={MainApp}/>
    </Stack.Navigator>
</NavigationContainer>
  );
}

export default Routes;
