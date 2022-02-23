import axios from './config'

export async function login(username, password) {
    try {
        const response = await axios.post('/session', { username, password })
        const { data, status } = response

        return status === 200 ? data.jwt : false
    } catch (error) {
        console.log(error)
    }
}
