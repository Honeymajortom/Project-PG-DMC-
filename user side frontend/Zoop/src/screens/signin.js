import React from 'react'
import {StyleSheet,View,Text,TextInput, Alert} from 'react-native'
import { useState } from 'react'
import Input from '../components/input'
import Label from '../components/Label'
import Button from '../components/Button'
import {showErrorAlert, showWarningAlert} from '../utils/utils'
import {signin} from '../service/user'


const Signin = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const onSignin = async () => {
        try{
        if(email.length === 0) {
            showWarningAlert('please enter email')
        } else if(password.length === 0) {
            showWarningAlert('please enter password')
        } else {
            const result = await signin(email, password)
            console.log("Login",result)
            if(result['status'] === 'success'){
                
                navigation.navigate('Home')
            } else {
                showErrorAlert(result['error'])
            }
        }
    }catch{
        
    }
    }


    return(
        <View style={styles.container}>

            <Label title="Email"/>
            <Input onChangeText={text => setEmail(text)} keyboardType={'email-address'} placeholder="email"/>

            <Label title="Password"/>
            <Input onChangeText={text => setPassword(text)} isPassword={true} placeholder="password"/>
            
            <Button title = "Signin" onPress={onSignin}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:16,
    },
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

export default Signin;