import useMovie from '../hooks/movie'
import '../scss/likes.scss'

export default function LikesCounter({ id }) {
    const [movie, like, dislike] = useMovie(id)

    const onClickLike = (event) => {
        event.preventDefault()
        like(id)
    }

    const onClickDislike = (event) => {
        event.preventDefault()
        dislike(id)
    }

    if (!movie) return null

    return (
        <div className="movie__counter">
            <span onClick={onClickLike}>
                <i className="icon-thumbs-up"></i>
                {movie.like_count}
            </span>
            <span onClick={onClickDislike}>
                <i className="icon-thumbs-down"></i>
                {movie.dislike_count}
            </span>
        </div>
    )
}
