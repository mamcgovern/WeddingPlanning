function SpotifyPlaylist() {
  return (
    <iframe
      data-testid="embed-iframe"
      style={{ borderRadius: "12px" }}
      src="https://open.spotify.com/embed/playlist/0cj8eKUb1MvUOsDQjH40sp?utm_source=generator&si=82bd87b5d58c4ad9"
      width="100%"
      height="352"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="Spotify Playlist"
    />
  );
}

export default SpotifyPlaylist;