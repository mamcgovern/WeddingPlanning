
import React from 'react'
import attireData from '../../data/groomsmen/groomsmenAttire.json'

function Card({ item }) {
    return (
        <div className="dress-card">

            <div className="dress-image">
                <img src={item.photo} alt={item.name} />
            </div>

            <div className="dress-info">
                <div className="dress-name">{item.name}</div>

                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dress-link"
                >
                    View
                </a>
            </div>

        </div>
    )
}

export default function Attire() {
    const suit = attireData?.suit || []
    const shoes = attireData?.shoes || []
    const sageTie = attireData?.sage || []
    const blushTie = attireData?.blush || []

    return (
        <div>

            <div className='suits'>

                <h3>Suit</h3>

                <div className='suit'>

                    <div className="dress-grid">
                        {suit.map((item) => (
                            <Card key={item.name + item.link} item={item} />
                        ))}
                    </div>

                </div>

            </div>

            <div className='shoes'>

                <h3>Shoes</h3>
                <p className='subtitle'>The groomsmen are welcome to wear any black dress shoe they would like, including, but not limited to the following.</p>

                <div className='shoes'>

                    <div className="dress-grid">
                        {shoes.map((item) => (
                            <Card key={item.name + item.link} item={item} />
                        ))}
                    </div>

                    <button
                        className="enter-btn"
                        onClick={() =>
                            window.open(
                                'https://www.shoecarnival.com/mens/dress?colorPrimary=BLACK',
                                '_blank'
                            )
                        }
                    >
                        View More
                    </button>


                </div>

            </div>

            <div className='ties'>

                <h3>Ties</h3>
                <p className='subtitle'>Tie colors have been assigned to the groomsmen, and the ties were gifted as a part of the groomsmen's gift boxes.</p>

                <div className='sage'>

                    <h4>Sage</h4>
                    <p>Assigned to: Nathan, Quentin, Damien, John</p>

                    <div className="dress-grid">
                        {sageTie.map((item) => (
                            <Card key={item.name + item.link} item={item} />
                        ))}
                    </div>

                </div>
                <div className='blush'>

                    <h4>Blush</h4>
                    <p>Assigned to: Kurt, Sam, Henry</p>

                    <div className="dress-grid">
                        {blushTie.map((item) => (
                            <Card key={item.name + item.link} item={item} />
                        ))}
                    </div>

                </div>

            </div>

        </div>
    )
}