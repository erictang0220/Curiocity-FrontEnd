import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/Foundation';
import { Input, NativeBaseProvider, Button, Box, Image, AspectRatio } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Container from './Container';
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
      <View style={styles.bottomStyle}>
        <View>    
          <TouchableOpacity
            onPress={buttonClickedHandler}
            style={styles.roundButton1}>
            <Icon name="map-marked-alt" size={30} color="#000"/>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={buttonClickedHandler}
            style={styles.roundButton1}>
            <Icon name="heart" size={30} color="#000"/>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={buttonClickedHandler}
            style={styles.roundButton1}>
            <Icon2 name="magnifying-glass" size={30} color="#000"/>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={buttonClickedHandler}
            style={styles.roundButton1}>
            <Icon name="user" size={30} color="#000"/>
          </TouchableOpacity>
        </View>
      </View>
      
    </>
    
    
  );
}

function Homepage () {
    const navigation = useNavigation();
    const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    // do something
    };

    return (
      <Container>
       <TopButtons/>
       <BottomButtons />
      </Container>
        
    );
}

export default ()=> {
  return (
    <NativeBaseProvider>
      <Homepage/>
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
  bottomStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    // position: 'absolute',
    bottom: 0,
    zIndex: 100,
  },
  topStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
  },
  budget: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  ovalWrapper: {
    alignSelf: 'center',
    bottom: -200,
    position: 'absolute'
  },
  oval: {
    width: 300,
    height: 300,
    backgroundColor: '#FF6D79',
    borderRadius: 150,
    transform: [
      {scaleX: 2}
    ]
  },
});