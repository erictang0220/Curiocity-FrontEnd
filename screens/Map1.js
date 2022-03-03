import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Input, NativeBaseProvider, Button, Box, Image, AspectRatio } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { StatusBar} from 'expo-status-bar';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Container from './Container';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/Feather';
import logo from './logo.png';
// import * as Location from 'expo-location';

// function Testing() {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         console.log(errorMsg);
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//     })();
//   }, []);

//   var obj = {};
//   let text = 'Waiting..';
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     obj['latitude'] = location.coords.latitude;
//     obj['longitude'] = location.coords.longitude;
//     console.log(obj);
//     text = JSON.stringify(location);
//   }

//   return (
//     <View style={styles.container}>
//     <Text style={styles.paragraph}>{text}</Text>
//   </View>
//   );
// }

function TopButtons () {
  const navigation = useNavigation();
  const buttonClickedHandler = () => {
  console.log('You have been clicked a button!');
  // do something
  };
  return(
    <View style={styles.topStyle}>
      <View>
        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.roundButton1}>
          <Icon1 name="three-bars" size={30} color="#000"/>
        </TouchableOpacity>
      </View>
      <View>
          <Image 
            roundedTop="lg"
            style={{height: 80}}
            source={logo}
            alt="logo"
          />
      </View>
      <View>
        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.roundButton1}>
          <Icon name="filter" size={30} color="#000"/>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}

function BottomButtons () {
  const navigation = useNavigation();
  const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    navigation.navigate('Map1');
  // do something
  };
  return(
    <>
      <View style={styles.ovalWrapper}>
        <View style={styles.oval}>
            <View style={styles.buttonsDown}>

              <View>
                <TouchableOpacity
                  onPress={buttonClickedHandler}
                  style={styles.roundButton1}>
                  <Icon name="user" size={30} color="#000"/>
                </TouchableOpacity>
              </View>
              <View>    
                <TouchableOpacity
                  onPress={buttonClickedHandler}
                  style={styles.roundButton1}>
                  <Icon2 name="bookmark" size={30} color="#000"/>
                </TouchableOpacity>
              </View>
                
            </View>  
          </View>
      </View>

      <TouchableOpacity
            onPress={buttonClickedHandler}
            style={styles.roundButton2}>
            <Icon2 name="map" size={30} color="#000"/>
      </TouchableOpacity>
      
    </>
  );
}

function Map1 () {
  const navigation = useNavigation();
  const buttonClickedHandler = () => {
  console.log('You have been clicked a button!');
  // do something
  };

  const [region, setRegion] = useState({latitude: 100,
    longitude: 100,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,});

  return (
    // have to set two dimension(?
    <View style={{ position: 'relative', height: 500, elevatioin: 100, zindex: 1000,}}>
        <MapView
          style={[styles.map, {height: 700,}]}
          initialRegion={region}
          provider={MapView.PROVIDER_GOOGLE}
          onRegionChange={setRegion}
          showsUserLocation={true}
          showsMyLocationButton={true}
        />
    </View>
      
  );
}

function FloatingButtons () {
  const navigation = useNavigation();
  const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    navigation.navigate('Map1');
  // do something
  };
  const buttonClickedHome = () => {
    console.log('You have clicked a button!');
    navigation.navigate('Homepage');
  }
  return(
    <>
      <TouchableOpacity
            onPress={buttonClickedHome}
            style={styles.backButton}>
            <Icon2 name="arrow-left" size={30} color="#000"/>
      </TouchableOpacity>
      <TouchableOpacity
            onPress={buttonClickedHandler}
            style={styles.weatherButton}>
            <Icon2 name="sun" size={30} color="#000"/>
      </TouchableOpacity>
    </>
  );
}

function Layout () {
  const navigation = useNavigation();
    const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    // do something
    };

    return (
      <View>
        <Map1/>
        <BottomButtons />
        <FloatingButtons />
      </View>
    );
}

export default ()=> {
  return (
    <NativeBaseProvider>
      <Layout/>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  roundButton1: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 40,
    marginHorizontal: 20,
    transform: [
      {scaleX: 0.5}
    ]
  },
  roundButton2: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 5,
    borderRadius: 70,
    width: 97,
    height: 97,
    bottom: -350, // ovalwrapper offset +250
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 20,
    shadowOffset : { width: 2, height: 5},
    backgroundColor: '#CDFDEF',
    // can't seem to get shadow to work :( 
  },
  bottomStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25,
    // position: 'absolute',
    marginTop: 100,
    zIndex: 100,
    // backgroundColor: 'red',
  },
  buttonsDown: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    marginTop: 40,
  },
  backButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    width: 45,
    height: 45,
    left: 15,
    marginTop: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  weatherButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 30,
    width: 54,
    height: 45,
    right: 15,
    marginTop: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  topStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: 'rgba(52, 52, 52, .1)',
  },
  budget: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  ovalWrapper: {
    bottom: -600,
    alignSelf: 'center',
    position: 'absolute',
  },
  oval: {
    width: 300,
    height: 300,
    backgroundColor: '#F8D8E3',
    borderRadius: 150,
    transform: [
      {scaleX: 2}
    ]
  },
  map: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    left:0, right: 0, top:0, bottom: 0, position: 'absolute'
  },
});
