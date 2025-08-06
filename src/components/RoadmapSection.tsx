import { Card } from "@/components/ui/card";

const RoadmapSection = () => {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Foundation & MVP",
      timeframe: "Q1 2024",
      status: "Completed",
      items: [
        "Core tokenization protocol development",
        "Initial DePIN asset integration",
        "Basic marketplace functionality",
        "Smart contract audit and deployment"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Network Expansion",
      timeframe: "Q2-Q3 2024",
      status: "In Progress",
      items: [
        "Multi-chain asset support",
        "Advanced trading features",
        "Governance token launch",
        "Strategic partnerships with hardware providers"
      ]
    },
    {
      phase: "Phase 3",
      title: "AI Integration",
      timeframe: "Q4 2024",
      status: "Upcoming",
      items: [
        "AI workload optimization engine",
        "Predictive analytics for asset performance",
        "Automated yield farming strategies",
        "Enterprise API and SDK release"
      ]
    },
    {
      phase: "Phase 4",
      title: "Global Scale",
      timeframe: "2025",
      status: "Future",
      items: [
        "Worldwide infrastructure network",
        "Institutional investor tools",
        "Advanced derivatives and financial products",
        "Full decentralized autonomous organization (DAO)"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-primary text-primary-foreground";
      case "In Progress":
        return "bg-primary/80 text-primary-foreground";
      case "Upcoming":
        return "bg-card-border text-foreground-muted";
      default:
        return "bg-muted text-foreground-subtle";
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Roadmap
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Our strategic development plan for building the future of DePIN infrastructure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {roadmapItems.map((item, index) => (
            <Card key={index} className="bg-card border-card-border p-6 hover:bg-card-hover transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-primary font-bold text-lg">{item.phase}</div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                    {item.status}
                  </div>
                </div>
                <div className="text-foreground-subtle text-sm">{item.timeframe}</div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {item.title}
              </h3>
              
              <ul className="space-y-2">
                {item.items.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground-muted text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;