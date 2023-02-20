import YouTube from 'react-youtube';

export default function YoutubePlayer({ videoId, options }) {
  return (
    <div>
      <YouTube
        videoId={videoId}
        className="youtube-player"
        opts={options}
      />
    </div>
  );
}
