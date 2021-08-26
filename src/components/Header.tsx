import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons , Ionicons } from '@expo/vector-icons'; 
import {COLOR, SIZES} from '../constants/theme'
interface header {
  left_icon?: String | any;
  name_title?: String | any;
  right_icon?: String | any;
  screen?: String | any, 
}
export default function Header({screen="home", ...props}: header) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
      style={styles.left_icon}>
        {screen == "home" ? <MaterialIcons name="location-on" size={24} color="black" />: 
        <Ionicons name="arrow-back" size={24} color="black" />}
        </TouchableOpacity>
      <View style={styles.container_title_appBar}>
        <Text style={styles.title_AppBar}> {props.name_title}</Text>
      </View>
      <TouchableOpacity>
        <Text>Leading</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  left_icon: {
      
  },
  container_title_appBar:{
    backgroundColor:COLOR.lightGray3,
    width: "50%",
    height:"80%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent:'center',
  },
  title_AppBar: {
    fontSize: SIZES.h3,
    fontWeight:'bold'

  },
  right_button: {},
});
