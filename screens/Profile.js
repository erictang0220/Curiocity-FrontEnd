import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Input, NativeBaseProvider, Button, Box, Image, AspectRatio } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

function Profile() {
    const navigation = useNavigation();
    const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    // do something
  };

  return (
    <View style={styles.container}>
        <View style={styles.screen}>
            <Text style={styles.header}>
                COMPLETE YOUR PROFILE!
            </Text>
        </View>
        <View style={styles.screen}>
            <Text style={styles.headline}>
                What is your budget?
            </Text>
            <View style={{ flexDirection:"row" }}>
                <TouchableOpacity
                    onPress={buttonClickedHandler}
                    style={styles.roundButton1}>
                    <Text style={styles.budget}> $ </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={buttonClickedHandler}
                    style={styles.roundButton1}>
                    <Text style={styles.budget}> $$ </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={buttonClickedHandler}
                    style={styles.roundButton1}>
                    <Text style={styles.budget}> $$$ </Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.screen}>
            <Text style={styles.headline}>
                What is your preferred/available transportation method?
            </Text>
            <View style={{ flexDirection:"row" }}>
                <TouchableOpacity
                    onPress={buttonClickedHandler}
                    style={styles.roundButton1}>
                    <Icon name="car" size={30} color="#000"/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={buttonClickedHandler}
                    style={styles.roundButton1}>
                    <Icon name="bus" size={30} color="#000"/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={buttonClickedHandler}
                    style={styles.roundButton1}>
                    <Icon name="walking" size={30} color="#000"/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={buttonClickedHandler}
                    style={styles.roundButton1}>
                    <Fontisto name="uber" size={30} color="#000"/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={buttonClickedHandler}
                    style={styles.roundButton1}>
                    <MaterialIcons name="electric-scooter" size={30} color="#000"/>
                </TouchableOpacity>


            </View>
        </View>

        <View style={styles.buttonStyle}>
            <Button style={styles.buttonDesign} onPress={() => navigation.navigate('Login')}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>DONE</Text>
            </Button>
        </View>

    </View>


  );
}

export default ()=>{
    return (
        <NativeBaseProvider>
            <Profile/>
        </NativeBaseProvider>
    )
}

/// Just some styles
const styles = StyleSheet.create({
  screen: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
      marginTop: 30,
      fontWeight: 'bold',
      fontSize: 20,
  },
  main: {
      marginTop: 20,
      justifyContent: 'center',
  },
  container: {
      flex: 1,
      backgroundColor: '#FFF',
  },
  budget: {
      fontWeight: 'bold',
      fontSize: 20,
  },
  roundButton1: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 40,
    backgroundColor: '#C1D32F',
    marginHorizontal: 10,
    marginTop: 5,
    
  },
  buttonDesign:{
    backgroundColor: '#C1D32F',
    
  },
  buttonStyle:{
    marginTop:30,
    marginLeft:15,
    marginRight:15,
  },
  headline: {
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  }
 
});