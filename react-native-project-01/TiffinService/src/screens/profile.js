import React, {useState} from 'react';
import {Alert,StyleSheet,Text,TextInput,TouchableOpacity,View,} from 'react-native';
import Button from '../components/Button';
import Input from '../components/input';
import Label from '../components/Label';
import {profile} from '../service/user';
import {showErrorAlert, showWarningAlert} from '../utils/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');


  const onUpdate = async () => {
    if (firstName.length === 0) {
      showWarningAlert('please enter Firstname');
    } else if (lastName.length === 0) {
      showWarningAlert('please enter LastName');
    }else if (email.length === 0) {
      showWarningAlert('please enter Email');
    } else {
      const result = await profile(firstName, lastName, email);
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

      {/* <Label title="Password" />
      <Input
        onChangeText={text => setPassword(text)}
        isPassword={true}
        placeholder="password"
      /> */}



     
       
    <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Home');}}> 
      <Button  title="Update" onPress={onUpdate} />
    </TouchableOpacity>
     


    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'#fcbf49',
    
  },
  button: {
    marginTop:20,
  },
});

export default Profile;
