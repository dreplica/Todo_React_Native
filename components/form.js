import React,{useState} from 'react';
import { StyleSheet ,TextInput,View,Text, TouchableOpacity } from 'react-native';

export default function Form({add_item}) {
    const [text, setText] = useState("")
  return (
    <View style={styles.display}>
        <TextInput
        style={styles.form}
        placeholder='add todo'
        onChangeText={(val)=>setText(val)}

        />
        <TouchableOpacity 
        style={styles.button}
        onPress={()=>add_item(text)}
        >
            <Text style={{textAlign:'center',color:'white'}}>Add</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    display:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    form:{
        paddingVertical:5,
        paddingHorizontal:10,
        marginBottom:5,
        flex:3,
        borderBottomWidth:2,
        borderBottomColor:'darkcyan',
        borderStyle:'solid'

    },
    button:{
        flex:1,
        backgroundColor:'darkcyan',
        padding:10
    }
})