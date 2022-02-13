import React, { useState } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Input, NativeBaseProvider, Button, Box, Image, AspectRatio } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { StatusBar} from 'expo-status-bar';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Map1 () {
  const navigation = useNavigation();
  const buttonClickedHandler = () => {
  console.log('You have been clicked a button!');
  // do something
  };

  const [region, setRegion] = useState({latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,});
  
    // function getInitialState() {
  //   return {
  //     region: {
  //       latitude: 37.78825,
  //       longitude: -122.4324,
  //       latitudeDelta: 0.0922,
  //       longitudeDelta: 0.0421,
  //     },
  //   };
  // }

  // function onRegionChange(region) {
  //   this.setState({ region });
  // }

  return (
    <View style={{ position: 'relative', height: 500}}>
        <MapView
          style={{ left:0, right: 0, top:0, bottom: 0, position: 'absolute' }}
          // region={this.state.region}
          initialRegion={region}
          onRegionChange={setRegion}
        />
    </View>
      
  );
}

export default ()=> {
  return (
    <NativeBaseProvider>
      <Map1/>
    </NativeBaseProvider>
  )
}