import { therapist } from "@/data/therapist";

export default function Expertise() {
  const ex = therapist.expertise;

  return (
    <section
      id="expertise"
      style={{
        backgroundColor: "var(--color-cream-dark)",
        padding: "clamp(4rem, 8vw, 7rem) 1.25rem",
      }}
    >
      <div
        className="expertise-grid"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "clamp(2.5rem, 5vw, 5rem)",
          alignItems: "start",
        }}
      >
        {/* Left: Heading */}
        <div className="expertise-sticky">
          <p className="section-label" style={{ marginBottom: "1.5rem" }}>
            {ex.label}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 400,
              color: "var(--color-charcoal)",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
            }}
          >
            {ex.heading}
          </h2>

          {/* Decorative accent */}
          <div
            style={{
              width: "48px",
              height: "2px",
              backgroundColor: "var(--color-primary)",
              marginBottom: "2rem",
            }}
          />

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9rem",
              lineHeight: 1.8,
              color: "var(--color-charcoal-muted)",
            }}
          >
            Every specialty below is addressed through a personalized, evidence-based approach tailored to your unique history and goals.
          </p>
        </div>

        {/* Right: List */}
        <div>
          {ex.items.map((item, i) => (
            <div key={i}>
              <div style={{ padding: "1.8rem 0" }}>
                <div className="flex items-start gap-4">
                  {/* Number */}
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "0.85rem",
                      color: "var(--color-primary)",
                      fontWeight: 500,
                      flexShrink: 0,
                      paddingTop: "0.1rem",
                      minWidth: "24px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.35rem",
                        fontWeight: 500,
                        color: "var(--color-charcoal)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.88rem",
                        color: "var(--color-charcoal-muted)",
                        lineHeight: 1.7,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {i < ex.items.length - 1 && <hr className="divider-line" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
