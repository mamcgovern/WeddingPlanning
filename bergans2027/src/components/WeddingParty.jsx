import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({ title, path, description }) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(path)
    }

    return (
        <div
            className="card"
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        >
            <div className="card-info">
                <div className="card-name">{title}</div>
                <div className="subtitle">{description}</div>

                <button
                    className="pink-btn"
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

export default function WeddingParty() {
    return (
        <div className="page-container">

            <h1>Wedding Party</h1>

            <div className="grid2">

                <Card
                    title="Parents"
                    path="/weddingparty/parents"
                    description="Attire"
                />

                {/* Add more cards here later */}
                <Card
                    title="Bridesmaids"
                    path="/weddingparty/bridesmaids"
                    description="Meet the maids, attire, and checklist"
                />

                <Card
                    title="Groomsmen"
                    path="/weddingparty/groomsmen"
                    description="Meet the men, attire, and checklist"
                />

            </div>

        </div>
    )
}