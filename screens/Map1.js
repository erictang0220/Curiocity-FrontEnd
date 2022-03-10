import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import  { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Input, NativeBaseProvider,  Box, Image, AspectRatio } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { StatusBar} from 'expo-status-bar';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, Button, TextInput} from 'react-native';
import Container from './Container';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/Feather';
import logo from './logo.png';
import MapView from "react-native-map-clustering";
import Animated from 'react-native-reanimated';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { SwipeItem, SwipeButtonsContainer, SwipeProvider } from 'react-native-swipe-item';
import Swipeable from 'react-native-gesture-handler/Swipeable';
// import * as Location from 'expo-location';

// function Testing() {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         console.log(errorMsg);
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//     })();
//   }, []);

//   var obj = {};
//   let text = 'Waiting..';
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     obj['latitude'] = location.coords.latitude;
//     obj['longitude'] = location.coords.longitude;
//     console.log(obj);
//     text = JSON.stringify(location);
//   }

//   return (
//     <View style={styles.container}>
//     <Text style={styles.paragraph}>{text}</Text>
//   </View>
//   );
// }

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
                  onPress={buttonClickedHandler}
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
  const bottomSheetModalRef = useRef(null);
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
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,});

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

  const openModal = () => {
    bottomSheetModalRef.current.present();
  }
  const openSanSai = () => {
    bottomSheetModalSS.current.present();
  }
  const openThai = () => {
    bottomSheetModalThai.current.present();
  }
  const openYoshinoya = () => {
    bottomSheetYoshinoya.current.present();
  }
  const openFiesta = () => {
    bottomSheetModalFiesta.current.present();
  }
  const openPacific = () => {
    bottomSheetPacificPark.current.present();
  }
  const openBilliard = () => {
    bottomSheetModalBilliard.current.present();
  }
  const openSonny = () => {
    bottomSheetModalSonny.current.present();
  }
  const openSantaMonica = () => {
    bottomSheetSantaMonica.current.present();
  }
  const openGameTime = () => {
    bottomSheetGameTime.current.present();
  }
  return (
    // have to set two dimension(?)
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
           <Marker coordinate={SanSaiRegion} onPress={() => openSanSai()}>
              <Text style={{fontWeight: "bold"}}>asian</Text>
              <Image source={require('./map_marker.png')} style={{height:25, width:25 }} 
              alt="Map marker used for maps"
              />
           </Marker>
           <Marker coordinate={WestwoodThaiCafe} onPress={() => openThai()}>
             <Text style={{fontWeight: "bold"}}>asian</Text>
             <Image source={require('./map_marker.png')} style={{height:25, width:25 }} 
              alt="Map marker used for maps"
              />
           </Marker>
           <Marker coordinate={Yoshinoya} onPress={() => openYoshinoya()}>
             <Text style={{fontWeight: "bold"}}>asian</Text>
             <Image source={require('./map_marker.png')} style={{height:25, width:25 }} 
              alt="Map marker used for maps"
              />
           </Marker>
           <Marker coordinate={FiestaLaBallona} onPress={() => openFiesta()}>
             <Text style={{fontWeight: "bold"}}>amusement park</Text>
             <Image source={require('./map_marker.png')} style={{height:25, width:25 }} 
              alt="Map marker used for maps"
              />
           </Marker>
           <Marker coordinate={PacificPark} onPress={() => openPacific()}>
             <Text style={{fontWeight: "bold"}}>amusement park</Text>
             <Image source={require('./map_marker.png')} style={{height:25, width:25 }} 
              alt="Map marker used for maps"
              />
           </Marker>
           <Marker coordinate={QBilliardClub} onPress={() => openBilliard()}>
             <Text style={{fontWeight: "bold"}}>amusement park</Text>
             <Image source={require('./map_marker.png')} style={{height:25, width:25 }} 
              alt="Map marker used for maps"
              />
           </Marker>
           <Marker coordinate={SonnyMcLean} onPress={() => openSonny()}>
             <Text style={{fontWeight: "bold"}}>amusement park</Text>
             <Image source={require('./map_marker.png')} style={{height:25, width:25 }} 
              alt="Map marker used for maps"
              />
           </Marker>
           <Marker coordinate={SantaMonicaPier} onPress={() => openSantaMonica()}>
             <Text style={{fontWeight: "bold"}}>amusement park</Text>
             <Image source={require('./map_marker.png')} style={{height:25, width:25 }} 
              alt="Map marker used for maps"
              />
           </Marker>
           <Marker coordinate={itsGameTime} onPress={() => openGameTime()}>
             <Text style={{fontWeight: "bold"}}>amusement park</Text>
             <Image source={require('./map_marker.png')} style={{height:25, width:25 }} 
              alt="Map marker used for maps"
              />
           </Marker>
           
        </MapView>
        
  
        <BottomSheetModal
        // DEFAULT BOTTOM SHEET
            ref={bottomSheetModalRef}
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

        <BottomSheetModal
        // BOTTOM SHEET FOR SAN SAI
            ref={bottomSheetModalSS}
            index={0}
            snapPoints={snapPoints}
            style={styles.bottomSheet}
        >
          <Swipeable renderRightActions={rightSwipe}>
            <View style={styles.overallsheet}>
            <View style={{width: 100, height:100, marginLeft:5 }}>
              <Image style={{flex:1 , width: undefined, height: undefined}}
                source={require('./sansai.jpg')}
                alt="Image"
                />
            </View>
            <View style={styles.listPlace}>
              <Text style={styles.placeName}>San Sai</Text>
              <View style={styles.stars}>
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-unfilled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-unfilled.png')}
                  />
                  <Text> </Text>
                  <View>
                    <Icon2 name="dollar-sign" size={10} />
                  </View>
              </View>
              <Button 
              styles={{height: 5, width: 10}}
              onPress={buttonBottomSheet}
              title="Lean More"
              color="#DEFB83"
              />
            </View>
            <View>
              <Text style={{fontWeight: 'bold', marginLeft: 20}}>0.6 miles</Text>
            </View>
            </View>
          </Swipeable>
        </BottomSheetModal>

        <BottomSheetModal
        // BOTTOM SHEET FOR WW THAI CAFE
            ref={bottomSheetModalThai}
            index={0}
            snapPoints={snapPoints}
            style={styles.bottomSheet}
        >
          <Swipeable renderRightActions={rightSwipe}>
            <View style={styles.overallsheet}>
            <View style={{width: 100, height:100, marginLeft:5 }}>
              <Image style={{flex:1 , width: undefined, height: undefined}}
                source={require('./thai.jpg')}
                alt="Image"
                />
            </View>
            <View style={styles.listPlace}>
              <Text style={styles.placeName}>Westwood Thai Cafe</Text>
              <View style={styles.stars}>
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-unfilled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-unfilled.png')}
                  />
                  <Text> </Text>
                  <View>
                    <Icon2 name="dollar-sign" size={10} />
                  </View>
              </View>
              <Button 
              styles={{height: 5, width: 10}}
              onPress={buttonBottomSheet}
              title="Lean More"
              color="#DEFB83"
              />
            </View>
            <View>
              <Text style={{fontWeight: 'bold', marginLeft: 20}}>1.5 miles</Text>
            </View>
            </View>
          </Swipeable>
        </BottomSheetModal>

        <BottomSheetModal
        // BOTTOM SHEET FOR YOSHINOYA
            ref={bottomSheetYoshinoya}
            index={0}
            snapPoints={snapPoints}
            style={styles.bottomSheet}
        >
          <Swipeable renderRightActions={rightSwipe}>
            <View style={styles.overallsheet}>
            <View style={{width: 100, height:100, marginLeft:5 }}>
              <Image style={{flex:1 , width: undefined, height: undefined}}
                source={require('./yoshinoya.jpg')}
                alt="Image"
                />
            </View>
            <View style={styles.listPlace}>
              <Text style={styles.placeName}>Yoshinoya</Text>
              <View style={styles.stars}>
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-unfilled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-unfilled.png')}
                  />
                  <Text> </Text>
                  <View>
                    <Icon2 name="dollar-sign" size={10} />
                  </View>
              </View>
              <Button 
              styles={{height: 5, width: 10}}
              onPress={buttonBottomSheet}
              title="Lean More"
              color="#DEFB83"
              />
            </View>
            <View>
              <Text style={{fontWeight: 'bold', marginLeft: 20}}>0.2 miles</Text>
            </View>
            </View>
          </Swipeable>
        </BottomSheetModal>

        <BottomSheetModal
        // BOTTOM SHEET FOR FIESTA
            ref={bottomSheetModalFiesta}
            index={0}
            snapPoints={snapPoints}
            style={styles.bottomSheet}
        >
          <Swipeable renderRightActions={rightSwipe}>
            <View style={styles.overallsheet}>
            <View style={{width: 100, height:100, marginLeft:5 }}>
              <Image style={{flex:1 , width: undefined, height: undefined}}
                source={require('./fiesta.jpg')}
                alt="Image"
                />
            </View>
            <View style={styles.listPlace}>
              <Text style={styles.placeName}>Fiesta La Ballona</Text>
              <View style={styles.stars}>
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-unfilled.png')}
                  />
                  <Text> </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Icon2 name="dollar-sign" size={10} />
                    <Icon2 name="dollar-sign" size={10} />
                  </View>
              </View>
              <Button 
              styles={{height: 5, width: 10}}
              onPress={buttonBottomSheet}
              title="Lean More"
              color="#DEFB83"
              />
            </View>
            <View>
              <Text style={{fontWeight: 'bold', marginLeft: 20}}>7.2 miles</Text>
            </View>
            </View>
          </Swipeable>
        </BottomSheetModal>

        <BottomSheetModal
        // BOTTOM SHEET FOR PACIFIC PARK
            ref={bottomSheetPacificPark}
            index={0}
            snapPoints={snapPoints}
            style={styles.bottomSheet}
        >
          <Swipeable renderRightActions={rightSwipe}>
            <View style={styles.overallsheet}>
            <View style={{width: 100, height:100, marginLeft:5 }}>
              <Image style={{flex:1 , width: undefined, height: undefined}}
                source={require('./pacific.jpg')}
                alt="Image"
                />
            </View>
            <View style={styles.listPlace}>
              <Text style={styles.placeName}>Pacific Park</Text>
              <View style={styles.stars}>
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-unfilled.png')}
                  />
                  <Text> </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Icon2 name="dollar-sign" size={10} />
                    <Icon2 name="dollar-sign" size={10} />
                  </View>
              </View>
              <Button 
              styles={{height: 5, width: 10}}
              onPress={buttonBottomSheet}
              title="Lean More"
              color="#DEFB83"
              />
            </View>
            <View>
              <Text style={{fontWeight: 'bold', marginLeft: 20}}>7.7 miles</Text>
            </View>
            </View>
          </Swipeable>
        </BottomSheetModal>

        <BottomSheetModal
        // BOTTOM SHEET FOR Q'S BILLIARD
            ref={bottomSheetModalBilliard}
            index={0}
            snapPoints={snapPoints}
            style={styles.bottomSheet}
        >
          <Swipeable renderRightActions={rightSwipe}>
            <View style={styles.overallsheet}>
            <View style={{width: 100, height:100, marginLeft:5 }}>
              <Image style={{flex:1 , width: undefined, height: undefined}}
                source={require('./billiard.jpg')}
                alt="Image"
                />
            </View>
            <View style={styles.listPlace}>
              <Text style={styles.placeName}>Q's Billiard Club</Text>
              <View style={styles.stars}>
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-unfilled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-unfilled.png')}
                  />
                  <Text> </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Icon2 name="dollar-sign" size={10} />
                    <Icon2 name="dollar-sign" size={10} />
                  </View>
              </View>
              <Button 
              styles={{height: 5, width: 10}}
              onPress={buttonBottomSheet}
              title="Lean More"
              color="#DEFB83"
              />
            </View>
            <View>
              <Text style={{fontWeight: 'bold', marginLeft: 20}}>2.4 miles</Text>
            </View>
            </View>
          </Swipeable>
        </BottomSheetModal>

        <BottomSheetModal
        // BOTTOM SHEET FOR SONNY
            ref={bottomSheetModalSonny}
            index={0}
            snapPoints={snapPoints}
            style={styles.bottomSheet}
        >
          <Swipeable renderRightActions={rightSwipe}>
            <View style={styles.overallsheet}>
            <View style={{width: 100, height:100, marginLeft:5 }}>
              <Image style={{flex:1 , width: undefined, height: undefined}}
                source={require('./sonny.jpg')}
                alt="Image"
                />
            </View>
            <View style={styles.listPlace}>
              <Text style={styles.placeName}>Sonny McLean's</Text>
              <View style={styles.stars}>
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-unfilled.png')}
                  />
                  <Text> </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Icon2 name="dollar-sign" size={10} />
                    <Icon2 name="dollar-sign" size={10} />
                  </View>
              </View>
              <Button 
              styles={{height: 5, width: 10}}
              onPress={buttonBottomSheet}
              title="Lean More"
              color="#DEFB83"
              />
            </View>
            <View>
              <Text style={{fontWeight: 'bold', marginLeft: 20}}>3.5 miles</Text>
            </View>
            </View>
          </Swipeable>
        </BottomSheetModal>

        <BottomSheetModal
        // BOTTOM SHEET FOR SANTA MONICA PIER
            ref={bottomSheetSantaMonica}
            index={0}
            snapPoints={snapPoints}
            style={styles.bottomSheet}
        >
          <Swipeable renderRightActions={rightSwipe}>
            <View style={styles.overallsheet}>
            <View style={{width: 100, height:100, marginLeft:5 }}>
              <Image style={{flex:1 , width: undefined, height: undefined}}
                source={require('./santamonica.jpg')}
                alt="Image"
                />
            </View>
            <View style={styles.listPlace}>
              <Text style={styles.placeName}>Santa Monica Pier</Text>
              <View style={styles.stars}>
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-unfilled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-unfilled.png')}
                  />
                  <Text> </Text>
                  <View>
                    <Icon2 name="dollar-sign" size={10} />
                  </View>
              </View>
              <Button 
              styles={{height: 5, width: 10}}
              onPress={buttonBottomSheet}
              title="Lean More"
              color="#DEFB83"
              />
            </View>
            <View>
              <Text style={{fontWeight: 'bold', marginLeft: 20}}>7.6 miles</Text>
            </View>
            </View>
          </Swipeable>
        </BottomSheetModal>

        <BottomSheetModal
        // BOTTOM SHEET FOR IT'S GAME TIME
            ref={bottomSheetGameTime}
            index={0}
            snapPoints={snapPoints}
            style={styles.bottomSheet}
        >
          <Swipeable renderRightActions={rightSwipe}>
            <View style={styles.overallsheet}>
            <View style={{width: 100, height:100, marginLeft:5 }}>
              <Image style={{flex:1 , width: undefined, height: undefined}}
                source={require('./gametime.jpg')}
                alt="Image"
                />
            </View>
            <View style={styles.listPlace}>
              <Text style={styles.placeName}>It's GameTime!</Text>
              <View style={styles.stars}>
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-filled.png')}
                  />
                  <Image
                  style={styles.starimage}
                  source={require('./star-unfilled.png')}
                  />
                  <Text> </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Icon2 name="dollar-sign" size={10} />
                    <Icon2 name="dollar-sign" size={10} />
                  </View>
              </View>
              <Button 
              styles={{height: 5, width: 10}}
              onPress={buttonBottomSheet}
              title="Lean More"
              color="#DEFB83"
              />
            </View>
            <View>
              <Text style={{fontWeight: 'bold', marginLeft: 20}}>5.2 miles</Text>
            </View>
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
    bottom: -350, // ovalwrapper offset +250
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
    bottom: -600,
    alignSelf: 'center',
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
