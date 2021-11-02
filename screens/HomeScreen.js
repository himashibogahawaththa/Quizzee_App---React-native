// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity,StyleSheet, Button, Text, View , Pressable , Image} from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { Ionicons } from '@expo/vector-icons';


const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}> 
        <Text style={{ color: '#fff', fontSize: 64 , fontFamily: 'Roboto'}}>Qui
        <Text style={{ color: '#07D0F4'}}>zz
            <Text style={{ color: '#fff' }}>ee
            </Text>
        </Text>
        <Text style={{ color: '#fff'}}> Qui
        <Text style={{ color: '#07D0F4' }}>z
        </Text>
        </Text></Text>

        <Text style={{ color: '#fff', fontSize: 24 , fontFamily: 'Roboto', width:250, height:100}}>Quick Quiz Knowledge Booster For A Perfect Level Up</Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{ height: 1, backgroundColor: '#fff' , width: 250}}></View>
        </View>

        <Text style={{ color: '#fff' , fontSize: 36 , height:60, paddingRight: 90}}>Welcome<Text style={{ color: '#07D0F4' }}>!</Text></Text>
        
        <Pressable onPress = {() => navigation.navigate("Login")}>
            <Text style={styles.text}>Log In</Text>
        </Pressable>
        {/* <TouchableOpacity>
            <Text style = {styles.text}  >
                Log In
            </Text>
        </TouchableOpacity> */}

        <View style={styles.box}>
            <Image style={styles.homeImg}
                source={require('../assets/home-img.png')}
            />
        </View>
      </View>
    );
  };

  export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080A1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius: 11,
    padding: 5,
    paddingHorizontal: 40,
    borderColor: '#07D0F4',
    backgroundColor: '#080A1E',
    color: '#07D0F4'
 },
  text: {
    borderWidth: 1,
    borderRadius: 11,
    padding: 5,
    paddingHorizontal: 40,
    borderColor: '#07D0F4',
    backgroundColor: '#080A1E',
    color: '#07D0F4'
 },
 bar: {
  height: 100,
  width: 400,
  marginBottom: 50,
  marginTop: 10,
  backgroundColor: 'red',
},
 box: {
    height: 250,
    width: 320,
    marginTop: 50,
    marginLeft:120,
    borderRadius: 37,
    backgroundColor: 'rgba(255,255,255,0.1)'
 },
 homeImg: {
    height: 160,
    width: 300,
    marginVertical: 50,
    right: 50
 }
});