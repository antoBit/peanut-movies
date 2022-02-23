import { Context } from './utils/context'
import useMovies from './hooks/movies'
import useAuth from './hooks/auth'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Home from './routes/home'
import Movie from './routes/movie'
import Login from './routes/login'
import './scss/style.scss'

function App() {
    const [movies, loadMore] = useMovies()
    const [isUserLoggedIn, logInUser, logOut] = useAuth()

    return (
        <main>
            <Context.Provider
                value={{ movies, loadMore, isUserLoggedIn, logInUser, logOut }}
            >
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:id" element={<Movie />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="*"
                        element={
                            <main>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </Context.Provider>
        </main>
    )
}

export default App
