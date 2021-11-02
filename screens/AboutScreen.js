import * as React from 'react';
import { View, Text, Button , StyleSheet } from "react-native";

// export default function ReferScreen() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text style={{fontSize:16,fontWeight:'700'}}>About</Text>
//       </View>
//     );
//   }

const AboutScreen = ({navigation}) => {
  return (
    <View style = {{ flex:1 , alignItems: 'center', justifyContent: 'center'}}> 
      <Text>About Screen</Text>
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

export default AboutScreen;