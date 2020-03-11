import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>My Todos</Text>
    </View>
  );
}

const styles = {
  header:{
    height:80,
    paddingTop:25,
    paddingBottom:10,
    justifyContent:'center',
    alignItem:"flex-start",
    backgroundColor:'darkcyan'
  },
  text:{
    fontSize:40,
    fontWeight:'bold',
    marginLeft:20,
    color:"white", 
  }
}