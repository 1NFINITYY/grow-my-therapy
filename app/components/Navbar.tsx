"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { therapist } from "@/data/therapist";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on ESC key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Our Office", href: "/#office" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(247,245,240,0.97)" : "rgba(247,245,240,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid #E3DDD3" : "1px solid transparent",
        }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{ maxWidth: "1280px", padding: "1.1rem clamp(1rem, 4vw, 2rem)" }}
        >
          {/* Logo */}
          <Link href="/" className="flex flex-col" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.15rem",
                fontWeight: 600,
                color: "var(--color-charcoal)",
                letterSpacing: "0.01em",
                lineHeight: 1.2,
              }}
            >
              {therapist.name}
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                fontWeight: 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-charcoal-muted)",
              }}
            >
              {therapist.credentials} &bull; {therapist.location}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--color-charcoal)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-charcoal)")}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary"
              style={{ padding: "0.6rem 1.5rem", fontSize: "0.65rem" }}
            >
              Book a Consult
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
          >
            <span style={{ display: "block", width: "22px", height: "1.5px", backgroundColor: "var(--color-charcoal)", transition: "all 0.3s" }} />
            <span style={{ display: "block", width: "16px", height: "1.5px", backgroundColor: "var(--color-charcoal)", transition: "all 0.3s" }} />
            <span style={{ display: "block", width: "22px", height: "1.5px", backgroundColor: "var(--color-charcoal)", transition: "all 0.3s" }} />
          </button>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 100,
          display: "flex",
          pointerEvents: open ? "all" : "none",
        }}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(20,20,20,0.5)",
            opacity: open ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />

        {/* Drawer panel - slides in from the right */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "min(88vw, 380px)",
            backgroundColor: "#1C1F1E",
            display: "flex",
            flexDirection: "column",
            transform: open ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.45s cubic-bezier(0.77,0,0.175,1)",
            overflowY: "auto",
          }}
        >
          {/* Green accent stripe at top */}
          <div
            style={{
              height: "4px",
              background: "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
              flexShrink: 0,
            }}
          />

          {/* Header row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1.5rem 1.75rem",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              flexShrink: 0,
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "white",
                  lineHeight: 1.2,
                }}
              >
                {therapist.name}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.38)",
                  marginTop: "0.25rem",
                }}
              >
                {therapist.credentials}
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.05)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "background 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.15)";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1L13 13M13 1L1 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <nav
            style={{
              flex: 1,
              padding: "2rem 1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group"
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "1rem",
                  padding: "1.1rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  transform: open ? "translateX(0)" : "translateX(24px)",
                  opacity: open ? 1 : 0,
                  transitionDelay: open ? `${0.15 + i * 0.06}s` : "0s",
                }}
                onMouseEnter={(e) => {
                  const num = e.currentTarget.querySelector(".link-num") as HTMLElement;
                  const label = e.currentTarget.querySelector(".link-label") as HTMLElement;
                  if (num) num.style.color = "var(--color-primary)";
                  if (label) label.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  const num = e.currentTarget.querySelector(".link-num") as HTMLElement;
                  const label = e.currentTarget.querySelector(".link-label") as HTMLElement;
                  if (num) num.style.color = "rgba(255,255,255,0.2)";
                  if (label) label.style.color = "rgba(255,255,255,0.7)";
                }}
              >
                <span
                  className="link-num"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.6rem",
                    color: "rgba(255,255,255,0.2)",
                    letterSpacing: "0.08em",
                    transition: "color 0.2s ease",
                    minWidth: "20px",
                    paddingTop: "0.35rem",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="link-label"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.9rem",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.15,
                    transition: "color 0.2s ease",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Footer area */}
          <div
            style={{
              padding: "1.5rem 1.75rem 2rem",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              flexShrink: 0,
            }}
          >
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "center",
                padding: "0.95rem 1.5rem",
                backgroundColor: "var(--color-primary)",
                color: "white",
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "1.5px solid var(--color-primary)",
                transition: "background-color 0.25s ease, color 0.25s ease",
                marginBottom: "1.25rem",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-primary)";
                (e.currentTarget as HTMLAnchorElement).style.color = "white";
              }}
            >
              Book a Consult
            </Link>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.6rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
                textAlign: "center",
              }}
            >
              {therapist.location}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
