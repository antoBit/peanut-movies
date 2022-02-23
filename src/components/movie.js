import LikesCounter from './likes'
import Spinner from './spinner'
import useMovie from '../hooks/movie'
import '../scss/movie.scss'

export default function MovieDetail({ id }) {
    const [movie] = useMovie(id)

    if (!movie) return <Spinner />

    return (
        <div className="movie__detail">
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <LikesCounter id={id} />
        </div>
    )
}
