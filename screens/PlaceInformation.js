import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import  { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Input, NativeBaseProvider,  Box, Image, AspectRatio } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { StatusBar} from 'expo-status-bar';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, Button, TextInput} from 'react-native';
import Container from './Container'

function PlaceInformation() {
    return (
        <Text> Place Information</Text>
    );
}

export default ()=> {
    return (
      <NativeBaseProvider>
        <PlaceInformation/>
      </NativeBaseProvider>

    )
  }