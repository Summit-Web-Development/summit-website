import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    id: 1,
    quote:
      "Summit completely transformed our online presence. Our phones are ringing twice as much. The custom design and speed optimizations truly made a difference in our local market.",
    name: "John Davis",
    company: "Davis Plumbing",
  },
  {
    id: 2,
    quote:
      "Professional, incredibly fast, and exactly what we needed to establish authority. The ROI has been absolutely incredible, we recouped our investment in the first month.",
    name: "Sarah Jenkins",
    company: "Jenkins Law",
  },
  {
    id: 3,
    quote:
      "Finally, a web agency that actually understands local service businesses. They didn't just build a site; they built a lead generation machine for us.",
    name: "Mike Thompson",
    company: "Elite Landscaping",
  },
];

// Duplicate the list to create a seamless infinite loop
const looped = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

export default function TestimonialsSection() {
  return (
    <section className={styles.section} id="testimonials" aria-labelledby="testimonials-heading">
      <div className={styles.header}>
        <div className="container">
          <span className="section-label">Client Results</span>
          <h2 className={styles.h2} id="testimonials-heading">What our clients say</h2>
        </div>
      </div>

      <div className={styles.tickerOuter} aria-label="Scrolling testimonials">
        <div className={styles.tickerTrack}>
          {looped.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className={styles.card}
              aria-label={`Testimonial from ${t.name}`}
            >
              <div className={styles.stars} aria-label="5 stars">
                {"★★★★★".split("").map((s, si) => <span key={si}>{s}</span>)}
              </div>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.author}>
                <span className={styles.name}>— {t.name}</span>
                <span className={styles.company}>{t.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
