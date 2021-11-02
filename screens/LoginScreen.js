import * as React from 'react';
import { View, Text ,Button } from "react-native";

// export default function logIn() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text style={{fontSize:16,fontWeight:'700'}}>Login Screen</Text>
//       </View>
//     );
//   }

const LoginScreen = ({navigation}) => {
  return (
    <View style = {{ flex:1 , alignItems: 'center', justifyContent: 'center'}}> 
      <Text>Login Screen</Text>
      
      <Button
        title = "Go to Home screen"
        onPress = {() => navigation.navigate("Home")}
      />
      <Button
        title = "Go back"
        onPress = {() => navigation.goBack()}
      />
    </View>
  );
};

export default LoginScreen;