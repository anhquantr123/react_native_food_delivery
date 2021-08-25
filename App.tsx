import React from "react";
import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, Text, StatusBar  , View} from "react-native";
import HomeScreen from "./src/screens/home_screen/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
const bottomTab = createBottomTabNavigator();


export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <NavigationContainer>
      <Stack.Navigator screenOptions ={{
        headerShown : false      }}
        initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar barStyle="default"/>
    </SafeAreaView>

  );
}

const style  = StyleSheet.create({
  container:{
    flex: 1,
  
    backgroundColor: '#ffffff'
  }


});



