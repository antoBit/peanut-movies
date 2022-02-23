import { useEffect, useState } from 'react'
import { getMovie } from '../api/movies'

export default function useMovie(id) {
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        const fetchMovie = async () => {
            const data = await getMovie(id)
            setMovie(data)
        }

        fetchMovie()
    }, [])

    return movie
}
