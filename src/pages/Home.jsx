import Countdown from "../components/Countdown";
import HomeCard from "../components/HomeCard";
import timelineData from "../data/timeline";
import {
    formatDate,
    getNextTimelineItem,
} from "../utils/dateUtils";

const homeCards = [
    {
        title: "Find Your Outfit",
        description:
            "Find your assigned attire, accessories, and purchase links.",
        path: "/outfits",
    },
    {
        title: "Task Timeline",
        description:
            "Review attire deadlines and everything that needs to be completed.",
        path: "/timeline",
    },
    {
        title: "Wedding Weekend",
        description:
            "See the rehearsal and wedding-day schedules, locations, and details.",
        path: "/weekend",
    },
    {
        title: "Music",
        description:
            "Preview the songs planned for the ceremony and reception.",
        path: "/music",
    },
];

function Home() {
    const nextItem = getNextTimelineItem(timelineData);

    return (
        <main>
            <header>
                <p>Wedding Party Guide</p>
                <h1>Nick & Maddie</h1>
                <p>April 24th, 2027</p>
            </header>

            <section>
                <p>Up Next</p>

                {nextItem ? (
                    <>
                        <h2>{nextItem.title}</h2>

                        <time dateTime={nextItem.date}>
                            {formatDate(nextItem.date)}
                        </time>

                        <Countdown targetDate={nextItem.date} />

                        <p>{nextItem.description}</p>
                    </>
                ) : (
                    <>
                        <h2>We're married!</h2>
                        <p>Thank you for celebrating with us.</p>
                    </>
                )}
            </section>

            <section>
                <p>Everything You Need</p>
                <h2>Wedding Party Information</h2>

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
        </main>
    );
}

export default Home;