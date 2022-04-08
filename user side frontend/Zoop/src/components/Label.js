import React from 'react'
import {StyleSheet,View,Text,TextInput} from 'react-native'

const Label = ({title, fontSize, fontColor}) => {
    const textStyle = {
        fontSize: fontSize ? fontSize : 17,
        color: fontColor ? fontColor : '#000',
    }
  return (
    <View style={styles.container}>
        <Text style={textStyle}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginVertical:5,
    },
})

export default Label