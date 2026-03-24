'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">
            {/* <div style={{ width: '24px', height: '24px', background: '#eb125d', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>n</div> */}
            Bramma
          </Link>
        </div>

        <div className={styles.centerLinks}>
          <Link href="/" className={pathname === '/' ? styles.active : ''}>Home</Link>
          <Link href="/about" className={pathname === '/about' ? styles.active : ''}>About</Link>

          <div
            className={styles.dropdownContainer}
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <Link href="/procedures" className={`${styles.dropdownTrigger} ${pathname.startsWith('/procedures') ? styles.active : ''}`}>Procedures</Link>
            {isMenuOpen && (
              <div className={styles.dropdownMenu}>
                <Link href="/procedures#hair-transplant">Hair Transplant/Restoration</Link>
                <Link href="/procedures#PRP">Platelet-Rich Plasma (PRP) & GFC</Link>
                <Link href="/procedures#Jaw">Jaw / Chin Contouring</Link>
                <Link href="/procedures#Ear">Earlobe Repair</Link>
                <Link href="/procedures#Nose">Nose Reshaping</Link>
                <Link href="/procedures#EarPinning">Ear Pinning</Link>
                <Link href="/procedures#Scar">Scar Removal</Link>
                <Link href="/procedures#Lip">Lip Surgery for Shaping</Link>
                <Link href="/procedures#JawBone">Jaw Bone Fracture Repair</Link>
                <Link href="/procedures#Cleft">Cleft Lip or Palate</Link>
                <Link href="/procedures#Botox">Botox for Anti-Aging</Link>
                <Link href="/procedures#Fillers">Fillers for Facial Enhancement</Link>
                <Link href="/procedures#Facial">Facial Tumors</Link>
              </div>
            )}
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.bookBtn}>Book Now</button>

          <button
            className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </button>
        </div>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <div className={`${styles.menuOverlay} ${isMenuOpen ? styles.visible : ''}`}>
        <div className={styles.menuLinks}>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <button className={styles.menuBookBtn}>Schedule Evaluation</button>
        </div>
      </div>
    </>
  );
}
