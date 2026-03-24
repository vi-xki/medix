export const metadata = {
  title: "Blog | Bramma Face and Hair",
  description: "Read our latest articles on hair restoration techniques and clinical insights.",
};

export default function Blog() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh', maxWidth: '1200px', margin: '0 auto', padding: '120px 3rem 4rem' }}>
      <h1 style={{ fontSize: '3rem', color: 'var(--accent-gold)', marginBottom: '2rem' }}>Our Journal</h1>
      <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '4rem' }}>
        Insights, clinical updates, and patient guides from the experts at Bramma.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {[1, 2, 3].map((item) => (
          <article key={item} style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ width: '100%', height: '200px', background: '#111', borderRadius: '10px', marginBottom: '1.5rem' }}></div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Understanding Donor Capacity</h3>
            <p style={{ color: '#aaa', marginBottom: '1.5rem', lineHeight: 1.6 }}>Why the math of hair restoration is more important than the marketing promises...</p>
            <button style={{ background: 'none', border: 'none', color: 'var(--accent-gold)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '1rem', padding: 0 }}>Read More →</button>
          </article>
        ))}
      </div>
    </div>
  );
}
