import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const visionPoints = [
    {
      title: "Democratizing AI Infrastructure",
      description: "Making enterprise-grade AI infrastructure accessible to developers worldwide through tokenized real-world assets.",
      icon: "🌐"
    },
    {
      title: "Sustainable Economic Model",
      description: "Creating new revenue streams for infrastructure owners while dramatically reducing costs for AI developers.",
      icon: "💰"
    },
    {
      title: "Global Network Effect",
      description: "Building the largest decentralized network of AI-optimized infrastructure spanning every continent.",
      icon: "🚀"
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "Foundation",
      description: "Core protocol development and initial network deployment",
      status: "completed"
    },
    {
      year: "2025",
      title: "Expansion",
      description: "Global network scaling and enterprise partnerships",
      status: "active"
    },
    {
      year: "2026",
      title: "Maturity",
      description: "Industry-standard adoption and ecosystem leadership",
      status: "upcoming"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Our{" "}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
              Vision
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-foreground-muted max-w-4xl mx-auto leading-relaxed"
          >
            We envision a world where AI development is not limited by infrastructure costs or accessibility, 
            but empowered by a truly decentralized, efficient, and sustainable network.
          </motion.p>
        </motion.div>

        {/* Vision Points */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {visionPoints.map((point, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-card border-card-border p-8 h-full text-center group hover:bg-card-hover transition-all duration-500 relative overflow-hidden">
                <div className="relative z-10">
                  <motion.div 
                    className="text-6xl mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {point.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{point.title}</h3>
                  <p className="text-foreground-muted leading-relaxed">{point.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Roadmap to the Future
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-card-border"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="bg-card border-card-border p-6">
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <div className={`w-3 h-3 rounded-full ${
                          milestone.status === 'completed' ? 'bg-primary' :
                          milestone.status === 'active' ? 'bg-primary-glow animate-pulse' :
                          'bg-muted'
                        }`}></div>
                        <span className="text-2xl font-bold text-primary font-mono">{milestone.year}</span>
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-2">{milestone.title}</h4>
                      <p className="text-foreground-muted text-sm">{milestone.description}</p>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="bg-card border-card-border rounded-2xl p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Be Part of the Revolution
            </h3>
            <p className="text-foreground-muted mb-8 leading-relaxed">
              Join thousands of developers, investors, and visionaries who are building 
              the future of decentralized AI infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary-glow transition-all shadow-glow"
              >
                Join Our Community
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-card-border text-foreground font-semibold rounded-lg hover:bg-card-hover transition-all"
              >
                Read Whitepaper
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;