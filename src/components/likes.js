import { useContext } from 'react'
import { Context } from '../utils/context'
import '../scss/likes.scss'

export default function LikesCounter({
    movie: { id, like_count, dislike_count },
}) {
    const { refreshMovies, like, dislike } = useContext(Context)

    const onClickLike = async (event) => {
        event.preventDefault()
        await like(id)
        await refreshMovies()
    }

    const onClickDislike = async (event) => {
        event.preventDefault()
        await dislike(id)
        await refreshMovies()
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
