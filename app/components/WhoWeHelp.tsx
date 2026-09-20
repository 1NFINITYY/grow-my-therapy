"use client";

import { therapist } from "@/data/therapist";

export default function WhoWeHelp() {
  const w = therapist.whoWeHelp;

  return (
    <section
      id="services"
      style={{
        backgroundColor: "var(--color-cream)",
        padding: "clamp(4rem, 8vw, 7rem) 1.25rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="section-label" style={{ marginBottom: "1.2rem" }}>
            {w.label}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 400,
              color: "var(--color-charcoal)",
              lineHeight: 1.2,
              marginBottom: "1.2rem",
            }}
          >
            {w.heading}{" "}
            <em
              style={{
                fontFamily: "var(--font-script)",
                fontStyle: "normal",
                color: "var(--color-primary)",
                fontSize: "1.1em",
              }}
            >
              {w.headingAccent}
            </em>{" "}
            {w.headingEnd}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.97rem",
              color: "var(--color-charcoal-muted)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            {w.description}
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {w.cards.map((card, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "var(--color-cream-dark)",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div style={{ height: "260px", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt={card.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "2rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    color: "var(--color-charcoal)",
                    marginBottom: "0.8rem",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    color: "var(--color-charcoal-muted)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {card.description}
                </p>
                <a href={card.link} className="link-underline">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
