import { formatTime } from "../../utils/dateUtils";

function WeddingTimelineItem({ item }) {
    const eventEnd = item.endTime || item.startTime;
    const isPast = eventEnd
        ? new Date(eventEnd) < new Date()
        : false;

    const typeClass = item.type
        .toLowerCase()
        .replaceAll(" ", "-");

    return (
        <article
            className={`timeline-item ${isPast ? "timeline-item--complete" : ""
                }`}
        >
            <div
                className="timeline-item__marker"
                aria-hidden="true"
            />

            <div className="timeline-item__content">
                <div className="timeline-item__heading">
                    <span
                        className={`timeline-item__type timeline-item__type--${typeClass}`}
                    >
                        {item.type}
                    </span>

                    {isPast && (
                        <span className="timeline-item__status">
                            Complete
                        </span>
                    )}
                </div>

                <h2>{item.title}</h2>

                <div className="timeline-item__time">
                    {item.startTime ? (
                        <>
                            <time dateTime={item.startTime}>
                                {formatTime(item.startTime)}
                            </time>

                            {item.endTime && (
                                <>
                                    <span aria-hidden="true"> – </span>

                                    <time dateTime={item.endTime}>
                                        {formatTime(item.endTime)}
                                    </time>
                                </>
                            )}
                        </>
                    ) : (
                        <span>Time TBD</span>
                    )}
                </div>

                {item.location && (
                    <p className="timeline-item__location">
                        {item.location}
                    </p>
                )}

                {item.description && <p>{item.description}</p>}
            </div>
        </article>
    );
}

export default WeddingTimelineItem;