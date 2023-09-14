import axios from 'axios'
import { baseUrl } from './constatnts/constants'

const instance=axios.create({
    baseUrl:baseUrl,
})

export default instance