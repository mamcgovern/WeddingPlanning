import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({ title, path }) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(path)
    }

    return (
        <div
            className="dress-card"
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        >
            <div className="dress-info">
                <div className="dress-name">{title}</div>

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

export default function WeddingParty() {
    return (
        <div className="page-container">

            <h1>Wedding Party</h1>

            <div className="dress-grid">

                <Card
                    title="Parents"
                    path="/weddingparty/parents"
                />

                {/* Add more cards here later */}
                <Card
                    title="Bridesmaids"
                    path="/weddingparty/bridesmaids"
                />

                <Card
                    title="Groomsmen"
                    path="/weddingparty/groomsmen"
                />

            </div>

        </div>
    )
}