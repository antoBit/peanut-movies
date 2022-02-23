import useMovies from '../hooks/movies'

export default function Home() {
    const [movies] = useMovies()

    if (!movies.length) return <p>Loading...</p>

    return (
        <div className="movies__list">
            <h1>Peanut Movies</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        {movie.title} - {movie.like_count}/{movie.dislike_count}
                    </li>
                ))}
            </ul>
        </div>
    )
}
