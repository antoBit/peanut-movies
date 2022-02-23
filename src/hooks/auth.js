import { useState } from 'react'
import { isUserTokenInStorage, login, logout } from '../api/auth'

export default function useAuth() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(isUserTokenInStorage)

    async function logInUser(username, password) {
        const response = await login(username, password)
        setIsUserLoggedIn(response)
    }

    const logOut = (isUserLoggedIn) => {
        logout()
        setIsUserLoggedIn(!isUserLoggedIn)
    }

    return [isUserLoggedIn, logInUser, logOut]
}
