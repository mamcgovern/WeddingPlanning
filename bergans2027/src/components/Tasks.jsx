import React from 'react'
import tasksData from '../data/tasks.json'


function Card({ item, onClick }) {
    return (
        <div className="card" onClick={onClick} style={{ cursor: 'pointer' }}>

            <div className="card-info">
                <div className="card-name">{item.name}</div>
                <div className="card-role">{formatDate(item.date)}</div>
                <div className="">{item.description}</div>
            </div>

        </div>
    )
}

function formatDate(dateString) {
    const date = new Date(`${dateString}T12:00:00`)

    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    })
}

export default function Tasks() {

    return (
        <div>
            <h1>Tasks</h1>

            <div className="card-grid">
                {tasksData.map((item) => (
                    <Card
                        key={item.name}
                        item={item}
                    />
                ))}
            </div>
        </div>
    )
}