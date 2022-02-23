import axios from './config'

export async function login(username, password) {
    try {
        const response = await axios.post('/session', { username, password })
        const { status } = response

        return status === 200
    } catch (error) {
        console.log(error)
    }
}
