"use client";

import { therapist } from "@/data/therapist";

export default function Office() {
  const o = therapist.office;

  return (
    <section
      id="office"
      style={{
        backgroundColor: "var(--color-cream-dark)",
        padding: "clamp(4rem, 8vw, 7rem) 1.25rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(2rem, 4vw, 4rem)",
            alignItems: "end",
            marginBottom: "4rem",
          }}
        >
          {/* Left: Heading */}
          <div>
            <p className="section-label" style={{ marginBottom: "1.2rem" }}>
              {o.label}
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                fontWeight: 400,
                color: "var(--color-charcoal)",
                lineHeight: 1.15,
              }}
            >
              {o.heading}{" "}
              <em
                style={{
                  fontFamily: "var(--font-script)",
                  fontStyle: "normal",
                  color: "var(--color-primary)",
                  fontSize: "1.1em",
                }}
              >
                {o.headingAccent}
              </em>
            </h2>
          </div>

          {/* Right: Description */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.97rem",
                lineHeight: 1.85,
                color: "var(--color-charcoal-muted)",
                marginBottom: "1rem",
              }}
            >
              {o.description}
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.97rem",
                lineHeight: 1.85,
                color: "var(--color-charcoal-muted)",
              }}
            >
              {o.subDescription}
            </p>
          </div>
        </div>

        {/* Office images grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "2rem",
            marginBottom: "4rem",
          }}
        >
          {o.images.map((img, idx) => (
            <div
              key={idx}
              style={{
                overflow: "hidden",
                borderRadius: "2px",
                position: "relative",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: "100%",
                  height: "440px",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.03)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
              />
            </div>
          ))}
        </div>

        {/* Details grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            borderTop: "1px solid var(--color-cream-muted)",
            paddingTop: "3rem",
          }}
        >
          {o.details.map((detail, i) => (
            <div key={i}>
              <div className="flex items-center gap-2" style={{ marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "1rem" }}>{detail.icon}</span>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--color-primary)",
                    fontWeight: 600,
                  }}
                >
                  {detail.label}
                </p>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.88rem",
                  color: "var(--color-charcoal-muted)",
                  lineHeight: 1.6,
                }}
              >
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
