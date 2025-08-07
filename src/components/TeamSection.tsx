import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      background: "Former Director of Engineering at Google DeepMind",
      experience: "15+ years in distributed systems and AI infrastructure",
      image: "👨‍💼"
    },
    {
      name: "Sarah Williams",
      role: "CTO & Co-Founder",
      background: "Ex-Principal Engineer at OpenAI",
      experience: "12+ years in blockchain and machine learning",
      image: "👩‍💻"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Head of Research",
      background: "PhD in Computer Science from Stanford",
      experience: "10+ years in tokenomics and DeFi protocols",
      image: "👨‍🔬"
    },
    {
      name: "Emily Thompson",
      role: "VP of Business Development",
      background: "Former VP at Coinbase Ventures",
      experience: "8+ years in crypto investments and partnerships",
      image: "👩‍💼"
    }
  ];

  const advisors = [
    {
      name: "Dr. James Park",
      role: "Technical Advisor",
      background: "Founder of autonomous vehicle startup (acquired by Tesla)",
      image: "👨‍🎓"
    },
    {
      name: "Lisa Chang",
      role: "Strategic Advisor",
      background: "Former Partner at Andreessen Horowitz",
      image: "👩‍🎓"
    },
    {
      name: "Robert Kim",
      role: "Blockchain Advisor",
      background: "Co-founder of Ethereum Layer 2 solution",
      image: "👨‍💻"
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
    hidden: { opacity: 0, y: 30 },
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
            Our{" "}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
              Team
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed"
          >
            Meet the experienced team of engineers, researchers, and business leaders building the future of DePIN.
          </motion.p>
        </motion.div>

        {/* Core Team */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold text-foreground text-center mb-12"
          >
            Core Team
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-card border-card-border p-6 h-full text-center group hover:bg-card-hover transition-all duration-500 hover:shadow-glow relative overflow-hidden">
                  <div className="relative z-10">
                    <motion.div 
                      className="text-6xl mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {member.image}
                    </motion.div>
                    <h4 className="text-lg font-bold text-foreground mb-1">{member.name}</h4>
                    <div className="text-primary font-semibold text-sm mb-3">{member.role}</div>
                    <p className="text-foreground-muted text-sm mb-3 leading-relaxed">
                      {member.background}
                    </p>
                    <div className="text-xs text-foreground-subtle">
                      {member.experience}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advisors */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold text-foreground text-center mb-12"
          >
            Strategic Advisors
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-card border-card-border p-6 text-center group hover:bg-card-hover transition-all duration-500">
                  <motion.div 
                    className="text-5xl mb-4"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {advisor.image}
                  </motion.div>
                  <h4 className="text-lg font-bold text-foreground mb-1">{advisor.name}</h4>
                  <div className="text-primary font-semibold text-sm mb-3">{advisor.role}</div>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {advisor.background}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid md:grid-cols-4 gap-8"
        >
          <Card className="bg-card border-card-border p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-foreground-muted">Team Members</div>
          </Card>
          <Card className="bg-card border-card-border p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">200+</div>
            <div className="text-foreground-muted">Years Combined Experience</div>
          </Card>
          <Card className="bg-card border-card-border p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">15</div>
            <div className="text-foreground-muted">Countries Represented</div>
          </Card>
          <Card className="bg-card border-card-border p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">$5B+</div>
            <div className="text-foreground-muted">Previous Exits</div>
          </Card>
        </motion.div>

        {/* Join Team CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <Card className="bg-card border-card-border p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Join Our Mission</h3>
            <p className="text-foreground-muted mb-8 leading-relaxed">
              We're always looking for exceptional talent to join our growing team. 
              Help us build the future of decentralized AI infrastructure.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary-glow transition-all shadow-glow"
            >
              View Open Positions
            </motion.button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;