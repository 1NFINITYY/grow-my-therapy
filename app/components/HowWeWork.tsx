import { therapist } from "@/data/therapist";

export default function HowWeWork() {
  const h = therapist.howWeWork;

  return (
    <section
      id="approach"
      style={{
        backgroundColor: "var(--color-cream-muted)",
        padding: "clamp(4rem, 8vw, 7rem) 1.25rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* Top label */}
        <p className="section-label" style={{ marginBottom: "1.2rem" }}>
          {h.label}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "clamp(2.5rem, 5vw, 5rem)",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          {/* Left: Content */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "var(--color-charcoal)",
                lineHeight: 1.25,
                marginBottom: "1.5rem",
              }}
            >
              {h.heading}
            </h2>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.97rem",
                lineHeight: 1.85,
                color: "var(--color-charcoal-muted)",
                marginBottom: "2rem",
              }}
            >
              {h.description}
            </p>

            {/* Modalities list */}
            <ul style={{ listStyle: "none", padding: 0, marginBottom: "2.5rem" }}>
              {h.highlights.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.6rem 0",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.88rem",
                    color: "var(--color-charcoal)",
                    borderBottom: i < h.highlights.length - 1 ? "1px solid var(--color-cream-muted)" : "none",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-primary)",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <a href={h.ctaHref} className="link-underline-primary">
              {h.ctaText}
            </a>
          </div>

          {/* Right: Image */}
          <div style={{ position: "relative" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={h.image}
              alt={h.alt}
              style={{
                width: "100%",
                height: "520px",
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* Floating accent box */}
            <div
              className="howwework-accent-box"
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "0",
                backgroundColor: "var(--color-primary)",
                color: "white",
                padding: "1.5rem 1.8rem",
                maxWidth: "220px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.8rem",
                  fontWeight: 400,
                  lineHeight: 1,
                  marginBottom: "0.3rem",
                }}
              >
                10+
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  opacity: 0.85,
                }}
              >
                Years helping people heal & grow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
