import { useContext, useEffect, useState } from 'react'
import { Context } from '../utils/context'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/spinner'
import '../scss/login.scss'

export default function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggingIn, setIsLoggingIn] = useState(false)
    const { isUserLoggedIn, logInUser } = useContext(Context)
    const navigate = useNavigate()

    const onChangeUserName = (event) => setUserName(event.target.value)
    const onChangeUserPassword = (event) => setPassword(event.target.value)

    const onSubmit = async (event) => {
        event.preventDefault()
        setIsLoggingIn(false)
        await logInUser(userName, password)
        setIsLoggingIn(false)
    }

    useEffect(() => {
        if (isUserLoggedIn) {
            navigate('/')
        }
    }, [isUserLoggedIn, navigate])

    if (isLoggingIn) return <Spinner />

    return (
        <div className="form">
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={userName}
                    onChange={onChangeUserName}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChangeUserPassword}
                    required
                />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}
