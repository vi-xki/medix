'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const handleDropdownClick = (e, hash) => {
    setIsDropdownOpen(false);
    if (pathname === '/procedures') {
      e.preventDefault();
      window.location.hash = hash;
    }
  };

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
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link href="/procedures" className={`${styles.dropdownTrigger} ${pathname.startsWith('/procedures') ? styles.active : ''}`}>Procedures</Link>
            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <Link href="/procedures#hair-transplant" onClick={(e) => handleDropdownClick(e, 'hair-transplant')}>Hair Transplant/Restoration</Link>
                <Link href="/procedures#PRP" onClick={(e) => handleDropdownClick(e, 'PRP')}>Platelet-Rich Plasma (PRP) & GFC</Link>
                <Link href="/procedures#Jaw" onClick={(e) => handleDropdownClick(e, 'Jaw')}>Jaw / Chin Contouring</Link>
                <Link href="/procedures#Ear" onClick={(e) => handleDropdownClick(e, 'Ear')}>Earlobe Repair</Link>
                <Link href="/procedures#Nose" onClick={(e) => handleDropdownClick(e, 'Nose')}>Nose Reshaping</Link>
                <Link href="/procedures#EarPinning" onClick={(e) => handleDropdownClick(e, 'EarPinning')}>Ear Pinning</Link>
                <Link href="/procedures#Scar" onClick={(e) => handleDropdownClick(e, 'Scar')}>Scar Removal</Link>
                <Link href="/procedures#Lip" onClick={(e) => handleDropdownClick(e, 'Lip')}>Lip Surgery for Shaping</Link>
                <Link href="/procedures#JawBone" onClick={(e) => handleDropdownClick(e, 'JawBone')}>Jaw Bone Fracture Repair</Link>
                <Link href="/procedures#Cleft" onClick={(e) => handleDropdownClick(e, 'Cleft')}>Cleft Lip or Palate</Link>
                <Link href="/procedures#Botox" onClick={(e) => handleDropdownClick(e, 'Botox')}>Botox for Anti-Aging</Link>
                <Link href="/procedures#Fillers" onClick={(e) => handleDropdownClick(e, 'Fillers')}>Fillers for Facial Enhancement</Link>
                <Link href="/procedures#Facial" onClick={(e) => handleDropdownClick(e, 'Facial')}>Facial Tumors</Link>
              </div>
            )}
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.bookBtn}><span>Book Now</span></button>

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
          <Link href="/procedures" onClick={() => setIsMenuOpen(false)}>Procedures</Link>
          <Link href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <button className={styles.menuBookBtn}>Schedule Evaluation</button>
        </div>
      </div>
    </>
  );
}
