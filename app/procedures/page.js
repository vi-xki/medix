import styles from './procedures.module.css';
import Link from 'next/link';

export const metadata = {
  title: "Procedures | Bramma Face and Hair",
  description: "Comprehensive list of our aesthetic and reconstructive procedures.",
};

const proceduresList = [
  { id: "hair-transplant", title: "Hair Transplant / Restoration", desc: "Restoring density and fullness using advanced follicle transplantation for natural-looking hairlines." },
  { id: "PRP", title: "Platelet-Rich Plasma (PRP) & GFC", desc: "Non-surgical therapies using your own platelets and growth factors to stimulate hair regrowth and scalp health." },
  { id: "Jaw", title: "Jaw / Chin Contouring", desc: "Surgical reshaping to create a balanced facial profile, addressing weak chins or asymmetry." },
  { id: "Ear", title: "Earlobe Repair", desc: "Delicate mending of torn or enlarged earlobes to restore natural shape." },
  { id: "Nose", title: "Nose Reshaping (Rhinoplasty)", desc: "Refinement of the nose's size and shape to enhance facial harmony and functional breathing." },
  { id: "EarPinning", title: "Ear Pinning (Otoplasty)", desc: "Correction of protruding ears to achieve a more proportional look." },
  { id: "Scar", title: "Scar Removal", desc: "Advanced techniques to minimize the visibility of scars from surgery, injury, or acne." },
  { id: "Lip", title: "Lip Surgery for Shaping", desc: "Creating fuller, more balanced lips through surgical methods or fillers." },
  { id: "JawBone", title: "Jaw Bone Fracture Repair", desc: "Expert stabilization and repair of jaw fractures to restore mobility and function." },
  { id: "Cleft", title: "Cleft Lip or Palate", desc: "Multi-disciplinary surgical repair and support to optimize quality of life." },
  { id: "Botox", title: "Botox for Anti-Aging", desc: "Precise injections to relax muscles and smooth fine lines/wrinkles for a youthful appearance." },
  { id: "Fillers", title: "Fillers for Facial Enhancement", desc: "High-quality fillers used to restore volume and soften deep facial lines." },
  { id: "Facial", title: "Facial Tumors", desc: "Specialized surgical removal of tumors while prioritizing minimal scarring and functional preservation." },
];

export default function Procedures() {
  return (
    <div className={styles.proceduresPage}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Advanced Clinical Procedures</h1>
          <p>Personalized, diagnostic-led approaches for natural, lasting aesthetics.</p>
        </div>
      </header>
      
      <section className={styles.listSection}>
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <h3>Quick Links</h3>
            <ul className={styles.anchors}>
              {proceduresList.map(proc => (
                <li key={`nav-${proc.id}`}>
                  <Link href={`#${proc.id}`}>{proc.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.contentArea}>
            {proceduresList.map(proc => (
              <div key={proc.id} id={proc.id} className={styles.procedureCard}>
                <h2>{proc.title}</h2>
                <div className={styles.cardBody}>
                  <div className={styles.imagePlaceholder}>
                    <span>{proc.title}</span>
                  </div>
                  <div className={styles.textContent}>
                    <p>{proc.desc}</p>
                    <button className={styles.consultBtn}>Schedule Consultation</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
