import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Clipboard} from 'react-native'
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio, IconButton } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import IconMode from 'react-native-vector-icons/Ionicons';
import gradient from './images/background.png';

function GroupCode() {
    const navigation = useNavigation();
    return (
        <ImageBackground source={gradient} resizeMode="cover" style={{flex: 1, justifyContent: "center"}}>
            <View style={styles.container}>

              <TouchableOpacity style={styles.arrowButton} onPress={()=> navigation.navigate("Login")}>
                <IconMode name="arrow-forward" size={30} color="#6A515E"/>
              </TouchableOpacity> 

              <Text style={styles.modeText}> 
                Here's your group {"\n"} code:
              </Text>
            </View>

            <View style={styles.container2}>
              <TouchableOpacity style={styles.startButton} onPress={()=> navigation.navigate("Login")}>
                <Text style={styles.startText}> 
                    A678C3
                </Text>
                <TouchableOpacity style={styles.copyButton} onPress={() => Clipboard.setString('A678C3')}>
                    <IconMode name="copy-outline" size={20} color="#6A515E"/>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
            
        </ImageBackground>
   )
}

export default ()=> {
    return (
        <NativeBaseProvider>
            <GroupCode />
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
    marginTop: 0,
    marginBottom: 0,
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
    flexDirection: "row",
  },
  startText: {
    paddingTop: 15,
    textAlign: 'center',
    color: '#E16E37',
    fontSize: 22,
    fontWeight: '600',
  },
  copyButton: {
    paddingTop: 20,
  }
  

})