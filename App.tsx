import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { home_screen, order_delivery, restaurant } from "./src/constants/screen_default";
import NavigationBottomTab from "./src/navigation/NavigationBottomTab";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }} // tắt header - app bar bên flutter
          initialRouteName={"bottomTab"}
        >
          <Stack.Screen name="bottomTab" component={NavigationBottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar barStyle="default" />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#ffffff",
  },
});
