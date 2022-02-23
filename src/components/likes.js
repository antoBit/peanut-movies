import '../scss/likes.scss'

export default function LikesCounter({ movie: { like_count, dislike_count } }) {
    return (
        <div className="movie__counter">
            <span>
                <i className="icon-thumbs-up"></i>
                {like_count}
            </span>
            <span>
                <i className="icon-thumbs-down"></i>
                {dislike_count}
            </span>
        </div>
    )
}
