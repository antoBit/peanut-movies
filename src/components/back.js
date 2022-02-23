import { useNavigate } from 'react-router-dom'

export default function GoBack() {
    const navigate = useNavigate()

    return (
        <div className="back">
            <span onClick={() => navigate(-1)}>
                <i className="icon-arrow-left"></i>
            </span>
        </div>
    )
}
