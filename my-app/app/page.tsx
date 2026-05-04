"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const members = [
    {
      id: "IT22889324",
      name: "Udayakumara W.D.L.",
      role: "Stage-Based Disease & Pest Detection",
      jobTitle: "Software Engineer",
      image: "/assets/Udayakumara.png",
      email: "udayakumara.wdl@gmail.com",
      linkedin: "https://www.linkedin.com/in/lahiruudayakumara/",
    },
    {
      id: "IT22319692",
      name: "N. A. D. Nimsara",
      role: "Fertilizer Recommendation System",
      jobTitle: "UI/UX Designer & Front End Developer",
      image: "/assets/Nimsara.png",
      email: "nimsaraduvindu@gmail.com",
      linkedin: "https://www.linkedin.com/in/duvindu-nimsara/",
    },
    {
      id: "IT22308498",
      name: "Jayawardana N.G.U.D.",
      role: "Yield Prediction & Weather Support",
      jobTitle: "Business Analyst",
      image: "/assets/Jayawardana.png",
      email: "udaridevindi@gmail.com",
      linkedin: "https://www.linkedin.com/in/udari-devindi-724496246/",
    },
    {
      id: "IT22312044",
      name: "Malmi W.U.",
      role: "Oil Yield Prediction & Distillation Support",
      jobTitle: "Software Engineer",
      image: "/assets/Malmi.png",
      email: "malmiwithanage@gmail.com",
      linkedin: "https://www.linkedin.com/in/malmi-withanage/",
    },
  ];

  const features = [
    {
      title: "Smart Fertilizer",
      desc: "ML-driven fertilizer suggestions from soil & leaf images combined, tailored specifically for cinnamon",
    },
    {
      title: "Disease Detection",
      desc: "Stage-based image classification for cinnamon leaves & bark with actionable pest and disease recommendations",
    },
    {
      title: "Yield Prediction",
      desc: "Real-time weather integration with plot and plant stage based advisories backed by historical yield data",
    },
    {
      title: "Oil Production",
      desc: "ML-driven prediction of cinnamon oil yield with dynamic estimation of optimal drying and distillation time",
    },
  ];

  const milestones = [
    { month: "9th September 2025", title: "Project Proposal", desc: "Problem identification, literature review, and system design.", side: "left" },
    { month: "6th January 2026", title: "Progress Presentation I", desc: "Data collection and initial model development.", side: "right" },
    { month: "10th March 2026", title: "Progress Presentation II", desc: "Model training, validation, and integration testing.", side: "left" },
    { month: "08th May 2026", title: "Research Paper Submission", desc: "Individual contributions to cinnamon-focused AI research.", side: "right" },
    { month: "13th May 2026", title: "Final Report", desc: "Comprehensive evaluation of system performance and findings.", side: "left" },
    { month: "6th May 2026", title: "Final Presentation and Viva", desc: "Individual and group assessment.", side: "right" },
    { month: "6th May 2026", title: "Website Assessment", desc: "Public research dissemination.", side: "left" },
    { month: "6th May 2026", title: "Logbook Submission", desc: "Project documentation and progress validation.", side: "right" },
    { month: "13th May 2026", title: "Final Thesis Submission", desc: "Complete thesis documentation and submission.", side: "left" },
    { month: "15th June 2026", title: "Research Paper Publication Evidence", desc: "Submit evidence of research paper publication.", side: "right" },
  ];

  const documents = [
    { title: "Project Proposal", href: "https://drive.google.com/drive/folders/1YaZrzMXIkn1NG0HsrT8mIARBVUFQc_ho" },
    { title: "Checklist 1", href: "https://drive.google.com/drive/folders/1Xue1jWuSXWUXE-h6sDlVjq8pPdNukUIb?usp=sharing" },
    { title: "Progress Presentation - 1", href: "https://drive.google.com/file/d/1USebwi98WGmgTetNZ5Uppd-d1h0phydd/view?usp=sharing" },
    { title: "Progress Presentation - 2", href: "https://drive.google.com/file/d/1KxQvXsZhFrd7EY1PC43h1CNPxvM9Knhz/view?usp=sharing" },
    { title: "Final Report & Presentation", href: "https://drive.google.com/drive/folders/1KltGdBX7EubXECDrSngbb_gvo_p2wJet?usp=sharing" },
    { title: "Checklist 2", href: "https://drive.google.com/drive/folders/1Yl10rMniYXg_7dY_idzDr5U7t5EFhgYU?usp=sharing" },
    { title: "Research Paper", href: "#" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --forest: #1a3d2b;
          --moss: #2d5a3d;
          --fern: #4a7c59;
          --sage: #7aab8a;
          --mist: #c8ddd0;
          --cream: #ffffff;
          --gold: #c8a84b;
          --bark: #6b4c2a;
          --white: #ffffff;
          --ink: #0d1f17;
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'DM Sans', sans-serif;
          background: var(--cream);
          color: var(--ink);
          overflow-x: hidden;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        /* ── NAV ── */
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 1.2rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.4s ease;
        }
        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--white);
          letter-spacing: -0.5px;
        }
        .nav-logo.scrolled { color: var(--forest); }
        .nav-logo span { color: var(--sage); }
        .nav-links { display: flex; gap: 2.5rem; list-style: none; }
        .nav-links a {
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          opacity: 0.85;
          transition: opacity 0.3s ease, color 0.3s ease;
          padding: 0.5rem 0.75rem;
          border-radius: 4px;
        }
        .nav-links a { color: rgba(255,255,255,0.9); }
        .nav-links.scrolled a { color: var(--forest); }
        .nav-links a:hover { opacity: 1; }
        .nav-links a:focus { outline: 2px solid var(--gold); outline-offset: 2px; }

        /* ── HERO ── */
        .hero {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 8rem 3rem 5rem;
        }
        .hero-bg-image {
          position: absolute;
          inset: 0;
          background-image: url('/assets/cinnamonheader.webp');
          background-size: cover;
          background-position: center 40%;
          z-index: 0;
        }
        .hero-bg-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            rgba(13,31,23,0.82) 0%,
            rgba(26,61,43,0.72) 45%,
            rgba(45,90,61,0.45) 100%
          );
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
          justify-items: center;
          text-align: center;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(200,168,75,0.18);
          border: 1px solid rgba(200,168,75,0.35);
          color: var(--gold);
          padding: 0.4rem 1rem;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.8rem, 5vw, 4.5rem);
          font-weight: 900;
          color: var(--white);
          line-height: 1.05;
          letter-spacing: -2px;
          margin-bottom: 1.5rem;
        }
        .hero-title em { font-style: italic; color: var(--sage); }
        .hero-sub {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.70);
          line-height: 1.7;
          margin: 0 auto 2.5rem;
          font-weight: 300;
          max-width: 480px;
        }
        .hero-cta { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }
        .btn-primary {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: var(--gold); color: var(--forest);
          padding: 1rem 2.25rem; border-radius: 6px;
          font-weight: 600; font-size: 1rem;
          text-decoration: none; letter-spacing: 0.02em;
          transition: all 0.3s ease; border: 2px solid transparent; cursor: pointer;
        }
        .btn-primary:hover { background: #d4b460; transform: translateY(-2px); box-shadow: 0 12px 32px rgba(200,168,75,0.5); }
        .btn-primary:focus { outline: 2px solid var(--forest); outline-offset: 2px; }
        .btn-outline {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: transparent; color: var(--white);
          padding: 1rem 2.25rem; border-radius: 6px;
          font-weight: 500; font-size: 1rem;
          text-decoration: none; letter-spacing: 0.02em;
          transition: all 0.3s ease; border: 2px solid rgba(255,255,255,0.5); cursor: pointer;
        }
        .btn-outline:hover { background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.8); }
        .btn-outline:focus { outline: 2px solid var(--gold); outline-offset: 2px; }

        .hero-content {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  gap: 40px;
}

