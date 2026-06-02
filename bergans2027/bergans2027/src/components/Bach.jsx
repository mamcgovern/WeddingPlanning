import React from 'react'
import bachData from '../data/bach.json'


function Card({ item, onClick }) {
    return (
        <div className="dress-card" onClick={onClick} style={{ cursor: 'pointer' }}>

            <div className="dress-image">
                <img src={import.meta.env.BASE_URL + item.photo} alt={item.name} />
            </div>

            <div className="dress-info">
                <div className="dress-name">{item.name}</div>
                <div className="dress-name">{item.time}</div>

            </div>

        </div>
    )
}

export default function Bach() {
    const dayOne = bachData?.dayOne || []
    const dayTwo = bachData?.dayTwo || []
    const dayThree = bachData?.dayThree || []

    return (
        <div>
            <h1>Bachelor(ette) Party</h1>

            <div className='Day 1'>
                <h2>July 31st (Optional)</h2>
                <p className='subtitle'>Friday, July 31st is an optional day for those traveling to the area early.</p>

                <div className="dress-grid">
                    {dayOne.map((item) => (
                        <Card
                            key={item.name}
                            item={item}
                        />
                    ))}
                </div>
            </div>

            <div className='Day 1'>
                <h2>August 1st</h2>

                <div className="dress-grid">
                    {dayTwo.map((item) => (
                        <Card
                            key={item.name}
                            item={item}
                        />
                    ))}
                </div>
            </div>

            <div className='Day 1'>
                <h2>August 2nd</h2>

                <div className="dress-grid">
                    {dayThree.map((item) => (
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