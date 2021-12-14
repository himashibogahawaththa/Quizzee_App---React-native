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

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/home-img.png')} />
        <Text style={{ color: '#000', fontSize: 28 , fontFamily: 'Roboto' , fontWeight: 'bold', marginBottom: 5}}>Welcome!</Text>
        <Text style={{marginBottom: 40, color: '#555555'}}>Sign in to your new account of Quiz app</Text>
  
        <StatusBar style="auto" />
        <View style={styles.inputView}>
        <FontAwesome style={{marginLeft: 15, color:'#C4C4C4' }} name='user' />
          <TextInput
            style={styles.TextInput}
            placeholder="Name"
            placeholderTextColor="#6F98AA"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

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
        <FontAwesome style={{marginLeft: 15, color:'#C4C4C4'}} name='lock' />
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#6F98AA"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <View style={styles.inputView}>
        <FontAwesome style={{marginLeft: 15, color:'#C4C4C4' }} name='key' />
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password"
            placeholderTextColor="#6F98AA"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
  
        <TouchableOpacity style={styles.signupBtn} onPress = {() => navigation.navigate("Root")}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
  
        <View style={{flexDirection:'row' , marginBottom:20 , fontFamily: 'Roboto'}}>
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress = {() => navigation.navigate("Login")}>
                <Text style={{fontFamily: 'Roboto' , color:'#2F3D7A' , fontWeight: 'bold'}}>  Log in</Text>
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
  
  
  
  export default SignupScreen;
  
  
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
      marginBottom: 15,
  
      alignItems: "center",
    },
  
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 5,
    },
  
    signupBtn: {
      width: "45%",
      borderRadius: 15,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#080A1E",
      marginVertical:40
      
    },
  
    signupText: {
      color: '#fff',
      fontSize: 16 , 
      fontFamily: 'Roboto' , 
      fontWeight: 'bold'
    },
  
  });