import HeroScroll from '@/components/HeroScroll';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <HeroScroll />
      
      <section className={styles.section} style={{ backgroundColor: '#0f172a' }}>
        <div className={styles.container}>
          <div className={styles.imagePlaceholder}>
            {/* Visual placeholder for Image */}
            <div className={styles.imgAbstract}></div>
          </div>
          <div className={styles.textBlock}>
            <h2>The Core of Aesthetic Care</h2>
            <p>
              We believe beauty is a journey, and we're here to walk beside you every step of the way. Beyond advanced hair restoration, we provide comprehensive facial aesthetic surgeries and scar removal using minimally invasive, precise clinical procedures.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.reverse}`} style={{ backgroundColor: '#1e1b4b' }}>
        <div className={styles.container}>
          <div className={styles.imagePlaceholder}>
            <div className={`${styles.imgAbstract} ${styles.alt1}`}></div>
          </div>
          <div className={styles.textBlock}>
            <h2>Hybrid Hair Restoration</h2>
            <p>
              The first of its kind in Coimbatore. Hybrid restoration seamlessly combines Strategic Hair Transplants for the frontal hairline with high-quality Custom Integrated Hair Patch Systems for the crown, ensuring permanent results and natural, full coverage.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} style={{ backgroundColor: '#31111d' }}>
        <div className={styles.container}>
          <div className={styles.imagePlaceholder}>
            <div className={`${styles.imgAbstract} ${styles.alt2}`}></div>
          </div>
          <div className={styles.textBlock}>
            <h2>Adaptive Hair Systems</h2>
            <p>
              Our Adaptive Hair Restoration utilizes a cutting-edge Dual Patch System. Designed to grow and adapt with you, it provides multiple patches with different hair lengths for ultimate flexibility—drastically reducing the frequency of salon visits and daily maintenance.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.reverse}`} style={{ backgroundColor: '#14211a' }}>
        <div className={styles.container}>
          <div className={styles.imagePlaceholder}>
            <div className={`${styles.imgAbstract} ${styles.alt3}`}></div>
          </div>
          <div className={styles.textBlock}>
            <h2>Advanced Procedures</h2>
            <p>
              Our highly skilled specialists, led by Dr. Gowtham, execute every treatment with unparalleled precision. From restoring density for pattern baldness using PRP & GFC, to contouring the jaw, intricate rhinoplasty, and delicate earlobe repairing, our focus is entirely on natural, lasting aesthetics.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <h2>What Can You Expect?</h2>
          <div className={styles.benefits}>
            <div className={styles.benefitItem}>
              <h3>Total Coverage</h3>
              <p>Full density achieved even in the most &quot;difficult&quot; cases.</p>
            </div>
            <div className={styles.benefitItem}>
              <h3>Natural Aesthetics</h3>
              <p>Masterful blending that completely eliminates the &quot;artificial&quot; look.</p>
            </div>
            <div className={styles.benefitItem}>
              <h3>Future-Proof Results</h3>
              <p>A conservative, responsible approach that protects your donor hair for life.</p>
            </div>
          </div>
          
          <div className={styles.consultContainer}>
            <h2>Confidence begins with a conversation.</h2>
            <p>Experience a transparent, diagnostic-led consultation at Bramma Face and Hair.</p>
            <button className={styles.mainBtn}>Schedule Your Evaluation Today</button>
          </div>
        </div>
      </section>
    </>
  );
}
