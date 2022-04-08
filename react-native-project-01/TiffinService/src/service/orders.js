import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {settings} from './constants';

const url = settings.server + '/order';

export const getorders = async () => {
    const token = await AsyncStorage.getItem('token');
  
    const result = await axios.get(url + '/', {
      headers: {
        token,
      },
    });
  
    return result.data;
  };

  export const onPurchase = async (products, total) => {
    const token = await AsyncStorage.getItem('token');
  
    const result = await axios.post(
      url,
      {
        total,
        products,
      },
      {
        headers: {
          token,
        },
      },
    );
  
    return result.data;
  };