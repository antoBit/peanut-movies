import { useEffect, useState } from 'react'
import { getMovies } from '../api/movies'

export default function useMovies() {
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getMovies(currentPage)
            setMovies([...movies, ...data])
        }

        fetchMovies()
    }, [currentPage])

    const loadMore = () => setCurrentPage((page) => page + 1)

    return [movies, loadMore]
}
