import React from 'react'

function Card(item) {
    return (
        <div className='grid1'>
            <div className="card">
                <div className="card-info">
                    <div className="card-role">{item.name}</div>
                    <div className='card-name'>{item.description}</div>
                    <button
                        className="pink-btn"
                        onClick={() =>
                            window.open(
                                item.link,
                                '_blank'
                            )
                        }
                    >
                        View
                    </button>
                </div>
            </div>
        </div>
    )
}

export default function Links() {
    return (
        <div>
            <h1>Links</h1>
            <div>

                <Card
                    name="Wedding Website"
                    link="https://www.zola.com/wedding/bergans2027"
                    description="Find the dress code, FAQ, and more"
                />
                <Card
                    name="Wedding RSVP"
                    link="https://www.zola.com/wedding/bergans2027/RSVP"
                    description="RSVP for the wedding and rehearsal here"
                />
                <Card
                    name="Wedding Registry"
                    link="https://www.zola.com/wedding/bergans2027/registry"
                    description="Find the wedding registry here"
                />

            </div>
        </div>
    )
}