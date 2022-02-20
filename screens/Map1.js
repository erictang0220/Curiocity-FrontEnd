// import React, { useState, useEffect } from 'react';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import { Input, NativeBaseProvider, Button, Box, Image, AspectRatio } from 'native-base';
// import { useNavigation } from '@react-navigation/native';
// import { StatusBar} from 'expo-status-bar';
// import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import Geolocation from 'react-native-geolocation-service';

// async function requestAuthorization(authorizationLevel) {

// }

// function Map1 () {
//   const navigation = useNavigation();
//   const buttonClickedHandler = () => {
//   console.log('You have been clicked a button!');
//   // do something
//   };

//   const [region, setRegion] = useState({latitude: 34.06999972,
//     longitude: -118.439789907,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,});
  
//     // function getInitialState() {
//   //   return {
//   //     region: {
//   //       latitude: 37.78825,
//   //       longitude: -122.4324,
//   //       latitudeDelta: 0.0922,
//   //       longitudeDelta: 0.0421,
//   //     },
//   //   };
//   // }

//   // function onRegionChange(region) {
//   //   this.setState({ region });
//   // }

//   // const status = await Geolocation.requestAuthorization("whenInUse"); // or "always"
//   // console.log(status); // "disabled", "granted", "denied", "restricted"

//   return (
//     <View style={{ position: 'relative', height: 500}}>
//         <MapView
//           style={{ left:0, right: 0, top:0, bottom: 0, position: 'absolute' }}
//           // region={this.state.region}
//           initialRegion={region}
//           onRegionChange={setRegion}
//         >
          
//           {/* {this.state.markers.map((marker, index) => (
//           <Marker
//             key={index}
//             coordinate={marker.latlng}
//             title={marker.title}
//             description={marker.description}
//           />
//         ))} */}
//         </MapView>
//     </View>
      
//   );
// }

// export default ()=> {

//   // By using this Hook, you tell React that your component needs to do something after render. 
//   useEffect(() => {
//       if (hasLocationPermission) {
//         Geolocation.getCurrentPosition(
//             (position) => {
//               console.log(position);
//             },
//             (error) => {
//               // See error code charts below.
//               console.log(error.code, error.message);
//             },
//             { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//         );
//       }
//     }
//   )
  

//   return (
//     <NativeBaseProvider>
//       <Map1/>
//     </NativeBaseProvider>
//   )
// }