/* wrapper */
.hero-image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
}

/* wrapper = controls size + shadow */
.hero-image-wrapper {
  position: relative;
  width: 130%;
  margin-left: -25%; /* center the enlarged box */

  border-radius: 20px;
  overflow: hidden; /* IMPORTANT: clips image cleanly */

  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.35);
}

/* image = just fills wrapper */
.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;

  transform: scale(1.2); /* slight zoom instead of breaking layout */
  opacity: 0.95;

  animation: float 6s ease-in-out infinite;
}

/* blend overlay stays perfectly aligned now */
.hero-image-wrapper::after {
  content: "";
  position: absolute;
  inset: 0;

  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0.85) 100%
  );
}

        .scroll-line {
          position: absolute; bottom: 2rem; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
          color: rgba(255,255,255,0.4); font-size: 0.7rem;
          letter-spacing: 0.15em; text-transform: uppercase;
          animation: fadeInUp 2s ease 1s both;
        }
        .scroll-line::after {
          content: ''; width: 1px; height: 50px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.4), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.3); }
        }

        /* ── SECTIONS ── */
        section { padding: 7rem 3rem; }
        .section-inner { max-width: 1200px; margin: 0 auto; }
        .section-label {
          font-size: 0.72rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--fern); margin-bottom: 1rem;
          display: flex; align-items: center; gap: 0.75rem;
        }
        .section-label::before {
          content: ''; display: block;
          width: 2rem; height: 1px; background: var(--fern);
        }
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3rem); font-weight: 700;
          color: var(--forest); line-height: 1.2;
          letter-spacing: -1.5px; margin-bottom: 1.5rem;
        }
        .section-desc {
          font-size: 1.1rem; color: #3d4f47;
          line-height: 1.75; max-width: 650px; font-weight: 400;
        }
        .divider {
          width: 60px; height: 3px;
          background: linear-gradient(90deg, var(--fern), var(--sage));
          border-radius: 2px; margin: 1.5rem 0;
        }

        /* ── PROBLEM SECTION ── */
        .problem-section { background: var(--cream); }
        .problem-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 4rem;
        }
        .problem-card {
          background: var(--white);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(74,124,89,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .problem-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(26,61,43,0.1);
        }
        .problem-card-image-wrap {
          overflow: hidden;
          height: 200px;
          position: relative;
        }
        .problem-card-body {
          padding: 1.5rem 1.75rem 1.75rem;
        }
        .problem-num {
          font-family: 'Playfair Display', serif;
          font-size: 0.75rem; font-weight: 700;
          color: var(--fern); letter-spacing: 0.12em;
          text-transform: uppercase; margin-bottom: 0.5rem;
        }
        .problem-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem; font-weight: 700;
          color: var(--forest); margin-bottom: 0.6rem;
          line-height: 1.25;
        }
        .problem-text {
          font-size: 0.95rem; color: #3d4f47;
          line-height: 1.7; font-weight: 400;
        }
        .problem-impact-card {
          grid-column: span 2;
          background: linear-gradient(145deg, var(--forest), var(--moss));
          border-radius: 16px; padding: 3rem;
          color: white; position: relative; overflow: hidden;
        }
        .problem-impact-card::before {
          content: '';
          position: absolute; top: -30%; right: -20%;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(200,168,75,0.2), transparent);
          border-radius: 50%;
        }
        .impact-inner { position: relative; z-index: 1; }
        .impact-list { list-style: none; display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem; }
        .impact-list li {
          display: flex; align-items: center; gap: 0.75rem;
          font-size: 0.9rem; color: var(--forest); font-weight: 500;
        }
        .impact-list li::before {
          content: ''; width: 6px; height: 6px;
          border-radius: 50%; background: var(--gold); flex-shrink: 0;
        }

        /* ── FEATURES ── */
        .features-section {
          background: var(--forest);
          position: relative; overflow: hidden;
        }
        .features-section::before {
          content: ''; position: absolute; inset: 0;
          background-image: radial-gradient(circle at 90% 50%, rgba(74,124,89,0.3) 0%, transparent 60%);
        }
        .features-section .section-label { color: var(--sage); }
        .features-section .section-label::before { background: var(--sage); }
        .features-section .section-title { color: var(--white); }
        .features-section .section-desc { color: rgba(255,255,255,0.55); }
        .features-grid {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem; margin-top: 4rem; position: relative; z-index: 1;
        }
        .feature-card {
          padding: 2rem; border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          transition: all 0.3s ease; position: relative; overflow: hidden;
        }
        .feature-card::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--fern));
          transform: scaleX(0); transform-origin: left; transition: transform 0.4s ease;
        }
        .feature-card:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.15); transform: translateY(-4px); }
        .feature-card:hover::before { transform: scaleX(1); }
        .feature-num {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem; font-weight: 700;
          color: rgba(255,255,255,0.08); line-height: 1;
          margin-bottom: 1rem;
        }
        .feature-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem; font-weight: 700;
          color: var(--white); margin-bottom: 0.75rem;
        }
        .feature-desc { font-size: 0.95rem; color: rgba(255,255,255,0.65); line-height: 1.7; font-weight: 400; }

        /* ── TEAM ── */
        .team-section { background: linear-gradient(180deg, #f0ebe0 0%, var(--cream) 100%); }
        .team-card {
          background: var(--white); border-radius: 16px; overflow: hidden;
          border: 1px solid rgba(74,124,89,0.1);
          transition: all 0.35s ease; position: relative;
        }
        .team-card:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(26,61,43,0.12); border-color: rgba(74,124,89,0.25); }
        .team-card-header {
          padding: 2rem 2rem 1.5rem;
          display: flex; align-items: flex-start; gap: 1.25rem;
          border-bottom: 1px solid rgba(74,124,89,0.07);
        }
        .team-initials {
          width: 56px; height: 56px; border-radius: 50%;
          background: linear-gradient(135deg, var(--fern), var(--sage));
          display: flex; align-items: center; justify-content: center;
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem; font-weight: 700; color: white;
          flex-shrink: 0; letter-spacing: -0.5px;
        }
        .team-id { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; color: var(--fern); text-transform: uppercase; margin-bottom: 0.25rem; }
        .team-name { font-family: 'Playfair Display', serif; font-size: 1.2rem; font-weight: 700; color: var(--forest); line-height: 1.2; margin-bottom: 0.25rem; }
        .team-role { font-size: 0.82rem; color: var(--fern); font-weight: 500; }
        .team-card-body { padding: 1.5rem 2rem; }
        .team-desc { font-size: 0.95rem; color: #3d4f47; line-height: 1.7; margin-bottom: 1.25rem; font-weight: 400; }
        .team-accuracy {
          display: inline-flex; align-items: center; gap: 0.4rem;
          background: rgba(74,124,89,0.08); color: var(--moss);
          padding: 0.3rem 0.8rem; border-radius: 100px;
          font-size: 0.78rem; font-weight: 600; margin-bottom: 1rem;
        }
        .tech-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .tech-tag {
          font-size: 0.72rem; font-weight: 500;
          padding: 0.25rem 0.65rem; border-radius: 4px;
          background: rgba(26,61,43,0.06); color: var(--moss);
          border: 1px solid rgba(26,61,43,0.1); letter-spacing: 0.02em;
        }

        /* ── TIMELINE ── */
        .tl-wrap {
          position: relative;
          max-width: 1000px;
          margin: 3rem auto 0;
          padding: 4px 0;
        }
        .tl-line {
          position: absolute;
          left: 50%; top: 0; bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, var(--fern), var(--sage));
          transform: translateX(-50%);
          z-index: 0;
        }
        .tl-row {
          display: grid;
          grid-template-columns: 1fr 40px 1fr;
          align-items: start;
          position: relative;
          z-index: 1;
          margin-bottom: 1.5rem;
        }
        .tl-dot-col {
          display: flex;
          justify-content: center;
          padding-top: 18px;
        }
        .tl-dot {
          width: 22px; height: 22px; border-radius: 50%;
          background: linear-gradient(135deg, var(--fern), var(--sage));
          border: 3px solid var(--cream);
          box-shadow: 0 0 0 4px rgba(74,124,89,0.18);
          flex-shrink: 0;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .tl-row:hover .tl-dot {
          transform: scale(1.2);
          box-shadow: 0 0 0 6px rgba(74,124,89,0.15);
        }
        .tl-card {
          background: var(--white);
          border: 1px solid rgba(74,124,89,0.13);
          border-radius: 14px;
          padding: 1.4rem 1.5rem 1.3rem;
          margin-top: 4px;
          position: relative;
          padding-top: 2.1rem;
          cursor: pointer;
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .tl-card:hover {
          box-shadow: 0 10px 28px rgba(74,124,89,0.13);
          transform: translateY(-4px);
        }
        .tl-left .tl-card { margin-right: 14px; }
        .tl-right .tl-card { margin-left: 14px; }
        .tl-empty {}
        .tl-badge {
          position: absolute;
          top: -12px; left: 1.25rem;
          background: var(--fern); color: white;
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.07em; padding: 3px 10px;
          border-radius: 20px;
        }
        .tl-title {
          font-family: 'Playfair Display', serif;
          font-size: 1rem; font-weight: 700;
          color: var(--forest); margin-bottom: 0.4rem;
          line-height: 1.3;
        }
        .tl-desc { font-size: 0.9rem; color: #5a7a6a; line-height: 1.65; font-weight: 400; }

        /* ── TECH STACK ── */
        .tech-section { background: var(--cream); }
        .tech-overview { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 4rem; }
        .tech-group { padding: 2rem; border-radius: 12px; background: var(--white); border: 1px solid rgba(74,124,89,0.1); }
        .tech-group-title { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: var(--fern); margin-bottom: 1.25rem; padding-bottom: 0.75rem; border-bottom: 1px solid rgba(74,124,89,0.1); }
        .tech-items { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; }
        .tech-items li { font-size: 0.9rem; color: var(--forest); display: flex; align-items: center; gap: 0.6rem; }
        .tech-items li::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: var(--sage); flex-shrink: 0; }

        /* ── COMMERCIALIZATION ── */
        .commercial-section {
          background: linear-gradient(135deg, var(--forest) 0%, #0d2b1a 100%);
          position: relative; overflow: hidden;
        }
        .commercial-section::before {
          content: ''; position: absolute;
          bottom: 0; right: 0; width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(74,124,89,0.2), transparent 70%);
          transform: translate(30%, 30%);
        }
        .commercial-section .section-label { color: var(--gold); }
        .commercial-section .section-label::before { background: var(--gold); }
        .commercial-section .section-title { color: var(--white); }
        .commercial-section .section-desc { color: rgba(255,255,255,0.55); }
        .commercial-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 4rem; align-items: start; margin-top: 4rem; position: relative; z-index: 1; }
        .pricing-cards { display: flex; flex-direction: column; gap: 1rem; }
        .pricing-card {
          display: flex; justify-content: space-between; align-items: center;
          padding: 1.25rem 1.75rem; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05); transition: all 0.25s;
        }
        .pricing-card:hover { background: rgba(255,255,255,0.1); border-color: rgba(200,168,75,0.4); }
        .pricing-card.featured { background: rgba(200,168,75,0.12); border-color: rgba(200,168,75,0.35); }
        .pricing-tier { font-size: 0.85rem; color: rgba(255,255,255,0.7); font-weight: 500; }
        .pricing-price { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: var(--gold); }
        .pricing-period { font-size: 0.7rem; color: rgba(255,255,255,0.4); font-weight: 400; }
        .value-props { display: flex; flex-direction: column; gap: 1rem; }
        .value-prop { display: flex; gap: 1rem; align-items: flex-start; }
        .value-prop-icon {
          width: 36px; height: 36px;
          background: rgba(200,168,75,0.15); border: 1px solid rgba(200,168,75,0.25);
          border-radius: 8px; display: flex; align-items: center; justify-content: center;
          font-size: 0.9rem; font-weight: 700; color: var(--gold);
          flex-shrink: 0; font-family: 'Playfair Display', serif;
        }
        .value-prop-text { font-size: 0.9rem; color: rgba(255,255,255,0.7); line-height: 1.55; font-weight: 300; }
        .value-prop-text strong { color: var(--white); font-weight: 600; display: block; margin-bottom: 0.15rem; font-size: 0.95rem; }

        /* ── FOOTER ── */
        footer { background: var(--ink); padding: 4rem 3rem 2.5rem; color: rgba(255,255,255,0.5); }
        .footer-inner { max-width: 1200px; margin: 0 auto; }
        .footer-top { display: flex; justify-content: space-between; align-items: flex-start; padding-bottom: 2.5rem; border-bottom: 1px solid rgba(255,255,255,0.08); margin-bottom: 2rem; }
        .footer-brand { font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 700; color: var(--white); margin-bottom: 0.5rem; }
        .footer-brand span { color: var(--sage); }
        .footer-tagline { font-size: 0.85rem; max-width: 300px; line-height: 1.6; }
        .footer-info { text-align: right; font-size: 0.82rem; line-height: 1.8; }
        .footer-info strong { color: rgba(255,255,255,0.8); display: block; margin-bottom: 0.25rem; }
        .footer-bottom { display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem; }
        .footer-bottom a { color: var(--sage); text-decoration: none; transition: color 0.2s; }
        .footer-bottom a:hover { color: var(--white); }

        /* ── SYSTEM DIAGRAM ── */
        .system-diagram-wrap {
  margin-top: 4rem;
  background: var(--white);
  border: 1px solid rgba(74,124,89,0.15);
  border-radius: 16px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center; /* ✅ centers everything inside */
}
        .system-diagram-header {
          padding: 1.5rem 2rem;
          border-bottom: 1px solid rgba(74,124,89,0.1);
          display: flex; align-items: center; gap: 1rem;
        }
        .system-diagram-dot {
          width: 10px; height: 10px; border-radius: 50%;
        }
        .system-diagram-title {
          font-family: 'Playfair Display', serif;
          font-size: 1rem; font-weight: 700;
          color: var(--forest);
        }
        .system-diagram-img {
  width: 60%;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 12px;
}

        /* ── ANIMATIONS ── */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-in { animation: fadeInUp 0.7s ease both; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }

        /* ── DOC CARD HOVER ── */
        .doc-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(26,61,43,0.1);
          border-color: rgba(74,124,89,0.3) !important;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          nav { padding: 1rem 1.5rem; }
          .nav-links { display: none; }
          section { padding: 4.5rem 1.5rem; }
          .hero { padding: 6rem 1.5rem 3rem; }
          .hero-content { grid-template-columns: 1fr; gap: 3rem; }
          .hero-right { display: none; }
          .problem-grid { grid-template-columns: 1fr; }
          .problem-impact-card { grid-column: span 1; }
          .impact-inner { grid-template-columns: 1fr; }
          .features-grid { grid-template-columns: 1fr 1fr; }
          .tech-overview { grid-template-columns: 1fr 1fr; }
          .commercial-grid { grid-template-columns: 1fr; }
          .footer-top { flex-direction: column; gap: 1.5rem; }
          .footer-info { text-align: left; }
          .footer-bottom { flex-direction: column; gap: 0.75rem; text-align: center; }
          .btn-primary, .btn-outline { padding: 0.95rem 2rem; font-size: 0.95rem; }
        }
        @media (max-width: 600px) {
          .features-grid { grid-template-columns: 1fr; }
          .tech-overview { grid-template-columns: 1fr; }
          .problem-grid { grid-template-columns: 1fr; }
          .btn-primary, .btn-outline { width: 100%; padding: 1rem; font-size: 1rem; }
          section { padding: 3.5rem 1rem; }
          .nav-logo { font-size: 1.2rem; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        background: scrollY > 60 ? "rgba(245,240,232,0.95)" : "transparent",
        backdropFilter: scrollY > 60 ? "blur(14px)" : "none",
        borderBottom: scrollY > 60 ? "1px solid rgba(74,124,89,0.12)" : "none",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <img src="/assets/logo.png" alt="CinoGrow" style={{ height: "40px", width: "auto" }} />
          <div className={`nav-logo ${scrollY > 60 ? "scrolled" : ""}`}>Cino<span>Grow</span></div>
        </div>
        <ul className={`nav-links ${scrollY > 60 ? "scrolled" : ""}`}>
          <li><a href="#research-overview">Our Research</a></li>
          <li><a href="#problem">Problem</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#milestones">Milestones</a></li>
          <li><a href="#documents">Documents</a></li>
        </ul>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" id="home">
        <div className="hero-bg-image" />
        <div className="hero-content">
          {/* LEFT: text */}
          <div>
            <div className="hero-badge animate-in">
              SLIIT Faculty of Computing · Group 25-26J-338
            </div>
            <h1 className="hero-title animate-in delay-1">
              <em>Smart farming</em><br />
              for Ceylon Cinnamon
            </h1>
            <p className="hero-sub animate-in delay-2">
              CinoGrow is the world's first ML-based decision support system built exclusively for cinnamon cultivation — covering yield, fertilizer, disease detection, weather, and oil production.
            </p>
            <div className="hero-cta animate-in delay-3">
              <a href="#features" className="btn-primary">Explore Features →</a>
              <a href="#team" className="btn-outline">Meet the Team</a>
            </div>
          </div>
        </div>
        <div className="scroll-line">Scroll</div>
      </section>

      {/* ── OUR RESEARCH ── */}
      <section style={{ background: "linear-gradient(180deg, var(--cream) 0%, #faf6f0 100%)" }} id="research-overview">
        <div className="section-inner">
          <div className="section-label">Our Research</div>
          <h2 className="section-title">Bridging research and<br />practical farm solutions</h2>
          <p className="section-desc">CinoGrow is an integrated Machine Learning framework exclusively designed for cinnamon cultivation in Sri Lanka, built on rigorous academic research and field data collection.</p>
          <div className="divider" />

          <div style={{ marginTop: "3.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.35rem", fontWeight: 700, color: "var(--forest)", marginBottom: "1rem" }}>Project Scope</h3>
                <p style={{ fontSize: "0.95rem", color: "#4a5e54", lineHeight: 1.7, marginBottom: "1.25rem", fontWeight: 300 }}>Our research covers four major agricultural domains through integrated machine learning:</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {[
                    "Nutrient deficiency identification using soil and leaf images",
                    "Stage-based disease and pest detection",
                    "Climate-integrated yield prediction and decision support",
                    "Cinnamon oil yield forecasting and distillation optimization"
                  ].map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.9rem", color: "var(--forest)" }}>
                      <span style={{ color: "var(--fern)", fontWeight: 700, marginTop: "2px", flexShrink: 0 }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: "var(--white)", padding: "2rem", borderRadius: "12px", border: "1px solid rgba(74,124,89,0.15)" }}>
                <h4 style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fern)", marginBottom: "1rem" }}>Primary Data Sources</h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                  {[
                    "National Cinnamon Research & Training Center",
                    "Field data from cinnamon farmers",
                    "Historical yield and climate records",
                    "Peer-reviewed agricultural and AI research"
                  ].map((source, i) => (
                    <li key={i} style={{ fontSize: "0.9rem", color: "var(--moss)", display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                      <span style={{ color: "var(--gold)", flexShrink: 0 }}>•</span> {source}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "4rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            <div style={{ background: "rgba(74,124,89,0.04)", padding: "2rem", borderRadius: "12px", border: "1px solid rgba(74,124,89,0.1)" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 700, color: "var(--forest)", marginBottom: "1.25rem" }}>Literature Review</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "CNN-based plant disease models achieve 90%+ accuracy on rice and maize",
                  "Soil analysis systems improve fertilizer optimization",
                  "Weather-driven yield forecasting using Random Forest and XGBoost",
                  "Essential oil extraction research using regression techniques"
                ].map((point, i) => (
                  <li key={i} style={{ fontSize: "0.85rem", color: "var(--forest)", paddingLeft: "1.25rem", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "var(--sage)" }}>→</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: "rgba(200,168,75,0.05)", padding: "2rem", borderRadius: "12px", border: "1px solid rgba(200,168,75,0.15)" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 700, color: "var(--forest)", marginBottom: "1.25rem" }}>Research Gap</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { label: "No cinnamon-specific systems", desc: "Existing tools are generalized for multiple crops" },
                  { label: "Fragmented solutions", desc: "No unified platform addresses the full farming cycle" },
                  { label: "Limited climate adaptation", desc: "Few systems integrate local Sri Lankan weather data" },
                  { label: "No oil optimization models", desc: "Missing ML support for distillation timing" }
                ].map((gap, i) => (
                  <li key={i} style={{ fontSize: "0.85rem", color: "var(--forest)" }}>
                    <strong style={{ color: "var(--bark)", display: "block", marginBottom: "0.2rem" }}>{gap.label}</strong>
                    <span style={{ color: "#6a8070" }}>{gap.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ marginTop: "4rem", background: "linear-gradient(135deg, var(--forest), var(--moss))", color: "white", padding: "3rem", borderRadius: "16px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(200,168,75,0.1), transparent)", borderRadius: "50%", zIndex: 0 }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Research Problem & Solution</h3>
              <p style={{ fontSize: "0.95rem", opacity: 0.85, marginBottom: "1.5rem", maxWidth: "600px", lineHeight: 1.7 }}>
                <strong>How can Machine Learning be integrated into a unified mobile platform to support Sri Lankan cinnamon farmers with accurate, stage-aware, and climate-informed agricultural decisions?</strong>
              </p>
              <p style={{ fontSize: "0.85rem", opacity: 0.75, lineHeight: 1.7 }}>Cinnamon farmers rely on traditional knowledge for fertilizer application, disease identification, and oil extraction. CinoGrow solves this by providing a context-aware, Sinhala-supported, AI-driven system that bridges research knowledge and practical farm-level decision-making.</p>
            </div>
          </div>

          <div style={{ marginTop: "4rem" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.35rem", fontWeight: 700, color: "var(--forest)", marginBottom: "2rem" }}>Specific Research Objectives</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
              {[
                { title: "Fertilizer Recommendation", desc: "Develop a dual-image analysis model using soil and leaf photographs to detect nutrient deficiencies and recommend precise fertilizer applications." },
                { title: "Disease & Pest Detection", desc: "Design a stage-aware CNN-based classification system to detect cinnamon diseases with actionable treatment guidance." },
                { title: "Yield Prediction", desc: "Implement a climate-integrated model using historical yield data and farm inputs to forecast plot-level yield and provide weather-based advisories." },
                { title: "Oil Production Optimization", desc: "Develop an XGBoost-based predictive model to estimate cinnamon oil yield and recommend optimal drying and distillation durations." }
              ].map((obj, i) => (
                <div key={i} style={{ padding: "1.75rem", background: "var(--white)", border: "1px solid rgba(74,124,89,0.1)", borderRadius: "12px", borderLeft: "3px solid var(--fern)" }}>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 700, color: "var(--forest)", marginBottom: "0.5rem" }}>{obj.title}</h4>
                  <p style={{ fontSize: "0.85rem", color: "#4a5e54", lineHeight: 1.6, fontWeight: 300 }}>{obj.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── SYSTEM DIAGRAM ── */}
          <div className="system-diagram-wrap">
            <div className="system-diagram-header">
              <div className="system-diagram-dot" style={{ background: "#ef4444" }} />
              <div className="system-diagram-dot" style={{ background: "#f59e0b" }} />
              <div className="system-diagram-dot" style={{ background: "#22c55e" }} />
              <div className="system-diagram-title" style={{ marginLeft: "0.5rem" }}>
                CinoGrow — System Architecture Diagram
              </div>
            </div>
            <img
              src="/assets/system diagram.png"
              alt="CinoGrow System Architecture Diagram"
              className="system-diagram-img"
            />
          </div>

        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="problem-section" id="problem">
        <div className="section-inner">
          <div className="section-label">The Challenge</div>
          <h2 className="section-title">Why cinnamon farming<br />needs a revolution</h2>
          <div className="divider" />

          <div className="problem-grid">
            {[
              {
                title: "Guesswork Fertilization",
                desc: "Fertilizer application relies on tradition and intuition rather than soil science, causing over or under-fertilization that harms yields."
              },
              {
                title: "Late Disease Detection",
                desc: "Pests and diseases are spotted only after significant crop damage — too late for effective intervention and costly to recover from."
              },
              {
                title: "Poor Oil Yield Forecasting",
                desc: "Drying and distillation processes are not digitally optimized, leading to revenue loss and wasted resources in oil extraction."
              },
              {
                title: "Climate-Blind Planning",
                desc: "Farm planning overlooks changing climate factors, leaving farmers unprepared for weather-related risks and yield fluctuations."
              },
            ].map((item, i) => {
              const images = ['fertilizer.png', 'pest.png', 'oil.png', 'yield.png'];
              return (
                <div className="problem-card" key={i} style={{ display: "flex", flexDirection: "column" }}>
                  <div className="problem-card-image-wrap" style={{ width: "100%", height: "240px", overflow: "hidden", position: "relative" }}>
                    <img src={`/assets/${images[i]}`} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div className="problem-card-body">
                    <div className="problem-num">Challenge 0{i + 1}</div>
                    <h3 className="problem-title">{item.title}</h3>
                    <p className="problem-text">{item.desc}</p>
                  </div>
                </div>
              );
            })}

            <div className="problem-impact-card" style={{ background: "linear-gradient(135deg, rgba(74,124,89,0.08), rgba(122,171,138,0.05))", borderRadius: "16px", padding: "3rem", border: "1px solid rgba(74,124,89,0.15)" }}>
              <div className="impact-inner" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "3rem", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.75rem" }}>Research Impact</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", lineHeight: 1.2, color: "var(--forest)" }}>Empowering 2.5M+ cinnamon farmers with data</h3>
                  <ul className="impact-list">
                    <li>First ML-based DSS exclusively for cinnamon cultivation</li>
                    <li>Covers yield, fertilizer, disease, weather and oil production</li>
                    <li>Reduces dependency on costly lab testing</li>
                    <li>Sinhala language support for local farmers</li>
                    <li>Data sourced from National Cinnamon Research & Training Center</li>
                    <li>Collaborative field research with real cinnamon farmers</li>
                  </ul>
                </div>
                <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}>
                  <img src="/assets/cinnamon cultivation 2.webp" alt="Cinnamon cultivation" style={{ width: "100%", height: "auto", minHeight: "320px", maxHeight: "420px", objectFit: "cover", display: "block" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features-section" id="features">
        <div className="section-inner">
          <div className="section-label">Core Capabilities</div>
          <h2 className="section-title">Four intelligent modules.<br />One unified platform.</h2>
          <p className="section-desc">Each module tackles a distinct challenge in the cinnamon cultivation lifecycle, delivering actionable recommendations directly to farmers' mobile devices.</p>
          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-num">0{i + 1}</div>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="team-section" id="team">
        <div className="section-inner">
          <div className="section-label">Our Team</div>
          <h2 className="section-title">Meet the CinoGrow<br />Research Team</h2>
          <p className="section-desc">A collaborative effort by dedicated researchers from SLIIT's Department of Information Technology, working together to deliver an integrated ML solution for cinnamon farming.</p>

          <div style={{ marginTop: "4rem" }}>
            {/* SUPERVISORS */}
            <div style={{ marginBottom: "4rem" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, color: "var(--forest)", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "2px solid rgba(74,124,89,0.2)" }}>Supervisors</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                {[
                  { name: "Supervisor - Ms. Suranjini Silva", role: "Senior Lecturer", dept: "Department of Information Technology", image: "/assets/supervisor.jpg" },
                  { name: "Co-Supervisor - Ms. Narmada Gamage", role: "Lecturer", dept: "Department of Information Technology", image: "/assets/assistant supervisor.jpg" }
                ].map((sup, i) => (
                  <div key={i} style={{ background: "var(--white)", border: "1px solid rgba(74,124,89,0.15)", borderRadius: "12px", padding: "2rem", display: "flex", alignItems: "center", gap: "1.5rem" }}>
                    <img src={sup.image} alt={sup.name} style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", objectPosition: "center", flexShrink: 0 }} />
                    <div>
                      <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--forest)", marginBottom: "0.3rem" }}>{sup.name}</h4>
                      <p style={{ fontSize: "0.88rem", color: "var(--fern)", fontWeight: 600, marginBottom: "0.2rem" }}>{sup.role}</p>
                      <p style={{ fontSize: "0.8rem", color: "#6a8070" }}>Sri Lanka Institute of Information Technology</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RESEARCH TEAM */}
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, color: "var(--forest)", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "2px solid rgba(74,124,89,0.2)" }}>Research Team</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
                {members.map((m, i) => {
                  return (
                    <div className="team-card" key={i} style={{ background: "var(--white)", border: "1px solid rgba(74,124,89,0.15)", borderRadius: "12px", padding: "1.5rem" }}>
                      <div className="team-card-header" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                        <img src={m.image} alt={m.name} style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                        <div style={{ flex: 1 }}>
                          <div className="team-id">{m.id}</div>
                          <div className="team-name">{m.name}</div>
                          <div className="team-role">{m.role}</div>
                          <div style={{ fontSize: "0.82rem", color: "#2e7d32", fontWeight: 600, marginTop: "0.25rem" }}>{m.jobTitle}</div>
                        </div>
                      </div>
                      <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid rgba(74,124,89,0.1)", display: "flex", gap: "1rem", alignItems: "center" }}>
                        <a href={`mailto:${m.email}`} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#2e7d32", textDecoration: "none", fontWeight: 500 }} title="Email">
                          <span>✉</span>
                          <span>{m.email}</span>
                        </a>
                      </div>
                      <div style={{ marginTop: "0.75rem", display: "flex", gap: "1rem", alignItems: "center" }}>
                        <a href={m.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#2e7d32", textDecoration: "none", fontWeight: 500 }} title="LinkedIn">
                          <span>in</span>
                          <span>LinkedIn Profile</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div style={{ marginTop: "3rem", padding: "2rem", background: "rgba(74,124,89,0.05)", borderRadius: "12px", border: "1px solid rgba(74,124,89,0.1)" }}>
            <p style={{ fontSize: "0.95rem", color: "#4a5e54", lineHeight: 1.7, fontWeight: 300 }}>
              The CinoGrow research team collaborates seamlessly to deliver an integrated machine learning decision support system for cinnamon cultivation. Under expert supervision, the team combines expertise in deep learning, image processing, predictive modeling, mobile development, and backend engineering to create a unified platform that serves Sri Lankan cinnamon farmers with actionable insights and data-driven recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* ── MILESTONES ── */}
      <section style={{ background: "linear-gradient(180deg, #f5f0e8 0%, #faf6f0 100%)" }} id="milestones">
        <div className="section-inner">
          <div className="section-label">Project Timeline</div>
          <h2 className="section-title">Our Milestones</h2>
          <p className="section-desc">Key achievements and deliverables tracking CinoGrow's development from conception to deployment, spanning September 2024 to June 2025.</p>
          <div className="divider" />

          <div className="tl-wrap">
            <div className="tl-line" />
            {milestones.map((m, i) => (
              <div className="tl-row" key={i}>
                {m.side === "left" ? (
                  <>
                    <div className="tl-left">
                      <div className="tl-card">
                        <div className="tl-badge">{m.month}</div>
                        <h4 className="tl-title">{m.title}</h4>
                        <p className="tl-desc">{m.desc}</p>
                      </div>
                    </div>
                    <div className="tl-dot-col"><div className="tl-dot" /></div>
                    <div className="tl-empty" />
                  </>
                ) : (
                  <>
                    <div className="tl-empty" />
                    <div className="tl-dot-col"><div className="tl-dot" /></div>
                    <div className="tl-right">
                      <div className="tl-card">
                        <div className="tl-badge">{m.month}</div>
                        <h4 className="tl-title">{m.title}</h4>
                        <p className="tl-desc">{m.desc}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: "4rem", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {[
              { num: "200+", label: "Days Worked" },
              { num: "10", label: "Documents" },
              { num: "4", label: "Presentations" },
              { num: "10", label: "Milestones" }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: "center", padding: "1.5rem", background: "var(--white)", borderRadius: "12px", border: "1px solid rgba(74,124,89,0.1)" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 700, color: "var(--forest)", marginBottom: "0.5rem" }}>{stat.num}</div>
                <p style={{ fontSize: "0.9rem", color: "var(--fern)", fontWeight: 600 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCUMENTS ── */}
      <section style={{ background: "var(--cream)" }} id="documents">
        <div className="section-inner">
          <div className="section-label">Deliverables</div>
          <h2 className="section-title">Our Documents</h2>
          <p className="section-desc">Complete collection of project proposals, presentations, research papers, and reports documenting the CinoGrow research journey.</p>
          <div className="divider" />

          <div style={{ marginTop: "4rem", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", gridAutoRows: "auto" }}>
            {documents.map((doc, i) => (
              <div
                key={i}
                className="doc-card"
                style={{
                  padding: "2rem", background: "var(--white)", borderRadius: "12px",
                  border: "1px solid rgba(74,124,89,0.15)", display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "space-between",
                  transition: "all 0.3s", cursor: "pointer", minHeight: "240px", textAlign: "center"
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem", flex: 1, justifyContent: "center" }}>
                  <div style={{ fontSize: "3.5rem", opacity: 0.8 }}>📄</div>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 700, color: "var(--forest)", margin: 0 }}>{doc.title}</h4>
                </div>
                <a
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block", width: "100%", background: "var(--fern)", color: "white",
                    border: "none", padding: "0.65rem 1.5rem", borderRadius: "6px",
                    fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
                    transition: "all 0.2s", textDecoration: "none", textAlign: "center",
                    marginTop: "1rem"
                  }}
                >
                  View Document
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY ── */}
      <section className="tech-section" id="technology">
        <div className="section-inner">
          <div className="section-label">Technical Architecture</div>
          <h2 className="section-title">Modern stack. Production<br />grade engineering.</h2>
          <p className="section-desc">Built with a scalable microservices architecture, containerized deployment, and CI/CD pipelines to serve real-time predictions at scale.</p>
          <div className="tech-overview">
            {[
              { title: "Machine Learning", items: ["Scikit-learn", "XGBoost", "ARIMA", "Random Forest Regression"] },
              { title: "Image Processing ", items: ["Roboflow"] },
              { title: "Backend & Infrastructure", items: ["FastAPI", "Docker", "PostgreSQL(AWS hosted)"] },
              { title: "Frontend & Integrations", items: ["React Native + Expo", "OpenWeatherMap API", "Cloud Storage (Images)", "Real-time Notifications", "Multilingual (Sinhala/Tamil)"] },
              { title: "Data Sources and Data Handling", items: ["Kaggle", "Pandas ", "NumPy "] },
              { title: "Version Control", items: ["GitHub", "Docker ", "CI/CD Pipelines"] },
            ].map((g, i) => (
              <div className="tech-group" key={i}>
                <div className="tech-group-title">{g.title}</div>
                <ul className="tech-items">
                  {g.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2rem", padding: "1.5rem 2rem", background: "rgba(74,124,89,0.07)", borderRadius: "10px", border: "1px solid rgba(74,124,89,0.15)" }}>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center" }}>
              {[
                { label: "Data Validation", value: "80/20 train-test split across all models" },
                { label: "Data Sources", value: "National Cinnamon Research & Training Center + Field Data, Economic Research Unit, Department of Export Agriculture: (https://exagri.info/mkt/index.html)" },
                { label: "Ethics", value: "Farmer consent obtained · Data anonymized on aggregation" }
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                  {i > 0 && <div style={{ width: "1px", height: "40px", background: "rgba(74,124,89,0.2)" }} />}
                  <div>
                    <div style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fern)", marginBottom: "0.35rem" }}>{item.label}</div>
                    <div style={{ fontSize: "0.9rem", color: "var(--forest)" }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMERCIALIZATION ── */}
      <section className="commercial-section" id="commercialization">
        <div className="section-inner">
          <div className="section-label">Go to Market</div>
          <h2 className="section-title">From research to<br />real-world impact.</h2>
          <p className="section-desc">CinoGrow is positioned as the first all-in-one ML platform for cinnamon, targeting farmers, cooperatives, and research institutions across Sri Lanka.</p>
          <div className="commercial-grid">
            <div>
              <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.25rem" }}>Subscription Plans</div>
              <div className="pricing-cards">
                <div className="pricing-card">
                  <div className="pricing-tier">Individual Farmer</div>
                  <div><span className="pricing-price">Rs. 800</span> <span className="pricing-period">/month</span></div>
                </div>
                <div className="pricing-card featured">
                  <div className="pricing-tier">Cooperative — Most Popular</div>
                  <div><span className="pricing-price">Rs. 3,000</span> <span className="pricing-period">/month</span></div>
                </div>
                <div className="pricing-card">
                  <div className="pricing-tier">Research Institution</div>
                  <div><span className="pricing-price">Rs. 8,000</span> <span className="pricing-period">/month</span></div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
                {["Farmers", "Oil Extractors", "Cooperatives", "Research Institutes", "NGOs"].map((t, i) => (
                  <span key={i} style={{ fontSize: "0.78rem", padding: "0.3rem 0.75rem", borderRadius: "100px", background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.1)" }}>{t}</span>
                ))}
              </div>
            </div>
            <div className="value-props">
              {[
                { label: "IP", title: "Platform Copyright", desc: "Full IP ownership and potential patent registration for the CinoGrow system." },
                { label: "AI", title: "Precise Recommendations", desc: "Accurate fertilizer guidance, pest detection, oil yield prediction, and weather-informed planning." },
                { label: "LK", title: "Sinhala Language Support", desc: "Fine-tuned open-source NLP model for native language accessibility." },
                { label: "+", title: "Self-Improving Models", desc: "Continuous learning loop — each farmer interaction improves prediction accuracy." },
              ].map((v, i) => (
                <div className="value-prop" key={i}>
                  <div className="value-prop-icon">{v.label}</div>
                  <div className="value-prop-text">
                    <strong>{v.title}</strong>
                    {v.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <img src="/assets/logo.png" alt="CinoGrow" style={{ height: "50px", width: "auto" }} />
                <div className="footer-brand">Cino<span>Grow</span></div>
              </div>
              <div className="footer-tagline">Transforming cinnamon production in Sri Lanka by empowering farmers with smart, sustainable, data-driven solutions.</div>
            </div>
            <div className="footer-info">
              <strong>SLIIT Faculty of Computing</strong>
              Group No: 25-26J-338<br />
              Specialization: Information Technology
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 CinoGrow · SLIIT Research Project</span>
            <span>N.A.D. Nimsara · Jayawardana N.G.U.D. · Udayakumara W.D.L. · Malmi W.U.</span>
          </div>
        </div>
      </footer>
    </>
  );
}