// import React from "react"
// import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native"
// import {FontAwesome5} from '@expo/vector-icons'

// export default class Screen extends React.Component{
//     render() {
//         return (
//             <View style={styles.container}>
//                 <SafeAreaView style={{ flex: 1 }}>
//                     <TouchableOpacity
//                         style = {{ alignItems: "flex-start", marginTop: 30 , marginLeft:30, marginBottom : 20}}
//                         onPress={this.props.navigation.openDrawer}
//                     >

//                     <FontAwesome5 name="bars" size={25} color="#fff" s/>
//                     </TouchableOpacity>
//                     <View style={{ flex: 1 , alignItems: "center", justifyContent: "center" , backgroundColor: 'red'}}>
//                         <Text style={styles.text}>{this.props.name}</Text>
//                     </View>
//                 </SafeAreaView>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create(
//     {
//         container: 
//         {
//             flex: 1,
//             backgroundColor: "#080A1E"
//         },
//         text: 
//         {
//             color: "#fff",
//             fontSize: 20,
//             fontWeight: "500"
//         }
//     }
// );