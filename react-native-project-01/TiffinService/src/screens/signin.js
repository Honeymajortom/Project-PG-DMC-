import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import Button from '../components/Button';
import Input from '../components/input';
import Label from '../components/Label';
import {signin} from '../service/user';
import {showErrorAlert, showWarningAlert,} from '../utils/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignin = async () => {
    if (email.length === 0) {
      showWarningAlert('please enter email');
    } else if (password.length === 0) {
      showWarningAlert('please enter password');
    } else {
      const result = await signin(email, password);
      console.log(result);
      if (result['status'] === 'success') {
        await AsyncStorage.setItem('token', result['data']['token']);
        navigation.navigate('Home');
      } else {
        showErrorAlert(result['error']);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Label title="Email" />
      <Input
        onChangeText={text => setEmail(text)}
        keyboardType={'email-address'}
        placeholder="email"
      />

      <Label title="Password" />
      <Input
        onChangeText={text => setPassword(text)}
        isPassword={true}
        placeholder="password"
      />
                <TouchableOpacity
                 onPress={() => {
               navigation.navigate('Signup');
                  }}>
            <Text style={{fontWeight: 'bold',fontSize:20,marginTop: 20}}>Dont have Account? Click here.</Text>
              </TouchableOpacity>
               <Button title="Signin" onPress={onSignin} />
               </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'#fcbf49'
  },
});

export default Signin;
