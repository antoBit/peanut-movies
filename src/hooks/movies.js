import { useContext, useEffect, useState } from 'react'
import { Context } from '../utils/context'
import { getMovies, likeMovie, dislikeMovie } from '../api/movies'
import { useNavigate } from 'react-router-dom'

export default function useMovies() {
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const { isUserLoggedIn } = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getMovies(currentPage)
            setMovies([...movies, ...data])
        }

        fetchMovies()
    }, [currentPage])

    const loadMore = () => setCurrentPage((page) => page + 1)

    const authGuard = () => {
        if (!isUserLoggedIn) navigate('/login')
    }

    const like = (id) => {
        authGuard()
        likeMovie(id)
    }

    const dislike = (id) => {
        authGuard()
        dislikeMovie(id)
    }

    return [movies, loadMore, like, dislike]
}
