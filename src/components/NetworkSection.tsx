import { Card } from "@/components/ui/card";

const NetworkSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How PinLink Network Works
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Our revolutionary approach to DePIN infrastructure combines real-world asset tokenization 
            with AI-optimized distributed computing.
          </p>
        </div>

        {/* Network Diagram */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="bg-card border border-card-border rounded-2xl p-8 shadow-card">
            {/* Central Hub */}
            <div className="flex items-center justify-center mb-8">
              <div className="bg-primary rounded-2xl p-6 shadow-glow">
                <div className="w-12 h-12 bg-primary-foreground rounded-xl flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">P</span>
                </div>
              </div>
            </div>
            
            {/* Network Nodes Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "GPU Nodes", count: "2,847", type: "Computing" },
                { label: "Storage Nodes", count: "1,234", type: "Data" },
                { label: "CDN Nodes", count: "5,621", type: "Delivery" },
                { label: "AI Nodes", count: "892", type: "Processing" }
              ].map((node, index) => (
                <Card key={index} className="bg-background-secondary border-card-border p-4 text-center hover:bg-card-hover transition-all">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{node.label}</h4>
                  <p className="text-primary font-bold text-lg">{node.count}</p>
                  <p className="text-foreground-subtle text-xs">{node.type}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              metric: "70%",
              label: "Cost Reduction",
              description: "Vs Traditional Cloud"
            },
            {
              metric: "99.9%",
              label: "Uptime SLA",
              description: "Guaranteed Availability"
            },
            {
              metric: "<50ms",
              label: "Latency",
              description: "Global Edge Network"
            },
            {
              metric: "24/7",
              label: "Support",
              description: "Enterprise Grade"
            }
          ].map((benefit, index) => (
            <Card key={index} className="bg-card border-card-border p-6 text-center hover:bg-card-hover transition-all">
              <div className="text-3xl font-bold text-primary mb-2">{benefit.metric}</div>
              <div className="font-semibold text-foreground mb-1">{benefit.label}</div>
              <div className="text-sm text-foreground-muted">{benefit.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;