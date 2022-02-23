import axios from 'axios'

axios.defaults.baseURL = 'https://peanut-movies.herokuapp.com/api/v1'
axios.defaults.headers.common[
    'Authorization'
] = `Bearer ${window.localStorage.getItem('userToken')}`

export default axios
