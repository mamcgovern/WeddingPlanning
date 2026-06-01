
import React from 'react'
import attireData from '../../data/parentsAttire.json'

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

export default function Parents() {
    const MOB = attireData?.MOB || []
    const FOB = attireData?.FOB || []
    const MOG = attireData?.MOG || []
    const FOG = attireData?.FOG || []


    return (
        <div>

            <div className='bride'>

                <h2>Parents of the Bride</h2>

                <div className='MOB'>
                    <h3>Mother of the Bride</h3>
                    <div className="dress-grid">
                        {MOB.map((item) => (
                            <Card key={item.name + item.link} item={item} />
                        ))}
                    </div>
                    <button
                        className="enter-btn"
                        onClick={() =>
                            window.open(
                                'https://www.birdygrey.com/collections/mother-of-the-bride-and-groom-dresses?filter.tags_color_bar=vintage+pink+floral',
                                '_blank'
                            )
                        }
                    >
                        View More
                    </button>
                </div>
                {/* TODO: Add Father of the bride outfit */}
                {/* <div className='FOB'>
                    <h3>Father of the Bride</h3>
                    <div className="dress-grid">
                        {FOB.map((item) => (
                            <Card key={item.name + item.link} item={item} />
                        ))}
                    </div>
                </div> */}
            </div>

            <div className='Groom'>

                <h2>Parents of the Groom</h2>

                <div className='MOG'>
                    <h3>Mother of the Groom</h3>
                    <div className="dress-grid">
                        {MOG.map((item) => (
                            <Card key={item.name + item.link} item={item} />
                        ))}
                    </div>
                    <button
                        className="enter-btn"
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
                {/* TODO: Add Father of the bride outfit */}
                {/* <div className='FOG'>
                    <h3>Father of the Groom</h3>
                    <div className="dress-grid">
                        {FOG.map((item) => (
                            <Card key={item.name + item.link} item={item} />
                        ))}
                    </div>
                </div> */}
            </div>

        </div>
    )
}