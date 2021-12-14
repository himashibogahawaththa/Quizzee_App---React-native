import { Button, View , Image, Text,ImageBackground, StyleSheet , TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Style from './Style'
import AboutScreen from './screens/AboutScreen';
import BeginScreen from "./screens/BeginScreen";
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import QuizScreen from './screens/QuizScreen';
import LearnMoreScreen from './screens/LearnMoreScreen';
import Home from './screens/Home';
import Category from './screens/Category';
import logo from '../quizzee-app/assets/logo2.png';
import { Component } from 'react';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} options={{headerTitleStyle:{display: 'none'},
                        headerTitle: (props) => ( // App Logo
                          <View style={{flexDirection:'row'}}>
                          <Image
                            style={{ width: 100, height: 25,marginLeft:180, marginTop:10}}
                            source={require('../quizzee-app/assets/logo.png')}
                            resizeMode='contain' /></View>
                        ),}}/>
           <Drawer.Screen name="Quiz" component={QuizScreen} options={{headerTitleStyle:{display:'none'},headerTitle: (props) => ( // App Logo
                          <View style={{flexDirection:'row'}}>
                          <Image
                            style={{ width: 100, height: 25,marginLeft:180, marginTop:10}}
                            source={require('../quizzee-app/assets/logo.png')}
                            resizeMode='contain' /></View>
                        ),}}/>
           <Drawer.Screen name="Learn More" component={LearnMoreScreen} options={{headerTitleStyle:{display:'none'},headerTitle: (props) => ( // App Logo
                          <View style={{flexDirection:'row'}}>
                          <Image
                            style={{ width: 100, height: 25,marginLeft:180, marginTop:10}}
                            source={require('../quizzee-app/assets/logo.png')}
                            resizeMode='contain' /></View>
                        ),}}/>
          <Drawer.Screen name="About" component={AboutScreen} options={{headerTitleStyle:{display:'none'},headerTitle: (props) => ( // App Logo
                          <View style={{flexDirection:'row'}}>
                          <Image
                            style={{ width: 100, height: 25,marginLeft:180, marginTop:10}}
                            source={require('../quizzee-app/assets/logo.png')}
                            resizeMode='contain' /></View>
                        ),}}/>
    </Drawer.Navigator>
  );
}

export default class App extends Component {


  render(){

    // createHomeStack = () => 
    // <Drawer.Navigator initialRouteName="Begin" screenOptions={{headerShadowVisible: false},{headerShown: false}}>
    //       <Drawer.Screen name="Home"  children = {createHomeStack}/>
    //        <Drawer.Screen name="Quiz" component={QuizScreen} />
    //        <Drawer.Screen name="Learn More" component={LearnMoreScreen} />
    //       <Drawer.Screen name="About" component={AboutScreen} />
    // </Drawer.Navigator>

    return (
      <View>
        <ImageBackground source={require('./images/img-1.png')} style={Style.image}>
          <Text style={Style.text}>Php Basics</Text>
          <Text style={Style.text2}>Questions: 60                                 2.00 Min</Text>

          <Text style={Style.text1}>Q13. What is the purpose of constant() function?</Text>
          <Text style={Style.text3}>function will return value</Text>
          <Text style={Style.text4}>function will return value</Text>
          <Text style={Style.text5}>function will return value</Text>
          <Text style={Style.text6}>function will return value</Text>
          <View style={Style.screenContainer}>
            <Button title="Submit" />
          </View>
        </ImageBackground>
      </View>,
      <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen name="BeginS" component={BeginScreen} options={
                      { 
                        headerStyle:{backgroundColor: '#080A1E',elevation: 0,},
                        headerTintColor: '#fff',
                        headerTitleStyle:{display: 'none'},
                        headerTitle: (props) => ( // App Logo
                          <View style={{flexDirection:'row'}}>
                          <Image
                            style={{ width: 100, height: 25,marginLeft:230, marginTop:10}}
                            source={require('../quizzee-app/assets/logo2.png')}
                            resizeMode='contain' /></View>
                        ),
                        
                      }} />
            <Stack.Screen name='Login' component={LoginScreen} options={{headerTitleStyle:{display: 'none'}}} />
            <Stack.Screen name='Signup' component={SignupScreen} options={{headerTitleStyle:{display: 'none'}}}/>
            <Stack.Screen name="Category" component={Category} options={{headerTitleStyle:{display: 'none'},
                        headerTitle: (props) => ( // App Logo
                          <View style={{flexDirection:'row'}}>
                          <Image
                            style={{ width: 100, height: 25,marginLeft:180, marginTop:10}}
                            source={require('../quizzee-app/assets/logo.png')}
                            resizeMode='contain' /></View>
                        ),}}/>
            <Stack.Screen name="Root" component={Root} options={{ headerShown: false }}/>
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

