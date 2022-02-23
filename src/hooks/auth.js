import { useState } from 'react'
import { login } from '../api/auth'

export default function useAuth() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

    async function logInUser(username, password) {
        const response = await login(username, password)
        console.log('response: ', response)
        setIsUserLoggedIn(response)
    }

    return [isUserLoggedIn, logInUser]
}
