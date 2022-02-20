import React, { useState } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Input, NativeBaseProvider, Button, Box, Image, AspectRatio } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { StatusBar} from 'expo-status-bar';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Container from './Container';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/Feather';
import logo from './logo.png';

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
        <View style={styles.oval} />
      </View>
      <TouchableOpacity
            onPress={buttonClickedHandler}
            style={styles.roundButton2}>
            <Icon2 name="map" size={30} color="#000"/>
      </TouchableOpacity>
      <View style={styles.bottomStyle}>
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

      
      
    </>
  );
}

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
    <View style={{ position: 'relative', height: 630}}>
        <MapView
          style={styles.map }
          // region={this.state.region}
          initialRegion={region}
          onRegionChange={setRegion}
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
            style={styles.navigateButton}>
            <Icon2 name="navigation" size={30} color="#000"/>
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
      <Container>
        <Map1/>
        <BottomButtons />
        <FloatingButtons />
      </Container>
        
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
    marginHorizontal: 10,
    marginTop: 5,
  },
  roundButton2: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 70,
    width: 97,
    height: 97,
    left: 155,
    marginTop: 530, 
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 20 ,
    shadowOffset : { width: 2, height: 5},
    backgroundColor: '#CDFDEF',
    // can't seem to get shadow to work :( 
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
    marginTop: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  navigateButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 30,
    width: 53,
    height: 53,
    left: 15,
    marginTop: 500,
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
    marginTop: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  buttonsDown: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'space-between'
  },
  bottomStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25,
    position: 'absolute',
    bottom: 0,
    zIndex: 100,
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
    alignSelf: 'center',
    bottom: -200,
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    left:0, right: 0, top:0, bottom: 0, position: 'absolute'
  },
});