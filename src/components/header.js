import { useContext } from 'react'
import { Context } from '../utils/context'
import GoBack from './back'
import '../scss/header.scss'

export default function Header() {
    const { isUserLoggedIn, logInUser } = useContext(Context)

    return (
        <header>
            <GoBack />
            <div className="login">
                {!isUserLoggedIn ? (
                    <button onClick={() => logInUser('test', 'test')}>
                        <i className="icon-user"></i> Login
                    </button>
                ) : (
                    <p>Welcome back!</p>
                )}
            </div>
        </header>
    )
}
