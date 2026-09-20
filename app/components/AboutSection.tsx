import Link from "next/link";
import { therapist } from "@/data/therapist";

export default function AboutSection() {
  const a = therapist.about;

  return (
    <section
      id="about-full"
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
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "clamp(2.5rem, 5vw, 5rem)",
          alignItems: "center",
        }}
      >
        {/* Left: Image */}
        <div style={{ position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={a.image}
            alt={a.alt}
            style={{
              width: "100%",
              height: "580px",
              objectFit: "cover",
              objectPosition: "top center",
              display: "block",
            }}
          />

          {/* Decorative accent stripe */}
          <div
            style={{
              position: "absolute",
              top: "2rem",
              left: "-16px",
              width: "4px",
              height: "60%",
              backgroundColor: "var(--color-accent)",
            }}
          />
        </div>

        {/* Right: Content */}
        <div>
          <p className="section-label" style={{ marginBottom: "1.2rem" }}>
            {a.label}
          </p>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              fontWeight: 400,
              color: "var(--color-charcoal)",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}
          >
            {a.heading}{" "}
            <em
              style={{
                fontFamily: "var(--font-script)",
                fontStyle: "normal",
                color: "var(--color-primary)",
                fontSize: "1.1em",
              }}
            >
              {a.headingAccent}
            </em>
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
            {a.description}
          </p>

          {a.bio.split("\n\n").map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.97rem",
                lineHeight: 1.85,
                color: "var(--color-charcoal-muted)",
                marginBottom: "1.5rem",
              }}
            >
              {para}
            </p>
          ))}

          {/* Credentials */}
          <div style={{ marginBottom: "2.5rem" }}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--color-primary)",
                fontWeight: 600,
                marginBottom: "0.8rem",
              }}
            >
              Credentials
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {a.credentials.map((c, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.88rem",
                    color: "var(--color-charcoal-muted)",
                    padding: "0.4rem 0",
                    borderBottom: i < a.credentials.length - 1 ? "1px solid var(--color-cream-muted)" : "none",
                    paddingLeft: "1rem",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-accent)",
                    }}
                  />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <Link href="/contact" className="btn-primary">
            Work With Me
          </Link>
        </div>
      </div>
    </section>
  );
}
