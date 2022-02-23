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

export async function likeMovie(id) {
    try {
        const response = await axios.get(`/movies/${id}/like`)
        const { status } = response

        return status === 200
    } catch (error) {
        console.log(error)
    }
}

export async function dislikeMovie(id) {
    try {
        const response = await axios.get(`/movies/${id}/dislike`)
        const { status } = response

        return status === 200
    } catch (error) {
        console.log(error)
    }
}

export async function addMovie(title, description) {
    try {
        const response = await axios.post(`/movies/`, {
            movie: { title, description },
        })
        const { status } = response

        return status === 200
    } catch (error) {
        console.log(error)
    }
}
