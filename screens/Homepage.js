import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input, NativeBaseProvider, Button, Box, Image, AspectRatio } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Container from './Container';
import logo from './images/logo.png';


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
  const buttonClickedHandler2 = () => {
    console.log('You have been clicked a buttonn!');
    navigation.navigate('Save');
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
                  onPress={buttonClickedHandler2}
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

function PersonalInfo () {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 50, marginBottom: 50, marginTop: 70,}}>
      <View style={styles.pic}/>

      <View style={{flexDirection: 'column', marginLeft: 50}}>
        <Text style={{fontWeight: 'bold', fontSize: 26, marginBottom: 10,}}>Curiocity </Text>
        <Text style={{fontSize: 12}}>Los Angeles, California</Text>
      </View>
    </View>
    
  )
}

const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  return `#${randomColor}`;
};

function Preferences () {

  const navigation = useNavigation();
  const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    navigation.navigate('Profile');
  };

  return (
    <View>
      <Text style={{textAlign: 'left', marginLeft: 50, marginBottom: 20, fontFamily: 'Montserrat_600SemiBold', fontSize: 18}}>
        Preferences
      </Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.preferences}>
          <View style={{margin: 10, flexDirection: 'row-reverse', alignItems: 'flex-start', alignContent: 'flex-end'}}>
            <TouchableOpacity
              onPress={buttonClickedHandler}>
              <Icon name="right" size={30} color="#000"/>
            </TouchableOpacity>
            <Text style={{marginTop: 7}}>Edit</Text> 
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <Text>$</Text>
              <Icon4 name="slash-forward" size={30} color="#000"/>
              <Text>$$</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon3 name="car" size={30} color="#000"/>
              <Icon4 name="slash-forward" size={30} color="#000"/>
              <Icon3 name="walking" size={30} color="#000"/>
            </View>
            <Text>25 miles</Text>
          </View>

          {/* tag display */}
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 30,}}>
            <Button style={[styles.tagButton, {backgroundColor: generateColor()}]}>
              <Text style={{color:'white'}}>
                museum
              </Text>
            </Button>
            <Button style={[styles.tagButton, {backgroundColor: generateColor()}]}>
              <Text style={{color:'white'}}>
                food
              </Text>
            </Button>
            <Button style={[styles.tagButton, {backgroundColor: generateColor()}]}>
              <Text style={{color:'white'}}>
                bar
              </Text>
            </Button>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 20,}}>
            <Button style={[styles.tagButton, {backgroundColor: generateColor()}]}>
              <Text style={{color:'white'}}>
                beach
              </Text>
            </Button>
            <Button style={[styles.tagButton, {backgroundColor: generateColor()}]}>
              <Text style={{color:'white'}}>
                tag
              </Text>
            </Button>
            <Button style={[styles.tagButton, {backgroundColor: generateColor()}]}>
              <Text style={{color:'white'}}>
                lunch
              </Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
  )
}

function Journals () {
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
        <Text style={{textAlign: 'left', marginLeft: 50, marginBottom: 5, fontFamily: 'Montserrat_600SemiBold', fontSize: 18}}>Journals</Text>
        <Icon style={{marginRight: 50}} name="pluscircleo" size={30} color="#000"/>
      </View>
      

      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.journal}>
          <Image 
            source={logo}
            alt="logo"
          />
          <Text>Title</Text>
        </View>  
        
        <View style={styles.journal}>
          <Image 
            source={logo}
            alt="logo"
          />
          <Text>Title</Text>
        </View>
      </View>
    </View>
    
  )

}

function Homepage () {
    const navigation = useNavigation();
    const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    // do something
    };

    return (
      <View>
        <ScrollView>
          <PersonalInfo/>
          <Preferences/>
          <Journals/>
        </ScrollView>
        <BottomButtons />
      </View>
      
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
    bottom: -100,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 20,
    shadowOffset : { width: 2, height: 5},
    backgroundColor: '#CDFDEF',
    // can't seem to get shadow to work :( 
  },
  pic : {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#E5E5E5',
  },
  buttonsDown: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    marginTop: 40,
  },
  topStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
  },
  preferences: {
    height: 250,
    width: 330,
    borderRadius: 20,
    backgroundColor: '#E5E5E5',
  },
  budget: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  journal: {
    height: 180,
    width: 150,
    borderRadius: 20,
    margin: 15,
    backgroundColor: '#E5E5E5',
    alignContent: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tagButton: {
    borderRadius: 20,
    height: 50,
  },
  ovalWrapper: {
    alignSelf: 'center',
    bottom: -350,
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
  map: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});