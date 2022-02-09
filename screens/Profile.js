import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Input, NativeBaseProvider, Button, Box, Image, AspectRatio } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import DropDownPicker from 'react-native-dropdown-picker';
import Container from './Container';

// Group size dropdown
const GroupSizeDropdown = ({}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5-7', value: '5-7'},
    {label: '8+', value: '8+'},
  ]);

  // value and items must be state variables
  return (
    <View style={styles.dropDown}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        // stickyHeader={true}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Select a Group Size"
        placeholderStyle={{
          color: "#C1D32F",
          fontWeight: "bold"
        }}
        dropDownDirection="TOP" // BOTTOM creates overlap
        listMode="SCROLLVIEW"
        elevation= "10" // zIndex doesn't work for android?
        closeAfterSelecting={true}
        // listItemLabelStyle={{
        //     color: "#C1D32F"
        // }}
      />
    </View>
  );
}

// Travel Distance Slider
const SliderPad = 12;
const SingleSlider = ({}) => {
    const min = 0;
    const max = 30;
    const [width, setWidth] = useState(280);
    const [selected, setSelected] = useState(null);
  
    if (!selected) {
      setSelected([min]);
    }
  
    // Callbacks
    const onLayout = (event) => {
      setWidth(event.nativeEvent.layout.width - SliderPad * 2);
    };
    const onValuesChangeFinish = (values) => {
      setSelected(values);
    };
  
    return (
      <View onLayout={onLayout} style={styles.slide}>
        <MultiSlider
          min={0}
          max={30}
          allowOverlap
          values={selected}
          sliderLength={width}
          onValuesChangeFinish={onValuesChangeFinish}
          enableLabel={true}
          // customLabel={SliderCustomLabel(textTransformerTimes)}
          trackStyle={{
              height: 15,
              borderRadius: 8,
          }}
          markerOffsetY={3} // distance of circle to bar
          selectedStyle={{
              backgroundColor: "#C1D32F",
          }}
          unselectedStyle={{
              backgroundColor: "#EEF3F7",
          }}
        />
      </View>
    );
}

const Budget = ({}) => {
    const navigation = useNavigation();
    const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    // do something
    };
    return (
        <View style={{ flexDirection:"row", justifyContent:'center'}}>
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
    );
}

const Transportation = ({}) => {
    const navigation = useNavigation();
    const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    // do something
    };
    return (
        <View style={{ flexDirection:"row", justifyContent:'center' }}>
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
    );
}

function Profile() {
    const navigation = useNavigation();
    const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    // do something
    };

  return (
    <Container>
      <View style={styles.container}>
        <View>
          {/* budget buttons */}
          <Text style={styles.headline}>
            What is your budget?
          </Text>
          <Budget/>

          {/* preferred transportation buttons */}
          <Text style={styles.headline}>
            What is your preferred/available transportation method?
          </Text>
          <Transportation/>
        </View>

        <View>
          {/* travel distance slider */}
          <Text style={styles.headline}>
            What is your preferred travel distance (miles)?
          </Text>
          <SingleSlider />

          {/* group size dropdown */}
          <Text style={styles.headline}>
            What is your preferred group size?
          </Text>
          <GroupSizeDropdown/>
        </View>
        
        

        <View style={styles.buttonStyle}>
          <Button style={styles.buttonDesign} onPress={() => navigation.navigate('Login')}>
            DONE
          </Button>
        </View>
      </View>
    </Container>

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
    // marginTop: 20,
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
    backgroundColor: "#C1D32F",
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
    marginTop: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  slide: {
    flex: 1,
    marginLeft: SliderPad * 2,
    marginRight: SliderPad * 2,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  dropDown: {
    // flex: 1,
    // zIndex: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: SliderPad * 3,
  }
});