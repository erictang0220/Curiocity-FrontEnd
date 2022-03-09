import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Input, NativeBaseProvider, Button, Box, Image, AspectRatio } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import DropDownPicker from 'react-native-dropdown-picker';
import Icon2 from 'react-native-vector-icons/Feather';
import Container from './Container';

// hit endpoint
const handleSubmit = async (e) => {
  e.preventDefault();

  await fetch("https://enigmatic-brook-87129.herokuapp.com/location", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: user,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      setAnswerFromServer(data);
      console.log("lets see");
      console.log(data);

      if (data == "authorized login") {
        navigation.navigate("Homepage");
      } else if (data == "need to register account") {
        setError("Please register an account");
      } else {
        setError("Wrong password or username");
        // console.log(error);
      }
    })
    .catch((e) => console.log(e));
};


// Group size dropdown
const GroupSize = ({}) => {
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
        closeAfterSelecting={true}
        // listItemLabelStyle={{
        //     color: "#C1D32F"
        // }}
        zIndex={2000}
        zIndexInverse={2000}
      />
    </View>
  );
}

const ActivityTags = (props) => {
  // props.category, props.tags
  DropDownPicker.setMode("BADGE");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState(
    props.tags.map((item) => {
      const entry = {};
      entry.label = item;
      entry.value = item;
      return entry;
    }));
  {/* //   {label: 'North America', value: 'na'},
  //   {label: 'United States', value: 'usa', parent: 'na'},
  //   {label: 'Canada', value: 'canada', parent: 'na'},

  //   {label: 'Europe', value: 'eu'},
  //   {label: 'Norway', value: 'norway', parent: 'eu'},
  //   {label: 'Belgium', value: 'belgium', parent: 'eu'},
  // ]); */}

  // value and items must be state variables
  return (
    <View style={styles.dropDown}>
      <DropDownPicker
        multiple={true}
        open={open}
        value={value}
        items={items}
        // stickyHeader={true}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={props.category}
        placeholderStyle={{
          color: "#FA857E",
          fontWeight: "bold"
        }}
        categorySelectable={true}
        dropDownDirection="TOP" // BOTTOM creates overlap
        listMode="SCROLLVIEW"
        showBadgeDot={true}
        badgeColors= "#FF926D"
        badgeDotColors="#DEFB83"
        // closeAfterSelecting={true}
        
        // listItemLabelStyle={{
        //     color: "#C1D32F"
        // }}
      />
    </View>
  );
}

// Travel Distance Slider
const SliderPad = 12;
const Distance = ({}) => {
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
          // allowOverlap
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
          style={styles.roundButton1}
        >
          <View style={{flexDirection:"column", justifyContent: 'center', alignItems: 'center',}}>
            <Text style={styles.budget}> $ </Text>
            <Text style={{color: '#FA857E'}}> 0-10 </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.roundButton1}
        >
          <View style={{flexDirection:"column", justifyContent: 'center', alignItems: 'center',}}>
            <Text style={styles.budget}> $$ </Text>
            <Text  style={{color: '#FA857E'}}> 10-100 </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.roundButton1}
        >
          <View style={{flexDirection:"column", justifyContent: 'center', alignItems: 'center',}}>
            <Text style={styles.budget}> $$$ </Text>
            <Text  style={{color: '#FA857E'}}> 100+ </Text>
          </View>   
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
              <Icon name="car" size={30} color="#FA857E"/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={buttonClickedHandler}
              style={styles.roundButton1}>
              <Icon name="bus" size={30} color="#FA857E"/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={buttonClickedHandler}
              style={styles.roundButton1}>
              <Icon name="walking" size={30} color="#FA857E"/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={buttonClickedHandler}
              style={styles.roundButton1}>
              <Fontisto name="uber" size={30} color="#FA857E"/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={buttonClickedHandler}
              style={styles.roundButton1}>
              <MaterialIcons name="electric-scooter" size={30} color="#FA857E"/>
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

    const buttonClickedLogin = () => {
      console.log('You have clicked a button!');
      navigation.navigate('Login');
    }

  return (
    <Container>
      <View style={styles.container}>
        <View>
          {/* back button */}
          <TouchableOpacity
              onPress={buttonClickedLogin}
              style={styles.backButton}>
              <Icon2 name="arrow-left" size={30} color="#000"/>
          </TouchableOpacity>

          {/* budget buttons */}
          <View style={{marginTop: 70}}>
            <Text style={styles.headline}>
              Budget
            </Text>
            <Budget/>
          </View>

          {/* preferred transportation buttons */}
          <Text style={styles.headline}>
            Transportation
          </Text>
          <Transportation/>

          {/* travel distance slider */}
          <Text style={styles.headline}>
            Distance
          </Text>
          <Distance />
          <Text style={{textAlign: 'right', marginRight: 50}}>miles</Text>

          {/* Activity tags */}
          <Text style={styles.headline}>
            Tags
          </Text>
          <ActivityTags category={"Food"} tags={["Breakfast", "Lunch", "Dinner", "Cafes and Bakeries"]}/>
          <ActivityTags category={"Hidden Gems"} tags={["Tourist Attractions", "Viewpoints", "Events"]}/>
          <ActivityTags category={"Culture"} tags={["Museums", "Bookstores and Libraries", "Movies", "Nightlife"]}/>
          <ActivityTags category={"Shopping"} tags={["Malls", "Streets", "Thrift Stores", "High-End"]}/>
          <ActivityTags category={"Outdoors"} tags={["Hiking", "Beaches", "Zoos", "Gardens and Parks", "Sports"]}/>
          <ActivityTags category={"Cuisines"} tags={["Asian", "North American", "South American", "African", "Oceanic"]}/>

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
      backgroundColor: '#FFF',
  },
  budget: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#FA857E',
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
    // backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  roundButton1: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 40,
    // backgroundColor: "#C1D32F",
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
    marginLeft: 40,
    textAlign: 'left',
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
    marginLeft: SliderPad * 3,
    marginRight: SliderPad * 3,
    marginTop: 20,
  }
});