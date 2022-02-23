import { useContext, useEffect, useState } from 'react'
import { Context } from '../utils/context'
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

    const loadMore = () => setCurrentPage((page) => page + 1)

    const authGuard = (isUserLoggedIn) => {
        if (!isUserLoggedIn) navigate('/login')
    }

    const like = (isUserLoggedIn, id) => {
        authGuard(isUserLoggedIn)
        likeMovie(isUserLoggedIn, id)
    }

    const dislike = (isUserLoggedIn, id) => {
        authGuard(isUserLoggedIn)
        dislikeMovie(isUserLoggedIn, id)
    }

    const add = (isUserLoggedIn, title, description) => {
        addMovie(isUserLoggedIn, title, description)
        navigate('/')
    }

    return [movies, loadMore, like, dislike, add]
}
