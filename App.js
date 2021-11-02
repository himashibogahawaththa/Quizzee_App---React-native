import * as React from 'react';
import { Button, View , Image, StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AboutScreen from './screens/AboutScreen';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from './screens/LoginScreen';
import QuizScreen from './screens/QuizScreen';
import LearnMoreScreen from './screens/LearnMoreScreen';
import logo from '../quizzee-app/assets/logo.png';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShadowVisible: false}}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{
          headerStyle:{
            backgroundColor: '#080A1E',
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            display: 'none'
          }
         }} />
         <Drawer.Screen name="Quiz" component={QuizScreen} />
         <Drawer.Screen name="Learn More" component={LearnMoreScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null,
            }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
