import Link from "next/link";
import { therapist } from "@/data/therapist";

export default function CTASection() {
  const c = therapist.cta;

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "var(--color-cream)",
        padding: "clamp(4rem, 8vw, 7rem) 1.25rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Mobile: single centered column with no side images */}
        {/* Desktop: three-column image | text | image */}
        <div className="cta-grid">
          {/* Left image — hidden on mobile via CSS class */}
          <div className="cta-side-image" style={{ overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.leftImage}
              alt={c.leftAlt}
              style={{ width: "100%", height: "460px", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Center text — always visible */}
          <div style={{ textAlign: "center", maxWidth: "340px", padding: "0 1rem", margin: "0 auto" }}>
            <p className="section-label" style={{ marginBottom: "1.5rem" }}>
              {c.label}
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 400,
                color: "var(--color-charcoal)",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              {c.heading}{" "}
              <em
                style={{
                  fontFamily: "var(--font-script)",
                  fontStyle: "normal",
                  color: "var(--color-primary)",
                  fontSize: "1.15em",
                }}
              >
                {c.headingAccent}
              </em>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                lineHeight: 1.8,
                color: "var(--color-charcoal-muted)",
                marginBottom: "2.5rem",
              }}
            >
              {c.description}
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href={c.primaryHref} className="btn-primary" style={{ width: "100%", textAlign: "center" }}>
                {c.primaryText}
              </Link>
              <Link href={c.secondaryHref} className="btn-outline" style={{ width: "100%", textAlign: "center" }}>
                {c.secondaryText}
              </Link>
            </div>
          </div>

          {/* Right image — hidden on mobile via CSS class */}
          <div className="cta-side-image" style={{ overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.rightImage}
              alt={c.rightAlt}
              style={{ width: "100%", height: "460px", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
