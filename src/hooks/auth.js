import { useState } from 'react'
import { login } from '../api/auth'

export default function useAuth() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

    async function loginUser(username, password) {
        const response = await login(username, password)
        setIsUserLoggedIn(true)
    }

    return [isUserLoggedIn, loginUser]
}
