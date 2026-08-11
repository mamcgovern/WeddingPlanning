import WeddingTimelineItem from "../../components/WeddingTimelineItem";
import weddingDayData from "../../data/weddingDay";

const typeOrder = {
  "Getting Ready": 1,
  Ceremony: 2,
  "Cocktail Hour": 3,
  Reception: 4,
};

function WeddingDay() {
  const sortedEvents = [...weddingDayData].sort((a, b) => {
    const typeDifference =
      (typeOrder[a.type] ?? 999) -
      (typeOrder[b.type] ?? 999);

    // Sort by event type first
    if (typeDifference !== 0) {
      return typeDifference;
    }

    // Sort known times chronologically within each type
    if (a.startTime && b.startTime) {
      return new Date(a.startTime) - new Date(b.startTime);
    }

    // Keep events with known times before TBD events
    if (a.startTime && !b.startTime) {
      return -1;
    }

    if (!a.startTime && b.startTime) {
      return 1;
    }

    // Preserve the intended order when both times are TBD
    return a.id - b.id;
  });

  return (
    <>
      <section className="page-intro">
        <p className="eyebrow">
          Saturday, April 24th
        </p>

        <h1>Wedding Day</h1>

        <p>
          This schedule is subject to change.
          A complete schedule will be available closer to the big day.
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

export default WeddingDay;