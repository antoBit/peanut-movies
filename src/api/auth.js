import axios from './config'

export function isUserTokenInStorage() {
    return window.localStorage.getItem('userToken') || false
}

export async function login(username, password) {
    try {
        const response = await axios.post('/session', { username, password })
        console.log('response: ', response)
        const { data, status } = response

        if (status === 200) {
            window.localStorage.setItem('userToken', data.jwt)
        }

        return status === 200
    } catch (error) {
        console.log(error)
    }
}

export function logout() {
    window.localStorage.removeItem('userToken')
}

export function getUserToken() {
    return window.localStorage.getItem('userToken')
}
