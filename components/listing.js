import React from 'react';
import { StyleSheet,TouchableOpacity,Text, View } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
export default function List({item,delete_item}) {
    // console.log("item",item)
  return (
   <TouchableOpacity onPress={()=>delete_item(item.key)}>
          <View style={styles.list}>
              <Text style={styles.text}>{item.name}</Text>
                <MaterialIcons name='delete' size={25} color='red'/>
       </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    list:{
        padding:10,
        marginTop:10,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        backgroundColor:'transparent',
        borderWidth:1,
        borderColor:'orange',
        borderStyle:'dashed',
        borderRadius:15,
    },
    text:{
        fontSize:20
    }
})