import { useParams } from 'react-router-dom'
import MovieDetail from '../components/movie'
import Spinner from '../components/spinner'
import useMovie from '../hooks/movie'

export default function Movie() {
    const { id } = useParams()
    const movie = useMovie(id)

    if (!movie) return <Spinner />

    return <MovieDetail movie={movie} />
}
