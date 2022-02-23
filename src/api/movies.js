import axios from 'axios'

axios.defaults.baseURL = 'https://peanut-movies.herokuapp.com/api/v1'

export async function getMovies(page = 1) {
    try {
        const response = await axios.get('/movies', { params: { page: page } })

        const {
            data: { movies },
        } = response
        return movies
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
        return movie
    } catch (error) {
        console.log(error)
    }
}
