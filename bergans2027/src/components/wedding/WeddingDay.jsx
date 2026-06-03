import React from 'react'
import wedding from '../../data/wedding.json'


function Card({ item, onClick }) {
    return (
        <div className="card" onClick={onClick} style={{ cursor: 'pointer' }}>
            <div className="card-info">
                <div className="subtitle">{item.time}</div>
                <div className="card-name">{item.name}</div>
            </div>
        </div>
    )
}

export default function WeddingDay() {
    const gettingReady = wedding?.gettingReady || []
    const ceremony = wedding?.ceremony || []
    const cocktailHour = wedding?.cocktailHour || []
    const reception = wedding?.reception || []

    return (
        <div>
            <h1>Wedding Day</h1>

            <div>
                <h2>Getting Ready</h2>
                <div>
                    {gettingReady.map((item) => (
                        <Card
                            key={item.name}
                            item={item}
                        />
                    ))}
                </div>
            </div>

            <div>
                <h2>Ceremony</h2>
                <div>
                    {ceremony.map((item) => (
                        <Card
                            key={item.name}
                            item={item}
                        />
                    ))}
                </div>
            </div>

            <div>
                <h2>Cocktail Hour</h2>
                <div>
                    {cocktailHour.map((item) => (
                        <Card
                            key={item.name}
                            item={item}
                        />
                    ))}
                </div>
            </div>

            <div>
                <h2>Reception</h2>
                <div>
                    {reception.map((item) => (
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