import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-foreground">PinLink</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground-muted hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-foreground-muted hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="text-foreground-muted hover:text-primary transition-colors">
              Services
            </a>
            <a href="#" className="text-foreground-muted hover:text-primary transition-colors">
              Roadmap
            </a>
            <a href="#" className="text-foreground-muted hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          
          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:inline-flex border-border text-foreground hover:bg-card-hover">
              Login
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary-glow transition-all">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;