import axios from 'axios';
import {settings} from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const url = settings.server + '/user';

export const signin = async (email, password) => {
  const result = await axios.post(url + '/signin', {
    
    email,
    password,
  });

  return result.data;
};

  export const signup = async (firstName, lastName, email, password) => {
  const result = await axios.post(url + '/signup', {
    
    firstName, 
    lastName, 
    email,
    password,
  });

  return result.data;
};

export const profile = async (firstName, lastName, email, password) => {
 const token = await AsyncStorage.getItem('token');
  const result = await axios.put(url + '/', {
    
    firstName, 
    lastName, 
    email,
    password,
  },{
  headers:{
    token,
  },}
  );

  return result.data;
};
