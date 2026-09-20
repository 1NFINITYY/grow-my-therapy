import { therapist } from "@/data/therapist";

export default function QuoteBanner() {
  const q = therapist.quote;

  return (
    <section
      id="quote"
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(300px, 45vw, 520px)",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={q.image}
        alt={q.alt}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(30, 42, 38, 0.55)",
        }}
      />

      {/* Quote content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        {/* Decorative line */}
        <div
          style={{
            width: "40px",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.5)",
            marginBottom: "1.5rem",
          }}
        />

        <blockquote
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.3rem, 3vw, 2.1rem)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "white",
            maxWidth: "760px",
            lineHeight: 1.5,
            marginBottom: "1.2rem",
          }}
        >
          &ldquo;{q.text}&rdquo;
        </blockquote>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          — {q.author}
        </p>

        {/* Decorative line */}
        <div
          style={{
            width: "40px",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.5)",
            marginTop: "1.5rem",
          }}
        />
      </div>
    </section>
  );
}
