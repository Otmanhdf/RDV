import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import Faculte from './Faculte';
import SignUp from './screens/SignUp';
import Fsj from './screens/Fsj';
import Mapuniver from './screens/Mapuniver';
import BuildingMap from './screens/BuildingMap';


const Stack = createStackNavigator();
 export default function App() {
    return (
      <NavigationContainer >
      <Stack.Navigator initialRouteName="Fsj">
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="Faculte" options={{headerShown:false}} component={Faculte} />
        <Stack.Screen name="SignUp" options={{headerShown:false}} component={SignUp} />
        <Stack.Screen name="Fsj" options={{headerShown:false}} component={Fsj} />
        <Stack.Screen name="Mapuniver" options={{headerShown:false}} component={Mapuniver} />
        <Stack.Screen name="BuildingMap" options={{headerShown:false}} component={BuildingMap} />

      </Stack.Navigator>
    </NavigationContainer>
    );
  }
 
