import timelineData from "../data/timeline";

function Timeline() {
  return (
    <main>
      <h1>Wedding Party Timeline</h1>

      {timelineData.map((item) => (
        <section key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.date}</p>
          <p>{item.description}</p>
        </section>
      ))}
    </main>
  );
}

export default Timeline;