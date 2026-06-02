import React from 'react'
import rehearsalData from '../../data/rehearsal.json'


function Card({ item, onClick }) {
    return (
        <div className="dress-card" onClick={onClick} style={{ cursor: 'pointer' }}>

            <div className="dress-image">
                <img src={import.meta.env.BASE_URL + item.photo} alt={item.name} />
            </div>

            <div className="dress-info">
                <div className="dress-name">{item.name}</div>
                <div className="dress-name">{item.time}</div>
                <div className="subtitle">{item.description}</div>
            </div>

        </div>
    )
}

export default function Rehearsal() {
    return (
        <div>
            <h1>Rehearsal</h1>

            <div className='Rehearsal'>
                <div className="dress-grid">
                    {rehearsalData.map((item) => (
                        <Card
                            key={item.name}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}