import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground} from 'react-native'
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio, IconButton } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import IconMode from 'react-native-vector-icons/Ionicons';
import gradient from './images/background.png';

function ModeSelection() {
    const navigation = useNavigation();
    return (
        <ImageBackground source={gradient} resizeMode="cover" style={{flex: 1, justifyContent: "center"}}>
            <View style={styles.container}>

              <TouchableOpacity style={styles.arrowButton} onPress={()=> navigation.navigate("Login")}>
                <IconMode name="arrow-forward" size={30} color="#6A515E"/>
              </TouchableOpacity> 

              <Text style={styles.modeText}> 
                Hi Name! {"\n"} How do you want to {"\n"} start today?
              </Text>
            </View>

            <View style={styles.container2}>
              <TouchableOpacity style={styles.individualButton} onPress={()=> navigation.navigate("StartJoin")}>
                <Text style={styles.individualText}> 
                    Individual
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.container3}>
              <TouchableOpacity style={styles.groupButton} onPress={()=> navigation.navigate("StartJoin")}>
                <Text style={styles.groupText}> 
                    Group
                </Text>
              </TouchableOpacity>
            </View>
            
        </ImageBackground>
   )
}

export default ()=> {
    return (
        <NativeBaseProvider>
            <ModeSelection />
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
  individualButton: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 200,
    height: 60,
  },
  individualText: {
    textAlign: 'center',
    color: '#E16E37',
    fontSize: 22,
    fontWeight: '600',
  },
  groupButton: {
    position: 'absolute',
    backgroundColor: '#E16E37',
    borderRadius: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 200,
    height: 60,
  },
  groupText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '600',
  },

})