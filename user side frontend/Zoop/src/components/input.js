import React from 'react'
import {StyleSheet,View,Text,TextInput} from 'react-native'

const Input = ({placeholder, keyboardType, onChangeText, isPassword}) => {

    const kt = keyboardType ? keyboardType : 'default'

  return (
    <TextInput 

        onChangeText={text => {
            if(onChangeText){
                onChangeText(text)
            }
        }}
        secureTextEntry={isPassword ? true : false}
        keyboardType={kt}
        style={styles.input} 
        placeholder={placeholder}
        />
  )
}

const styles = StyleSheet.create({
    input:{
        borderStyle: 'solid',
        borderRadius:5,
        height:35,
        borderWidth:1,
        borderColor: '#666',
        paddingHorizontal: 15,
        paddingVertical:5,

    },
})
export default Input