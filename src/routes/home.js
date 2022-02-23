import { useContext } from 'react'
import Movies from '../components/movies'
import Spinner from '../components/spinner'
import { Context } from '../utils/context'

export default function Home() {
    const { movies, loadMore } = useContext(Context)

    if (!movies.length) return <Spinner />

    return <Movies movies={movies} loadMore={loadMore} />
}
