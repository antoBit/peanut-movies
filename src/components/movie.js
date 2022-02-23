import { useParams } from 'react-router-dom'
import useMovie from '../hooks/movie'
import Spinner from './spinner'
import LikesCounter from './likes'
import '../scss/movie.scss'

export default function MovieDetail() {
    const { id } = useParams()
    const movie = useMovie(id)

    if (!movie) return <Spinner />

    return (
        <div className="movie__detail">
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <LikesCounter movie={movie} />
        </div>
    )
}
