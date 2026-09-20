"use client";

import { therapist } from "@/data/therapist";

export default function SpecialtiesDetail() {
  const sp = therapist.specialties;

  return (
    <section
      id="specialties-detail"
      style={{
        backgroundColor: "var(--color-cream)",
        padding: "clamp(4rem, 8vw, 7rem) 1.25rem",
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
        {/* Left: Image */}
        <div style={{ order: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={sp.image}
            alt={sp.alt}
            style={{
              width: "100%",
              height: "580px",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* Right: List */}
        <div style={{ order: 1 }}>
          <p className="section-label" style={{ marginBottom: "1.5rem" }}>
            {sp.label}
          </p>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 400,
              color: "var(--color-charcoal)",
              lineHeight: 1.2,
              marginBottom: "3rem",
            }}
          >
            {sp.heading}
          </h2>

          <div>
            {sp.items.map((item, i) => (
              <div key={item.id}>
                <div style={{ padding: "1.5rem 0" }}>
                  <div
                    className="flex items-start justify-between gap-4"
                    style={{ flexWrap: "wrap" }}
                  >
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "1.4rem",
                          fontWeight: 500,
                          color: "var(--color-charcoal)",
                          marginBottom: "0.5rem",
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

                    <a
                      href="#contact"
                      className="link-underline"
                      style={{ flexShrink: 0, alignSelf: "flex-start", paddingTop: "0.2rem" }}
                    >
                      Learn More
                    </a>
                  </div>
                </div>

                {i < sp.items.length - 1 && <hr className="divider-line" />}
              </div>
            ))}
          </div>

          <div style={{ marginTop: "3rem" }}>
            <a href="#contact" className="btn-primary">
              Book a Free Consult
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
