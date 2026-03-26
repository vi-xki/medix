'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './StickyVideoSection.module.css';

export default function StickyVideoSection() {
  const containerRef = useRef(null);
  
  // We use scrollYProgress of this specific 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Video 1 fades out between 20% and 33% depth
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.33], [1, 1, 0]);
  
  // Video 2 fades in between 25% and 33%, stays till 60%, fades out by 66%
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.33, 0.55, 0.66], [0, 1, 1, 0]);
  
  // Video 3 fades in between 60% and 66%, stays till the end
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.66, 1], [0, 1, 1]);

  // Parallax transform for the text overlay to give it a slight upward drift
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <div ref={containerRef} className={styles.scrollTrack}>
      <div className={styles.stickyContainer}>
        
        {/* VIDEO 1 */}
        <motion.div style={{ opacity: opacity1 }} className={styles.videoWrapper}>
          <video 
            src="/videos/home-video-1.mp4" 
            poster="/images/clinic-interior.png"
            autoPlay 
            loop 
            muted 
            playsInline 
            className={styles.video} 
          />
          <div className={styles.overlay}>
            <motion.div style={{ y: textY }} className={styles.textContent}>
              <h2>Precision Aesthetics</h2>
              <p>Experience the art of medical refinement.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* VIDEO 2 */}
        <motion.div style={{ opacity: opacity2 }} className={styles.videoWrapper}>
          <video 
            src="/videos/home-video-2.mp4" 
            poster="/images/hair-follicle.png"
            autoPlay 
            loop 
            muted 
            playsInline 
            className={styles.video} 
          />
          <div className={styles.overlay}>
            <motion.div style={{ y: textY }} className={styles.textContent}>
              <h2>Advanced Clinical Care</h2>
              <p>World-class protocols for natural results.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* VIDEO 3 */}
        <motion.div style={{ opacity: opacity3 }} className={styles.videoWrapper}>
          <video 
            src="/videos/home-video-3.mp4" 
            poster="/images/gold-fluid.png"
            autoPlay 
            loop 
            muted 
            playsInline 
            className={styles.video} 
          />
          <div className={styles.overlay}>
            <motion.div style={{ y: textY }} className={styles.textContent}>
              <h2>Your Journey Begins</h2>
              <p>Schedule a diagnostic evaluation today.</p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
