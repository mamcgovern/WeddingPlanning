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

      <section className="wedding-day-closing">
        <div>
          <p className="eyebrow">The Most Important Part</p>
          <h2>Be Present and Enjoy the Day</h2>

          <p>
            We are so thankful to have each of you beside us as we
            celebrate.
          </p>
        </div>
      </section>
    </main>
  );
}

export default WeddingDay;