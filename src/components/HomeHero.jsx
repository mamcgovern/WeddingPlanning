import coupleOne from "../assets/home/engagement-photo-1.jpg";
import coupleTwo from "../assets/home/engagement-photo-2.jpg";
import coupleThree from "../assets/home/engagement-photo-3.jpg";
import coupleFour from "../assets/home/engagement-photo-4.jpg";

const photos = [
  { src: coupleOne, alt: "Maddie and Nick together" },
  { src: coupleTwo, alt: "Maddie and Nick together" },
  { src: coupleThree, alt: "Maddie and Nick together" },
  { src: coupleFour, alt: "Maddie and Nick together" },
];

function HomeHero() {
  return (
    <header className="home-hero">
      <div className="home-hero__photos" aria-hidden="true">
        {photos.map((photo) => (
          <img
            key={photo.src}
            src={photo.src}
            alt=""
            className="home-hero__photo"
          />
        ))}
      </div>

      <div className="home-hero__overlay" />

      <div className="home-hero__content">
        <p className="home-hero__eyebrow">
          Wedding Party Guide
        </p>

        <h1>Nick & Maddie</h1>

        <p className="home-hero__date">
          April 24th, 2027
        </p>

        <a className="home-hero__button" href="#up-next">
          See What’s Next
        </a>
      </div>
    </header>
  );
}

export default HomeHero;