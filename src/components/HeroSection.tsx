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
          
          {/* Hero Image/Dashboard Preview */}
          <div className="relative mt-12">
            <div className="bg-card border border-card-border rounded-2xl p-6 shadow-card backdrop-blur-sm max-w-4xl mx-auto">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-card-border">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">P</span>
                  </div>
                  <span className="text-foreground font-semibold">PinLink Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-foreground-muted text-sm">Live Network</span>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="aspect-video bg-background-secondary rounded-xl border border-card-border p-6">
                <div className="grid grid-cols-3 gap-6 h-full">
                  {/* Network Stats */}
                  <div className="space-y-4">
                    <h4 className="text-foreground text-sm font-medium">Network Statistics</h4>
                    <div className="space-y-3">
                      <div className="bg-card rounded-lg p-3">
                        <div className="text-primary text-xl font-bold">10,594</div>
                        <div className="text-foreground-muted text-xs">Active Nodes</div>
                      </div>
                      <div className="bg-card rounded-lg p-3">
                        <div className="text-primary text-xl font-bold">$2.4M</div>
                        <div className="text-foreground-muted text-xs">TVL</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual Element */}
                  <div className="flex items-center justify-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-glow animate-glow-pulse">
                        <span className="text-primary-foreground font-bold">⚡</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Performance Metrics */}
                  <div className="space-y-4">
                    <h4 className="text-foreground text-sm font-medium">Performance</h4>
                    <div className="space-y-3">
                      <div className="bg-card rounded-lg p-3">
                        <div className="text-primary text-xl font-bold">99.9%</div>
                        <div className="text-foreground-muted text-xs">Uptime</div>
                      </div>
                      <div className="bg-card rounded-lg p-3">
                        <div className="text-primary text-xl font-bold">42ms</div>
                        <div className="text-foreground-muted text-xs">Latency</div>
                      </div>
                    </div>
                  </div>
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