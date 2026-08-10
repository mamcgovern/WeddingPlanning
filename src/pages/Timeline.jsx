import TimelineItem from "../components/TimelineItem";
import timelineData from "../data/timeline";

function Timeline() {
  const sortedTimeline = [...timelineData].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <main>
      <section className="page-intro">
        <p className="eyebrow">Important Dates</p>
        <h1>Task Timeline</h1>
        <p>
          Use this timeline to stay on track with attire,
          accessories, alterations, and wedding weekend events.
        </p>
      </section>

      <section className="timeline">
        {sortedTimeline.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}

export default Timeline;