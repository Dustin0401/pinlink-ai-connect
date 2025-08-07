import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const InvestmentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const fundingTiers = [
    {
      name: "Seed Round",
      status: "Completed",
      raised: "$2.5M",
      valuation: "$15M",
      investors: "25+ VCs",
      completion: 100
    },
    {
      name: "Series A",
      status: "Active",
      target: "$10M",
      valuation: "$50M",
      investors: "Strategic Partners",
      completion: 65
    },
    {
      name: "Public Sale",
      status: "Upcoming",
      target: "$25M",
      valuation: "TBA",
      investors: "Community",
      completion: 0
    }
  ];

  const useOfFunds = [
    { category: "Technology Development", percentage: 45, amount: "$18M" },
    { category: "Marketing & Growth", percentage: 25, amount: "$10M" },
    { category: "Operations & Team", percentage: 20, amount: "$8M" },
    { category: "Legal & Compliance", percentage: 10, amount: "$4M" }
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
    <section ref={ref} className="py-24 bg-background-secondary">
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
            Funding{" "}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
              Roadmap
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed"
          >
            Join us in building the future of decentralized AI infrastructure through strategic investment rounds.
          </motion.p>
        </motion.div>

        {/* Funding Rounds */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {fundingTiers.map((tier, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-card border-card-border p-8 h-full relative overflow-hidden group hover:bg-card-hover transition-all duration-300">
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      tier.status === 'Completed' ? 'bg-primary/20 text-primary' :
                      tier.status === 'Active' ? 'bg-primary-glow/20 text-primary-glow' :
                      'bg-muted text-foreground-muted'
                    }`}>
                      {tier.status}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">
                        {tier.raised || tier.target}
                      </div>
                      <div className="text-sm text-foreground-muted">
                        {tier.raised ? 'Raised' : 'Target'}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-lg font-semibold text-foreground mb-1">
                        {tier.valuation}
                      </div>
                      <div className="text-sm text-foreground-muted">Valuation</div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-foreground-muted mb-2">Progress</div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div 
                          className="bg-primary h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${tier.completion}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                        ></motion.div>
                      </div>
                      <div className="text-xs text-foreground-muted mt-1">{tier.completion}% Complete</div>
                    </div>
                    
                    <div className="pt-2">
                      <div className="text-sm font-medium text-foreground">{tier.investors}</div>
                      <div className="text-xs text-foreground-muted">Investor Type</div>
                    </div>
                  </div>
                </div>
                
                {/* Background Effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Use of Funds */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Use of Funds</h3>
            <div className="space-y-6">
              {useOfFunds.map((fund, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{fund.category}</span>
                    <span className="text-primary font-semibold">{fund.amount}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <motion.div 
                      className="bg-primary h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${fund.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.8 }}
                    ></motion.div>
                  </div>
                  <div className="text-sm text-foreground-muted">{fund.percentage}% of total funding</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border-card-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Investment Opportunity</h3>
            <div className="space-y-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">$40M+</div>
                <div className="text-foreground-muted">Total Funding Target</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xl font-bold text-foreground">24 Months</div>
                  <div className="text-sm text-foreground-muted">Development Timeline</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-foreground">Q2 2025</div>
                  <div className="text-sm text-foreground-muted">Public Launch</div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-card-border">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary-glow transition-all shadow-glow">
                  Join Investment Round
                </Button>
                <p className="text-xs text-foreground-muted mt-3 text-center">
                  Accredited investors only. Terms and conditions apply.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentSection;