import { formatDate } from "../utils/dateUtils";

function TimelineItem({ item }) {
  const isPast = new Date(item.date) < new Date();

  return (
    <article
      className={`timeline-item ${
        isPast ? "timeline-item--complete" : ""
      }`}
    >
      <div className="timeline-item__marker" aria-hidden="true" />

      <div className="timeline-item__content">
        <div className="timeline-item__heading">
          <span className={`timeline-item__type timeline-item__type--${item.type}`}>
            {item.type === "task" ? "Deadline" : "Event"}
          </span>

          {isPast && (
            <span className="timeline-item__status">Complete</span>
          )}
        </div>

        <h2>{item.title}</h2>

        <time dateTime={item.date}>
          {formatDate(item.date)}
        </time>

        <p>{item.description}</p>
      </div>
    </article>
  );
}

export default TimelineItem;