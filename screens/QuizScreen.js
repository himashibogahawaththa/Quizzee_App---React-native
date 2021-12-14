import React, {useRef, useState, useEffect} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ImageBackground,
  Image,
} from 'react-native';


const ENTRIES1 = [
  {
    // title: 'Beautiful and dramatic Antelope Canyon',
    // subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    // illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    
  },
  {
    
  },
  {
    
  },
];

const {width: screenWidth} = Dimensions.get('window');


const MyCarousel = ({navigation}) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = () => {
    return (
      <View>
              <ImageBackground style={{top:5 , width:300 , height: 500}} source={require('../assets/img3.png')}>
                <Text style={{color:'#fff' , fontSize: 24 , fontFamily: 'Roboto' , fontWeight:'bold' , marginHorizontal:25 , marginVertical: 40}}>Select your category :</Text>
                <View style={styles.box}>
                  <Image style={styles.img} source={require('../assets/img4.png')}/>
                  <TouchableOpacity style={styles.btn} onPress = {() => navigation.navigate("Category")}>
                    <Text style={{color:'#fff', fontSize: 13 , fontFamily: 'Roboto' , fontWeight:'bold' }}>PHP BASICS</Text>
                  </TouchableOpacity>
                  <View style={styles.txtBox}>
                    <Text style={styles.txt}>
                      40 Quiz Questions{'\n'}
                      Time Duration: {'\n'}
                      2 Mins For Each
                    </Text>
                  </View>
                </View>
              </ImageBackground>        

        {/* <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        /> */}

        {/* <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text> */}
      
      </View>
    );
  };

  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress = {() => navigation.navigate("Home")}>
        <FontAwesome style={{ color:'#000' , marginLeft:15 , marginVertical:30}} size= {25} name='arrow-left' />
      </TouchableOpacity>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  box: {
      height: 350,
      width:220,
      backgroundColor: 'rgba(229, 229, 229, 0.24)',
      shadowColor: '0px 4px 4px rgba(0, 0, 0, 0.95), 0px 4px 4px rgba(0, 0, 0, 0.95), 0px 4px 4px rgba(0, 0, 0, 0.95), 0px 4px 4px rgba(0, 0, 0, 0.95), 0px 4px 4px rgba(0, 0, 0, 0.95), 0px 4px 4px rgba(0, 0, 0, 0.95), 0px 4px 4px rgba(0, 0, 0, 0.95), 0px 4px 4px rgba(0, 0, 0, 0.95)',
      elevation: 8,
      borderRadius:13,
      marginHorizontal:40
  },
  img: {
    width:220,
    height: 150,
    alignItems: 'center'
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
  txtBox: {
    borderWidth:2,
    borderColor: '#07D0F4',
    borderRadius:8,
    marginHorizontal: 15,
    marginVertical: 10,
    alignItems:'center'
  },
  txt: {
    fontSize: 16,
    color: '#07D0F4',
    lineHeight: 30,
    paddingVertical:10,
  }
})


// import * as React from 'react';
// import { View, Text , TouchableOpacity, ImageBackground , StyleSheet , Image} from "react-native";
// import FontAwesome from 'react-native-vector-icons/FontAwesome';


// export default function ReferScreen({navigation}) {
//     return (
      // <View style={styles.container}>
      //   <TouchableOpacity onPress = {() => navigation.navigate("Home")}>
      //     <FontAwesome style={{ color:'#000' , marginRight:310 , bottom:10}} size= {20} name='arrow-left' />
      //   </TouchableOpacity>
      //   <ImageBackground style={{height: 550 , width:330 , top:5}} source={require('../assets/img3.png')}>
      //     <Text style={{color:'#fff' , fontSize: 22 , fontFamily: 'Roboto', fontWeight:'500' , fontWeight:'bold' , marginHorizontal:50 , marginVertical: 50}}>Select your catergory :</Text>
      //     <View style={styles.box}>
      //       <Image style={styles.img} source={require('../assets/img4.png')}/>
      //     </View>
      //   </ImageBackground>
      // </View>
//     );
//   }

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: 'rgba(229, 229, 229, 0.35)',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  //   box: {
  //       height: 350,
  //       width:220,
  //       backgroundColor: 'rgba(229, 229, 229, 0.24)',
  //       shadowColor: '0px 4px 4px rgba(0, 0, 0, 0.95), 0px 4px 4px rgba(0, 0, 0, 0.95), 0px 4px 4px rgba(0, 0, 0, 0.95), 0px 4px 4px rgba(0, 0, 0, 0.95), 0px 4px 4px rgba(0, 0, 0, 0.95), 0px 4px 4px rgba(0, 0, 0, 0.95), 0px 4px 4px rgba(0, 0, 0, 0.95), 0px 4px 4px rgba(0, 0, 0, 0.95)',
  //       elevation: 8,
  //       borderRadius:13,
  //       marginHorizontal:54
  //   },
  //   img: {
  //     width:220,
  //     height: 150,
  //     alignItems: 'center'
  //   }
  // })