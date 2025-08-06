const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        "Marketplace",
        "Tokenization",
        "AI Workloads",
        "Infrastructure",
        "Analytics"
      ]
    },
    {
      title: "Developers",
      links: [
        "Documentation", 
        "API Reference",
        "SDK Downloads",
        "Code Examples",
        "Github"
      ]
    },
    {
      title: "Resources",
      links: [
        "Whitepaper",
        "Blog",
        "Case Studies",
        "Community",
        "Support"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Press Kit",
        "Contact",
        "Privacy Policy"
      ]
    }
  ];

  return (
    <footer className="bg-background-tertiary border-t border-card-border">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold text-foreground">PinLink</span>
            </div>
            <p className="text-foreground-muted text-sm mb-6 max-w-xs">
              Your Gateway To Tokenized Compute Power. Revolutionizing DePIN infrastructure through innovative RWA tokenization.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-card-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <span className="text-sm">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 bg-card-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <span className="text-sm">📧</span>
              </a>
              <a href="#" className="w-10 h-10 bg-card-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <span className="text-sm">💬</span>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-foreground-muted hover:text-primary transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-card-border pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Stay Updated</h3>
              <p className="text-foreground-muted text-sm">Get the latest updates on DePIN innovation and tokenization.</p>
            </div>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-card border border-card-border rounded-lg px-4 py-2 text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary-glow transition-all font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground-subtle text-sm">
            © 2024 PinLink. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-foreground-subtle hover:text-foreground text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-foreground-subtle hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground-subtle hover:text-foreground text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;