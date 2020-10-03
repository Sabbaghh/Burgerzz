import axios from 'axios';

export default axios.create({
    baseURL: 'https://burgerzz-f2ec7.firebaseio.com/'
})