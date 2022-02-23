import LikesCounter from './likes'
import '../scss/movie.scss'

export default function MovieDetail({ movie }) {
    return (
        <div className="movie__detail">
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <LikesCounter movie={movie} />
        </div>
    )
}
