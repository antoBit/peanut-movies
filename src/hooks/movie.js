import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { isUserTokenInStorage } from '../api/auth'
import { dislikeMovie, getMovie, likeMovie } from '../api/movies'

export default function useMovie(id) {
    const [movie, setMovie] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchMovie = async () => {
            const data = await getMovie(id)
            setMovie(data)
        }

        fetchMovie()
    }, [id])

    const authGuard = () => {
        if (!isUserTokenInStorage()) navigate('/login')
    }

    const like = async (id) => {
        authGuard()
        const success = await likeMovie(id)

        if (success) {
            await refreshMovie(id)
        }
    }

    const dislike = async (id) => {
        authGuard()
        const success = await dislikeMovie(id)

        if (success) {
            await refreshMovie(id)
        }
    }

    const refreshMovie = async (id) => {
        const data = await getMovie(id)
        setMovie(data)
    }

    return [movie, like, dislike]
}
