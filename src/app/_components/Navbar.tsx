import { Music } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="w-full glass-card border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Music className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold gradient-text">Music Player</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="/"
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </a>
          <a
            href="/playlist"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Playlist
          </a>
          <a
            href="/about"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
};
