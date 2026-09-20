"use client";

import { useState } from "react";
import { therapist } from "@/data/therapist";

export default function FAQ() {
  const faq = therapist.faqs;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        backgroundColor: "var(--color-cream)",
        padding: "clamp(4rem, 8vw, 7rem) 1.25rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(2.5rem, 5vw, 4rem)",
            alignItems: "start",
          }}
        >
          {/* Left: Label + heading (sticky on desktop only) */}
          <div className="faq-sticky">
            <p className="section-label" style={{ marginBottom: "1.2rem" }}>
              {faq.label}
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
              {faq.heading}
            </h2>

            <div
              style={{
                width: "48px",
                height: "2px",
                backgroundColor: "var(--color-accent)",
              }}
            />

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.88rem",
                color: "var(--color-charcoal-muted)",
                lineHeight: 1.7,
                marginTop: "1.5rem",
              }}
            >
              Have a question not answered here?{" "}
              <a href="#contact" className="link-underline-primary" style={{ fontSize: "0.88rem" }}>
                Reach out directly.
              </a>
            </p>
          </div>

          {/* Right: Accordion */}
          <div>
            {faq.items.map((item, i) => (
              <div
                key={i}
                style={{
                  borderTop: "1px solid var(--color-cream-muted)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1.6rem 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "1rem",
                  }}
                  aria-expanded={openIndex === i}
                  id={`faq-button-${i}`}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.2rem",
                      fontWeight: 500,
                      color: "var(--color-charcoal)",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.question}
                  </span>

                  <span
                    style={{
                      flexShrink: 0,
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      border: "1px solid var(--color-cream-muted)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1rem",
                      color: "var(--color-primary)",
                      transition: "transform 0.3s ease, background-color 0.3s ease",
                      transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                      backgroundColor: openIndex === i ? "var(--color-primary)" : "transparent",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 1V11M1 6H11"
                        stroke={openIndex === i ? "white" : "var(--color-primary)"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  style={{
                    maxHeight: openIndex === i ? "400px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.4s ease",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.92rem",
                      lineHeight: 1.8,
                      color: "var(--color-charcoal-muted)",
                      paddingBottom: "1.8rem",
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}

            {/* Bottom border */}
            <div style={{ borderTop: "1px solid var(--color-cream-muted)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
