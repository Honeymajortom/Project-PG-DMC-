

import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../components/Button';
import Input from '../components/input';
import Label from '../components/Label';
import {signup} from '../service/user';
import {showErrorAlert, showWarningAlert} from '../utils/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const onSignup = async () => {
    if (email.length === 0) {
      showWarningAlert('please enter email');
    } else if (password.length === 0) {
      showWarningAlert('please enter password');
    } else {
      const result = await signup(firstName, lastName, email, password);
      console.log(result);
      if (result['status'] === 'success') {
        
        navigation.navigate('Signin');
      } else {
        showErrorAlert(result['error']);
      }
    }
  };

  return (
    
    <View style={styles.container}>
      <Label title="FirstName" />
      <Input
        onChangeText={text => setFirstName(text)}
        isPassword={true}
        placeholder="firstName"
      />

<Label title="LastName" />
      <Input
        onChangeText={text => setLastName(text)}
        isPassword={true}
        placeholder="lastName"
      />
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
          navigation.navigate('Signin');
        }}>
        <Text style={{marginTop: 20, fontSize:20, fontWeight: 'bold'}}>Already a user? Click here.</Text>
      </TouchableOpacity>
      
      <Button title="Signup" onPress={onSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'#fcbf49',
  },
});

export default Signup;
  