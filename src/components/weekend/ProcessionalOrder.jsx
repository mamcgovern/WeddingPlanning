import processional from "../../data/processional";

function ProcessionalOrder() {
  return (
    <section className="wedding-day-section processional-section">
      <div className="home-section-heading">
        <p className="eyebrow">Ceremony Entrance</p>
        <h2>Processional Order</h2>
        This order is subject to change.
      </div>

      <div className="processional-list">
        {processional.map((entry, index) => (
          <article
            className="processional-entry"
            key={entry.id}
          >
            <div
              className="processional-entry__number"
              aria-hidden="true"
            >
              {index + 1}
            </div>

            <div className="processional-entry__content">
              <p className="processional-entry__group">
                {entry.group}
              </p>

              <h3>
                {entry.people.join(" & ")}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProcessionalOrder;