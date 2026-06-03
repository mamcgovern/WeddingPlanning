
import React from 'react'
import attireData from '../../../data/parentsAttire.json'

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

function NoLink({ name, photo }) {
    return (
        <div className="card">

            <div className="card-image">
                <img src={photo} alt={name} />
            </div>

            <div className="card-info">
                <div className="card-name">{name}</div>
            </div>

        </div>
    )
}

export default function GroomsFamily() {
    const MOG = attireData?.MOG || []
    const FSuit = attireData?.FatherSuit || []
    const FShoes = attireData?.FatherShoes || []


    return (
        <div>
            <h1>Groom's Family Attire</h1>
            
            {/* Mother of the Groom */}
            <div>
                <h2>Mother of the Groom</h2>
                <div className="grid2">
                    {MOG.map((item) => (
                        <Card key={item.name + item.link} item={item} />
                    ))}
                </div>
                <button
                    className="pink-btn"
                    onClick={() =>
                        window.open(
                            'https://www.birdygrey.com/collections/mother-of-the-bride-and-groom-dresses?filter.tags_color_bar=sage+le+fleur',
                            '_blank'
                        )
                    }
                >
                    View More
                </button>
            </div>

            {/* Father of the Groom */}
            <div>
                <h2>Father of the Groom</h2>

                <div>
                    <h3>Suit</h3>
                    <div className="grid1">
                        {FSuit.map((item) => (
                            <Card key={item.name + item.link} item={item} />
                        ))}
                    </div>
                </div>

                <div>
                    <h3>Shoes</h3>
                    <p className='subtitle'>The fathers are welcome to wear any brown dress shoe they would like, including, but not limited to the following.</p>
                    <div className="grid2">
                        {FShoes.map((item) => (
                            <Card key={item.name + item.link} item={item} />
                        ))}
                    </div>

                    <button
                        className="pink-btn"
                        onClick={() =>
                            window.open(
                                'https://www.shoecarnival.com/mens/dress?colorPrimary=BROWN',
                                '_blank'
                            )
                        }
                    >
                        View More
                    </button>
                </div>

                <div>
                    <h3>Accessories</h3>
                    <p className='subtitle'>Your tie and pocket square will be provided by the couple.</p>
                    <p className='subtitle'>Please find or purchase a brown belt to match your shoes.</p>
                    <div className="grid2">
                        <NoLink
                            name="Simon Tie - Sage"
                            photo="https://cdn.shopify.com/s/files/1/2053/3799/files/sage_simon_tie_1.jpg.webp?v=1741985302&width=1200&height=1800&crop=center&quality=85"
                        />
                        <NoLink
                            name="Didi Pocket Square - Sage"
                            photo="https://cdn.shopify.com/s/files/1/2053/3799/files/sage_didi_pocket_square_1.jpg.webp?v=1742238519&width=1200&height=1800&crop=center&quality=85"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}