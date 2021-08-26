import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import NavigationBottomTab from "./src/navigation/NavigationBottomTab";
import {Provider} from 'react-redux'
import configureStore from "./src/redux/reducer/store"

const Stack = createStackNavigator();
const store  = configureStore();

export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#ffffff",
  },
});
