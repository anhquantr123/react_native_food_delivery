import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  home_screen,
  order_delivery,
  restaurant,
} from "../constants/screen_default";
import { COLOR, SIZES } from "../constants/theme";

import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import Home_icon from "../constants/icons/home_icon";
import Cutlery_icon from "../constants/icons/cutlery_icon";
import Search_icon from "../constants/icons/search_icon";

const Tab = createBottomTabNavigator();

export default function NavigationBottomTab() {
  return (
      // cutlery icon 
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
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
        component={home_screen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Search_icon
              colorFill={focused ? COLOR.primaryColor : COLOR.secondColor}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen name="OrderDelivery" component={order_delivery} />
      <Tab.Screen name="Restaurants" component={home_screen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
