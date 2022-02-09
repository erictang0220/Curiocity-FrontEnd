import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio, IconButton } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import twitter from './twitter.png';
import apple from './apple.png';
import google from './google.png';
import facebook from './facebook.png';

function Login() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.Middle}>
                <Text style={styles.LoginText}>Login</Text>
            </View>
            <View style={styles.text2}>
                <Text>
                    Don't have an account? 
                </Text>
                <TouchableOpacity onPress={()=> navigation.navigate("Signup")}>
                    <Text style={styles.signupText}> Sign up</Text>
                </TouchableOpacity>
            </View>

            {/* username input filed*/}

            <View style={styles.buttonStyle}>
                <View style={styles.emailInput}>
                    <Input 
                        InputLeftElement={
                            <Icon 
                                as={<FontAwesome5 name="user"/>}
                                size="sm"
                                m={2} // padding
                                _light={{
                                    color:'black',
                                }}
                                _dark={{
                                    color:"gray.300",
                                }}
                            />
                        }
                        variant="outline"
                        placeholder = "Username or Email"
                        _light={{
                            placeholderTextColor: "blueGray.400"
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50",
                        }}
                    />
                </View>
            </View>

            {/* Password input */}
            <View style={styles.buttonStyleX}>
                <View style={styles.emailInput}>
                    <Input
                        InputLeftElement={
                            <Icon
                                as={<FontAwesome5 name="key"/>}
                                size="sm"
                                m={2}
                                _light={{
                                    color:"black"
                                }}
                                _dark={{
                                    color:"gray.300",
                                }}
                            />
                        }
                        variant= "outline"
                        secureTextEntry = {true} // show up as dots
                        placeholder="Password"
                        _light={{
                            placeholderTextColor: "blueGray.400"
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50",
                        }}
                    />
                </View>
            </View>
            {/* Button */}
            <View style={styles.buttonStyle}>
                <Button style={styles.buttonDesign}>
                    LOGIN
                </Button>

            </View>
            
            {/* Lines */}
            <View style={styles.lineStyle}>
                 {/* Left line */}
                <View style={{flex:1, height:1, backgroundColor:'black'}} />
                <View>
                    <Text style={{width:50, textAlign:'center'}}>or</Text>
                </View>
                {/* Right line */}
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
    )
}


export default ()=> {
    return (
        <NativeBaseProvider>
            <Login />
        </NativeBaseProvider>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    LoginText:{
        marginTop:100,
        fontSize:30,
        fontWeight:'bold',
    },
    Middle:{
        alignItems:'center',
        justifyContent: 'center',
    },
    text2:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop:5
    },
    signupText:{
        marginLeft: 2,
        fontWeight: 'bold'
    },
    emailInput:{
        marginTop: 10,
        marginRight: 5  
    },
    buttonStyle:{
        marginTop: 30,
        marginLeft:15,
        marginRight:15
    },
    buttonStyleX:{
        marginTop: 12,
        marginLeft: 15,
        marginRight: 15
    },
    buttonDesign:{
        backgroundColor: '#026efd'
    },
    lineStyle:{
        flexDirection: 'row',
        marginTop:30,
        marginLeft:15,
        marginRight:15,
        alignItems:'center',
    },
    boxStyle: {
        flexDirection: 'row', 
        marginTop:30,
        marginLeft:15,
        marginRight:15,
        justifyContent: 'space-around'
    }

})