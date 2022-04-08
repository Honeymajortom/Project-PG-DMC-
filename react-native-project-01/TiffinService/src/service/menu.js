import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {settings} from './constants';

const url = settings.server + '/menu';

export const getAllMenu = async (term = '') => {
  const token = await AsyncStorage.getItem('token');

  const result = await axios.get(url + '/?term=' + term, {
    headers: {
      token,
    },
  });

  return result.data;
};


// export const getAllMenu = async() => {
//   const token = await AsyncStorage.getItem('token');

//   const result = await axios.get(url + '/menu', {
//     headers: {
//       token,
//     },
//   });

//   return result.data;
// };


















export const getMenuThumbnail = async image => {
  const token = await AsyncStorage.getItem('token');

  const result = await axios.get(url + '/image/' + image, {
    headers: {
      token,
    },
  });

  return result.data;
};

export const getMenuDetails = async id => {
  const token = await AsyncStorage.getItem('token');

  const result = await axios.get(url + '/' + id, {
    headers: {
      token,
    },
  });

  return result.data;
};
