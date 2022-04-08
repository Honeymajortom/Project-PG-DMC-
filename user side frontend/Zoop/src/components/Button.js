import React from 'react'
import {StyleSheet,View,Text,TextInput,TouchableOpacity} from 'react-native'

const Button = ({title, onPress}) => {
  return (
      <TouchableOpacity onPress={onPress}>
    <View style={[styles.container]} >
        <></>
        <Text style={styles.text}>{title}</Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:'#00a4ff',
        marginVertical:20,
        borderRadius: 10,
    },
    text:{
        color:'#fff',
        textAlign:'center',
    }
})

export default Button