import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground} from 'react-native'
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio, IconButton } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import twitter from './twitter.png';
import apple from './apple.png';
import google from './google.png';
import facebook from './facebook.png';
import gradient from './background.png';
import logo from './logo.png';

function Login() {

  const navigation = useNavigation();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState("");
  const [error, setError] = useState("");

  async function loginUser(credentials) {
    return fetch('https://enigmatic-brook-87129.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(data => data.json())
    .then(responseData => {
      setSubmit(JSON.stringify(responseData));
      return "ok";
    })
    .catch((error) => 
      console.error(error)
    )
  }

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await loginUser({
      username: user,
      password: password,
    });

    console.log("In handleSubmit:"+submit);
    console.log(res); // same problem, res is ok here but submit not updated!

    if(submit == "authorized login") {
      navigation.navigate("Homepage");
    }
    else if (submit == "need to register account") {
      setError("Please register an account");
    }
    else {
      setError("Wrong password or username");
      // console.log(error);
    }
  }

  testing = () => {
    if(submit == "authorized login") {
      navigation.navigate("Homepage");
    }
    else {
      // setError("Login failed :(");
      console.log(error);
    }
  }

  // console.log(submit); // submit only updated here

  return (
    <ImageBackground source={gradient} resizeMode="cover" style={{flex: 1, justifyContent: "center"}}>
        <View style={styles.container}>

          <View>
            {/* doesn't work with separate linking function either */}
            {this.testing()}
          </View>
          <View style={styles.Middle}>
            <Image 
              roundedTop="lg"
              style={{width: 52.5, height: 29.5, margin: 20}}
              source={logo}
              alt="logo"
            />
          </View>
          
          <View style={styles.Middle}>
            <Text style={styles.LoginText}>
              Login
            </Text>
          </View>

          <View style={styles.accountExists}>
              <Text style={{color: '#CBC5C5', fontFamily: 'Montserrat_600SemiBold',}}>
                Don't have an account yet? 
              </Text>
              <TouchableOpacity onPress={()=> navigation.navigate("Signup")}>
                <Text style={{paddingLeft: 5, color: '#6A515E', fontFamily: 'Montserrat_700Bold',}}>
                  Sign up
                </Text>
              </TouchableOpacity>
          </View>

          {/* Username */}
          <View style={styles.fieldStyle}> 
            <TextInput
              style={styles.inputStyle}
              placeholder='Username'
              onChangeText={e => setUser(e)}
            />
          </View>

          {/* Email Field */}
          <View style={styles.fieldStyle}>  
            <TextInput
              style={styles.inputStyle}
              placeholder='Email'
              onChangeText={e => setEmail(e)}
            />
          </View>

          {/* Password */}
          <View style={styles.fieldStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder='Password'
              secureTextEntry={true}
              onChangeText={e => setPassword(e)}
            />
          </View>

          {/* login button */}
          <View style={styles.register}>
            <Button style={styles.buttonStyle} onPress={handleSubmit}>
              <Text style={{fontFamily: 'Montserrat_600SemiBold',color: 'white'}}>
                LOGIN
              </Text>
            </Button>
          </View>

          {/* error message */}
          <Text style={{textAlign: 'center', color: 'red'}}>
            {error}
          </Text>
          
          {/* Line */}
          <View style={styles.lineStyle}>
              <View style={{flex: 1, height: 1, backgroundColor: '#CBC5C5'}} />
              <View style={{flex: 1}}>
                  <Text style={{textAlign:'center', fontFamily: 'Roboto_100Thin'}}>or continue with</Text>
              </View>
              <View style={{flex: 1, height: 1, backgroundColor: '#CBC5C5'}} />
          </View>

          {/* Box */}
          <View style={styles.boxesStyle}>
              <Box
                onPress={()=> navigation.navigate('#')}
                style={styles.boxStyle}
              >
              <View style={styles.Middle}>
                <Image 
                  roundedTop="lg"
                  style={{width: 80, height: 80}}
                  source={facebook}
                  alt="image"
                />
              </View>

              </Box>
              <Box
                onPress={()=> navigation.navigate('#')}
                style={styles.boxStyle}
              >
                <View style={styles.Middle}>
                  <Image 
                    roundedTop="lg"
                    style={{width: 80, height: 80}}
                    source={twitter}
                    alt="image"
                  />
                </View>
              </Box>
              <Box
                onPress={()=> navigation.navigate('#')}
                style={styles.boxStyle} 
              >

              <View style={styles.Middle}>
                <Image 
                  roundedTop="lg"
                  style={{width: 80, height: 80}}
                  source={google}
                  alt="image"
                />
              </View>

              </Box>
              <Box
                onPress={()=> navigation.navigate('#')}
                style={styles.boxStyle}
              >
              
                <View style={styles.Middle}>
                  <Image 
                    roundedTop="lg"
                    style={{width: 80, height: 80}}
                    source={apple}
                    alt="image"
                  />
                </View>
              </Box>

          </View>
      </View>
    </ImageBackground>
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
    marginTop: 50,
  },
  LoginText:{
    fontSize:30,
    fontWeight:'bold',
    color: '#6A515E',
    fontFamily: 'Montserrat_700Bold',
  },
  Middle:{
    alignItems:'center',
    justifyContent:'center',
  },
  accountExists:{
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 5,
  },
  fieldStyle:{
    marginTop:30,   
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    height: 50,
    width: 350,
    borderRadius: 20, 
    backgroundColor: 'white', 
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.2, 
    paddingLeft: 12,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#6A515E',
  },
  register: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle:{
    backgroundColor:'#FF6D79',
    borderRadius:30,
    width: 200,
    height: 60,
  },
  lineStyle:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:15,
    marginRight:15,
    alignItems:'center',
  },
  boxesStyle:{
    flexDirection:'row',
    marginTop:30,
    justifyContent:'space-around',
  },
  boxStyle: {
    flex:1,
  },

})