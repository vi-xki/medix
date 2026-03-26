import Link from 'next/link';
import Script from 'next/script';
import styles from './Footer.module.css';
import ThemeToggleButton from './ThemeToggleButton';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>BRAMMA</h2>
          <p>Adaptive & Hybrid Hair Restoration Specialists.</p>
        </div>
        
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/blog">Blog & Articles</Link>
          <button className={styles.whatsappNav}>WhatsApp Us</button>
        </div>
        
        <div className={styles.contactInfo}>
          <h3>Clinic Info</h3>
          <p>123 Aesthetic Avenue<br/>Coimbatore, Tamil Nadu 641001</p>
          <p>Mon - Sat: 10:00 AM - 7:00 PM</p>
          <p>+91 98765 43210</p>
        </div>
        
        <div className={styles.socials}>
          <h3>Connect</h3>
          <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
          <div style={{ marginTop: '1rem' }}>
            {/* Keeping the ThemeToggleButton space but since we are locking to White/Gold, we can just leave it or remove it. Let's keep it to not break the user's component tree if they rely on it */}
            <ThemeToggleButton />
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Bramma Face and Hair. All rights reserved.</p>
        <div className={styles.legal}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
      
      {/* Meta Pixel Code Placeholder */}
      {/* Meta Pixel Code Placeholder */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Facebook Pixel Code (Placeholder)
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `,
        }}
      />
    </footer>
  );
}
