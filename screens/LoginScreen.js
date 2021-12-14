import * as React from 'react';
import { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity, } from "react-native";
import { StatusBar } from "expo-status-bar";

// export default function logIn() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text style={{fontSize:16,fontWeight:'700'}}>Login Screen</Text>
//       </View>
//     );
//   }

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/home-img.png')} />
      <Text style={{ color: '#000', fontSize: 28 , fontFamily: 'Roboto' , fontWeight: 'bold', marginBottom: 5}}>Welcome back!</Text>
      <Text style={{marginBottom: 40, color: '#555555'}}>Log in to your existant account of Quiz app</Text>

      <StatusBar style="auto" />
      <View style={styles.inputView}>
      <FontAwesome style={{marginLeft: 15, color:'#C4C4C4' }} name='envelope' />
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#6F98AA"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
      <FontAwesome style={{marginLeft: 15, color:'#C4C4C4'}} name='key' />
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#6F98AA"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress = {() => navigation.navigate("Root")}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>

      <Text style={{ color: '#000', fontSize: 15 , fontFamily: 'Roboto' , margin:20}}>Or Connect using</Text>

      <View style={styles.socialBtn}>

        <TouchableOpacity style={styles.fbBtn}>
          <FontAwesome style={{ color:'#2F3D7A' , margin: 10}} name='facebook' />
          <Text style={{color: '#2F3D7A' , fontSize: 14 , fontFamily: 'Roboto' }}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gBtn}>
          <FontAwesome style={{ color:'#fff' , margin: 10}} name='google' />
          <Text style={{color: '#fff' , fontSize: 14 , fontFamily: 'Roboto' }}>Google</Text>
        </TouchableOpacity>

      </View>

      <View style={{flexDirection:'row' , marginBottom:20 , fontFamily: 'Roboto'}}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress = {() => navigation.navigate("Signup")}>
          <Text style={{fontFamily: 'Roboto' , color:'#2F3D7A' , fontWeight: 'bold'}}>  Sign Up</Text>
        </TouchableOpacity>
      </View>


    </View>
    // <View style = {{ flex:1 , alignItems: 'center', justifyContent: 'center'}}> 
    //   <Text>Login Screen</Text>
      
    //   <Button
    //     title = "Go to Home screen"
    //     onPress = {() => navigation.navigate("Home")}
    //   />
    //   <Button
    //     title = "Go back"
    //     onPress = {() => navigation.goBack()}
    //   />
    // </View>
  );
};



export default LoginScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width:260,
    height:130,
    marginBottom:10
  },

  inputView: {
    flexDirection: 'row',
    backgroundColor: "#fff",
    borderColor: "#19203D",
    borderWidth: 2,
    borderRadius: 15,
    width: "70%",
    height: 45,
    marginBottom: 10,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 5,
  },

  forgot_button: {
    height: 30,
    marginBottom: 20,
    color: 'rgba(85, 85, 85, 0.49)',
    left: 60
  },

  loginBtn: {
    width: "45%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#080A1E",
    
  },

  loginText: {
    color: '#fff',
    fontSize: 16 , 
    fontFamily: 'Roboto' , 
    fontWeight: 'bold'
  },
  
  socialBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 30,
  },

  fbBtn: {
    flexDirection: 'row',
    margin:10,
    width: "35%",
    borderRadius: 12,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderColor: '#2F3D7A',
    borderWidth: 2,
  },

  gBtn: {
    flexDirection: 'row',
    margin:10,
    width: "35%",
    borderRadius: 12,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C73442",
  },

});