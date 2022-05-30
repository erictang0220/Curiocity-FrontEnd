import React from 'react'

import Login from './screens/Login';
import Signup from './screens/Signup';
import ModeSelection from './screens/ModeSelection';
import StartJoin from './screens/StartJoin';
import GroupCode from './screens/GroupCode';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator screenOptions = {{headerShown: false}}>
      <Stack.Screen name="ModeSelection" component={ModeSelection} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="StartJoin" component={StartJoin} />
      <Stack.Screen name="GroupCode" component={GroupCode} />
      
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}