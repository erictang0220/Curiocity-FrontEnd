import React from 'react'

import Login from './screens/Login';
import Signup from './screens/Signup';
import Profile from './screens/Profile';
import Homepage from './screens/Homepage';
import Map1 from './screens/Map1';
import PlaceInformation from './screens/PlaceInformation'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_100Thin, Montserrat_700Bold, Montserrat_600SemiBold,} from '@expo-google-fonts/montserrat';
import { Roboto_100Thin } from '@expo-google-fonts/roboto';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator screenOptions = {{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="Map1" component={Map1} />
      <Stack.Screen name="PlaceInformation" component={PlaceInformation} />
    </Stack.Navigator>
  );
}

export default () => {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Roboto_100Thin,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}