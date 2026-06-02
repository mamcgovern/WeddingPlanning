
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
    const MOG = attireData?.MOG || []
    const FSuit = attireData?.FatherSuit || []
    const FShoes = attireData?.FatherShoes || []


    return (
        <div>

            <div className='Mothers'>
                <h2>Mothers</h2>
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
            </div>

            <div className='Fathers'>
                <h2>Fathers</h2>

                <div className='Fsuit'>
                    <h3>Suit</h3>
                    <div className="dress-grid">
                        {FSuit.map((item) => (
                            <Card key={item.name + item.link} item={item} />
                        ))}
                    </div>
                </div>

                <div className='Fsuit'>
                    <h3>Shoes</h3>
                    <div className="dress-grid">
                        {FShoes.map((item) => (
                            <Card key={item.name + item.link} item={item} />
                        ))}
                    </div>
                </div>

                <div className='Fsuit'>
                    <h3>Accessories</h3>
                    <p className='subtitle'>Your tie and pocket square will be provided by the couple.</p>
                    <p className='subtitle'>Please find or purchase a brown belt to match your shoes.</p>
                </div>
            </div>

        </div>
    )
}