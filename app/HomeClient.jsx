'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import HeroScroll from '@/components/HeroScroll';
import StickyVideoSection from '@/components/StickyVideoSection';
import styles from './page.module.css';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function HomeClient() {
  return (
    <div className={styles.homeWrapper}>
      <HeroScroll />
      <StickyVideoSection />
      
      <motion.section 
        className={styles.section} 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className={styles.container}>
          <motion.div className={styles.imagePlaceholder} variants={fadeUp}>
            <div className={styles.imgAbstract}>
              <Image src="/images/clinic-interior.png" alt="Aesthetic Clinic" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </motion.div>
          <motion.div className={styles.textBlock} variants={fadeUp}>
            <h2>The Core of Aesthetic Care</h2>
            <p>
              We believe beauty is a journey, and we're here to walk beside you every step of the way. Beyond advanced hair restoration, we provide comprehensive facial aesthetic surgeries and scar removal using minimally invasive, precise clinical procedures.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className={`${styles.section} ${styles.reverse}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className={styles.container}>
          <motion.div className={styles.imagePlaceholder} variants={fadeUp}>
            <div className={styles.imgAbstract}>
              <Image src="/images/hair-follicle.png" alt="Advanced Hair Restoration" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </motion.div>
          <motion.div className={styles.textBlock} variants={fadeUp}>
            <h2>Hybrid Hair Restoration</h2>
            <p>
              The first of its kind in Coimbatore. Hybrid restoration seamlessly combines Strategic Hair Transplants for the frontal hairline with high-quality Custom Integrated Hair Patch Systems for the crown, ensuring permanent results and natural, full coverage.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className={styles.container}>
          <motion.div className={styles.imagePlaceholder} variants={fadeUp}>
            <div className={styles.imgAbstract}>
              <Image src="/images/gold-fluid.png" alt="Adaptive Medical Science" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </motion.div>
          <motion.div className={styles.textBlock} variants={fadeUp}>
            <h2>Adaptive Hair Systems</h2>
            <p>
              Our Adaptive Hair Restoration utilizes a cutting-edge Dual Patch System. Designed to grow and adapt with you, it provides multiple patches with different hair lengths for ultimate flexibility—drastically reducing the frequency of salon visits and daily maintenance.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className={`${styles.section} ${styles.reverse}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className={styles.container}>
          <motion.div className={styles.imagePlaceholder} variants={fadeUp}>
            <div className={styles.imgAbstract}>
              <Image src="/images/clinic-interior.png" alt="Advanced Procedures precision" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </motion.div>
          <motion.div className={styles.textBlock} variants={fadeUp}>
            <h2>Advanced Procedures</h2>
            <p>
              Our highly skilled specialists, led by Dr. Gowtham, execute every treatment with unparalleled precision. From restoring density for pattern baldness using PRP & GFC, to contouring the jaw, intricate rhinoplasty, and delicate earlobe repairing, our focus is entirely on natural, lasting aesthetics.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className={styles.ctaSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        <motion.div className={styles.ctaCard} variants={staggerContainer}>
          <motion.h2 variants={fadeUp}>What Can You Expect?</motion.h2>
          <motion.div className={styles.benefits} variants={staggerContainer}>
            <motion.div className={styles.benefitItem} variants={fadeUp} whileHover={{ y: -5 }}>
              <h3>Total Coverage</h3>
              <p>Full density achieved even in the most "difficult" cases.</p>
            </motion.div>
            <motion.div className={styles.benefitItem} variants={fadeUp} whileHover={{ y: -5 }}>
              <h3>Natural Aesthetics</h3>
              <p>Masterful blending that completely eliminates the "artificial" look.</p>
            </motion.div>
            <motion.div className={styles.benefitItem} variants={fadeUp} whileHover={{ y: -5 }}>
              <h3>Future-Proof Results</h3>
              <p>A conservative, responsible approach that protects your donor hair for life.</p>
            </motion.div>
          </motion.div>
          
          <motion.div className={styles.consultContainer} variants={fadeUp}>
            <h2>Confidence begins with a conversation.</h2>
            <p>Experience a transparent, diagnostic-led consultation at Bramma Face and Hair.</p>
            <button className={styles.mainBtn}><span>Schedule Your Evaluation Today</span></button>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
