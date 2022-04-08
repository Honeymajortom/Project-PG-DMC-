import axios from 'axios'
import {settings} from './constants'

const url = settings.server + '/user'
export const signin = async (email, password) => {
    const result = await axios.post(url + '/signin', {
        email, password,
    })
    console.log(result)
    return result.data
}