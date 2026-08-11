import Countdown from "../components/Countdown";
import HomeCard from "../components/HomeCard";
import HomeHero from "../components/HomeHero";
import timelineData from "../data/timeline";
import {
    formatDate,
    getNextTimelineItem,
} from "../utils/dateUtils";

const homeCards = [
    {
        title: "Find Your Outfit",
        description:
            "Find your assigned attire, dress or suit options, shoes, and purchase links.",
        path: "/outfits",
    },
    {
        title: "Task Timeline",
        description:
            "Review important deadlines for ordering, exchanges, accessories, and alterations.",
        path: "/timeline",
    },
    {
        title: "Wedding Weekend",
        description:
            "See the rehearsal schedule, wedding-day timeline, locations, and music.",
        path: "/weekend",
    },
];

const weddingDate = "2027-04-24T15:00:00";

function Home() {
    const nextItem = getNextTimelineItem(timelineData);

    return (
        <main className="home">
            <HomeHero />

            <section id="up-next" className="home-next">
                <div className="home-section-heading">
                    <p className="eyebrow">Coming Up</p>
                    <h2>What’s Next?</h2>
                </div>

                <div className="home-next__card">
                    {nextItem ? (
                        <>
                            <div className="home-next__details">
                                <span className="home-next__label">
                                    {nextItem.type === "task"
                                        ? "Next Deadline"
                                        : "Next Event"}
                                </span>

                                <h3>{nextItem.title}</h3>

                                <time dateTime={nextItem.date}>
                                    {formatDate(nextItem.date)}
                                </time>

                                <p>{nextItem.description}</p>
                            </div>

                            <div className="home-next__countdown">
                                <p>Countdown</p>
                                <Countdown targetDate={nextItem.date} />
                            </div>
                        </>
                    ) : (
                        <div className="home-next__finished">
                            <h3>We’re married!</h3>
                            <p>Thank you for celebrating with us.</p>
                        </div>
                    )}
                </div>
            </section>

            <section className="home-information">
                <div className="home-section-heading">
                    <p className="eyebrow">Wedding Party Guide</p>
                    <h2>Everything You Need</h2>
                    <p>
                        Find your outfit, keep track of important deadlines,
                        and review the plans for the wedding weekend.
                    </p>
                </div>

                <div className="home-card-grid">
                    {homeCards.map((card) => (
                        <HomeCard
                            key={card.path}
                            title={card.title}
                            description={card.description}
                            path={card.path}
                        />
                    ))}
                </div>
            </section>

            <section className="home-reminder">
                <div>
                    <p className="eyebrow">April 24th, 2027</p>
                    <h2>We Can’t Wait to Celebrate With You</h2>
                    <p>
                        Thank you for being such an important part of our
                        wedding weekend.
                    </p>
                    <Countdown targetDate={weddingDate} />
                </div>
            </section>
        </main>
    );
}

export default Home;