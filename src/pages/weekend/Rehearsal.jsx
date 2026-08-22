import RehearsalTimeline from "../../components/weekend/RehearsalTimeline";

const rehearsalDetails = [
  {
    id: 1,
    label: "Date",
    value: "Friday, April 23rd, 2027",
  },
  {
    id: 2,
    label: "Arrival Time",
    value: "4 PM",
  },
  {
    id: 3,
    label: "Location",
    value: "Windmill Hill Weddings & Events",
  },
  {
    id: 4,
    label: "Attire",
    value: "Dressy Casual",
    description:
      "Sundresses, blouses, polos, button-down shirts, khakis, or dress pants.",
  },
];

const rehearsalAttendees = [
  "Maddie and Nick",
  "Parents and grandparents",
  "Bridesmaids and groomsmen",
  "Maid of honor and best man",
  "Flower girl and ring bearer",
  "Officiant",
];

const rehearsalReminders = [
  {
    id: 1,
    title: "Arrive on Time",
    description:
      "Please plan to arrive a few minutes early so we can begin the rehearsal together.",
  },
  {
    id: 2,
    title: "Know Your Role",
    description:
      "We will practice the ceremony processional, ceremony positions, recessional, and reception entrances so everyone knows where to go.",
  },
  {
    id: 3,
    title: "Ask Questions",
    description:
      "The rehearsal is the best time to clarify anything about the ceremony or wedding-day schedule.",
  },
];

function Rehearsal() {
  return (
    <main className="rehearsal-page">
      <section className="page-intro rehearsal-intro">
        <p className="eyebrow">Friday, April 23rd</p>
        <h1>Wedding Rehearsal</h1>

        <p>
          Everything you need to know before we practice the ceremony
          and begin our wedding weekend together.
        </p>
      </section>

      <section className="rehearsal-overview">
        <div className="home-section-heading">
          <p className="eyebrow">The Details</p>
          <h2>Before You Arrive</h2>

          <p>
            The rehearsal will take place at our wedding venue. Please arrive
            ready to practice the ceremony processional, ceremony positions,
            recessional, and reception entrances.
          </p>
        </div>

        <div className="rehearsal-detail-grid">
          {rehearsalDetails.map((detail) => (
            <article
              className="rehearsal-detail-card"
              key={detail.id}
            >
              <p>{detail.label}</p>
              <h3>{detail.value}</h3>

              {detail.description && (
                <span className="rehearsal-detail-card__description">
                  {detail.description}
                </span>
              )}
            </article>
          ))}
        </div>

        <div className="card-btn-container">
          <a
            href="https://maps.app.goo.gl/Wc4rUgvHspzAmapK9"
            target="_blank"
            rel="noreferrer"
            className="card-btn"
          >
            View Directions
          </a>
        </div>
      </section>

      <RehearsalTimeline />

      <section className="rehearsal-attendance">
        <div className="rehearsal-attendance__content">
          <p className="eyebrow">Who Should Attend</p>
          <h2>Rehearsal Attendance</h2>

          <p>
            Anyone participating in the ceremony or processional
            should attend.
          </p>

          <ul className="rehearsal-attendance__list">
            {rehearsalAttendees.map((attendee) => (
              <li key={attendee}>{attendee}</li>
            ))}
          </ul>
        </div>

        <div className="rehearsal-attendance__note">
          <p className="eyebrow">Please Plan Accordingly</p>
          <h3>Attendance is expected.</h3>

          <p>
            Everyone participating in the ceremony should attend the
            rehearsal.
          </p>
          <p>
            Your plus-one is also welcome to attend the rehearsal as long as
            they RSVP in advance.
          </p>
        </div>
      </section>

      <section className="rehearsal-dinner">
        <div className="home-section-heading">
          <p className="eyebrow">After We Practice</p>
          <h2>Rehearsal Dinner</h2>

          <p>
            After the rehearsal, we will head to dinner.
          </p>
        </div>

        <div className="rehearsal-dinner__card">
          <div>
            <p className="rehearsal-dinner__label">Location</p>
            <h3>Manchester Pizza Ranch</h3>
          </div>

          <div>
            <p className="rehearsal-dinner__label">Dinner Time</p>
            <h3>6 PM - 8 PM</h3>
          </div>

          <div>
            <p className="rehearsal-dinner__label">Attire</p>
            <h3>Dressy Casual</h3>
            <p className="rehearsal-dinner__note">Sundresses, blouses, polos, button-down shirts, khakis, or dress pants.</p>
          </div>
        </div>
      </section>

      <section className="rehearsal-reminders">
        <div className="home-section-heading">
          <p className="eyebrow">A Few Reminders</p>
          <h2>What to Expect</h2>

          <p>
            The rehearsal is meant to make everyone feel comfortable
            and prepared for the ceremony.
          </p>
        </div>

        <div className="rehearsal-reminder-grid">
          {rehearsalReminders.map((reminder) => (
            <article
              className="rehearsal-reminder-card"
              key={reminder.id}
            >
              <span aria-hidden="true">{reminder.id}</span>
              <h3>{reminder.title}</h3>
              <p>{reminder.description}</p>
            </article>
          ))}
        </div>
      </section>

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

export default Rehearsal;