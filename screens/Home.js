import * as React from 'react';
import { View, Text, Button , StyleSheet ,TouchableOpacity , Image, ImageBackground} from "react-native";

const Home = ({navigation}) => {
    return (
      <View style = {{ flex:1 , alignItems: 'center', justifyContent: 'center' , backgroundColor:'rgba(229, 229, 229, 0.35)'}}> 
            <ImageBackground style={{height: 315 , width: 330 , marginBottom:20}} source={require('../assets/img1.png')}>
                <Text style={{color: '#fff', fontSize: 22 , fontFamily: 'Roboto', fontWeight:'500' , width:300, marginHorizontal:30,marginVertical:20}}>PHP Basics :  {'\n'} {'\n'}
                    <Text style={{fontWeight:'bold'}}>What is the difference between static and dynamic websites?</Text>
                </Text>
                <View style={{flexDirection:'row', justifyContent:'space-around', }}>
                    <Text style={styles.text}>43</Text>
                    <Text style={styles.text}>     33</Text>
                    <Text style={styles.text}>119</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-around', }}>
                    <Text style={styles.text1}>Questions{'\n'}</Text>
                    <Text style={styles.text1}>Answers{'\n'}</Text>
                    <Text style={styles.text1}>Views{'\n'}</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-around',paddingHorizontal:20}}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.BtnTxt}>How to play</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress = {() => navigation.navigate("Quiz")}>
                        <Text style={styles.BtnTxt}> Go To Quiz</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        <View style={styles.box1}>
            <View style={{flexDirection:'row', justifyContent:'space-around', paddingVertical: 20}}>
                
                <TouchableOpacity style={{borderRadius:8 ,}}>
                    <Text style={{borderBottomWidth:2 , borderBottomColor:'#000' , paddingBottom:3}}>Leaderboard</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{color:'#000',backgroundColor:'#C4C4C4' , paddingHorizontal:12, paddingVertical:6 ,borderRadius:8 , fontSize:13}}> Modules</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View>
                <ImageBackground style={{width:320 , height: 200 ,}} source={require('../assets/img2.png')}>
            <Text style={{color: '#fff', fontSize: 20 , fontFamily: 'Roboto', fontWeight:'500' , width:300, marginHorizontal:50,marginVertical:20}}>JS Basics : {'\n'}{'\n'}
                  <Text style={{color: '#fff', fontSize: 17 , fontFamily: 'Roboto', fontWeight:'500' , fontWeight:'bold'}}>What is the difference{'\n'}between static and dynamic{'\n'}websites?</Text>
            </Text>
            <TouchableOpacity style={{
                borderColor:'#fff',
                borderWidth:1,
                paddingHorizontal:12,
                paddingVertical:6,
                borderRadius:11,
                width:120,
                alignItems:'center',
                marginHorizontal:110}}>
                <Text style={styles.BtnTxt}>Answer Now</Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>
      </View>
    );
  };
  
  export default Home;

  const styles = StyleSheet.create({

    text: {
        color: '#fff', 
        fontSize: 23 , 
        fontFamily: 'Roboto',
        fontSize:20
    },
    text1: {
        color: '#fff', 
        fontSize: 23 , 
        fontFamily: 'Roboto',
        fontSize: 15
    },
    button:{
        borderColor:'#fff',
        borderWidth:2,
        paddingHorizontal:24,
        paddingVertical:6,
        borderRadius:11,
        margin: 10
    },
    BtnTxt: {
        color: '#fff',
        fontSize: 13
    },
    box1: {
        backgroundColor:'#E5E5E5',
        height:70,
        width:300,
        borderRadius:23,
        shadowColor: '0px 4px 4px rgba(0, 0, 0, 0.85)',
        elevation:8,
        marginBottom:20
    },
    box2: {
        backgroundColor:'red',
        width:320,
        height:200,
        borderRadius: 18
    }
  })