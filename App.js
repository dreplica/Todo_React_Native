import React, { useState,useEffect } from 'react';
import { StyleSheet, Alert, Text, Keyboard, View, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Header from './components/header';
import List from './components/listing';
import Form from './components/form';

export default function App() {
  const [text, setText] = useState("")
  useEffect(() => {
  }, [list])
  const [list, setList] = useState([
    {name:'dermo',key:'0'}
  ])

  const delete_item = (id)=>{
    setList((previous)=>previous.filter((item) => item.key !== id))
  }
  const add_item = (val)=>{
    if (/[a-zA-Z]+/.test(val)){
      const newItem = {...list, name: val, key: "" + Date.now() }
      setList([newItem,...list,])
    }else{
      Alert.alert('Sorry Gidi Invalid input','please write something down',
      [{text:'Awele',onPress:()=>console.log('it has gone')}])
    }
  }

  return (
    <TouchableWithoutFeedback
    onPress={()=>Keyboard.dismiss()}
    >

    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Form add_item={add_item}/>
        <View style={styles.list}>
          <FlatList 
          keyExtractor={(item)=>item.key}
          data={list}
          renderItem={({item})=><List item={item} delete_item={delete_item}/>
        }
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    flex:1,
    padding:40,
  },
  list:{
    flex:1,
    marginTop:30
  }
});
