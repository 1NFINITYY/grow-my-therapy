import { therapist } from "@/data/therapist";

export default function Mission() {
  const m = therapist.mission;

  return (
    <section
      id="about"
      style={{
        backgroundColor: "var(--color-cream-dark)",
        padding: "clamp(4rem, 8vw, 7rem) 1.25rem",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "clamp(2.5rem, 5vw, 5rem)",
          alignItems: "center",
        }}
      >
        {/* Left: Text */}
        <div>
          <p className="section-label" style={{ marginBottom: "1.5rem" }}>
            {m.label}
          </p>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 400,
              lineHeight: 1.25,
              color: "var(--color-charcoal)",
              marginBottom: "2rem",
            }}
          >
            {m.heading}
          </h2>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.97rem",
              lineHeight: 1.85,
              color: "var(--color-charcoal-muted)",
              marginBottom: "1.5rem",
            }}
          >
            {m.paragraphOne}
          </p>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.97rem",
              lineHeight: 1.85,
              color: "var(--color-charcoal-muted)",
              marginBottom: "2.5rem",
            }}
          >
            {m.paragraphTwo}
          </p>

          <a href={m.ctaHref} className="link-underline-primary">
            {m.ctaText}
          </a>
        </div>

        {/* Right: Image */}
        <div
          style={{
            position: "relative",
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&q=80"
            alt="Calm ocean waves representing peace and healing in therapy"
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              display: "block",
            }}
          />
          {/* Accent border - hidden on mobile to prevent overflow */}
          <div
            className="mission-accent-border"
            style={{
              position: "absolute",
              bottom: "-16px",
              right: "-16px",
              width: "60%",
              height: "60%",
              border: "2px solid var(--color-primary)",
              zIndex: 0,
              borderRadius: "2px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
