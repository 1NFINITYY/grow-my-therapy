"use client";

import Link from "next/link";
import { therapist } from "@/data/therapist";

export default function Footer() {
  const f = therapist.footer;
  const t = therapist;

  return (
    <footer id="footer">
      {/* Main footer body */}
      <div
        style={{
          backgroundColor: "var(--color-charcoal)",
          color: "white",
          padding: "clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2rem) 3rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
          }}
        >
          {/* Brand column */}
          <div style={{ gridColumn: "span 1" }}>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.3rem",
                fontWeight: 400,
                color: "white",
                marginBottom: "0.5rem",
                lineHeight: 1.3,
              }}
            >
              {t.name}
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "1.2rem",
              }}
            >
              {t.credentials}
            </p>

            <div
              style={{
                width: "36px",
                height: "1.5px",
                backgroundColor: "var(--color-primary)",
                marginBottom: "1.2rem",
              }}
            />

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.88rem",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.7,
                maxWidth: "240px",
              }}
            >
              {f.tagline}
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                marginBottom: "1.5rem",
              }}
            >
              Navigate
            </p>
            <nav>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {f.nav.map((link) => (
                  <li key={link.href} style={{ marginBottom: "0.7rem" }}>
                    <Link
                      href={link.href}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.88rem",
                        color: "rgba(255,255,255,0.7)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary-light)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                marginBottom: "1.5rem",
              }}
            >
              Contact
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {f.contact.map((item, i) => (
                <li key={i} style={{ marginBottom: "1rem" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--color-primary-light)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.88rem",
                        color: "rgba(255,255,255,0.7)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                        whiteSpace: "pre-line",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.88rem",
                        color: "rgba(255,255,255,0.7)",
                        whiteSpace: "pre-line",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.value}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Hours / CTA column */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                marginBottom: "1.5rem",
              }}
            >
              Get Started
            </p>

            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.1rem",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.5,
                marginBottom: "1.5rem",
              }}
            >
              Ready to take the first step?
            </p>

            <Link href="/contact" className="btn-outline-white" style={{ marginBottom: "1rem", display: "inline-block" }}>
              Free 15-Min Consult
            </Link>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.4)",
                marginTop: "1.5rem",
                lineHeight: 1.6,
              }}
            >
              Mon–Fri 9am–6pm CT
              <br />
              Select Saturdays available
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div
          style={{
            maxWidth: "1280px",
            margin: "3rem auto 0",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "2rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.3)",
              lineHeight: 1.6,
              maxWidth: "680px",
            }}
          >
            {f.disclaimer}
          </p>
        </div>
      </div>

      {/* Bottom primary bar */}
      <div
        style={{
          backgroundColor: "var(--color-primary-dark)",
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.7rem",
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.06em",
          }}
        >
          {f.copyright}
        </p>

        <div className="flex gap-6">
          <a
            href="#"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
              letterSpacing: "0.06em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
          >
            Privacy Policy
          </a>
          <a
            href="#"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
              letterSpacing: "0.06em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
          >
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}
