'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './HeroScroll.module.css';

const slides = [
  {
    title: "Hair Restoration Reinvented",
    text: "First in Coimbatore. Experience our innovative Hybrid & Adaptive Hair Restoration solutions crafted to solve limited donor hair and minimize maintenance. Beauty is not a privilege, but a fundamental right.",
    bg: "linear-gradient(135deg, #0f172a 0%, #020617 100%)",
  },
  {
    title: "Hybrid Hair Restoration",
    text: "Leveraging Strategic Hair Transplants for the frontal hairline and Custom Integrated Hair Patch Systems for the crown. We ensure comprehensive coverage with permanent, natural aesthetics.",
    bg: "linear-gradient(135deg, #1e1b4b 0%, #020617 100%)",
  },
  {
    title: "Adaptive Hair Systems",
    text: "Your solution should be dynamic. Our Dual Patch System provides adaptable hair lengths for flexibility, drastically reducing the frequency of haircuts and maintenance.",
    bg: "linear-gradient(135deg, #31111d 0%, #020617 100%)",
  },
  {
    title: "Donor Hair Limitation?",
    text: "Told you have insufficient donor hair for a traditional transplant? We've got you covered. Our specialized hybrid methods overcome extreme donor limitations to ensure sustainability for life.",
    stats: true,
    bg: "linear-gradient(135deg, #14211a 0%, #020617 100%)",
  }
];

export default function HeroScroll() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const slideHeight = height / slides.length;

      // Calculate how far we've scrolled into the container
      const scrolled = -top;

      if (scrolled < 0) {
        setActiveIndex(0);
      } else if (scrolled >= height - slideHeight) {
        setActiveIndex(slides.length - 1);
      } else {
        const index = Math.floor(scrolled / slideHeight);
        setActiveIndex(index);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.scrollTracker} ref={containerRef}>
      <div className={styles.stickyContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${activeIndex === index ? styles.active : ''}`}
            style={{ background: slide.bg }}
          >
            <div className={styles.content}>
              <h1 className={styles.title}>{slide.title}</h1>
              <p className={styles.text}>{slide.text}</p>

              {slide.stats && (
                <div className={styles.statsContainer}>
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
                </div>
              )}

              {/* {index < slides.length - 1 && (
                <div className={styles.scrollIndicator}>
                  <span>Scroll</span>
                  <div className={styles.arrowDown}></div>
                </div>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
