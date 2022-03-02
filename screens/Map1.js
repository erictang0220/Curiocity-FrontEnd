import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import  { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Input, NativeBaseProvider,  Box, Image, AspectRatio } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { StatusBar} from 'expo-status-bar';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, Button} from 'react-native';
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
        <View style={styles.oval} />
      </View>
      <TouchableOpacity
            onPress={buttonClickedHandler}
            style={styles.roundButton2}>
            <Icon2 name="map" size={30} color="#000"/>
      </TouchableOpacity>
      <View style={styles.bottomStyle}>
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
    </>
  );
}


const initialRegion = {
  latitude: 37.72825,
  longitude: -122.4324,
  latitudeDelta: 0.25,
  longitudeDelta: 0.15
};

function renderRandomMarkers(n, bottomSheetModalRef) {
  const { latitude, longitude, latitudeDelta, longitudeDelta } = initialRegion;
  const openModal = () => {
    bottomSheetModalRef.current.present();
  }
  return new Array(n).fill().map((x, i) => (
    <Marker
      key={i}
      coordinate={{
        latitude: latitude + (Math.random() - 0.5) * latitudeDelta,
        longitude: longitude + (Math.random() - 0.5) * longitudeDelta
      }}
      // pinColor='tomato'
      //onPress={() => this.bs.current.snapTo(0)}
      onPress={() => openModal()}
      >
          <Image source={require('./map_marker.png')} style={{height:25, width:25 }} 
            alt="Map marker used for maps"
          />
      
      </Marker>
    
  ));
}

function Map1 () {
  const navigation = useNavigation();
  const buttonClickedHandler = () => {
  console.log('You have been clicked a button!');
  // do something
  };

  // ref
  const bottomSheetModalRef = useRef(null);

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

  return (
    // have to set two dimension(?
    <View style={{ position: 'relative', height: 500}}>
        <BottomSheetModalProvider>
        <MapView 
            style={styles.map} initialRegion={initialRegion} clusterColor='#FF6D79'
            showsMyLocationButton={true} >
            {renderRandomMarkers(144, bottomSheetModalRef)}
        </MapView>
        
        <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            style={styles.bottomSheet}
        >
          <Swipeable renderRightActions={rightSwipe}>
            <View style={styles.listPlace}>
              <Text>Insert Yelp information here</Text>
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
      <Container>
        <Map1/>
        <BottomButtons />
        <FloatingButtons />
      </Container>
        
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
    marginHorizontal: 10,
    marginTop: 5,
  },
  roundButton2: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 70,
    width: 97,
    height: 97,
    left: 155,
    // marginTop: 530, 
    bottom: 30,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 20,
    shadowOffset : { width: 2, height: 5},
    backgroundColor: '#CDFDEF',
    // can't seem to get shadow to work :( 
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
    marginTop: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  navigateButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 30,
    width: 53,
    height: 53,
    left: 15,
    marginTop: 500,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  buttonsDown: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'space-between'
  },
  bottomStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25,
    position: 'absolute',
    bottom: 0,
    zIndex: 100,
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
    bottom: -200,
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
  listPlace: {
    height: 200,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButton: {
    height: 200,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
