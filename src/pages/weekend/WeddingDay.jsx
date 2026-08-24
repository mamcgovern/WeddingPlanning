import ProcessionalOrder from "../../components/weekend/ProcessionalOrder";
import WeddingDayEssentials from "../../components/weekend/WeddingDayEssentials";
import WeddingDayTimeline from "../../components/weekend/WeddingDayTimeline";

function WeddingDay() {
  return (
    <main className="wedding-day-page">
      <section className="page-intro wedding-day-intro">
        <p className="eyebrow">April 24th, 2027</p>
        <h1>Wedding Day</h1>

        <p>
          Everything the wedding party needs to know about the
          schedule and ceremony processional.
        </p>
      </section>

      <WeddingDayTimeline />

      <WeddingDayEssentials />

      <ProcessionalOrder />

      <section className="rehearsal-overnight">
        <div>
          <p className="eyebrow">Staying at the Venue</p>
          <h2>Overnight Information</h2>

          <p>
            Some members of the wedding party will stay in the
            house at the venue during the wedding weekend.
          </p>

          <p className="rehearsal-overnight__status">
            Room assignments and additional details are coming later.
          </p>
        </div>
      </section>

    </main>
  );
}

export default WeddingDay;