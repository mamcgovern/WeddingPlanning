const sleepingAreas = [
    {
        id: 1,
        name: "Master Bedroom",
        type: "Bedroom",
        assignments: [
            {
                bed: "King Bed",
                people: ["Maddie", "Nick"],
            },
        ],
    },
    {
        id: 2,
        name: "Bedroom Two",
        type: "Bedroom",
        assignments: [
            {
                bed: "Queen Bed",
                people: ["Sydni", "Colin"],
            },
            {
                bed: "Queen Bed",
                people: ["Nathan", "Skyler"],
            },
        ],
    },
    {
        id: 3,
        name: "Bedroom Three",
        type: "Bedroom",
        assignments: [
            {
                bed: "Queen Bed",
                people: ["Lizzy", "Kurt"],
            },
            {
                bed: "Queen Bed",
                people: ["Kay", "Bee"],
            },
            {
                bed: "Floor",
                people: ["Toph"],
            },
        ],
    },
    {
        id: 4,
        name: "Living Room",
        type: "Common Area",
        assignments: [
            {
                bed: "Couch",
                people: ["TBD"],
            },
            {
                bed: "Pull-Out Bed",
                people: ["TBD"],
            },
            {
                bed: "Air Mattress",
                people: ["TBD"],
            },
        ],
        note: "Air mattresses can be set up as needed.",
    },
];

function SleepingArrangements() {
    return (
        <>
            <section className="page-intro">
                <p className="eyebrow">April 23rd–25th, 2027</p>
                <h1>Sleeping Arrangements</h1>

                <p>
                    Members of the wedding party are welcome to stay in the house at the
                    venue during the wedding weekend.
                </p>

                <div className="sleeping-progress">
                    <span className="sleeping-progress__label">
                        Work in Progress
                    </span>

                    <p>
                        These assignments are still being finalized and may change as we
                        get closer to the wedding.
                    </p>

                    <p className="sleeping-progress__contact">
                        <strong>Want to stay at the house?</strong> Please reach out to
                        the couple to let them know so we can make sure we have a sleeping
                        space planned for you.
                    </p>
                </div>
            </section>

            <section className="sleeping">
                <div className="sleeping__summary">
                    <div className="sleeping__summary-item">
                        <span className="sleeping__summary-number">3</span>
                        <span className="sleeping__summary-label">Bedrooms</span>
                    </div>

                    <div className="sleeping__summary-item">
                        <span className="sleeping__summary-number">2</span>
                        <span className="sleeping__summary-label">Bathrooms</span>
                    </div>

                    <div className="sleeping__summary-item">
                        <span className="sleeping__summary-number">16+</span>
                        <span className="sleeping__summary-label">Guests</span>
                    </div>
                </div>

                <div className="sleeping__grid">
                    {sleepingAreas.map((area) => (
                        <article
                            className={`sleeping__card ${area.type === "Common Area"
                                ? "sleeping__card--common"
                                : ""
                                }`}
                            key={area.id}
                        >
                            <div className="sleeping__card-header">
                                <div>
                                    <p className="sleeping__room-label">{area.type}</p>
                                    <h2>{area.name}</h2>
                                </div>
                            </div>

                            <div className="sleeping__assignments">
                                {area.assignments.map((assignment, index) => (
                                    <div
                                        className="sleeping__assignment"
                                        key={`${area.id}-${index}`}
                                    >
                                        <span className="sleeping__assignment-bed">
                                            {assignment.bed}:
                                        </span>

                                        <span className="sleeping__assignment-people">
                                            {assignment.people.join(" & ")}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {area.note && (
                                <p className="sleeping__note">{area.note}</p>
                            )}
                        </article>
                    ))}
                </div>
            </section>

            <section className="sleeping-notes">
                <div className="sleeping-notes__inner">
                    <div className="sleeping-notes__heading">
                        <p className="eyebrow">Additional Sleeping Space</p>
                        <h2>The Living Room</h2>

                        <p>
                            Additional sleeping space is available on the couch, pull-out bed, and air mattresses.
                        </p>
                        <p>
                            The living area is very large, and should be able to sleep 10+ people comfortably.
                        </p>
                        <p>
                            If you're assigned to the living room, plan to bring your own
                            air mattress, pillow, and blankets unless we tell you otherwise.
                            We have a couple air mattresses that can be borrowed if necessary.
                        </p>
                    </div>
                </div>
            </section>

            <section className="sleeping-hotel">
                <div className="sleeping-hotel__inner">
                    <div className="sleeping-hotel__content">
                        <p className="eyebrow">Prefer Your Own Space?</p>
                        <h2>Cobblestone Inn & Suites</h2>

                        <a
                            className="sleeping-hotel__address"
                            href="https://www.google.com/maps/search/?api=1&query=1210+Commercial+Court+Manchester+IA+52057"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            1210 Commercial Court
                            <br />
                            Manchester, IA 52057
                            <span>View in Google Maps →</span>
                        </a>

                        <p className="sleeping-hotel__distance">
                            12 minute drive from the wedding venue
                        </p>

                        <p>
                            To reserve, call the hotel at{" "}
                            <a href="tel:5638560011">(563) 856-0011</a> and ask for a room under
                            our block:
                        </p>

                        <p className="sleeping-hotel__block-name">
                            Nick&amp;Maddie Wedding
                        </p>
                    </div>

                    <div className="sleeping-hotel__status">
                        <span className="sleeping-hotel__status-label">
                            Hotel Block
                        </span>

                        <div className="sleeping-hotel__detail">
                            <span>Check In</span>
                            <strong>Friday, April 23rd</strong>
                            <p>3:00 PM</p>
                        </div>

                        <div className="sleeping-hotel__detail">
                            <span>Check Out</span>
                            <strong>Sunday, April 25th</strong>
                            <p>11:00 AM</p>
                        </div>

                        <div className="sleeping-hotel__detail">
                            <span>Reserve By</span>
                            <strong>TBD</strong>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SleepingArrangements;