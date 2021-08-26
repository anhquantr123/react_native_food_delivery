import React from 'react'
import { SafeAreaView, StyleSheet, Text , View , FlatList} from 'react-native'
import { RootStateOrAny, useSelector } from 'react-redux'

type foodType = {
    name: string | any ,

}


const Item = ({ name  }: foodType ) => (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
export default function OrderDelivery() {
    const foods = useSelector((state: RootStateOrAny)=> state.foodReducer.foodList)
    const renderItem = ({item }: any ) => (
        <Item name={item.name}  />
      );
    return (
        <SafeAreaView>
     <Text>Food list</Text>
     <FlatList
        data={foods}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
})
