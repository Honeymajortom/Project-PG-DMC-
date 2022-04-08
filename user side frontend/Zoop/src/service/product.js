import axios from 'axios'
import {settings} from './constants'


const url = settings.server + '/menu'

export const getProducts = async () => {
    const result = await axios.get(url + '', {})
    return result.data
  }

  export const getProductThumbnail = async (image) => {
    const result = await axios.get(url + '/image/' + image, {})
    return result.data
  }