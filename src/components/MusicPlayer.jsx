import { useRef, useState } from "react";

function MusicPlayer({ audioSrc, title }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  async function togglePlayback() {
    const audio = audioRef.current;

    if (!audio || hasError) {
      return;
    }

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (error) {
      console.error(`Could not play "${title}":`, error);
      setHasError(true);
    }
  }

  return (
    <div className="music-player music-player--simple">
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onError={() => {
          console.error(`Audio file could not be loaded: ${audioSrc}`);
          setHasError(true);
          setIsPlaying(false);
        }}
      />

      <button
        className="music-player__button"
        type="button"
        onClick={togglePlayback}
        disabled={hasError}
        aria-label={`${isPlaying ? "Pause" : "Play"} ${title}`}
      >
        <span aria-hidden="true">
          {isPlaying ? "❚❚" : "▶"}
        </span>
      </button>

      {hasError && (
        <span className="music-player__error">
          Audio unavailable
        </span>
      )}
    </div>
  );
}

export default MusicPlayer;