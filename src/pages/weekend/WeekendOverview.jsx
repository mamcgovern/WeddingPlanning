import HomeCard from "../../components/HomeCard";

const weekendCards = [
  {
    title: "Wedding Rehearsal",
    description:
      "Review the rehearsal schedule, location, attire, and dinner details.",
    path: "/weekend/rehearsal",
  },
  {
    title: "Wedding Day",
    description:
      "See arrival times, preparation schedules, photos, ceremony details, and reception events.",
    path: "/weekend/wedding-day",
  },
  {
    title: "Music",
    description:
      "Preview the songs planned for the ceremony and reception.",
    path: "/weekend/music",
  },
];

function WeekendOverview() {
  return (
    <>
      <section className="page-intro">
        <p className="eyebrow">April 23rd–24th, 2027</p>
        <h1>Wedding Weekend</h1>
        <p>
          Find schedules, locations, music, and everything else
          you need for the wedding weekend.
        </p>
      </section>

      <section className="weekend-card-grid">
        {weekendCards.map((card) => (
          <HomeCard
            key={card.path}
            title={card.title}
            description={card.description}
            path={card.path}
          />
        ))}
      </section>
    </>
  );
}

export default WeekendOverview;