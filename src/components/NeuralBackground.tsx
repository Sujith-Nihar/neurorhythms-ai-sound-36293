const NeuralBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-neural-teal/5" />
      
      {/* Multiple animated wave lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-wave" />
        <div className="absolute top-1/4 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-wave" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-wave" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent animate-wave" style={{ animationDelay: "2s" }} />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-wave" style={{ animationDelay: "4s" }} />
        <div className="absolute top-3/4 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-wave" style={{ animationDelay: "5s" }} />
        <div className="absolute top-5/6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent animate-wave" style={{ animationDelay: "6s" }} />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>
      
      {/* Enhanced glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "3s" }} />
    </div>
  );
};

export default NeuralBackground;
