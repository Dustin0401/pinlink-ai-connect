import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TokenomicsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const tokenomicsData = [
    {
      title: "Development & Operations",
      percentage: "40%",
      amount: "400M PINL",
      description: "Platform development, infrastructure scaling, and operational expenses",
      color: "bg-primary"
    },
    {
      title: "Community & Rewards",
      percentage: "25%",
      amount: "250M PINL",
      description: "Node operators, staking rewards, and community incentives",
      color: "bg-primary-glow"
    },
    {
      title: "Ecosystem Growth",
      percentage: "20%",
      amount: "200M PINL",
      description: "Partnerships, integrations, and ecosystem expansion",
      color: "bg-primary-dim"
    },
    {
      title: "Team & Advisors",
      percentage: "10%",
      amount: "100M PINL",
      description: "Core team allocation with 4-year vesting schedule",
      color: "bg-accent"
    },
    {
      title: "Reserve Fund",
      percentage: "5%",
      amount: "50M PINL",
      description: "Strategic reserves for future opportunities",
      color: "bg-muted"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            PINL Token{" "}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
              Tokenomics
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed"
          >
            Our transparent token distribution model designed to drive sustainable growth and reward our community.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pie Chart Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Central Circle */}
              <div className="absolute inset-1/4 bg-card border-2 border-primary/20 rounded-full flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1B</div>
                  <div className="text-sm text-foreground-muted">Total Supply</div>
                  <div className="text-xs text-foreground-subtle mt-1">PINL Tokens</div>
                </div>
              </div>
              
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full border-8 border-primary/10 animate-glow-pulse"></div>
              <div className="absolute inset-2 rounded-full border-4 border-primary/20"></div>
            </div>
          </motion.div>

          {/* Token Distribution */}
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-4"
          >
            {tokenomicsData.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-card border-card-border p-6 hover:bg-card-hover transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{item.percentage}</div>
                      <div className="text-sm text-foreground-muted font-mono">{item.amount}</div>
                    </div>
                  </div>
                  <p className="text-foreground-muted text-sm leading-relaxed ml-7">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Key Metrics */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <Card className="bg-card border-card-border p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">$0.001</div>
            <div className="text-foreground-muted">Initial Token Price</div>
          </Card>
          <Card className="bg-card border-card-border p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">18 Months</div>
            <div className="text-foreground-muted">Vesting Period</div>
          </Card>
          <Card className="bg-card border-card-border p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">5%</div>
            <div className="text-foreground-muted">Annual Inflation Cap</div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenomicsSection;