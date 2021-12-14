import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground , Image } from "react-native";

const CategoryScreen = ({navigation}) => {
    return (
        <ImageBackground style={{top:50 , width:330 , height: 550 , marginHorizontal: 15}} source={require('../assets/img3.png')}>
            <Text style={styles.txt1}>PHP Basics</Text>
            <View style={{backgroundColor:'#fff', height:2, marginHorizontal:60}}/>
            <View style={styles.box}>
                <Text style={styles.txt2}>
                        There Will Be 10 {'\n'}
                        Questions{'\n'}
                        You Have To {'\n'}
                        Complete It All{'\n'}
                        In 2 Minutes
                </Text>
                <Text style={styles.txt3}>
                         GOOD LUCK!
                </Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>
                            Start Quiz
                    </Text>
                </TouchableOpacity>
            </View>
      </ImageBackground> 
    );
};
  
export default CategoryScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    btn: {
      backgroundColor: '#19203D',
      marginVertical: 10,
      marginHorizontal: 45,
      alignItems: 'center',
      paddingVertical:8,
      borderRadius:12,
      shadowColor: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
      elevation:8
    },
    txt1: {
        color:'#fff' , 
        fontSize: 30 , 
        fontFamily: 'Roboto' , 
        fontWeight:'bold' , 
        marginHorizontal:80 , 
        marginVertical: 30,
        fontFamily: 'Roboto'
    },
    box: {
        alignItems:'center',
        marginHorizontal:50,
        paddingTop:20
    },
    txt2: {
        color: '#fff',
        fontSize: 24,
        textAlign:'center',
        lineHeight:40,
        fontFamily: 'Roboto'
    },
    txt3: {
        color:'#fff',
        fontSize:30,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
    btn: {
        borderWidth:2,
        borderColor: '#07D0F4',
        marginVertical:40,
        borderRadius:11
    },
    btnTxt: {
        color: '#07D0F4',
        fontSize: 15,
        textAlign:'center',
        fontFamily: 'Roboto',
        paddingHorizontal: 20,
        paddingVertical:5,
    }
  })

  