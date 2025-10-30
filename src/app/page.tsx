import { Music, ExternalLink, Scroll } from "lucide-react";

const Home = () => {
  return (
    <div className="max-w-3xl w-full glass-card rounded-2xl p-8 hover-glow animate-fade-in">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-extrabold mb-2 gradient-text animate-scale-in">
          Your Love
        </h1>
        <h2 className="text-lg text-muted-foreground mb-8">
          Song by <span className="text-foreground">The Outfield</span>
        </h2>
        <a
          href="https://www.youtube.com/watch?v=4N1iwQxiHrs"
          target="_blank"
          rel="noopener noreferrer"
          title="Go to the official video"
          className="group mb-8 animate-scale-in"
        >
          <div className="relative">
            <img
              src="/imagem/album_art.jpeg" 
              alt="Your Love album art - The Outfield"
              width={300}
              height={300}
              className="rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-xl transition-opacity duration-300">
              <span className="text-sm font-medium text-white bg-primary/90 px-4 py-2 rounded-lg shadow-lg">
                ▶ Watch Video
              </span>
            </div>
          </div>
        </a>
        <audio
          controls
          className="w-full mb-8 rounded-lg"
          aria-label="Audio player for Your Love by The Outfield"
        >
          <source
      
            src="/audio/the_outfield_your_love_mp3_3044.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
        <div className="w-full glass-card rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
            <Music className="w-5 h-5 text-primary" />
            About This Song
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            "Your Love" is a classic 80s rock anthem by The Outfield, released in
            1985. This timeless hit features memorable guitar riffs and catchy
            melodies that defined an era.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* 7. SUBSTITUÍDO o <Button> por um link <a> estilizado */}
            <a
              href="https://genius.com/The-outfield-your-love-lyrics"
              target="_blank"
              rel="noopener noreferrer"
              // Classes do Tailwind para simular o botão "outline"
              className="flex-1 inline-flex items-center justify-center h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md text-sm font-medium transition-colors"
            >
              <Scroll className="w-4 h-4 mr-2" />
              View Lyrics
            </a>

            {/* 8. SUBSTITUÍDO o <Button> por um link <a> estilizado */}
            <a
              href="https://open.spotify.com/intl-pt/track/5dRQUolXAVX3BbCiIxmSsf"
              target="_blank"
              rel="noopener noreferrer"
              // Classes do Tailwind para simular o botão "primary"
              className="flex-1 inline-flex items-center justify-center h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md text-sm font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Listen on Spotify
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;