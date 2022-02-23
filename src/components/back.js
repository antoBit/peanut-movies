import { useLocation, useNavigate } from 'react-router-dom'

export default function GoBack() {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    if (pathname === '/') return null

    return (
        <div className="back">
            <span onClick={() => navigate(-1)}>
                <i className="icon-arrow-left"></i>
            </span>
        </div>
    )
}
