import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {settings} from './constants';

const url = settings.server + '/cart';

export const addToCart = async (id, price) => {
  const token = await AsyncStorage.getItem('token');

  const result = await axios.post(
    url,
    {
      id,
      price,
    },
    {
      headers: {
        token,
      },
    },
  );

  return result.data;
};

export const updateQuantityOfCartItem = async (id, quantity) => {
  const token = await AsyncStorage.getItem('token');

  const result = await axios.put(
    url + '/' + id,
    {
      id,
      quantity,
    },
    {
      headers: {
        token,
      },
    },
  );

  return result.data;
};

export const removeFromCart = async id => {
  const token = await AsyncStorage.getItem('token');

  const result = await axios.delete(url + '/' + id, {
    headers: {
      token,
    },
  });

  return result.data;
};

export const getCartItems = async () => {
  const token = await AsyncStorage.getItem('token');

  const result = await axios.get(url, {
    headers: {
      token,
    },
  });

  return result.data;
};
