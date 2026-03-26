'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './procedures.module.css';

const proceduresList = [
  {
    id: "hair-transplant", title: "Hair Transplant / Restoration",
    desc: "Restoring density and fullness using advanced follicle transplantation for natural-looking hairlines.",
    icon: <><path d="M12 2C12 2 8 6 8 10a4 4 0 0 0 8 0c0-4-4-8-4-8z" /><path d="M12 14v8" /></>
  },
  {
    id: "PRP", title: "Platelet-Rich Plasma (PRP) & GFC",
    desc: "Non-surgical therapies using your own platelets and growth factors to stimulate hair regrowth.",
    icon: <><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" /></>
  },
  {
    id: "Jaw", title: "Jaw / Chin Contouring",
    desc: "Surgical reshaping to create a balanced facial profile, addressing weak chins or asymmetry.",
    icon: <path d="M8 3h8l4 6-8 12L4 9z" />
  },
  {
    id: "Ear", title: "Earlobe Repair",
    desc: "Delicate mending of torn or enlarged earlobes to restore natural shape and proportion.",
    icon: <><path d="M9 9a3 3 0 1 1 6 0c0 2-3 5-3 5" /><path d="M9 17h6" /></>
  },
  {
    id: "Nose", title: "Nose Reshaping (Rhinoplasty)",
    desc: "Refinement of the nose's size and shape to enhance facial harmony and functional breathing.",
    icon: <><path d="M12 3l4 13H8l4-13z" /><path d="M8 16c0 2 1 3 4 3s4-1 4-3" /></>
  },
  {
    id: "EarPinning", title: "Ear Pinning (Otoplasty)",
    desc: "Correction of protruding ears to achieve a more proportional and refined look.",
    icon: <><path d="M5 12s2-4 7-4 7 4 7 4-2 4-7 4-7-4-7-4z" /><circle cx="12" cy="12" r="2" /></>
  },
  {
    id: "Scar", title: "Scar Removal",
    desc: "Advanced techniques to minimize the visibility of scars from surgery, injury, or acne.",
    icon: <path d="M3 12h3l3-9 4 18 3-9h3" />
  },
  {
    id: "Lip", title: "Lip Surgery for Shaping",
    desc: "Creating fuller, more balanced lips through surgical methods or precision fillers.",
    icon: <path d="M4 14c0-2 8-8 8-8s8 6 8 8c0 3-3 5-8 5s-8-2-8-5z" />
  },
  {
    id: "JawBone", title: "Jaw Bone Fracture Repair",
    desc: "Expert stabilization and repair of jaw fractures to restore mobility and function.",
    icon: <><rect x="5" y="8" width="14" height="9" rx="2" /><path d="M12 8V5M9 5h6" /></>
  },
  {
    id: "Cleft", title: "Cleft Lip or Palate",
    desc: "Multi-disciplinary surgical repair and support to optimize quality of life for patients.",
    icon: <><path d="M12 22V12M12 12l-4-6M12 12l4-6" /><circle cx="12" cy="4" r="2" /></>
  },
  {
    id: "Botox", title: "Botox for Anti-Aging",
    desc: "Precise injections to relax muscles and smooth fine lines and wrinkles for a youthful appearance.",
    icon: <><circle cx="12" cy="12" r="9" /><path d="M9 12h6M12 9v6" /></>
  },
  {
    id: "Fillers", title: "Fillers for Facial Enhancement",
    desc: "High-quality fillers used to restore volume and soften deep facial lines.",
    icon: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  },
  {
    id: "Facial", title: "Facial Tumors",
    desc: "Specialized surgical removal of tumors while prioritizing minimal scarring and functional preservation.",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  },
];

// Framer Motion variants for crossfading detail pane
const detailVariants = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 90, damping: 20 },
  },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
};

export default function ProceduresClient() {
  const [activeProcedure, setActiveProcedure] = useState(proceduresList[0]);

  // Sync active procedure with URL hash on mount and when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const matchedProcedure = proceduresList.find(proc => proc.id === hash);
        if (matchedProcedure) {
          setActiveProcedure(matchedProcedure);
        }
      }
    };

    // Check immediately on mount
    handleHashChange();

    // Listen to hash changes while on the page
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className={styles.proceduresPage}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroRing} />
        <div className={styles.heroRing} />
        <div className={styles.heroRing} />
        <div className={styles.heroCross} />

        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
        >
          <div className={styles.heroEyebrow}>Clinical Excellence</div>
          <h1>
            Advanced <em>Clinical</em>
            <br />Procedures
          </h1>
          <p>Personalized, diagnostic-led approaches for natural, lasting aesthetics.</p>
        </motion.div>
      </section>

      <div className={styles.divider} />

      {/* ── MASTER DETAIL LAYOUT ── */}
      <section className={styles.layoutSection}>
        <div className={styles.layoutContainer}>
          
          {/* LEFT SIDEBAR (Master) */}
          <div className={styles.sidebar}>
            {proceduresList.map((proc) => (
              <button
                key={proc.id}
                className={`${styles.tab} ${activeProcedure.id === proc.id ? styles.active : ''}`}
                onClick={() => {
                  setActiveProcedure(proc);
                  window.history.replaceState(null, '', `#${proc.id}`);
                }}
              >
                {proc.title}
              </button>
            ))}
          </div>

          {/* RIGHT CONTENT (Detail) */}
          <div className={styles.detailContainer}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProcedure.id}
                className={styles.detailPane}
                variants={detailVariants}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <div className={styles.detailHeroImage}>
                  {/* Using a premium generated asset as the procedure header */}
                  <Image 
                    src={activeProcedure.title.includes('Hair') ? "/images/hair-follicle.png" : "/images/clinic-interior.png"} 
                    alt={activeProcedure.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                </div>

                <div className={styles.detailHeader}>
                  <div className={styles.cardIcon}>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      {activeProcedure.icon}
                    </svg>
                  </div>
                  <h2>{activeProcedure.title}</h2>
                </div>

                <div className={styles.detailBody}>
                  <p>{activeProcedure.desc}</p>
                  <p>At Bramma Face and Hair, our approach to {activeProcedure.title.toLowerCase()} is entirely diagnostic-led. We combine state-of-the-art medical precision with an unparalleled aesthetic eye to ensure your results are not just effective, but beautifully natural and rigorously safe. We utilize world-class clinical protocols to minimize downtime and maximize comfort.</p>
                  
                  <motion.button
                    className={styles.consultBtn}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span>Schedule Consultation</span>
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}