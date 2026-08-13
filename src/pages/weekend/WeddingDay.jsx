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

    </main>
  );
}

export default WeddingDay;