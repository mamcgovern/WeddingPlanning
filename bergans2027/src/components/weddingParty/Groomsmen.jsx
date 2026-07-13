
import React from 'react'
import attireData from '../../data/groomsmen/groomsmenAttire.json'

function Card({ item }) {
    return (
        <div className="card">

            <div className="card-image">
                <img src={item.photo} alt={item.name} />
            </div>

            <div className="card-info">
                <div className="card-name">{item.name}</div>

                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-btn"
                >
                    View
                </a>
            </div>

        </div>
    )
}

function DescriptionCard({ name, photo, description, link }) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={photo} alt={name} />
            </div>

            <div className="card-info">
                <div className="card-name">{name}</div>
                <div className="card-description">{description}</div>

                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-btn"
                >
                    View
                </a>
            </div>
        </div>
    )
}

export default function Groomsmen() {
    const suit = attireData?.suit || []
    const shoes = attireData?.shoes || []
    const sageTie = attireData?.sage || []
    const blushTie = attireData?.blush || []

    return (
        <div>
            {/* Suit */}
            <div>
                <h1>Suit</h1>
                <div className="grid1">
                    {suit.map((item) => (
                        <Card key={item.name + item.link} item={item} />
                    ))}
                </div>
            </div>

            {/* Shoes */}
            <div>
                <h1>Shoes</h1>
                <p className='subtitle'>The groomsmen are welcome to wear any black dress shoe they would like, including, but not limited to the following.</p>

                <div className="grid2">
                    {shoes.map((item) => (
                        <Card key={item.name + item.link} item={item} />
                    ))}
                </div>

                <button
                    className="pink-btn"
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

            {/* Ties */}
            <div>
                <h1>Ties</h1>
                <p className='subtitle'>Tie colors have been assigned to the groomsmen, and the ties were gifted as a part of the groomsmen's gift boxes.</p>
                <div className="grid2">
                    <DescriptionCard
                        name="Simon Tie - Sage Green"
                        photo="https://cdn.shopify.com/s/files/1/2053/3799/files/sage_simon_tie_1.jpg.webp?v=1741985302&width=1200&height=1800&crop=center&quality=85"
                        description="Assigned to: Nathan, Quentin, Damien, John"
                        link="https://www.birdygrey.com/products/simon-necktie-sage"
                    />
                    <DescriptionCard
                        name="Simon Tie - Blush Pink"
                        photo="https://cdn.shopify.com/s/files/1/2053/3799/files/blush_pink_simon_tie_1.jpg.webp?v=1741983461&width=1200&height=1800&crop=center&quality=85"
                        description="Assigned to: Kurt, Sam, Henry"
                        link="https://www.birdygrey.com/products/simon-necktie-blush-pink"
                    />
                </div>
            </div>
        </div>
    )
}