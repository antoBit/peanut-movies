import { useContext } from 'react'
import { Context } from '../utils/context'
import Movies from '../components/movies'
import Spinner from '../components/spinner'

export default function Home() {
    const { movies, loadMore } = useContext(Context)

    if (!movies.length) return <Spinner />

    return <Movies movies={movies} loadMore={loadMore} />
}
