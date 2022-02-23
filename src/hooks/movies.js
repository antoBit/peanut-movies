import { useEffect, useState } from 'react'
import { isUserTokenInStorage } from '../api/auth'
import { getMovies, likeMovie, dislikeMovie, addMovie } from '../api/movies'
import { useNavigate } from 'react-router-dom'

export default function useMovies() {
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getMovies(currentPage)
            setMovies([...movies, ...data])
        }

        fetchMovies()
    }, [currentPage])

    const refreshMovies = async () => {
        const data = await getMovies(currentPage)
        setMovies(data)
    }

    const loadMore = () => setCurrentPage((page) => page + 1)

    const authGuard = () => {
        if (!isUserTokenInStorage()) navigate('/login')
    }

    const like = async (id) => {
        authGuard()
        await likeMovie(id)
    }

    const dislike = async (id) => {
        authGuard()
        await dislikeMovie(id)
    }

    const add = (title, description) => {
        addMovie(title, description)
        navigate('/')
    }

    return [movies, refreshMovies, loadMore, like, dislike, add]
}
