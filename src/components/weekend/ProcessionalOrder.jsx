import processional from "../../data/processional";

function ProcessionalOrder() {
  return (
    <section className="wedding-day-section processional-section">
      <div className="home-section-heading">
        <p className="eyebrow">Ceremony Entrance</p>
        <h2>Processional Order</h2>

        <p>
          Please line up in the following order before the ceremony.
          The wedding coordinator will let each person know when it
          is time to walk.
        </p>
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

      <div className="processional-note">
        <p className="eyebrow">A Quick Reminder</p>

        <h3>Walk slowly and leave plenty of space.</h3>

        <p>
          Wait until the people ahead of you have reached the
          appropriate point in the aisle before beginning your
          entrance.
        </p>
      </div>
    </section>
  );
}

export default ProcessionalOrder;