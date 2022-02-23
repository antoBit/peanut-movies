import { Route, Routes } from 'react-router-dom'
import Home from './routes/home'
import './scss/style.scss'

function App() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="test" element={<p>Test</p>} />
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
