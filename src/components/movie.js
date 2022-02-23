import { useParams } from 'react-router-dom'
import he from 'he'
import useMovie from '../hooks/movie'
import '../scss/movie.scss'
import LikesCounter from './likes'

export default function MovieDetail() {
    const { id } = useParams()
    const movie = useMovie(id)

    if (!movie) return <p>Loading...</p>

    return (
        <div className="movie__detail">
            <h1>{he.decode(movie.title)}</h1>
            <p>{he.decode(movie.description)}</p>
            <LikesCounter movie={movie} />
        </div>
    )
}
