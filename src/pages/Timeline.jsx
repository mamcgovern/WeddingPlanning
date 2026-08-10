import timelineData from "../data/timeline";
import { formatDate } from "../utils/dateUtils";

function Timeline() {
  return (
    <main>
      <h1>Wedding Party Timeline</h1>

      {timelineData.map((item) => (
        <section key={item.id}>
          <p>{item.type === "task" ? "Deadline" : "Event"}</p>

          <h2>{item.title}</h2>

          <time dateTime={item.date}>
            {formatDate(item.date)}
          </time>

          <p>{item.description}</p>
        </section>
      ))}
    </main>
  );
}

export default Timeline;