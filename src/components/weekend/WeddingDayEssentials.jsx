import weddingDayEssentials from "../../data/weddingDayEssentials";

function WeddingDayEssentials() {
  return (
    <section className="wedding-day-section wedding-day-essentials">
      <div className="home-section-heading">
        <p className="eyebrow">Come Prepared</p>
        <h2>Wedding Day Essentials</h2>
      </div>

      <div className="essentials-grid">
        {weddingDayEssentials.map((essential) => (
          <article
            className="essentials-card"
            key={essential.id}
          >
            <h3>{essential.title}</h3>

            <ul>
              {essential.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WeddingDayEssentials;