import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
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
    const newItem = {...list, name: val, key: "" + Date.now() }
     setList([...list,newItem])
  }

  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content}>
        <Form add_item={add_item}/>
        <View style={styles.list}>
          {/* todo list */}
          <FlatList 
          keyExtractor={(item)=>item.key}
          data={list}
          renderItem={({item})=><List item={item} delete_item={delete_item}/>
        }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:30
  }
});
