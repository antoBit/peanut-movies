import axios from 'axios'

axios.defaults.baseURL = 'https://peanut-movies.herokuapp.com/api/v1'

export default async function getMovies() {
    try {
        const response = await axios({
            method: 'get',
            url: '/movies',
            data: {
                page: 1,
            },
        })

        const {
            data: { movies },
        } = response
        return movies
    } catch (error) {
        console.log(error)
    }
}
