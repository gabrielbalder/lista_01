import { ExternalLink, Music } from "lucide-react";

interface MusicPlayerProps {
  title: string;
  artist: string;
  albumArtSrc: string;
  audioSrc: string;
  videoUrl: string;
}

export const MusicPlayer = ({
  title,
  artist,
  albumArtSrc,
  audioSrc,
  videoUrl,
}: MusicPlayerProps) => {
  return (
    <div className="max-w-3xl w-full glass-card rounded-2xl shadow-2xl p-8 transition-all duration-300 hover:border-white/20 animate-scale-in">
      <div className="flex flex-col items-center text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-extrabold mb-3 gradient-text animate-fade-in">
            {title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground">
            <Music className="w-5 h-5" />
            <span>Song by</span>
            <span className="text-foreground font-medium">{artist}</span>
          </div>
        </div>

        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Watch the official music video"
          className="group mb-8 relative block"
        >
          <div className="relative overflow-hidden rounded-2xl hover-glow">
            <img
              src={albumArtSrc}
              alt={`${title} album artwork`}
              className="w-64 h-64 object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-2xl transition-all duration-300">
              <div className="flex items-center gap-2 text-white bg-primary/90 px-4 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm font-semibold">Watch Video</span>
              </div>
            </div>
          </div>
        </a>

        <div className="w-full mb-8">
          <audio controls className="w-full h-12 rounded-lg" style={{ filter: "hue-rotate(290deg) saturate(1.5)" }}>
            <source src={audioSrc} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-8" />

        <div className="glass-card rounded-xl p-6 w-full">
          <h2 className="text-2xl font-bold mb-4 gradient-text">About This Song</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            "{title}" is a classic rock anthem by {artist}, released in 1985. 
            This iconic track became one of the defining songs of the 80s with its 
            unforgettable melody and heartfelt lyrics about secret romance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(title + ' ' + artist + ' lyrics')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              View Full Lyrics
            </a>
            <a
              href={`https://open.spotify.com/search/${encodeURIComponent(title + ' ' + artist)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 glass-card hover:bg-white/20 rounded-lg transition-all duration-300 font-medium"
            >
              <Music className="w-4 h-4" />
              Listen on Spotify
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
