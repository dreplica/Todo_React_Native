import React from 'react';
import { StyleSheet,TouchableOpacity,Text } from 'react-native';

export default function List({item,delete_item}) {
    console.log("item",item)
  return (
   <TouchableOpacity onPress={()=>delete_item(item.key)}>
       <Text style={styles.list}>{item.name}</Text>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    list:{
        fontSize:20,
        padding:10,
        marginTop:10,
        backgroundColor:'transparent',
        borderWidth:1,
        borderColor:'orange',
        borderStyle:'dashed',
        borderRadius:15,
    }
})