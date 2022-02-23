import { useEffect, useState } from 'react'
import getMovies from '../api/movies'

export default function useMovies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getMovies()
            setMovies(data)
        }

        fetchMovies()
    }, [])

    return [movies]
}
