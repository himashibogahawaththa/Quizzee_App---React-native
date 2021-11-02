import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native" ;
import { DrawerNavigatorItems } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import DrawerNavigator from "react-navigation-drawer";

export default Sidebar = props => (
    <ScrollView>
        <View style={styles.container}>
            <DrawerNavigatorItems {...props} />
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingLeft: 20
    }
});