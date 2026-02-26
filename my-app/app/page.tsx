"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

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
      desc: "CNN-based deep learning system that detects cinnamon plant diseases and pests with stage-aware classification and actionable mobile recommendations.",
      tech: ["TensorFlow", "OpenCV", "FastAPI", "PostgreSQL", "React Native"],
      accuracy: "85–95%",
      color: "#4a7c59",
      icon: "🔬",
    },
    {
      id: "IT22319692",
      name: "N. A. D. Nimsara",
      role: "Fertilizer Recommendation System",
      desc: "Dual-image ML system analyzing both leaf and soil photographs to recommend precise fertilizer applications, eliminating guesswork and costly lab tests.",
      tech: ["TensorFlow", "OpenCV", "FastAPI", "PostgreSQL", "React Native"],
      accuracy: "75–90%",
      color: "#3d6b4f",
      icon: "🌱",
    },
    {
      id: "IT22308498",
      name: "Jayawardana N.G.U.D.",
      role: "Yield Prediction & Weather Support",
      desc: "Personalized ML model trained on historical yield data combined with real-time weather integration for plot-specific, growth-stage aware farm advisories.",
      tech: ["Scikit-learn", "OpenWeatherMap", "FastAPI", "PostgreSQL", "React Native"],
      accuracy: "70–85%",
      color: "#2d5a3d",
      icon: "🌦️",
    },
    {
      id: "IT22312044",
      name: "Malmi W.U.",
      role: "Oil Yield Prediction & Distillation Support",
      desc: "XGBoost-powered prediction engine for cinnamon oil yield with dynamic drying and distillation time estimation to maximize extraction efficiency.",
      tech: ["XGBoost", "FastAPI", "Docker", "PostgreSQL", "React Native"],
      accuracy: "70–85%",
      color: "#1e4a2e",
      icon: "⚗️",
    },
  ];

  const features = [
    {
      icon: "🧪",
      title: "Smart Fertilizer",
      desc: "ML-driven fertilizer suggestions from soil & leaf images combined, tailored specifically for cinnamon",
    },
    {
      icon: "🌿",
      title: "Disease Detection",
      desc: "Stage-based image classification for cinnamon leaves & bark with actionable pest and disease recommendations",
    },
    {
      icon: "📊",
      title: "Yield Prediction",
      desc: "Real-time weather integration with plot and plant stage based advisories backed by historical yield data",
    },
    {
      icon: "💧",
      title: "Oil Production",
      desc: "ML-driven prediction of cinnamon oil yield with dynamic estimation of optimal drying and distillation time",
    },
  ];

  // Documentation / Research UI state + data
  const [activePhase, setActivePhase] = useState("proposal");

  const phases = [
    { id: "proposal", label: "Proposal", icon: "📋" },
    { id: "progress1", label: "Progress Review I", icon: "🔍" },
    { id: "progress2", label: "Progress Review II", icon: "⚙️" },
    { id: "final", label: "Final Presentation", icon: "🎓" },
    { id: "papers", label: "Research Papers", icon: "📄" },
  ];

  const timeline = [
    { icon: "💡", label: "Proposal", sub: "Problem & solution defined" },
    { icon: "🔬", label: "Progress I", sub: "Data collection & model design" },
    { icon: "⚙️", label: "Progress II", sub: "Model training & integration" },
    { icon: "📱", label: "Final", sub: "Full system demo & evaluation" },
  ];

  type DocType = {
    icon: string;
    type: string;
    typeLabel: string;
    title: string;
    author: string;
    desc: string;
    link: string;
    linkLabel: string;
  };

  type DocsMap = {
    [key: string]: DocType[];
  };

  const docs: DocsMap = {
    proposal: [
      {
        icon: "📋",
        type: "slides",
        typeLabel: "Slides",
        title: "CinoGrow – Project Proposal Presentation",
        author: "Group 25-26J-338 · All Members",
        desc: "Full group proposal covering problem statement, objectives, system architecture overview, and research scope for all four modules.",
        link: "https://drive.google.com/file/d/demo-proposal-group",
        linkLabel: "View Slides",
      },
      {
        icon: "📄",
        type: "report",
        typeLabel: "Report",
        title: "Project Proposal Report",
        author: "Group 25-26J-338 · All Members",
        desc: "Written proposal document detailing literature review, research gaps, methodology, and ethical clearance plan.",
        link: "https://drive.google.com/file/d/demo-proposal-report",
        linkLabel: "View Report",
      },
    ],
    progress1: [
      {
        icon: "🔍",
        type: "slides",
        typeLabel: "Slides",
        title: "Progress Review I – Group Presentation",
        author: "Group 25-26J-338 · All Members",
        desc: "Overview of data collection progress, initial ML model experiments, and system architecture updates across all four modules.",
        link: "https://drive.google.com/file/d/demo-progress1-group",
        linkLabel: "View Slides",
      },
      {
        icon: "🌱",
        type: "slides",
        typeLabel: "Slides",
        title: "Fertilizer Recommendation – Progress I",
        author: "N. A. D. Nimsara · IT22319692",
        desc: "Dataset preparation, CNN architecture selection, and initial leaf & soil image classification results.",
        link: "https://drive.google.com/file/d/demo-progress1-nimsara",
        linkLabel: "View Slides",
      },
      {
        icon: "🌦️",
        type: "slides",
        typeLabel: "Slides",
        title: "Yield Prediction & Weather – Progress I",
        author: "Jayawardana N.G.U.D. · IT22308498",
        desc: "Historical yield data analysis, weather API integration plan, and initial regression model benchmarks.",
        link: "https://drive.google.com/file/d/demo-progress1-jayawardana",
        linkLabel: "View Slides",
      },
      {
        icon: "⚗️",
        type: "slides",
        typeLabel: "Slides",
        title: "Oil Yield Prediction – Progress I",
        author: "Malmi W.U. · IT22312044",
        desc: "Farm-level oil yield data collection approach, XGBoost baseline experiments, and drying time estimation logic.",
        link: "https://drive.google.com/file/d/demo-progress1-malmi",
        linkLabel: "View Slides",
      },
      {
        icon: "🔬",
        type: "slides",
        typeLabel: "Slides",
        title: "Disease & Pest Detection – Progress I",
        author: "Udayakumara W.D.L. · IT22889324",
        desc: "Cinnamon leaf and bark image dataset curation, labeling strategy, and initial CNN training results.",
        link: "https://drive.google.com/file/d/demo-progress1-udaya",
        linkLabel: "View Slides",
      },
    ],
    progress2: [
      {
        icon: "⚙️",
        type: "slides",
        typeLabel: "Slides",
        title: "Progress Review II – Group Presentation",
        author: "Group 25-26J-338 · All Members",
        desc: "Integrated system demo, inter-module API connections, model accuracy updates, and mobile app prototype walkthrough.",
        link: "https://drive.google.com/file/d/demo-progress2-group",
        linkLabel: "View Slides",
      },
      {
        icon: "🌱",
        type: "slides",
        typeLabel: "Slides",
        title: "Fertilizer Recommendation – Progress II",
        author: "N. A. D. Nimsara · IT22319692",
        desc: "Dual-image CNN model training results, fertilizer rules engine implementation, and mobile UI prototype.",
        link: "https://drive.google.com/file/d/demo-progress2-nimsara",
        linkLabel: "View Slides",
      },
      {
        icon: "🌦️",
        type: "slides",
        typeLabel: "Slides",
        title: "Yield Prediction & Weather – Progress II",
        author: "Jayawardana N.G.U.D. · IT22308498",
        desc: "LSTM/XGBoost yield model accuracy results, plot-wise recommendation engine, and weather advisory system demo.",
        link: "https://drive.google.com/file/d/demo-progress2-jayawardana",
        linkLabel: "View Slides",
      },
      {
        icon: "⚗️",
        type: "slides",
        typeLabel: "Slides",
        title: "Oil Yield Prediction – Progress II",
        author: "Malmi W.U. · IT22312044",
        desc: "XGBoost model evaluation, drying & distillation time estimation accuracy, and real-time dashboard prototype.",
        link: "https://drive.google.com/file/d/demo-progress2-malmi",
        linkLabel: "View Slides",
      },
      {
        icon: "🔬",
        type: "slides",
        typeLabel: "Slides",
        title: "Disease & Pest Detection – Progress II",
        author: "Udayakumara W.D.L. · IT22889324",
        desc: "Stage-aware CNN classification results, severity mapping implementation, and recommendation database integration.",
        link: "https://drive.google.com/file/d/demo-progress2-udaya",
        linkLabel: "View Slides",
      },
    ],
    final: [
      {
        icon: "🎓",
        type: "slides",
        typeLabel: "Slides",
        title: "CinoGrow – Final Presentation",
        author: "Group 25-26J-338 · All Members",
        desc: "Complete system demonstration, all model evaluation results, commercialization plan, and live mobile app showcase.",
        link: "https://drive.google.com/file/d/demo-final-group",
        linkLabel: "View Slides",
      },
      {
        icon: "📖",
        type: "report",
        typeLabel: "Report",
        title: "Final Project Report",
        author: "Group 25-26J-338 · All Members",
        desc: "Comprehensive written report covering all modules, system architecture, experimental results, and future work.",
        link: "https://drive.google.com/file/d/demo-final-report",
        linkLabel: "View Report",
      },
    ],
    papers: [
      {
        icon: "📄",
        type: "paper",
        typeLabel: "Paper",
        title: "Cinnamon Oil Yield Prediction Using XGBoost",
        author: "Malmi W.U. · IT22312044",
        desc: "ML-driven oil yield prediction with dynamic drying and distillation time estimation for Sri Lankan cinnamon producers.",
        link: "https://drive.google.com/file/d/demo-paper-malmi",
        linkLabel: "View Paper",
      },
      {
        icon: "📄",
        type: "paper",
        typeLabel: "Paper",
        title: "Fertilizer Recommendation from Leaf & Soil Images",
        author: "N. A. D. Nimsara · IT22319692",
        desc: "First dual-image CNN approach for cinnamon-specific nutrient deficiency detection and precision fertilizer recommendations.",
        link: "https://drive.google.com/file/d/demo-paper-nimsara",
        linkLabel: "View Paper",
      },
      {
        icon: "📄",
        type: "paper",
        typeLabel: "Paper",
        title: "Cinnamon Yield Prediction & Weather-Based Farm Support",
        author: "Jayawardana N.G.U.D. · IT22308498",
        desc: "Personalized ML model combining historical yield records with real-time weather data for plot-wise, stage-specific farm advisories.",
        link: "https://drive.google.com/file/d/demo-paper-jayawardana",
        linkLabel: "View Paper",
      },
      {
        icon: "📄",
        type: "paper",
        typeLabel: "Paper",
        title: "Stage-Based Detection of Cinnamon Diseases & Pests",
        author: "Udayakumara W.D.L. · IT22889324",
        desc: "Deep learning CNN system for stage-aware identification of cinnamon plant diseases and pests with actionable treatment recommendations.",
        link: "https://drive.google.com/file/d/demo-paper-udaya",
        linkLabel: "View Paper",
      },
    ],
  };

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
          --cream: #f5f0e8;
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
        }

        /* NAV */
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 1.2rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.4s ease;
          background: ${scrollY > 60 ? "rgba(245, 240, 232, 0.95)" : "transparent"};
          backdrop-filter: ${scrollY > 60 ? "blur(12px)" : "none"};
          border-bottom: ${scrollY > 60 ? "1px solid rgba(74,124,89,0.15)" : "none"};
        }

        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--forest);
          letter-spacing: -0.5px;
        }

        .nav-logo span { color: var(--fern); }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }

        .nav-links a {
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--forest);
          opacity: 0.7;
          transition: opacity 0.2s;
        }

        .nav-links a:hover { opacity: 1; }

        /* HERO */
        .hero {
          min-height: 100vh;
          background: linear-gradient(160deg, var(--forest) 0%, var(--moss) 50%, #3a6b4a 100%);
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 8rem 3rem 4rem;
        }

        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 80% 20%, rgba(74,124,89,0.3) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(200,168,75,0.1) 0%, transparent 40%);
        }

        .hero-bg-text {
          position: absolute;
          right: -2rem;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Playfair Display', serif;
          font-size: clamp(8rem, 18vw, 22rem);
          font-weight: 900;
          color: rgba(255,255,255,0.03);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          letter-spacing: -8px;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(200,168,75,0.15);
          border: 1px solid rgba(200,168,75,0.3);
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

        .hero-title em {
          font-style: italic;
          color: var(--sage);
        }

        .hero-sub {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.65);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          font-weight: 300;
          max-width: 480px;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--gold);
          color: var(--forest);
          padding: 0.85rem 2rem;
          border-radius: 4px;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
        }

        .btn-primary:hover {
          background: #d4b460;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(200,168,75,0.4);
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          color: var(--white);
          padding: 0.85rem 2rem;
          border-radius: 4px;
          font-weight: 500;
          font-size: 0.9rem;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: all 0.2s;
          border: 1px solid rgba(255,255,255,0.25);
          cursor: pointer;
        }

        .btn-outline:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.5);
        }

        .hero-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .stat-card {
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 1.8rem;
          transition: transform 0.3s, background 0.3s;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,0.1);
        }

        .stat-card:first-child { grid-column: span 2; }

        .stat-icon {
          font-size: 2rem;
          margin-bottom: 0.75rem;
          display: block;
        }

        .stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--white);
          line-height: 1;
          margin-bottom: 0.3rem;
        }

        .stat-label {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* SCROLL INDICATOR */
        .scroll-line {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255,255,255,0.4);
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          animation: fadeInUp 2s ease 1s both;
        }

        .scroll-line::after {
          content: '';
          width: 1px;
          height: 50px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.4), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.3); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px) translateX(-50%); }
          to { opacity: 1; transform: translateY(0) translateX(-50%); }
        }

        /* SECTIONS */
        section {
          padding: 7rem 3rem;
        }

        .section-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--fern);
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .section-label::before {
          content: '';
          display: block;
          width: 2rem;
          height: 1px;
          background: var(--fern);
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: var(--forest);
          line-height: 1.15;
          letter-spacing: -1.5px;
          margin-bottom: 1rem;
        }

        .section-desc {
          font-size: 1.05rem;
          color: #4a5e54;
          line-height: 1.7;
          max-width: 600px;
          font-weight: 300;
        }

        /* PROBLEM SECTION */
        .problem-section {
          background: var(--cream);
        }

        .problem-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-top: 4rem;
        }

        .problem-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .problem-item {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          padding: 1.5rem;
          border-radius: 8px;
          border-left: 3px solid var(--fern);
          background: rgba(74,124,89,0.05);
          transition: background 0.2s, transform 0.2s;
        }

        .problem-item:hover {
          background: rgba(74,124,89,0.1);
          transform: translateX(4px);
        }

        .problem-num {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--sage);
          opacity: 0.5;
          line-height: 1;
          min-width: 2rem;
        }

        .problem-text {
          font-size: 0.95rem;
          color: var(--forest);
          line-height: 1.6;
          font-weight: 400;
        }

        .problem-text strong {
          display: block;
          font-weight: 600;
          margin-bottom: 0.25rem;
          color: var(--moss);
        }

        .visual-card {
          background: linear-gradient(145deg, var(--forest), var(--moss));
          border-radius: 16px;
          padding: 3rem;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .visual-card::before {
          content: '';
          position: absolute;
          top: -30%;
          right: -20%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(200,168,75,0.2), transparent);
          border-radius: 50%;
        }

        .visual-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 1;
        }

        .visual-card-sub {
          font-size: 0.85rem;
          opacity: 0.6;
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .impact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          position: relative;
          z-index: 1;
        }

        .impact-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
          opacity: 0.85;
        }

        .impact-list li::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
        }

        /* FEATURES */
        .features-section {
          background: var(--forest);
          position: relative;
          overflow: hidden;
        }

        .features-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 90% 50%, rgba(74,124,89,0.3) 0%, transparent 60%);
        }

        .features-section .section-label { color: var(--sage); }
        .features-section .section-label::before { background: var(--sage); }
        .features-section .section-title { color: var(--white); }
        .features-section .section-desc { color: rgba(255,255,255,0.55); }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-top: 4rem;
          position: relative;
          z-index: 1;
        }

        .feature-card {
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--fern));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .feature-card:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.15);
          transform: translateY(-4px);
        }

        .feature-card:hover::before { transform: scaleX(1); }

        .feature-icon {
          font-size: 2.2rem;
          margin-bottom: 1.25rem;
          display: block;
        }

        .feature-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.75rem;
        }

        .feature-desc {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.65;
          font-weight: 300;
        }

        /* TEAM */
        .team-section {
          background: linear-gradient(180deg, #f0ebe0 0%, var(--cream) 100%);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 4rem;
        }

        .team-card {
          background: var(--white);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(74,124,89,0.1);
          transition: all 0.35s ease;
          position: relative;
        }

        .team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(26,61,43,0.12);
          border-color: rgba(74,124,89,0.25);
        }

        .team-card-header {
          padding: 2rem 2rem 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          border-bottom: 1px solid rgba(74,124,89,0.07);
        }

        .team-avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          flex-shrink: 0;
          position: relative;
        }

        .team-avatar::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--gold), transparent);
          z-index: -1;
        }

        .team-id {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--fern);
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }

        .team-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--forest);
          line-height: 1.2;
          margin-bottom: 0.25rem;
        }

        .team-role {
          font-size: 0.82rem;
          color: var(--fern);
          font-weight: 500;
        }

        .team-card-body {
          padding: 1.5rem 2rem;
        }

        .team-desc {
          font-size: 0.875rem;
          color: #4a5e54;
          line-height: 1.65;
          margin-bottom: 1.25rem;
          font-weight: 300;
        }

        .team-accuracy {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(74,124,89,0.08);
          color: var(--moss);
          padding: 0.3rem 0.8rem;
          border-radius: 100px;
          font-size: 0.78rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          font-size: 0.72rem;
          font-weight: 500;
          padding: 0.25rem 0.65rem;
          border-radius: 4px;
          background: rgba(26,61,43,0.06);
          color: var(--moss);
          border: 1px solid rgba(26,61,43,0.1);
          letter-spacing: 0.02em;
        }

        /* TECH STACK */
        .tech-section {
          background: var(--cream);
        }

        .tech-overview {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 4rem;
        }

        .tech-group {
          padding: 2rem;
          border-radius: 12px;
          background: var(--white);
          border: 1px solid rgba(74,124,89,0.1);
        }

        .tech-group-title {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--fern);
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(74,124,89,0.1);
        }

        .tech-items {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .tech-items li {
          font-size: 0.9rem;
          color: var(--forest);
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .tech-items li::before {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--sage);
          flex-shrink: 0;
        }

        /* COMMERCIALIZATION */
        .commercial-section {
          background: linear-gradient(135deg, var(--forest) 0%, #0d2b1a 100%);
          position: relative;
          overflow: hidden;
        }

        .commercial-section::before {
          content: '';
          position: absolute;
          bottom: 0; right: 0;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(74,124,89,0.2), transparent 70%);
          transform: translate(30%, 30%);
        }

        .commercial-section .section-label { color: var(--gold); }
        .commercial-section .section-label::before { background: var(--gold); }
        .commercial-section .section-title { color: var(--white); }
        .commercial-section .section-desc { color: rgba(255,255,255,0.55); }

        .commercial-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: start;
          margin-top: 4rem;
          position: relative;
          z-index: 1;
        }

        .pricing-cards {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .pricing-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.75rem;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          transition: all 0.25s;
        }

        .pricing-card:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(200,168,75,0.4);
        }

        .pricing-card.featured {
          background: rgba(200,168,75,0.12);
          border-color: rgba(200,168,75,0.35);
        }

        .pricing-tier {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.7);
          font-weight: 500;
        }

        .pricing-price {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--gold);
        }

        .pricing-period {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.4);
          font-weight: 400;
        }

        .value-props {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .value-prop {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .value-prop-icon {
          width: 36px;
          height: 36px;
          background: rgba(200,168,75,0.15);
          border: 1px solid rgba(200,168,75,0.25);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .value-prop-text {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.7);
          line-height: 1.55;
          font-weight: 300;
        }

        .value-prop-text strong {
          color: var(--white);
          font-weight: 600;
          display: block;
          margin-bottom: 0.15rem;
          font-size: 0.95rem;
        }

        /* FOOTER */
        footer {
          background: var(--ink);
          padding: 4rem 3rem 2.5rem;
          color: rgba(255,255,255,0.5);
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          margin-bottom: 2rem;
        }

        .footer-brand {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.5rem;
        }

        .footer-brand span { color: var(--sage); }

        .footer-tagline {
          font-size: 0.85rem;
          max-width: 300px;
          line-height: 1.6;
        }

        .footer-info {
          text-align: right;
          font-size: 0.82rem;
          line-height: 1.8;
        }

        .footer-info strong {
          color: rgba(255,255,255,0.8);
          display: block;
          margin-bottom: 0.25rem;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.78rem;
        }

        .footer-bottom a {
          color: var(--sage);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-bottom a:hover { color: var(--white); }

        /* ANIMATIONS */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-in {
          animation: fadeInUp 0.7s ease both;
        }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }

        /* DIVIDER */
        .divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, var(--fern), var(--sage));
          border-radius: 2px;
          margin: 1.5rem 0;
        }

        /* RESEARCH TAG */
        .research-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(74,124,89,0.1);
          color: var(--fern);
          padding: 0.3rem 0.75rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          border: 1px solid rgba(74,124,89,0.2);
          margin-top: 1rem;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          nav { padding: 1rem 1.5rem; }
          .nav-links { display: none; }
          section { padding: 5rem 1.5rem; }
          .hero { padding: 7rem 1.5rem 3rem; }
          .hero-content { grid-template-columns: 1fr; gap: 3rem; }
          .hero-bg-text { display: none; }
          .hero-stats { grid-template-columns: 1fr 1fr; }
          .hero-stats .stat-card:first-child { grid-column: span 2; }
          .problem-grid { grid-template-columns: 1fr; }
          .features-grid { grid-template-columns: 1fr 1fr; }
          .team-grid { grid-template-columns: 1fr; }
          .tech-overview { grid-template-columns: 1fr 1fr; }
          .commercial-grid { grid-template-columns: 1fr; }
          .footer-top { flex-direction: column; gap: 1.5rem; }
          .footer-info { text-align: left; }
          .footer-bottom { flex-direction: column; gap: 0.75rem; text-align: center; }
        }

        @media (max-width: 600px) {
          .features-grid { grid-template-columns: 1fr; }
          .tech-overview { grid-template-columns: 1fr; }
          .hero-stats { grid-template-columns: 1fr; }
          .hero-stats .stat-card:first-child { grid-column: span 1; }
        }
        /* Documentation & timeline styles */
        .docs-section {
          background: var(--cream);
          position: relative;
          overflow: hidden;
        }

        .docs-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(74,124,89,0.3), transparent);
        }

        /* TIMELINE ROADMAP */
        .timeline-wrap {
          position: relative;
          margin: 4rem 0 5rem;
        }

        .timeline-track {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .timeline-track::before {
          content: '';
          position: absolute;
          top: 18px;
          left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--fern), var(--sage), var(--mist));
          z-index: 0;
        }

        .timeline-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.85rem;
          position: relative;
          z-index: 1;
          flex: 1;
        }

        .timeline-dot {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--white);
          border: 2px solid var(--fern);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.95rem;
          box-shadow: 0 0 0 5px rgba(74,124,89,0.1);
          transition: all 0.3s;
        }

        .timeline-node:hover .timeline-dot {
          background: var(--fern);
          box-shadow: 0 0 0 7px rgba(74,124,89,0.15);
          transform: scale(1.1);
        }

        .timeline-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--forest);
          letter-spacing: 0.04em;
          text-align: center;
        }

        .timeline-sub {
          font-size: 0.7rem;
          color: #7a9585;
          text-align: center;
          max-width: 100px;
          line-height: 1.4;
        }

        .timeline-connector {
          flex: 1;
        }

        /* PHASE TABS */
        .phase-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(74,124,89,0.12);
          padding-bottom: 0;
          overflow-x: auto;
        }

        .phase-tab {
          padding: 0.65rem 1.25rem;
          border-radius: 6px 6px 0 0;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          cursor: pointer;
          border: none;
          border-bottom: 2px solid transparent;
          background: transparent;
          color: #7a9585;
          transition: all 0.2s;
          white-space: nowrap;
          font-family: 'DM Sans', sans-serif;
        }

        .phase-tab:hover { color: var(--forest); }

        .phase-tab.active {
          color: var(--forest);
          border-bottom-color: var(--fern);
          background: rgba(74,124,89,0.05);
        }

        /* DOC CARDS GRID */
        .doc-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .doc-card {
          background: var(--white);
          border-radius: 12px;
          border: 1px solid rgba(74,124,89,0.1);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
        }

        .doc-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--fern), var(--sage));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }

        .doc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(26,61,43,0.1);
          border-color: rgba(74,124,89,0.25);
        }

        .doc-card:hover::after { transform: scaleX(1); }

        .doc-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .doc-type-badge {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
          background: rgba(74,124,89,0.08);
          color: var(--fern);
          border: 1px solid rgba(74,124,89,0.15);
        }

        .doc-type-badge.paper { background: rgba(200,168,75,0.1); color: #a07e2a; border-color: rgba(200,168,75,0.25); }
        .doc-type-badge.slides { background: rgba(45,90,61,0.08); color: var(--moss); border-color: rgba(45,90,61,0.18); }
        .doc-type-badge.report { background: rgba(107,76,42,0.08); color: var(--bark); border-color: rgba(107,76,42,0.18); }

        .doc-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          background: rgba(74,124,89,0.07);
          flex-shrink: 0;
        }

        .doc-card-body { flex: 1; }

        .doc-title {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 700;
          color: var(--forest);
          line-height: 1.3;
          margin-bottom: 0.4rem;
        }

        .doc-author {
          font-size: 0.78rem;
          color: var(--fern);
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .doc-desc {
          font-size: 0.82rem;
          color: #6a8070;
          line-height: 1.55;
          font-weight: 300;
        }

        .doc-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(74,124,89,0.07);
        }

        .doc-link-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--fern);
          letter-spacing: 0.04em;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .doc-link-arrow {
          font-size: 0.85rem;
          color: var(--sage);
          transition: transform 0.2s;
        }

        .doc-card:hover .doc-link-arrow { transform: translateX(3px); }

        @media (max-width: 900px) {
          .doc-cards-grid { grid-template-columns: 1fr 1fr; }
          .timeline-track::before { display: none; }
          .timeline-track { flex-direction: column; gap: 1.5rem; }
          .timeline-node { flex-direction: row; gap: 1rem; align-items: center; }
          .timeline-label { text-align: left; }
          .timeline-sub { text-align: left; max-width: none; }
        }

        @media (max-width: 600px) {
          .doc-cards-grid { grid-template-columns: 1fr; }
          .phase-tabs { gap: 0.25rem; }
        }

      `}</style>

      {/* NAV */}
      <nav style={{ background: scrollY > 60 ? "rgba(245,240,232,0.95)" : "transparent" }}>
        <div className="nav-logo">Cino<span>Grow</span></div>
        <ul className="nav-links">
          <li><a href="#problem">Problem</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#technology">Technology</a></li>
          <li><a href="#commercialization">Launch</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg-text">Cino</div>
        <div className="hero-content">
          <div>
            <div className="hero-badge animate-in">
              <span>🌿</span>
              SLIIT Faculty of Computing · Group 25-26J-338
            </div>
            <h1 className="hero-title animate-in delay-1">
              <em>Smart farming</em><br />
              for Ceylon<br />
              Cinnamon
            </h1>
            <p className="hero-sub animate-in delay-2">
              CinoGrow is the world's first ML-based decision support system built exclusively for cinnamon cultivation — covering yield, fertilizer, disease detection, weather, and oil production.
            </p>
            <div className="hero-cta animate-in delay-3">
              <a href="#features" className="btn-primary">Explore Features →</a>
              <a href="#team" className="btn-outline">Meet the Team</a>
            </div>
          </div>

          <div className="hero-stats animate-in delay-2">
            <div className="stat-card">
              <span className="stat-icon">🇱🇰</span>
              <div className="stat-num">90%</div>
              <div className="stat-label">World's true cinnamon from Sri Lanka</div>
            </div>
            <div className="stat-card">
              <span className="stat-icon">🤖</span>
              <div className="stat-num">4</div>
              <div className="stat-label">ML Models integrated</div>
            </div>
            <div className="stat-card">
              <span className="stat-icon">📱</span>
              <div className="stat-num">1st</div>
              <div className="stat-label">All-in-one cinnamon AI platform</div>
            </div>
          </div>
        </div>
        <div className="scroll-line">Scroll</div>
      </section>

      {/* PROBLEM */}
      <section className="problem-section" id="problem">
        <div className="section-inner">
          <div className="section-label">The Challenge</div>
          <h2 className="section-title">Why cinnamon farming<br />needs a revolution</h2>
          <div className="divider" />

          <div className="problem-grid">
            <div className="problem-items">
              {[
                { title: "Guesswork Fertilization", desc: "Fertilizer application relies on tradition and intuition rather than soil science, causing over or under-fertilization." },
                { title: "Late Disease Detection", desc: "Pests and diseases are spotted only after significant crop damage, too late for effective intervention." },
                { title: "Poor Oil Yield Forecasting", desc: "Drying and distillation processes are not digitally optimized, leading to revenue loss and wasted resources." },
                { title: "Climate-Blind Planning", desc: "Farm planning overlooks changing climate factors, leaving farmers unprepared for weather-related risks." },
              ].map((item, i) => (
                <div className="problem-item" key={i}>
                  <span className="problem-num">0{i + 1}</span>
                  <div className="problem-text">
                    <strong>{item.title}</strong>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="visual-card">
                <div className="visual-card-sub">Research Impact</div>
                <div className="visual-card-title">Empowering 2.5M+ cinnamon farmers with data</div>
                <ul className="impact-list" style={{ marginTop: "1.5rem" }}>
                  <li>First ML-based DSS exclusively for cinnamon cultivation</li>
                  <li>Covers yield, fertilizer, disease, weather and oil production</li>
                  <li>Reduces dependency on costly lab testing</li>
                  <li>Sinhala language support for local farmers</li>
                  <li>Data sourced from National Cinnamon Research & Training Center</li>
                  <li>Collaborative field research with real cinnamon farmers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section" id="features">
        <div className="section-inner">
          <div className="section-label">Core Capabilities</div>
          <h2 className="section-title">Four intelligent modules.<br />One unified platform.</h2>
          <p className="section-desc">Each module tackles a distinct challenge in the cinnamon cultivation lifecycle, delivering actionable recommendations directly to farmers' mobile devices.</p>

          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feature-card" key={i}>
                <span className="feature-icon">{f.icon}</span>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team-section" id="team">
        <div className="section-inner">
          <div className="section-label">Research Team</div>
          <h2 className="section-title">Built by four specialists<br />in Information Technology</h2>
          <p className="section-desc">Each team member owns a dedicated ML module, bringing specialized domain knowledge from data science, mobile development, and agricultural informatics.</p>

          <div className="team-grid">
            {members.map((m, i) => (
              <div className="team-card" key={i}>
                <div className="team-card-header">
                  <div className="team-avatar" style={{ background: `${m.color}22` }}>
                    {m.icon}
                  </div>
                  <div>
                    <div className="team-id">{m.id}</div>
                    <div className="team-name">{m.name}</div>
                    <div className="team-role">{m.role}</div>
                  </div>
                </div>
                <div className="team-card-body">
                  <p className="team-desc">{m.desc}</p>
                  <div className="team-accuracy">
                    <span>🎯</span> Expected accuracy: {m.accuracy}
                  </div>
                  <div className="tech-tags">
                    {m.tech.map((t, j) => (
                      <span className="tech-tag" key={j}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation & Research (new) */}
      <section className="docs-section" id="research">
        <div className="section-inner">
          <div className="section-label">Documentation & Research</div>
          <h2 className="section-title">From proposal to<br />published research.</h2>
          <p className="section-desc">Every phase of the CinoGrow project — proposal, progress reviews, final presentation, and individual research papers — documented and accessible.</p>

          {/* TIMELINE */}
          <div className="timeline-wrap">
            <div className="timeline-track">
              {timeline.map((t, i) => (
                <div className="timeline-node" key={i}>
                  <div className="timeline-dot">{t.icon}</div>
                  <div>
                    <div className="timeline-label">{t.label}</div>
                    <div className="timeline-sub">{t.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PHASE TABS */}
          <div className="phase-tabs">
            {phases.map((p) => (
              <button
                key={p.id}
                className={`phase-tab ${activePhase === p.id ? "active" : ""}`}
                onClick={() => setActivePhase(p.id)}
              >
                {p.icon} {p.label}
              </button>
            ))}
          </div>

          {/* DOC CARDS */}
          <div className="doc-cards-grid">
            {(docs[activePhase] as DocType[]).map((doc: DocType, i: number) => (
              <a
                key={i}
                className="doc-card"
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="doc-card-top">
                  <div className="doc-icon-wrap">{doc.icon}</div>
                  <span className={`doc-type-badge ${doc.type}`}>{doc.typeLabel}</span>
                </div>
                <div className="doc-card-body">
                  <div className="doc-title">{doc.title}</div>
                  <div className="doc-author">{doc.author}</div>
                  <div className="doc-desc">{doc.desc}</div>
                </div>
                <div className="doc-card-footer">
                  <span className="doc-link-label">↗ {doc.linkLabel}</span>
                  <span className="doc-link-arrow">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="tech-section" id="technology">
        <div className="section-inner">
          <div className="section-label">Technical Architecture</div>
          <h2 className="section-title">Modern stack. Production<br />grade engineering.</h2>
          <p className="section-desc">Built with a scalable microservices architecture, containerized deployment, and CI/CD pipelines to serve real-time predictions at scale.</p>

          <div className="tech-overview">
            {[
              {
                title: "Machine Learning",
                items: ["XGBoost (XGBRegressor)", "TensorFlow / Keras CNN", "Scikit-learn (Random Forest)", "OpenCV Image Processing", "Transfer Learning (ResNet/MobileNet)"],
              },
              {
                title: "Backend & Infrastructure",
                items: ["Python + FastAPI", "Docker Containerization", "GitHub Actions CI/CD", "PostgreSQL Database", "RESTful API Architecture"],
              },
              {
                title: "Frontend & Integrations",
                items: ["React Native + Expo", "OpenWeatherMap API", "Cloud Storage (Images)", "Real-time Notifications", "Multilingual (Sinhala)"],
              },
            ].map((g, i) => (
              <div className="tech-group" key={i}>
                <div className="tech-group-title">{g.title}</div>
                <ul className="tech-items">
                  {g.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2rem", padding: "1.5rem 2rem", background: "rgba(74,124,89,0.07)", borderRadius: "10px", border: "1px solid rgba(74,124,89,0.15)" }}>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fern)", marginBottom: "0.35rem" }}>Data Validation</div>
                <div style={{ fontSize: "0.9rem", color: "var(--forest)" }}>80/20 train-test split across all models</div>
              </div>
              <div style={{ width: "1px", height: "40px", background: "rgba(74,124,89,0.2)" }} />
              <div>
                <div style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fern)", marginBottom: "0.35rem" }}>Data Sources</div>
                <div style={{ fontSize: "0.9rem", color: "var(--forest)" }}>National Cinnamon Research & Training Center + Field Data</div>
              </div>
              <div style={{ width: "1px", height: "40px", background: "rgba(74,124,89,0.2)" }} />
              <div>
                <div style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fern)", marginBottom: "0.35rem" }}>Ethics</div>
                <div style={{ fontSize: "0.9rem", color: "var(--forest)" }}>Farmer consent obtained · Data anonymized on aggregation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIALIZATION */}
      <section className="commercial-section" id="commercialization">
        <div className="section-inner">
          <div className="section-label">Go to Market</div>
          <h2 className="section-title">From research to<br />real-world impact.</h2>
          <p className="section-desc">CinoGrow is positioned as the first all-in-one ML platform for cinnamon, targeting farmers, cooperatives, and research institutions across Sri Lanka.</p>

          <div className="commercial-grid">
            <div>
              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.25rem" }}>Subscription Plans</div>
                <div className="pricing-cards">
                  <div className="pricing-card">
                    <div className="pricing-tier">Individual Farmer</div>
                    <div><span className="pricing-price">Rs. 800</span> <span className="pricing-period">/month</span></div>
                  </div>
                  <div className="pricing-card featured">
                    <div className="pricing-tier">🌟 Cooperative</div>
                    <div><span className="pricing-price">Rs. 3,000</span> <span className="pricing-period">/month</span></div>
                  </div>
                  <div className="pricing-card">
                    <div className="pricing-tier">Research Institution</div>
                    <div><span className="pricing-price">Rs. 8,000</span> <span className="pricing-period">/month</span></div>
                  </div>
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
                { icon: "🏆", title: "Platform Copyright", desc: "Full IP ownership and potential patent registration for the CinoGrow system." },
                { icon: "🎯", title: "Precise Recommendations", desc: "Accurate fertilizer guidance, pest detection, oil yield prediction, and weather-informed planning." },
                { icon: "🌐", title: "Sinhala Language Support", desc: "Fine-tuned open-source NLP model for native language accessibility." },
                { icon: "📈", title: "Self-Improving Models", desc: "Continuous learning loop — each farmer interaction improves prediction accuracy." },
              ].map((v, i) => (
                <div className="value-prop" key={i}>
                  <div className="value-prop-icon">{v.icon}</div>
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

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="footer-brand">Cino<span>Grow</span></div>
              <div className="footer-tagline">Transforming cinnamon production in Sri Lanka by empowering farmers with smart, sustainable, data-driven solutions.</div>
            </div>
            <div className="footer-info">
              <strong>SLIIT Faculty of Computing</strong>
              Group No: 25-26J-338<br />
              Presented: 09 September 2025<br />
              Specialization: Information Technology
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 CinoGrow · SLIIT Research Project</span>
            <span>
              N.A.D. Nimsara · Jayawardana N.G.U.D. · Udayakumara W.D.L. · Malmi W.U.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}