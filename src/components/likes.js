import { useContext } from 'react'
import { Context } from '../utils/context'
import '../scss/likes.scss'

export default function LikesCounter({
    movie: { id, like_count, dislike_count },
}) {
    const { isUserLoggedIn, like, dislike } = useContext(Context)

    const onClickLike = (event) => {
        event.preventDefault()
        like(isUserLoggedIn, id)
    }

    const onClickDislike = (event) => {
        event.preventDefault()
        dislike(isUserLoggedIn, id)
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
