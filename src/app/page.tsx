"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const logoRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const mockupLeftRef = useRef<HTMLDivElement>(null);
  const mockupRightRef = useRef<HTMLDivElement>(null);
  const mockupMobileRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Main layout intro
    tl.to(logoRef.current, { opacity: 1, duration: 0.8 }, 0.1)
      .to(leftRef.current, { opacity: 1, duration: 1.2, ease: "expo.out" }, 0.3)
      .to([mockupLeftRef.current, mockupRightRef.current], { opacity: 1, duration: 1.5, ease: "power2.out" }, 0.5)
      .to(cardRef.current, { opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.7)" }, 0.8);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
      setEmail("");
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page-wrapper">
      {/* ── NAV ── */}
      <header className="top-bar">
        <div ref={logoRef} className="logo" style={{ opacity: 0 }}>NUDGE</div>
      </header>

      {/* ── HERO AREA ── */}
      <div className="hero-area">

        {/* LEFT: Title + subtitle */}
        <div ref={leftRef} className="hero-left" style={{ opacity: 0 }}>
          <p className="hero-eyebrow">🎮 Next-gen focus app · Early Access</p>
          <h1 className="hero-title">
            Live more.<br />Scroll less.
          </h1>
          <p className="hero-subtitle">
            The only app that <strong>nudges you back</strong> to the real world.
          </p>
        </div>

        {/* CENTER: Floating waitlist card */}
        <div ref={cardRef} className="center-card" style={{ opacity: 0, scale: 0.95 }}>
          <div className="card-accent-strip" />
          <div className="card-body">
            <div className="card-header-row">
              <div>
                <h3 className="card-title">JOIN THE WAITLIST</h3>
                <p className="card-desc">Be one of the first players</p>
              </div>
            </div>

            <div className="card-divider" />

            {!submitted ? (
              <form onSubmit={handleSubmit} className="card-form">
                <label className="form-label">ENTER YOUR EMAIL</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="email-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  required
                />

                {errorMsg && (
                  <div className="error-msg" style={{ color: "var(--red-500)", fontSize: "0.85rem", marginTop: "-0.5rem", marginBottom: "0.5rem", fontWeight: 500 }}>
                    {errorMsg}
                  </div>
                )}

                <button type="submit" className="button-action" disabled={loading} style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}>
                  {loading ? "JOINING..." : "GET EARLY ACCESS"}
                </button>

                <div className="privacy-note">
                  No spam. Unsubscribe anytime.
                </div>
              </form>
            ) : (
              <div className="success-msg">
                You&apos;re in! Check your inbox.
              </div>
            )}
          </div>
        </div>

        {/* MOCKUPS WRAPPER */}
        <div className="mockups-wrapper">
          {/* MOBILE MOCKUP */}
          <div ref={mockupMobileRef} className="mockup-mobile" style={{ opacity: 1 }}>
            <Image
              src="/phonemock.png"
              alt="Nudge App Preview Mobile"
              className="mockup-img"
              width={1200}
              height={1000}
              priority
            />
          </div>

          {/* LEFT MOCKUP */}
          <div ref={mockupLeftRef} className="mockup-left" style={{ opacity: 0 }}>
            <Image
              src="/mock1.png"
              alt="Nudge App Preview"
              className="mockup-img"
              width={1200}
              height={1000}
              priority
            />
          </div>

          {/* RIGHT MOCKUP */}
          <div ref={mockupRightRef} className="mockup-right" style={{ opacity: 0 }}>
            <Image
              src="/mock2.png"
              alt="Nudge App Preview 2"
              className="mockup-img"
              width={1200}
              height={1000}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
