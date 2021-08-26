import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import Cutlery_icon from "../constants/icons/cutlery_icon";
import Like_icon from "../constants/icons/like_icon";
import Search_icon from "../constants/icons/search_icon";
import User_icon from "../constants/icons/user_icon";
import { home_screen, order_delivery } from "../constants/screen_default";
import { COLOR } from "../constants/theme";

const Tab = createBottomTabNavigator();





export default function NavigationBottomTab() {
  return (
    // cutlery icon
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false , tabBarStyle:{
         // backgroundColor:'transparent',
          borderTopWidth: 0,
          elevation: 0
      } }}
      
    >
      <Tab.Screen
        name="Home"
        component={home_screen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Cutlery_icon
              colorFill={focused ? COLOR.primaryColor : COLOR.secondColor}
              size={24}
            />
          ),
          
        }}
      />

      <Tab.Screen
        name="Search"
        component={order_delivery}
        options={{
          tabBarIcon: ({ focused }) => (
            <Search_icon
              colorFill={focused ? COLOR.primaryColor : COLOR.secondColor}
              size={24}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Like"
        component={order_delivery}
        options={{
          tabBarIcon: ({ focused }) => (
            <Like_icon
              colorFill={focused ? COLOR.primaryColor : COLOR.secondColor}
              size={24}
            />
          ),
        }}
      />

      <Tab.Screen
        name="User"
        component={order_delivery}
        options={{
          tabBarIcon: ({ focused }) => (
            <User_icon
              colorFill={focused ? COLOR.primaryColor : COLOR.secondColor}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
