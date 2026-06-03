import React from 'react'
import rehearsalData from '../../data/rehearsal.json'


function Card({ item, onClick }) {
    return (
        <div className="card" onClick={onClick} style={{ cursor: 'pointer' }}>

            <div className="card-image">
                <img src={import.meta.env.BASE_URL + item.photo} alt={item.name} />
            </div>

            <div className="card-info">
                <div className="card-role">{item.name}</div>
                <div className="card-name">{item.time}</div>
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
                <div className="grid2">
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