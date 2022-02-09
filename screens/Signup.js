import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import twitter from './twitter.png';
import apple from './apple.png';
import google from './google.png';
import facebook from './facebook.png';
import logo from './logo.png';
import Container from './Container';

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
                <Text>Already have an account? </Text>
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

            <View style={styles.buttonStyle}>
            <Button style={styles.buttonDesign} onPress={() => navigation.navigate('Profile')}>
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
    text2:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:5,
    },
    register:{
        fontWeight:'bold',
        marginLeft:150,
        marginTop: 10,
        padding:5,
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
