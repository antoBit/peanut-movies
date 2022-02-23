import useMovies from '../hooks/movies'
import '../scss/likes.scss'

export default function LikesCounter({
    movie: { id, like_count, dislike_count },
}) {
    const [, , like, dislike] = useMovies()

    const onClickLike = (event) => {
        event.preventDefault()
        like(id)
    }

    const onClickDislike = (event) => {
        event.preventDefault()
        dislike(id)
    }

    return (
        <div className="movie__counter">
            <span onClick={onClickLike}>
                <i className="icon-thumbs-up"></i>
                {like_count}
            </span>
            <span onClick={onClickDislike}>
                <i className="icon-thumbs-down"></i>
                {dislike_count}
            </span>
        </div>
    )
}
