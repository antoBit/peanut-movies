import { useParams } from 'react-router-dom'
import MovieDetail from '../components/movie'

export default function Movie() {
    const { id } = useParams()

    return <MovieDetail id={id} />
}
