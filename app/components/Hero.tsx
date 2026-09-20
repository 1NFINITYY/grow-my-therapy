import Link from "next/link";
import { therapist } from "@/data/therapist";

export default function Hero() {
  const h = therapist.hero;

  return (
    <section
      id="hero"
      style={{
        backgroundColor: "var(--color-cream)",
        paddingTop: "clamp(6rem, 14vw, 10rem)",
        paddingBottom: "0",
      }}
    >
      {/* Top text content */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.25rem 3rem",
        }}
      >
        {/* Label */}
        <p className="section-label" style={{ marginBottom: "1.5rem" }}>
          {h.label}
        </p>

        {/* Main heading */}
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3rem, 7vw, 6rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            color: "var(--color-charcoal)",
            marginBottom: "2rem",
            maxWidth: "800px",
          }}
        >
          {h.headingLine1}{" "}
          <em
            style={{
              fontFamily: "var(--font-script)",
              fontStyle: "normal",
              color: "var(--color-primary)",
              fontSize: "1.15em",
            }}
          >
            {h.headingAccent}
          </em>{" "}
          {h.headingLine2}
        </h1>

        {/* Description + CTAs row */}
        <div
          className="flex flex-col md:flex-row md:items-end gap-8"
          style={{ maxWidth: "900px" }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "var(--color-charcoal-muted)",
              maxWidth: "520px",
              flex: 1,
            }}
          >
            {h.description}
          </p>

          <div className="flex flex-col gap-4 md:items-end" style={{ flexShrink: 0 }}>
            <Link href={h.ctaHref} className="btn-primary">
              {h.ctaText}
            </Link>
            <Link href={h.secondaryHref} className="link-underline">
              {h.secondaryText}
            </Link>
          </div>
        </div>
      </div>

      {/* Full-width hero image */}
      <div
        style={{
          width: "100%",
          height: "clamp(320px, 55vw, 650px)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=1800&q=80"
          alt="Peaceful nature scene representing calm and healing in therapy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
          }}
        />
        {/* Subtle bottom gradient for blending */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "80px",
            background: "linear-gradient(to top, var(--color-cream-dark), transparent)",
          }}
        />
      </div>
    </section>
  );
}
