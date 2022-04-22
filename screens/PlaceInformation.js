import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import  { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Input, NativeBaseProvider,  Box, Image, AspectRatio, Button} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { StatusBar} from 'expo-status-bar';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import Icon4 from 'react-native-vector-icons/Entypo';

function TopButtons () {
  const navigation = useNavigation();
  const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    navigation.navigate('Homepage');
  };
  return(
    <View style={{marginTop: 60, marginLeft: 30, marginRight: 30, flexDirection: 'row', justifyContent: 'space-between'}}>
      <View>
        <TouchableOpacity onPress={buttonClickedHandler}>
          <Icon1 name="arrow-left" size={30} color="#000"/>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Icon name="popup" size={30} color="#000"/>
        </TouchableOpacity>

        {/* <Button style={{borderRadius: 20, height: 50,}}>
          <Text style={{color:'white'}}>
            saved
          </Text>
        </Button> */}
      </View>
    </View>
    
  );
}

function PlaceProfile () {

  const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    // do something
  };

  return(
    <View>
      <View style={{marginTop: 10, marginLeft: 30, marginRight: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <View style={{width: 150, height: 150, borderRadius: 10, backgroundColor: '#C4C4C4'}}>
        <Image 
          style={{flex:1 , width: undefined, height: undefined}}
          source={require('./images/pacific.jpg')} 
          alt="Map marker used for maps"/>
      </View>
      
      <View style={{marginRight: 20, flexDirection: 'column', justifyContent: 'space-evenly'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Pacific Park
        </Text>

        {/* stars, $ sign, distance */}
        <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star" size={10} color="#000"/>
            <Icon name="star" size={10} color="#000"/>
            <Icon name="star" size={10} color="#000"/>
            <Icon name="star" size={10} color="#000"/>
            {/* <Icon name="star" size={10} color="#000"/> */}
          </View>
          <Text>$$</Text>
          <Text>1 mil</Text>
        </View>

        {/* buttons */}
        <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button style={{borderRadius: 20, height: 30, backgroundColor: '#FF926D'}}>
              <Text style={{fontSize: 12,}}>
                tag
              </Text>
            </Button>
            <Button style={{borderRadius: 20, height: 30, backgroundColor: '#E5E5E5'}}>
              <Text style={{fontSize: 12, }}>
                tag
              </Text>
            </Button>
            <Button style={{borderRadius: 20, height: 30, backgroundColor: '#E5E5E5'}}>
              <Text style={{fontSize: 12, }}>
                tag
              </Text>
            </Button>
          </View>

          <Button style={{marginTop: 10, borderRadius: 20, height: 40, backgroundColor: '#FA857E'}}>
            <Text style={{color:'white'}}>
              + Add your own tag
            </Text>
          </Button>
        </View>
      </View>
      <View style={{marginTop: 30, marginLeft: 30}}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <Icon2 name="clockcircle" size={15} color="#CCCCCC"/>
          <Text style={{marginLeft: 7, color: '#6DD32F'}}>
            Open Now: Hours 11am - 9pm
          </Text>
        </View>

        <View style={{marginTop: 15, flexDirection: 'row', justifyContent: 'flex-start'}}>
          <Icon4 name="location-pin" size={15} color="#CCCCCC"/>
          <Text style={{marginLeft: 7,}}>
            380 Santa Monica Pier Santa Monica, CA 90401
          </Text>
        </View>

        <View style={{marginTop: 15, flexDirection: 'row', justifyContent: 'flex-start'}}>
          <Icon4 name="phone" size={15} color="#FF6D79"/>
          <Text style={{marginLeft: 7,}}>
            (310) 260-8744
          </Text>
        </View>
      
      </View>
      
    </View>
    
    
  );
};

function Highlights () {
  return(

    <View style={{marginTop: 40, marginLeft: 30, marginRight: 30,}}>
      <Text style={{marginBottom: 30, fontFamily: 'Montserrat_600SemiBold', fontSize: 18}}>
        Highlights
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: 80, height: 80, borderRadius: 10, backgroundColor: '#C4C4C4'}}>
            <Image 
              style={{flex:1 , width: undefined, height: undefined}}
              source={require('./images/ap1.png')} 
              alt="Map marker used for maps"/>
          </View>
          <Text>xxx</Text>
        </View>
        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: 80, height: 80, borderRadius: 10, backgroundColor: '#C4C4C4'}}>
          <Image 
              style={{flex:1 , width: undefined, height: undefined}}
              source={require('./images/ap2.png')}
              alt="Map marker used for maps"/>
          </View>
          <Text>xxx</Text>
        </View>
        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: 80, height: 80, borderRadius: 10, backgroundColor: '#C4C4C4'}}>
            <Image 
                style={{flex:1 , width: undefined, height: undefined}}
                source={require('./images/ap3.png')} 
                alt="Map marker used for maps"/>
            </View>
          <Text>xxx</Text>
        </View>
      </View>
    </View>
  );
};

function Comments () {
  return (

    <View style={{marginTop: 40, marginLeft: 30, marginRight: 30,}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
        <Text style={{marginBottom: 5, fontFamily: 'Montserrat_600SemiBold', fontSize: 18}}>Comments</Text>
        <Icon2 name="pluscircleo" size={30} color="#000"/>
      </View>
      <View>
        <Text style={{marginTop: 10,}}>
          "This place is lit."
        </Text>
        <Text style={{textAlign: 'right', marginRight: 20, marginBottom: 10,}}>
          --Falco
        </Text>
        <View style={{borderBottomColor: '#E5E5E5', borderBottomWidth: 1,}}/>
        <Text style={{marginTop: 10,}}>
          "Love the vibe."
        </Text>
        <Text style={{textAlign: 'right', marginRight: 20,}}>
          --Eren
        </Text>
      </View>
    </View>
  );

};

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
                  <Icon3 name="user" size={30} color="#000"/>
                </TouchableOpacity>
              </View>
              <View>    
                <TouchableOpacity
                  onPress={buttonClickedHandler}
                  style={styles.roundButton1}>
                  <Icon1 name="bookmark" size={30} color="#000"/>
                </TouchableOpacity>
              </View>
                
            </View>  
          </View>
      </View>

      <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.roundButton2}>
          <Icon1 name="map" size={30} color="#000"/>
      </TouchableOpacity>
      
    </>
  );
}

function PlaceInformation() {
  return (
    <View>
      <TopButtons/>
      <PlaceProfile/>
    </View>
  );
}

export default() => {
  return (
    <NativeBaseProvider>
      <PlaceInformation/>
      <Highlights/>
      <Comments/>
      <BottomButtons/>
    </NativeBaseProvider>
  )
};

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
    bottom: 70,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 20,
    shadowOffset : { width: 2, height: 5},
    backgroundColor: '#CDFDEF',
    // can't seem to get shadow to work :( 
  },
  buttonsDown: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    marginTop: 40,
  },
  ovalWrapper: {
    alignSelf: 'center',
    bottom: -180,
    position: 'absolute'
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

});
