import React, { useState } from 'react';
import { View, SafeAreaView, FlatList, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import DropDownPicker from 'react-native-dropdown-picker';
import twitter from './twitter.png';
import apple from './apple.png';
import google from './google.png';
import facebook from './facebook.png';
import logo from './logo.png';
import Container from './Container';

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
                zIndex= "10"
                closeAfterSelecting={true}
                // listItemLabelStyle={{
                //     color: "#C1D32F"
                // }}
            />
        </View>
        

    );
}

// slider
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

function Signup() {
    const navigation = useNavigation();
    return (
        <Container>
            <View style={styles.container}>
                <View style={styles.Middle}>
                    <Image 
                        roundedTop="lg"
                        style={{width: 100, height: 100}}
                        source={logo}
                        alt="logo"
                    />
                </View>
            <View style={styles.Middle}>
                <Text style={styles.LoginText}> Signup</Text>
            </View>
            <View style={styles.text2}>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
                    <Text style={styles.signupText}>Login</Text>
                </TouchableOpacity>
            </View>
            {/* Username */}
            <View style={styles.buttonStyle}>
                <View style={styles.emailInput}>
                    <Input
                        InputLeftElement={
                            <Icon
                                as={<FontAwesome5 name="user-secret" />}
                                size="sm"
                                m={2}
                                _light={{
                                    color:"#C1D32F",
                                }}
                                _dark={{
                                    color:"gray.300",
                                }}
                            />
                        }
                        variant="outline"
                        placeholder='Username'
                        _light={{
                            placeholderTextColor: "blueGray.400",
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50",
                        }}
                    />
                </View>
            </View>
            {/* Email Field */}
            <View style={styles.buttonStyleX}>
                <View style={styles.emailInput}>
                    <Input
                        InputLeftElement={
                            <Icon
                                as={<MaterialCommunityIcons name="email" />}
                                size="sm"
                                m={2}
                                _light={{
                                    color:"#C1D32F",
                                }}
                                _dark={{
                                    color:"gray.300",
                                }}
                            />
                        }
                        variant="outline"
                        placeholder='Email'
                        _light={{
                            placeholderTextColor: "blueGray.400",
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50",
                        }}
                    />
                </View>
            </View>
            {/* Password */}
            <View style={styles.buttonStyleX}>
                <View style={styles.emailInput}>
                    <Input
                        InputLeftElement={
                            <Icon
                                as={<FontAwesome5 name="key" />}
                                size="sm"
                                m={2}
                                _light={{
                                    color:"#C1D32F",
                                }}
                                _dark={{
                                    color:"gray.300",
                                }}
                            />
                        }
                        variant="outline"
                        secureTextEntry={true}
                        placeholder='Password'
                        _light={{
                            placeholderTextColor: "blueGray.400",
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50",
                        }}
                    />
                </View>
            </View>
            {/* Confirm Password */}
            <View style={styles.buttonStyleX}>
                <View style={styles.emailInput}>
                    <Input
                        InputLeftElement={
                            <Icon
                                as={<FontAwesome5 name="key" />}
                                size="sm"
                                m={2}
                                _light={{
                                    color:"#C1D32F",
                                }}
                                _dark={{
                                    color:"gray.300",
                                }}
                            />
                        }
                        variant="outline"
                        secureTextEntry={true}
                        placeholder='Confirm Password'
                        _light={{
                            placeholderTextColor: "blueGray.400",
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50",
                        }}
                    />
                </View>
            </View>

            {/* Travel distance */}
            <View>
                <Text style={{textAlign:'center', marginTop: 50, marginBottom: 20}}>
                    Travel Distance (miles)
                </Text>
                <SingleSlider />
            </View>
            
            {/* Group size */}
            <View>
                <Text style={{textAlign:'center'}}>
                    Group Size
                </Text>
                <GroupSize/>
            </View>

            { /* Button */}
            <View style={styles.buttonStyle}>
                <Button style={styles.buttonDesign}>
                    REGISTER NOW
                </Button>
            </View>

            {/* Line */}
            <View style={styles.lineStyle}>
                <View style={{flex:1, height:1, backgroundColor:'black'}} />
                <View>
                    <Text style={{width:50, textAlign:'center'}}>Or</Text>
                </View>
                <View style={{flex:1, height:1, backgroundColor:'black'}} />
            </View>

            {/* Box */}
            <View style={styles.boxStyle}>

                <Box
                onPress={()=> navigation.navigate('#')}
                style={{height:80,width:80, marginLeft:20}}
                shadow={3}
                _light={{
                    backgroundColor: "gray.50"
                }}
                _dark={{
                    backgroundColor: "gray.700",
                }}
                >

                <Image 
                    roundedTop="lg"
                    style={{width: 80, height: 80}}
                    source={facebook}
                    alt="image"

                />

                </Box>
                <Box
                onPress={()=> navigation.navigate('#')}
                style={{height:80,width:80, marginLeft:20}}
                shadow={3}
                _light={{
                    backgroundColor: "gray.50"
                }}
                _dark={{
                    backgroundColor: "gray.700",
                }}
                >

                <Image 
                    roundedTop="lg"
                    style={{width: 80, height: 80}}
                    source={twitter}
                    alt="image"

                />

                </Box>
                <Box
                onPress={()=> navigation.navigate('#')}
                style={{height:80,width:80, marginLeft:20}}
                shadow={3}
                _light={{
                    backgroundColor: "gray.50"
                }}
                _dark={{
                    backgroundColor: "gray.700",
                }}
                >

                
                <Image 
                    roundedTop="lg"
                    style={{width: 80, height: 80}}
                    source={google}
                    alt="image"

                />

                </Box>
                <Box
                onPress={()=> navigation.navigate('#')}
                style={{height:80,width:80, marginLeft:20}}
                shadow={3}
                _light={{
                    backgroundColor: "gray.50"
                }}
                _dark={{
                    backgroundColor: "gray.700",
                }}
                >

                
                <Image 
                    roundedTop="lg"
                    style={{width: 80, height: 80}}
                    source={apple}
                    alt="image"

                />
                
                {/* remove aspectratio wrapping Image */}
                </Box>

            </View>
        </View>
        </Container>
        
    )
}

export default ()=>{
    return (
        <NativeBaseProvider>
            <Signup/>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    },
    LoginText:{
        fontSize:30,
        fontWeight:'bold',
    },
    Middle:{
        alignItems:'center',
        justifyContent:'center',
    },
    slide: {
        flex: 1,
        margin: SliderPad * 2,
        justifyContent: "center",
        alignItems: "center",
    },
    dropDown: {
        // flex: 1,
        // zIndex: 100,
        justifyContent: "center",
        alignItems: "center",
        margin: SliderPad * 3,
    },
    text2:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:5,
    },
    signupText:{
        fontWeight:'bold',
    },
    emailInput:{
        marginTop:10,
        marginLeft:15,
    },
    buttonStyle:{
        marginTop:30,
        marginLeft:15,
        marginRight:15,
    },
    buttonStyleX:{
        marginTop:12,
        marginLeft:15,
        marginRight:15,
    },
    buttonDesign:{
        backgroundColor:'#6D79FF'
    },
    lineStyle:{
        flexDirection:'row',
        marginTop:30,
        marginLeft:15,
        marginRight:15,
        alignItems:'center',
    },
    boxStyle:{
        flexDirection:'row',
        marginTop:30,
        marginLeft:15,
        marginRight:15,
        justifyContent:'space-around',
    }
})
