import MusicPlayer from "../../components/MusicPlayer";
import SpotifyPlaylist from "../../components/SpotifyPlayer";
import music from "../../data/music";

const musicSections = [
  {
    id: "ceremony",
    title: "Ceremony Music",
    description:
      "Music planned for guest arrival, the ceremony, and guest departure.",
    types: [
      "Prelude",
      "Processional",
      "Bridal Entrance",
      "Unity Ceremony",
      "Recessional",
      "Guests Exit",
    ],
  },
  {
    id: "entrances",
    title: "Reception Entrances",
    description:
      "Entrance songs for the wedding party and newlyweds.",
    types: [
      "Groomsmen Entrance",
      "Bridesmaids Entrance",
      "Grand Entrance",
    ],
  },
  {
    id: "dances",
    title: "Special Dances",
    description:
      "Songs planned for the formal and final dances.",
    types: [
      "First Dance",
      "Anniversary Dance",
      "Final Dance",
      "Private Last Dance",
    ],
  },
  {
    id: "must-play",
    title: "Must-Play Songs",
    description:
      "A few songs that definitely need to make it on the reception playlist.",
    types: ["Must Play"],
  },
];

function Music() {
  return (
    <>
      <section className="page-intro">
        <p className="eyebrow">Wedding Soundtrack</p>
        <h1>Music</h1>

        <p>
          Here is a preview of the music planned for the ceremony and reception.
        </p>

        <div className="music-quick-links">
          <p>Looking for the reception playlist?</p>

          <div className="music-quick-links__actions">
            <a href="#playlist">View the Playlist</a>
            <a href="#song-request">Request a Song</a>
          </div>
        </div>
      </section>

      <section className="music-page">
        {musicSections.map((section) => {
          const sectionSongs = music.filter((song) =>
            section.types.includes(song.type)
          );

          if (sectionSongs.length === 0) {
            return null;
          }

          return (
            <div className="music-section" key={section.id}>
              <div className="music-section__heading">
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </div>

              <div className="music-grid">
                {sectionSongs.map((song) => (
                  <article
                    className={`music-card ${
                      !song.title ? "music-card--tbd" : ""
                    }`}
                    key={song.id}
                  >
                    <p className="music-card__type">{song.type}</p>

                    <h3>{song.title || "Song TBD"}</h3>

                    {song.artist && (
                      <p className="music-card__artist">{song.artist}</p>
                    )}

                    {song.audioSrc && (
                      <MusicPlayer
                        audioSrc={song.audioSrc}
                        title={song.title}
                      />
                    )}
                  </article>
                ))}
              </div>
            </div>
          );
        })}

        <div className="music-section" id="playlist">
          <div className="music-section__heading">
            <h2>Spotify Playlist</h2>
            <p>
              Listen to some of the songs we plan to play throughout the
              reception.
            </p>
          </div>

          <SpotifyPlaylist />
        </div>
      </section>

      <section className="music-request" id="song-request">
        <div className="music-request__heading">
          <p className="eyebrow">Have a Request?</p>
          <h2>Request a Song</h2>
          <p>
            Is there a song you want to hear at the reception? Send us your
            request below!
          </p>
        </div>

        <div className="music-request__form">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSf5c3FqkQ-t4eCjqFuTee1vLPd5VskQLp25uMPmClkPswzrZg/viewform?embedded=true"
            width="100%"
            height="1050"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Wedding Song Request Form"
          >
            Loading…
          </iframe>
        </div>
      </section>
    </>
  );
}

export default Music;