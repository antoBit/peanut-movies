import axios from './config'
import he from 'he'

export async function getMovies(page = 1) {
    try {
        const response = await axios.get('/movies', { params: { page: page } })

        const {
            data: { movies },
        } = response

        return movies.map((movie) => ({
            ...movie,
            title: he.decode(movie.title),
        }))
    } catch (error) {
        console.log(error)
    }
}

export async function getMovie(id) {
    try {
        const response = await axios.get(`/movies/${id}`)

        const {
            data: { movie },
        } = response

        return {
            ...movie,
            title: he.decode(movie.title),
            description: he.decode(movie.description),
        }
    } catch (error) {
        console.log(error)
    }
}
