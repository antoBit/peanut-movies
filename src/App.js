import { Route, Routes } from 'react-router-dom'
import Home from './routes/home'
import Movie from './routes/movie'
import './scss/style.scss'

function App() {
    return (
        <main>
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
        </main>
    )
}

export default App
