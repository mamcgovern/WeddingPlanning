import weddingDayTimeline from "../../data/weddingDayTimeline";

function formatTime(dateTime) {
    if (!dateTime) {
        return "Time TBD";
    }

    return new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
    }).format(new Date(dateTime));
}

function formatTimeRange(startTime, endTime) {
    if (!startTime) {
        return "Time TBD";
    }

    const formattedStart = formatTime(startTime);

    if (!endTime) {
        return formattedStart;
    }

    return `${formattedStart}–${formatTime(endTime)}`;
}

function WeddingDayTimeline() {
    return (
        <section className="wedding-day-section wedding-day-timeline">
            <div className="home-section-heading">
                <p className="eyebrow">Saturday, April 24th</p>
                <h2>Wedding Day Timeline</h2>

                <p>
                    A look at where you need to be and what will be happening
                    throughout the day.
                </p>
            </div>

            <div className="wedding-timeline">
                {weddingDayTimeline.map((item) => (
                    <article
                        className={`wedding-timeline__item wedding-timeline__item--${item.type
                            .toLowerCase()
                            .replaceAll(" ", "-")}`}
                        key={item.id}
                    >
                        <time
                            className="wedding-timeline__time"
                            dateTime={item.startTime || undefined}
                        >
                            {formatTimeRange(item.startTime, item.endTime)}
                        </time>

                        <div className="wedding-timeline__marker">
                            <span />
                        </div>

                        <div className="wedding-timeline__content">
                            <p className="wedding-timeline__type">
                                {item.type}
                            </p>

                            <h3>{item.title}</h3>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default WeddingDayTimeline;