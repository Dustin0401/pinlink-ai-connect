import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden pt-32">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline - Simplified */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 leading-tight"
          >
            The First{" "}
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-primary bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse"
            >
              RWA-Tokenized DePIN
            </motion.span>{" "}
            marketplace for{" "}
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-primary bg-gradient-primary bg-clip-text text-transparent"
            >
              AI Developers
            </motion.span>
          </motion.h1>
          
          {/* Subtitle - Simplified */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-xl md:text-2xl text-foreground-muted mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Driving down costs and creating new revenue streams through tokenized infrastructure.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary-glow transition-all shadow-glow px-8 py-6 text-lg font-semibold"
              >
                Start Building
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-card-border text-foreground hover:bg-card-hover px-8 py-6 text-lg font-semibold"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Hero Image/Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="relative mt-12"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;