import WeddingTimelineItem from "./WeddingTimelineItem";
import rehearsalData from "../../data/rehearsal";

function Rehearsal() {
    const sortedEvents = [...rehearsalData].sort((a, b) => {
        if (a.startTime && b.startTime) {
            return new Date(a.startTime) - new Date(b.startTime);
        }

        if (a.startTime) {
            return -1;
        }

        if (b.startTime) {
            return 1;
        }

        return a.id - b.id;
    });

    return (
        <>
            <section className="page-intro">
                <div className="home-section-heading">
                    <p className="eyebrow">Friday Evening</p>
                    <h2>Rehearsal Timeline</h2>
                </div>
            </section>

            <section className="timeline">
                {sortedEvents.map((item) => (
                    <WeddingTimelineItem
                        key={item.id}
                        item={item}
                    />
                ))}
            </section>
        </>
    );
}

export default Rehearsal;