import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-foreground mb-6 leading-tight">
            The First{" "}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">
              RWA-Tokenized DePIN
            </span>{" "}
            marketplace driving down costs for{" "}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
              AI Developers
            </span>{" "}
            and creating new revenue for asset owners.
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground-muted mb-12 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing the intersection of AI and decentralized infrastructure 
            through innovative tokenization and marketplace dynamics.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary-glow transition-all shadow-glow px-8 py-6 text-lg font-semibold"
            >
              Start Building
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-card-border text-foreground hover:bg-card-hover px-8 py-6 text-lg font-semibold"
            >
              Learn More
            </Button>
          </div>
          
          {/* Hero Image/Graphic Placeholder */}
          <div className="relative">
            <div className="bg-card border border-card-border rounded-2xl p-8 shadow-card backdrop-blur-sm">
              <div className="aspect-video bg-background-secondary rounded-xl flex items-center justify-center border border-card-border">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <span className="text-2xl font-bold text-primary-foreground">⚡</span>
                  </div>
                  <p className="text-foreground-muted text-sm">
                    DePIN Network Visualization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;