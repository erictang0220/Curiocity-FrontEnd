import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground} from 'react-native'
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio, IconButton } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import IconMode from 'react-native-vector-icons/Ionicons';
import gradient from './images/background.png';

function StartJoin() {
    const navigation = useNavigation();
    return (
        <ImageBackground source={gradient} resizeMode="cover" style={{flex: 1, justifyContent: "center"}}>
            <View style={styles.container}>

              <TouchableOpacity style={styles.arrowButton} onPress={()=> navigation.navigate("Login")}>
                <IconMode name="arrow-forward" size={30} color="#6A515E"/>
              </TouchableOpacity> 

              <Text style={styles.modeText}> 
                Do you want to {"\n"} start/join a group?
              </Text>
            </View>

            <View style={styles.container2}>
              <TouchableOpacity style={styles.startButton} onPress={()=> navigation.navigate("GroupCode")}>
                <Text style={styles.startText}> 
                    Start a new group
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.container3}>
              <TouchableOpacity style={styles.joinButton} onPress={()=> navigation.navigate("Login")}>
                <Text style={styles.joinText}> 
                    Join group
                </Text>
              </TouchableOpacity>
            </View>
            
        </ImageBackground>
   )
}

export default ()=> {
    return (
        <NativeBaseProvider>
            <StartJoin />
        </NativeBaseProvider>
    )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop: 50,
  },
  container2:{
    flex: 1,
    marginTop: 100,
    marginBottom: 0,
  },
  container3:{
    flex: 1,
    marginTop: 0,
    marginBottom: 50,
  },
  modeText:{
    fontSize: 28,
    fontWeight: '400',
    lineHeight: 42,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#6A515E',
    paddingTop: 30,
  },
  arrowButton: {
     paddingLeft: 350, 
  },
  startButton: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 200,
    height: 60,
  },
  startText: {
    textAlign: 'center',
    color: '#E16E37',
    fontSize: 22,
    fontWeight: '600',
  },
  joinButton: {
    position: 'absolute',
    backgroundColor: '#E16E37',
    borderRadius: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 200,
    height: 60,
  },
  joinText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '600',
  },

})