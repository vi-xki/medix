import styles from './about.module.css';

export const metadata = {
  title: "About Us | Bramma Face and Hair",
  description: "Learn about our expert specialists and our sustainable approach to hair restoration.",
};

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>About Our Clinic</h1>
          <p>Expertise, Innovation, and Sustainable Results.</p>
        </div>
      </header>
      
      <section className={styles.doctorSection}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <div className={styles.doctorImagePlaceholder}>
              {/* Add real doctor image later */}
              <span>Dr. Profile</span>
            </div>
          </div>
          
          <div className={styles.doctorInfo}>
            <h2>Meet The Specialist</h2>
            <h3 className={styles.qualifications}>MD, ABHRS, Leading Hair Transplant Surgeon</h3>
            
            <p className={styles.overview}>
              At Bramma Face and Hair, we believe that beauty is not a privilege, but a fundamental right. We offer innovative, personalized surgical and non-surgical solutions to empower individuals to feel confident in their own skin.
            </p>
            
            <div className={styles.content}>
              <p>Specializing in Hybrid and Adaptive Hair Restoration, as well as comprehensive facial surgical procedures, our clinic stands at the forefront of aesthetic medicine in Coimbatore.</p>
              
              <div style={{ marginTop: '2rem', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ color: '#eb125d', marginBottom: '1rem' }}>Contact Information</h4>
                <p><strong>Address:</strong> 140, (New, 34), Balasubramaniam, 2nd Cross Rd, Saibaba Colony, K K Pudur, Coimbatore, Tamil Nadu 641038.</p>
                <p><strong>Phone:</strong> +91 994 0066 956 / +91 956 6448 292</p>
                <p><strong>Email:</strong> brammacbe@gmail.com</p>
              </div>
            </div>
            
            <button className={styles.contactBtn}>Contact the Clinic</button>
          </div>
        </div>
      </section>
    </div>
  );
}
