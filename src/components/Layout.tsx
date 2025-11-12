import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Brain, Music } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Brain className="w-8 h-8 text-primary animate-pulse-glow" />
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
              </div>
              <span className="text-2xl font-bold bg-gradient-neural bg-clip-text text-transparent">
                NeuroRhythms
              </span>
            </Link>
            
            <div className="flex items-center gap-8">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors ${
                  isActive("/") 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Home
              </Link>
              <Link
                to="/music"
                className={`text-sm font-medium transition-colors ${
                  isActive("/music") 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Music Library
              </Link>
              <Link
                to="/science"
                className={`text-sm font-medium transition-colors ${
                  isActive("/science") 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Science
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium transition-colors ${
                  isActive("/about") 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="pt-20">
        {children}
      </main>
      
      <footer className="border-t border-border/40 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 NeuroRhythms — Music Backed by Neuroscience</p>
          <p className="mt-2">Created with MusicGPT & Lovable</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
