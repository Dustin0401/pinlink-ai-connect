import { Card } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: "💰",
      title: "Cost Efficiency",
      subtitle: "Reduced Infrastructure Costs",
      description: "Dramatically lower costs for AI developers through our distributed network of tokenized assets, reducing infrastructure overhead by up to 70%."
    },
    {
      icon: "⚡",
      title: "Performance",
      subtitle: "Optimized Network of DePIN Assets",
      description: "Access high-performance distributed infrastructure specifically optimized for AI workloads with guaranteed uptime and low latency."
    },
    {
      icon: "🔗",
      title: "Integration",
      subtitle: "The RWA-tokenized DePIN integration",
      description: "Seamlessly integrate real-world assets into your DePIN infrastructure through our innovative tokenization protocol and marketplace."
    }
  ];

  return (
    <section className="py-24 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-card-border p-8 hover:bg-card-hover transition-all duration-300 group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <h4 className="text-primary font-semibold mb-4">
                {feature.subtitle}
              </h4>
              <p className="text-foreground-muted leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;