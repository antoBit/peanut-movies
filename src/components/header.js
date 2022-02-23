import { useContext } from 'react'
import { Context } from '../utils/context'
import { useLocation, useNavigate } from 'react-router-dom'
import GoBack from './back'
import '../scss/header.scss'

export default function Header() {
    const { isUserLoggedIn, logOut } = useContext(Context)
    const { pathname } = useLocation()
    const navigate = useNavigate()

    const goToLogin = () => navigate('/login')

    return (
        <header>
            <GoBack />
            {pathname !== '/login' ? (
                <div className="login">
                    <button onClick={isUserLoggedIn ? logOut : goToLogin}>
                        <i className="icon-user"></i>{' '}
                        {isUserLoggedIn ? 'Logout' : 'Login'}
                    </button>
                </div>
            ) : null}
        </header>
    )
}
