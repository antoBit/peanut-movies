import { Context } from './utils/context'
import useMovies from './hooks/movies'
import useAuth from './hooks/auth'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Home from './routes/home'
import Movie from './routes/movie'
import './scss/style.scss'

function App() {
    const [movies, loadMore] = useMovies()
    const [isUserLoggedIn, logInUser] = useAuth()
    console.log('isUserLoggedIn: ', isUserLoggedIn)

    return (
        <main>
            <Context.Provider
                value={{ movies, loadMore, isUserLoggedIn, logInUser }}
            >
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:id" element={<Movie />} />
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
