import React from 'react'

// function Card(name, link, description) {
//     return (
//         <div className="processional-card">
//             <div className="processional-info">
//                 <div className="processional-name">{name}</div>
//                 <a
//                     href={link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="dress-link"
//                 >
//                     View
//                 </a>
//                 <div className='processional-role'>{description}</div>
//             </div>
//         </div>
//     )
// }

function Card(item) {
    return (
        <div className="processional-card">
            <div className="processional-info">
                <div className="processional-role">{item.name}</div>
                <div className='processional-name'>{item.description}</div>
                <button
                    className="enter-btn"
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