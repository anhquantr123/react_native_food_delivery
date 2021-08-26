import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import Header from '../../components/Header'
import{useDispatch} from 'react-redux'
import {addFood} from "../../redux/actions/action-food"

const HomeScreen = () => {
    const [food, setFood] = useState("")
    const dispatch  = useDispatch(); 
    const submitFood = (Food: string) => {
        console.log(Food);
        
        dispatch(addFood(Food));}
    return (
        <SafeAreaView style={styles.container}>
           <Header screen={"home"} name_title={"Location"}/>
           <TextInput
           style={styles.input}
           placeholder="input here" 
           onChangeText={(text)=>setFood(text)} />
           <Text>{food}</Text>
               <TouchableOpacity
                style={styles.btn_submit}
                onPress={
                    ()=>{submitFood(food);
                    setFood("")}
                }
               >
                    <Text>Submit</Text>
               </TouchableOpacity>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "white"
    },
    input:{
        marginLeft: 20,
        fontSize: 16,
        marginBottom: 32,
        borderWidth: 1,
        padding: 5,
        width: '80%',
        borderRadius: 10,
        backgroundColor: 'white'
    },
    btn_submit:{
        alignItems:'center',
        backgroundColor:'red',
        padding: 5,
        borderRadius: 15,
        width:'30%',
        justifyContent:'center'
    }
})
