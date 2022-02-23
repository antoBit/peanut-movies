import useMovies from '../hooks/movies'
import he from 'he'
import Spinner from './spinner'
import { Link } from 'react-router-dom'
import LikesCounter from './likes'
import '../scss/movies.scss'

export default function Movies() {
    const [movies, loadMore] = useMovies()

    if (!movies.length) return <Spinner />

    return (
        <div className="movies__list">
            <h1>Peanut Movies</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id} className="movie">
                        <Link to={`/${movie.id}`}>
                            <img
                                src={`https://source.unsplash.com/random/300×500/?${movie.title.replace(
                                    /\s/g,
                                    ','
                                )}`}
                                width="300"
                                height="150"
                                alt={movie.title}
                            />
                            <p className="movie__title">
                                {he.decode(movie.title)}
                            </p>
                            <LikesCounter movie={movie} />
                        </Link>
                    </li>
                ))}
                <li className="addmore">
                    <button onClick={loadMore}>
                        <i className="icon-add-solid"></i>
                    </button>
                </li>
            </ul>
        </div>
    )
}
