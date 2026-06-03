import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({ role, names, link }) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(link)
    }
    return (
        <div
            className="dress-card"
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        >
            <div className="dress-info">
                <div className="role">{role}</div>
                <div className="name">{names}</div>

                <button
                    className="enter-btn"
                    onClick={(e) => {
                        e.stopPropagation()
                        handleClick()
                    }}
                >
                    View
                </button>
            </div>
        </div>
    )
}

export default function Parents() {
    return (
        <div className="page-container">
            <h1>Parents</h1>
            <div className="dress-grid">
                <Card
                    role="Bride's Parents"
                    names="Paula & Fred McGovern"
                    link="/weddingparty/parents/brides-parents"
                />
                <Card
                    role="Groom's Parents"
                    names="Sharyn & Jeff Bergan"
                    link="/weddingparty/parents/grooms-parents"
                />
            </div>
        </div>
    )
}