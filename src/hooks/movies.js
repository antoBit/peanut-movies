import { useEffect, useState } from 'react'
import { getMovies, addMovie } from '../api/movies'
import { useNavigate } from 'react-router-dom'

export default function useMovies() {
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getMovies(currentPage)
            setMovies((movies) => [...movies, ...data])
        }

        fetchMovies()
    }, [currentPage])

    const loadMore = () => setCurrentPage((page) => page + 1)

    const add = async (title, description) => {
        const movie = await addMovie(title, description)

        if (movie) {
            setMovies([movie, ...movies])
            navigate('/')
        }
    }

    return [movies, loadMore, add]
}
