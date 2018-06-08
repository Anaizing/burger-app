import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-app-fb086.firebaseio.com/'
})

export default instance