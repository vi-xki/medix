'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './HeroScroll.module.css';

export default function HeroScroll() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section className={styles.heroContainer} ref={containerRef}>
      {/* Background layer with parallax */}
      <motion.div className={styles.heroBg} style={{ y: yBg, scale: scaleBg }} />
      
      {/* Animated pulsing rings matching procedures */}
      <div className={styles.heroRing} />
      <div className={styles.heroRing} />
      <div className={styles.heroRing} />
      
      <div className={styles.heroCross} />
      
      {/* Content layer with scroll opacity & translation */}
      <motion.div 
        className={styles.heroContent}
        style={{ y: yText, opacity: opacityText }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <motion.div 
          className={styles.heroEyebrow}
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          First in Coimbatore
        </motion.div>
        
        <h1 className={styles.title}>
          Hair Restoration<br/><em>Reinvented</em>
        </h1>
        
        <p className={styles.text}>
          Experience our innovative Hybrid & Adaptive Hair Restoration solutions. Beauty is not a privilege, but a fundamental right.
        </p>

        <motion.div 
          className={styles.statsContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={styles.statBox}>
            <span className={styles.statNum}>15+</span>
            <span className={styles.statLabel}>Years Trust</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statNum}>10k+</span>
            <span className={styles.statLabel}>Patients</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Customized</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
