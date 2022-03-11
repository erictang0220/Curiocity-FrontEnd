import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input, NativeBaseProvider, Button, Box, Image, AspectRatio } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Container from './Container';
import logo from './logo.png';
import { Roboto_100Thin, Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto';
import { Montserrat_100Thin, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

function Save() {
    const navigation = useNavigation();
    const buttonClickedHandler3 = () => {
      console.log('You have been clicked a button!');
      navigation.navigate('Homepage');
    // do something
    };

    return(
        
    <View>
        
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 60}}>
            <TouchableOpacity
            onPress={buttonClickedHandler3}
            style={styles.roundButton1}>
            <Icon name="filter" size={30} color="#000"/>
            </TouchableOpacity>
           
            <Image source={logo} alt="logo" style={{width: 40, height: 21}}/>
            <TouchableOpacity
            onPress={buttonClickedHandler3}
            style={styles.roundButton1}>
            <Icon name="pluscircleo" size={30} color="#000"/>
            </TouchableOpacity>
        </View>

    <View style={{flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 10}}>
           
            <View style={styles.container}>
              <TextInput style={styles.searchInput} placeholder='Search for tag(s)' />
             </View>
    </View>

    <View style={{width: 370}}> 
        <Text style={{textAlign: 'right', color: '#95999F', fontFamily: 'Montserrat_700Bold', fontSize: 12,}}>tags guide</Text>
    </View> 

    <View style={{flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 10}}>
        <View style={styles.greenbox}>
            <Text style={{fontSize: 14, fontFamily: 'Montserrat_700Bold', marginLeft: 20, marginTop: 20}}>All Saved Place </Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <View style={styles.savedtag1}>
                        <Text style={{textAlign: 'center', fontFamily: 'Montserrat_700Bold', fontSize: 12}}> tag</Text>
                    </View>
                    <View style={styles.savedtag2}>
                        <Text style={{textAlign: 'center', fontFamily: 'Montserrat_700Bold', fontSize: 12}}> tag</Text>
                    </View>
                    <View style={styles.savedtag3}>
                        <Text style={{textAlign: 'center', fontFamily: 'Montserrat_700Bold', fontSize: 12}}> tag</Text>
                    </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                <View style={styles.savedbox}></View>
                <View style={styles.savedbox}></View>
                <View style={styles.savedbox}></View>
            </View>
        </View>

        <View style={styles.greenbox}>
            <Text style={{fontSize: 14, fontFamily: 'Montserrat_700Bold', marginLeft: 20, marginTop: 20}}>Plans for Excursion</Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <View style={styles.savedtag1}>
                        <Text style={{textAlign: 'center', fontFamily: 'Montserrat_700Bold', fontSize: 12}}> tag</Text>
                    </View>
                    <View style={styles.savedtag2}>
                        <Text style={{textAlign: 'center', fontFamily: 'Montserrat_700Bold', fontSize: 12}}> tag</Text>
                    </View>
                    <View style={styles.savedtag3}>
                        <Text style={{textAlign: 'center', fontFamily: 'Montserrat_700Bold', fontSize: 12}}> tag</Text>
                    </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                <View style={styles.savedbox}></View>
                <View style={styles.savedbox}></View>
                <View style={styles.savedbox}></View>
            </View>
        </View>

        <View style={styles.greenbox}>
            <Text style={{fontSize: 14, fontFamily: 'Montserrat_700Bold', marginLeft: 20, marginTop: 20}}>Folder name</Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <View style={styles.savedtag1}>
                        <Text style={{textAlign: 'center', fontFamily: 'Montserrat_700Bold', fontSize: 12}}> tag</Text>
                    </View>
                    <View style={styles.savedtag2}>
                        <Text style={{textAlign: 'center', fontFamily: 'Montserrat_700Bold', fontSize: 12}}> tag</Text>
                    </View>
                    <View style={styles.savedtag3}>
                        <Text style={{textAlign: 'center', fontFamily: 'Montserrat_700Bold', fontSize: 12}}> tag</Text>
                    </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                <View style={styles.savedbox}></View>
                <View style={styles.savedbox}></View>
                <View style={styles.savedbox}></View>
            </View>
        </View>
      </View>
</View>
    );
  }



  export default ()=>{
    return (
        <NativeBaseProvider>
            <ScrollView>
                <Save/>
            </ScrollView>
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
    greenbox: {
        // position: 'absolute',
        flexDirection: 'column',
        // justifyContent: 'space-evenly',
        marginBottom: 20,
        height: 198,
        width: 327,
        borderRadius: 20,
        backgroundColor: 'rgba(222, 251, 131, 0.6)',
      },
    container: {
        width: 324,
        height: 41,
        backgroundColor: '#F3F3F3',
        borderRadius: 20, 
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.2, 
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

      searchInput: {
        width: '100%',
        height: '100%',
        paddingLeft: 12,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#6A515E',
      },

      savedtag1: {
        marginTop: 10,
        marginLeft: 18,
        marginRight: 5,
        height: 20,
        width: 50,
        borderRadius: 20,
        backgroundColor: '#FF926D',
      },

      savedtag2: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        height: 20,
        width: 50,
        borderRadius: 20,
        backgroundColor: '#CDFDEF',
      },
      savedtag3: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        height: 20,
        width: 50,
        borderRadius: 20,
        backgroundColor: '#FF6D79',
      },
      savedbox: {
        height: 77,
        width: 77,
        borderRadius: 10,
        margin: 15,
        backgroundColor: '#C4C4C4',
      },

  });