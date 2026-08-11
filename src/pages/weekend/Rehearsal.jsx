import WeddingTimelineItem from "../../components/WeddingTimelineItem";
import rehearsalData from "../../data/rehearsal";

function Rehearsal() {
  const sortedEvents = [...rehearsalData].sort((a, b) => {
    if (a.startTime && b.startTime) {
      return new Date(a.startTime) - new Date(b.startTime);
    }

    if (a.startTime) {
      return -1;
    }

    if (b.startTime) {
      return 1;
    }

    return a.id - b.id;
  });

  return (
    <>
      <section className="page-intro">
        <p className="eyebrow">Friday, April 23rd</p>
        <h1>Wedding Rehearsal</h1>

        <p>
          Review the setup, rehearsal, and dinner schedule for
          Friday evening.
        </p>
      </section>

      <section className="timeline">
        {sortedEvents.map((item) => (
          <WeddingTimelineItem
            key={item.id}
            item={item}
          />
        ))}
      </section>
    </>
  );
}

export default Rehearsal;