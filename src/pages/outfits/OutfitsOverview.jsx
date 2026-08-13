import HomeCard from "../../components/HomeCard";

const weekendCards = [
  {
    title: "Outfit Requirements",
    description:
      "Find your outfit here!",
    path: "/outfits/requirements",
  },
  {
    title: "Selected Outfits",
    description:
      "See what the others have chosen to wear!",
    path: "/outfits/selected",
  },
];

function OutfitsOverview() {
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

export default OutfitsOverview;