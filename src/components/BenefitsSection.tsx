import { Card } from "@/components/ui/card";

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Bringing the RWA-tokenization dynamics to the{" "}
            <span className="text-primary">DePIN sector</span> achieves several key benefits
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Liquidity Unlocking",
              description: "Transform illiquid physical infrastructure into tradeable digital assets, enabling instant capital access and portfolio optimization."
            },
            {
              title: "Fractional Ownership",
              description: "Enable smaller investors to participate in high-value infrastructure projects through tokenized fractional ownership models."
            },
            {
              title: "Global Accessibility",
              description: "Break down geographical barriers and enable worldwide participation in local infrastructure investments and returns."
            },
            {
              title: "Transparent Governance",
              description: "Implement blockchain-based voting and decision-making processes for infrastructure management and strategic direction."
            },
            {
              title: "Automated Yield Distribution",
              description: "Smart contracts automatically distribute infrastructure revenues to token holders based on their stake and participation."
            },
            {
              title: "Risk Diversification",
              description: "Spread investment risk across multiple asset types and geographical locations through our diversified token portfolio."
            },
            {
              title: "Real-time Asset Monitoring",
              description: "Track infrastructure performance, utilization rates, and revenue generation through our comprehensive dashboard."
            },
            {
              title: "Instant Settlement",
              description: "Execute trades and transfers instantly through blockchain technology, eliminating traditional settlement delays."
            }
          ].map((benefit, index) => (
            <Card key={index} className="bg-card border-card-border p-6 hover:bg-card-hover transition-all duration-300">
              <div className="w-3 h-3 bg-primary rounded-full mb-4"></div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;