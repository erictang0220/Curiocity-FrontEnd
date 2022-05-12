import React, { useState, useEffect, useCallback, useMemo, useRef, createRef } from 'react';
import  { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Input, NativeBaseProvider,  Box, Image, AspectRatio } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { StatusBar} from 'expo-status-bar';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, Button, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/Feather';
import logo from './images/logo.png';
import MapView from "react-native-map-clustering";
import Animated from 'react-native-reanimated';
import { BottomSheetModal, BottomSheetModalProvider, useBottomSheet } from '@gorhom/bottom-sheet';
import { SwipeItem, SwipeButtonsContainer, SwipeProvider } from 'react-native-swipe-item';
import Swipeable from 'react-native-gesture-handler/Swipeable';

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
  const buttonClickedHandler2 = () => {
    console.log('You have been clicked a button!');
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
                  <Icon name="user" size={30} color="#000"/>
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




function Map1 () {
  const navigation = useNavigation();
  const buttonClickedHandler = () => {
  console.log('You have been clicked a button!');
  // do something
  };

  // ref


  // const bottomSheetModalRef = useRef(null);
  const bottomSheetModalSS = useRef(null);
  const bottomSheetModalThai = useRef(null);
  const bottomSheetYoshinoya = useRef(null);
  const bottomSheetPacificPark = useRef(null);
  const bottomSheetModalFiesta = useRef(null);
  const bottomSheetModalBilliard = useRef(null);
  const bottomSheetModalSonny = useRef(null);
  const bottomSheetSantaMonica = useRef(null);
  const bottomSheetGameTime = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  const [region, setRegion] = useState({latitude: 100,
    longitude: 100,
    latitudeDelta: 3 / 69,
    longitudeDelta: 3 / 138,});
    // distance / 69 = mile
    // latitudeDelta = distance / 69
    // longitudeDelta = distance / 138

  /* const rightButton = (
      <SwipeButtonsContainer
          style={{
              alignSelf: 'center',
              aspectRatio: 1,
              flexDirection: 'column',
              padding: 10,
              paddingTop: 25,
          }}
          
      >
          <TouchableOpacity
              onPress={() => console.log('left button clicked')}
          >
              <Text>Click me !</Text>
          </TouchableOpacity>
      </SwipeButtonsContainer>
  ); */
  
  const rightSwipe = () => {
    const buttonClickedSave = () => {
      console.log('Saved!');
    }
    return (
      <TouchableOpacity style={styles.saveButton}
      onPress={buttonClickedSave}>
          <View style={styles.saveBox}>
              <Text>Save</Text>
          </View>
      </TouchableOpacity>
    );
  };


  const initialRegion = {
    latitude: 37.72825,
    longitude: -122.4324,
    latitudeDelta: 0.25,
    longitudeDelta: 0.15
  };
  const UCLA = {
    latitude: 34.0708781,
    longitude: -118.44684973165106,
    latitudeDelta: 0.30,
    longitudeDelta: 0.30,
  };  
  const SanSaiRegion = {
    latitude: 34.0594014,
    longitude: -118.444856,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const WestwoodThaiCafe = {
    latitude: 34.0556423,
    longitude: -118.4422325,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const Yoshinoya = {
    latitude: 34.0683002,
    longitude: -118.4421084,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const FiestaLaBallona = {
    latitude: 34.012970,
    longitude: -118.402611,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const PacificPark = {
    latitude: 34.009319,
    longitude: -118.496178,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const QBilliardClub = {
    latitude: 34.047660,
    longitude: -118.463420,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const SonnyMcLean = {
    latitude: 34.036570, 
    longitude: -118.477240,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const SantaMonicaPier = {
    latitude: 34.009220,
    longitude: -118.496925,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const itsGameTime = {
    latitude: 34.028890,
    longitude: -118.410840,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };


  const buttonBottomSheet = () => {
    console.log('You have been clicked a button!');
    navigation.navigate('PlaceInformation');
  // do something
  };

  // TODO: fill in location data
  // each element should be a json 
  /*
  {
    coordinate: {
      latitude: #,
      longitude: #,
      latitudeDelta: #,
      longitudeDelta: #
    },
    locationName: "aaa",
    imageURL: "aaa"
  } 
  */

  let locationData = [
    {
      coordinate: {
        latitude: 34.0708781,
        longitude: -118.44684973165106,
        latitudeDelta: 0.30,
        longitudeDelta: 0.30,
      },
      locationName: "UCLA",
      imageUrl: "https://admission.ucla.edu/sites/default/files/slider-main-image/05-royce-2x.jpg"
    },
    {
      coordinate: {
        latitude: 34.061704774570494,
        longitude: -118.44646650580671,
        latitudeDelta: 0.30,
        longitudeDelta: 0.30,
      },
      locationName: "Northern Cafe Hotpot",
      imageUrl: "https://lh3.googleusercontent.com/p/AF1QipNAohCQFmUulbbN6OzDXpRZ7LTuiDHCkvxj9J8k=w1080-h608-p-no-v0"
    },
    {
      coordinate: {
        latitude: 34.0556423,
        longitude: -118.4422325,
        latitudeDelta: 0.30,
        longitudeDelta: 0.30,
      },
      locationName: "Westwood Thai Cafe"
    },
    {
      coordinate: {
        latitude: 34.06257978448907, 
        longitude: -118.44735636942002,
        latitudeDelta: 0.30,
        longitudeDelta: 0.30
      },
      locationName: "Starbucks"
    }
  ];

  

  const myRefs = useRef([]);
  myRefs.current = locationData.map((element, i) => myRefs.current[i] ?? createRef());

  const bottomSheetModalRef = useRef(null);
  const openPopupView = (props) => {
    props.current.present();
    // console.log(props);
  }

  return (
    <View style={{ position: 'relative', height: 700}}>
      <BottomSheetModalProvider style={styles.overallBottomSheet}>
        <MapView 
          style={[styles.map, {height: 700,}]}
          initialRegion={UCLA}
          provider={PROVIDER_GOOGLE}
          // onRegionChange={setRegion}
          showsUserLocation={true}
          clusterColor='#FF6D79'
          showsMyLocationButton={true}  
        >
          <View>
          {/* For loop to display Markers */}
          {locationData.map(function(item, index) {
            return (
              <View key={index}>
                <Marker coordinate={item.coordinate} onPress={() => openPopupView(myRefs.current[index])}>
                  <Text style={{fontWeight: "bold"}}>{item.locationName}</Text>
                  <Image source={require('./images/map_marker.png')} style={{height:25, width:25 }} alt="Map marker used for maps"/>
                </Marker>
                <BottomSheetModal
                    ref={myRefs.current[index]}
                    index={0}
                    snapPoints={snapPoints}
                    style={styles.bottomSheet}
                >
                  
                  <Swipeable renderRightActions={rightSwipe}>
                    <View style={styles.listPlace}>
                      <Text>{item.locationName}</Text> 
                      <Image source={{uri: item.imageUrl}} style={{height:100, width:100}}/>
                      <Button 
                        styles={{height: 10, width: 20}}
                        onPress={buttonBottomSheet}
                        title="About"
                        color="#DEFB83"
                      />
                    </View>
                  </Swipeable>
                </BottomSheetModal>
          
              </View>
              );
          })
          }
          </View>   
        </MapView>
        
           
        {/* Example bottom sheet */}
        <BottomSheetModal
        // DEFAULT BOTTOM SHEET
            // ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            style={styles.bottomSheet}
        >
          <Swipeable renderRightActions={rightSwipe}>
            <View style={styles.listPlace}>
              <Text>Place Name</Text> 
              <Button 
              styles={{height: 10, width: 20}}
              onPress={buttonBottomSheet}
              title="About"
              color="#DEFB83"
              />
            </View>
          </Swipeable>
        </BottomSheetModal>
      </BottomSheetModalProvider>
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
    bottom: -100,
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
  contentContainer: {
    flex: 1,
    alignItems: 'center',
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
    width: "100%",
    height: "100%",
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    left:0, right: 0, top:0, bottom: 0, position: 'absolute'
  },
  bottomSheet: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    
    
  },
  overallBottomSheet: {
    position: 'absolute',
    bottom: -50,
    backgroundColor: 'red',
  },
  overallBottomSheet: {
    position: 'absolute',
    bottom: -50,
  },
  swipeButton: {
    width: '80%',
    height: 100,
    alignSelf: 'center',
    marginVertical: 5,
    paddingTop: 25,
  },
  swipeContentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8D8E3',
    borderRadius: 10,
    borderColor: '#F8D8E3',
    borderWidth: 1,
  },
  saveBox: {
    backgroundColor: '#DEFB83',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 200,
  },
  
  saveButton: {
    height: 200,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  searchBox: {
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '50%',
    alignSelf: 'center',
    right: 15,
    borderRadius: 5,
    marginTop: 15, 
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  stars: {
    flexDirection: 'row'
  },
  starimage: {
    width: 10,
    height: 10,
    marginLeft: 10,
  },
  placeName: {
    fontWeight: 'bold',
    fontSize: 20,
    
    // position: 'absolute',
  },
  listPlace: {
    height: 200,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
  },
  overallsheet: {
    //flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
 
});
