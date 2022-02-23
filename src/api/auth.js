import axios from './config'

export async function login(username, password) {
    try {
        const response = await axios.post('/session', { username, password })
        console.log('response: ', response)
    } catch (error) {
        console.log(error)
    }
}
