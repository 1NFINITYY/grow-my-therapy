"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { therapist } from "@/data/therapist";

const C = {
  bg: "var(--color-cream, #F7F5F0)",
  dark: "var(--color-charcoal, #2A2A2A)",
  teal: "var(--color-primary, #4A7C6F)",
  tealDark: "var(--color-primary-dark, #3a6258)",
  muted: "var(--color-charcoal-muted, #6B7280)",
  border: "var(--color-cream-muted, #E3DDD3)",
  surface: "var(--color-cream-dark, #EDE9E1)",
};

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preference: "email",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.85rem 1rem",
    backgroundColor: "white",
    border: `1px solid ${C.border}`,
    fontFamily: "var(--font-sans)",
    fontSize: "0.88rem",
    color: C.dark,
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    borderRadius: "2px",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontSize: "0.68rem",
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: C.dark,
    display: "block",
    marginBottom: "0.5rem",
  };

  return (
    <div style={{ backgroundColor: C.bg, minHeight: "100vh" }}>
      <Navbar />

      {/* Header */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "3rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.68rem",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: C.teal,
            marginBottom: "1rem",
          }}
        >
          We'd love to hear from you
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
            fontWeight: 400,
            color: C.dark,
            marginBottom: "1rem",
            lineHeight: 1.2,
          }}
        >
          Let's start the{" "}
          <span
            style={{
              fontFamily: "var(--font-script)",
              color: C.teal,
              fontSize: "1.15em",
            }}
          >
            conversation
          </span>
          .
        </h1>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.92rem",
            color: C.muted,
            maxWidth: "540px",
            margin: "0 auto",
            lineHeight: 1.8,
          }}
        >
          Reaching out is the hardest part. Fill out the form below and we'll get
          back to you within one business day to schedule your free 15-minute consultation.
        </p>
      </section>

      {/* Main content */}
      <section
        className="max-w-[1120px] mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16"
      >
        {/* Left: Contact info */}
        <div>
          <div style={{ marginBottom: "2.5rem" }}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.68rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: C.teal,
                marginBottom: "1.5rem",
              }}
            >
              Contact Information
            </p>
            {[
              {
                label: "Phone",
                value: therapist.phone,
                href: `tel:${therapist.phone.replace(/[^0-9+]/g, "")}`,
              },
              {
                label: "Email",
                value: therapist.email,
                href: `mailto:${therapist.email}`,
              },
              {
                label: "Office Location",
                value: therapist.address,
                href: null,
              },
              {
                label: "Office Hours",
                value: "Monday – Friday: 9am – 6pm\nSelect Saturdays available",
                href: null,
              },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom: "1.6rem" }}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.65rem",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: C.teal,
                    marginBottom: "0.3rem",
                  }}
                >
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.92rem",
                      color: C.dark,
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = C.teal)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = C.dark)}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.92rem",
                      color: C.muted,
                      whiteSpace: "pre-line",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div
            style={{
              backgroundColor: C.surface,
              padding: "1.75rem",
              border: `1px solid ${C.border}`,
              borderRadius: "4px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.15rem",
                color: C.dark,
                marginBottom: "0.75rem",
                lineHeight: 1.4,
              }}
            >
              Telehealth available throughout California
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.85rem",
                color: C.muted,
                lineHeight: 1.7,
              }}
            >
              We offer secure, HIPAA-compliant video sessions for clients anywhere
              in California who prefer the comfort and flexibility of meeting from home.
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div>
          {submitted ? (
            <div
              style={{
                textAlign: "center",
                padding: "4rem 2rem",
                backgroundColor: "white",
                border: `1px solid ${C.border}`,
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: C.teal,
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.6rem",
                  margin: "0 auto 1.5rem",
                }}
              >
                ✓
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.9rem",
                  color: C.dark,
                  marginBottom: "1rem",
                }}
              >
                Thank you for reaching out.
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.92rem",
                  color: C.muted,
                  lineHeight: 1.8,
                  maxWidth: "460px",
                  margin: "0 auto",
                }}
              >
                We have received your message and will be in touch within one business
                day to schedule your free 15-minute consultation.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label style={labelStyle}>First &amp; Last Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = C.teal)}
                    onBlur={(e) => (e.target.style.borderColor = C.border)}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = C.teal)}
                    onBlur={(e) => (e.target.style.borderColor = C.border)}
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Email Address *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = C.teal)}
                  onBlur={(e) => (e.target.style.borderColor = C.border)}
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label style={labelStyle}>I'm interested in…</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={(e) => (e.target.style.borderColor = C.teal)}
                  onBlur={(e) => (e.target.style.borderColor = C.border)}
                >
                  <option value="">Select a service…</option>
                  <option>Individual Adult Psychotherapy</option>
                  <option>Trauma &amp; EMDR Therapy</option>
                  <option>Anxiety &amp; Panic Therapy</option>
                  <option>Burnout &amp; High-Pressure Support</option>
                  <option>California Telehealth Session</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>How would you prefer we contact you?</label>
                <div style={{ display: "flex", gap: "1.5rem" }}>
                  {["email", "phone", "either"].map((opt) => (
                    <label
                      key={opt}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        cursor: "pointer",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.85rem",
                        color: C.muted,
                      }}
                    >
                      <input
                        type="radio"
                        name="preference"
                        value={opt}
                        checked={form.preference === opt}
                        onChange={() => setForm({ ...form, preference: opt })}
                        style={{ accentColor: C.teal }}
                      />
                      {opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label style={labelStyle}>What brings you here?</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => (e.target.style.borderColor = C.teal)}
                  onBlur={(e) => (e.target.style.borderColor = C.border)}
                  placeholder="Share as much or as little as you'd like. There's no pressure."
                />
              </div>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  color: C.muted,
                  lineHeight: 1.6,
                }}
              >
                Your information is private, strictly confidential, and HIPAA-protected.
                We will never share your information.
              </p>

              <button
                type="submit"
                style={{
                  padding: "0.95rem 2.5rem",
                  backgroundColor: C.teal,
                  color: "white",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.25s ease, transform 0.15s ease",
                  alignSelf: "flex-start",
                  borderRadius: "2px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.tealDark)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.teal)}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
