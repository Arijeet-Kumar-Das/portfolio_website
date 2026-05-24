import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AdaptiveDpr, MeshReflectorMaterial, Sparkles } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiDownload,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMenu,
  FiRadio,
  FiSend,
  FiX,
} from "react-icons/fi";
import { useEffect, useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import * as THREE from "three";

const MotionDiv = motion.div;
const MotionArticle = motion.article;

const chapters = [
  { id: "launch", label: "Launch", marker: "01" },
  { id: "operator", label: "Operator", marker: "02" },
  { id: "toolchain", label: "Toolchain", marker: "03" },
  { id: "missions", label: "Missions", marker: "04" },
  { id: "artifacts", label: "Artifacts", marker: "05" },
  { id: "signal", label: "Signal", marker: "06" },
];

const metrics = [
  { value: "4+", label: "Internships" },
  { value: "5+", label: "Shipped builds" },
  { value: "1", label: "Hackathon" },
  { value: "MCA", label: "B.M.S. College" },
];

const skillGroups = [
  {
    title: "Interface systems",
    items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Service layer",
    items: ["Node.js", "Express", "REST APIs", "JWT", "FastAPI", "Python"],
  },
  {
    title: "Data and delivery",
    items: ["MongoDB", "MySQL", "SQL", "Pinecone", "Vercel", "Postman"],
  },
  {
    title: "Foundations",
    items: ["DSA", "OOPS", "DBMS", "Software Testing", "GitHub", "Jira"],
  },
];

const experiences = [
  {
    role: "AI/ML Intern",
    company: "Confidential / Current Internship",
    period: "Present",
    detail:
      "Building ML workflows around stylometry, OCR, and handwriting detection for document intelligence and decision support.",
  },
  {
    role: "Software Development Intern",
    company: "BYTEDOCKER",
    period: "Jun 2025 - Sep 2025",
    detail:
      "Built a multi-organization tournament platform for registrations, fixtures, and team operations using a scalable MERN architecture.",
  },
  {
    role: "Software Development Intern",
    company: "Geekworkx Technologies",
    period: "Jan 2023 - Jun 2023",
    detail:
      "Built a Restaurant POS system for orders, inventory, billing, and real-time sales tracking.",
  },
  {
    role: "Frontend Web Intern",
    company: "Magitech Innovision LLP",
    period: "Feb 2023 - Jun 2023",
    detail:
      "Created production-ready interfaces for event booking, hotel, and tender-tracking products.",
  },
  {
    role: "Frontend Web Intern",
    company: "Insight Brandcom Pvt. Ltd.",
    period: "May 2023 - Jul 2023",
    detail:
      "Built and maintained a responsive corporate website with reusable UI components and cleaner content flow.",
  },
];

const projects = [
  {
    title: "Hybrid RAG Document QA",
    type: "AI retrieval system",
    desc:
      "A full-stack PDF intelligence system using hybrid retrieval, Pinecone embeddings, and OpenAI generation with fast and verified response modes.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Pinecone", "OpenAI"],
    github: "https://github.com/Arijeet-Kumar-Das/ha-rag-system",
    demo: "https://ha-rag-system.vercel.app/",
  },
  {
    title: "AI College Assistant",
    type: "Academic operations AI",
    desc:
      "A role-based academic assistant with JWT authentication, NLP query classification, and optimized backend APIs for structured and conversational requests.",
    stack: ["MongoDB", "Express", "React", "Node.js", "JWT", "NLP"],
    github:
      "https://github.com/Arijeet-Kumar-Das/AI-Powered-College-assistant-",
    demo: "https://ai-powered-college-assistant-b3w1-n0tzxu8er.vercel.app/",
  },
  {
    title: "Food Delivery Platform",
    type: "Commerce workflow",
    desc:
      "A full-stack delivery platform with customer, admin, and delivery-partner flows, order tracking, and Razorpay payment integration.",
    stack: ["React", "Node.js", "Express", "MySQL", "Razorpay"],
    github: "https://github.com/Arijeet-Kumar-Das/Food_Delivery_FreshSalads",
    demo: "",
  },
  {
    title: "Restaurant POS System",
    type: "Operations console",
    desc:
      "A counter-speed POS system for order lifecycle, inventory, billing, and real-time sales visibility.",
    stack: ["React", "Node.js", "Express", "MySQL", "Material UI"],
    github:
      "https://github.com/Arijeet-Kumar-Das/Restaurant-Point-of-Sale-Management-System",
    demo: "",
  },
  {
    title: "Insight Brandcom",
    type: "Production website",
    desc:
      "A responsive corporate website with reusable UI components, improved performance, and a cleaner production content structure.",
    stack: ["React", "Material UI", "Responsive Design"],
    github: "https://github.com/Arijeet-Kumar-Das/Insight-BrandCom",
    demo: "https://insightbrandcom.com/",
  },
];

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Arijeet-Kumar-Das",
    Icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/arijeet-kumar-das",
    Icon: FiLinkedin,
  },
  {
    label: "Email",
    href: "mailto:dasarijeetkumar@gmail.com",
    Icon: FiMail,
  },
];

const smoothstep = (value) => value * value * (3 - 2 * value);
const dampFactor = (lambda, delta) => 1 - Math.exp(-lambda * delta);
const clamp = THREE.MathUtils.clamp;

function useRenderProfile() {
  const [profile, setProfile] = useState({
    compact: false,
    reducedMotion: false,
  });

  useEffect(() => {
    const compactQuery = window.matchMedia("(max-width: 860px)");
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      setProfile({
        compact: compactQuery.matches,
        reducedMotion: reducedQuery.matches,
      });
    };

    sync();
    compactQuery.addEventListener("change", sync);
    reducedQuery.addEventListener("change", sync);

    return () => {
      compactQuery.removeEventListener("change", sync);
      reducedQuery.removeEventListener("change", sync);
    };
  }, []);

  const lowPower = profile.compact || profile.reducedMotion;

  return {
    ...profile,
    lowPower,
    dpr: lowPower ? [1, 1] : [1, 1.2],
    particles: lowPower ? 160 : 300,
    sparkles: lowPower ? 8 : 18,
    reflectorResolution: lowPower ? 128 : 256,
  };
}

function usePageTelemetry(totalChapters) {
  const progressRef = useRef(0);
  const activeChapterRef = useRef(0);
  const [activeChapter, setActiveChapter] = useState(0);
  const [progressSnapshot, setProgressSnapshot] = useState(0);

  useEffect(() => {
    let frame = 0;
    let lastSnapshot = 0;
    let scrollMax = 1;

    const updateScrollMax = () => {
      scrollMax = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
    };

    const measure = () => {
      const progress = clamp(window.scrollY / scrollMax, 0, 1);
      const activeChapter = Math.min(
        totalChapters - 1,
        Math.max(0, Math.round(progress * (totalChapters - 1))),
      );

      progressRef.current = progress;

      if (activeChapterRef.current !== activeChapter) {
        activeChapterRef.current = activeChapter;
        setActiveChapter(activeChapter);
      }

      if (Math.abs(progress - lastSnapshot) > 0.01) {
        lastSnapshot = progress;
        setProgressSnapshot(progress);
      }

      frame = requestAnimationFrame(measure);
    };

    updateScrollMax();
    frame = requestAnimationFrame(measure);
    window.addEventListener("resize", updateScrollMax);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateScrollMax);
    };
  }, [totalChapters]);

  return { activeChapter, progressRef, progressSnapshot };
}

function useCursorSignal() {
  const cursorRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event) => {
      cursorRef.current = {
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: -(event.clientY / window.innerHeight - 0.5) * 2,
      };
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return cursorRef;
}

function App() {
  const { activeChapter, progressRef, progressSnapshot } = usePageTelemetry(chapters.length);
  const cursorRef = useCursorSignal();
  const renderProfile = useRenderProfile();
  const [navOpen, setNavOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);

  const jumpTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  return (
    <div className="of-shell">
      <div className="of-canvas" aria-hidden="true">
        <Canvas
          camera={{ position: [0, 1.9, 8], fov: 46, near: 0.1, far: 70 }}
          dpr={renderProfile.dpr}
          gl={{
            antialias: true,
            alpha: false,
            depth: true,
            powerPreference: "high-performance",
            stencil: false,
          }}
        >
          <OrbitalFoundryScene
            activeChapter={activeChapter}
            cursorRef={cursorRef}
            progressRef={progressRef}
            renderProfile={renderProfile}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        </Canvas>
      </div>

      <CommandNav
        activeChapter={activeChapter}
        jumpTo={jumpTo}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
      />

      <ChapterRail activeChapter={activeChapter} progress={progressSnapshot} jumpTo={jumpTo} />

      <main className="of-story">
        <LaunchBay />
        <OperatorDeck />
        <ToolchainArray />
        <MissionLog />
        <ArtifactVault
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
        <SignalDock />
      </main>
    </div>
  );
}

function CommandNav({ activeChapter, jumpTo, navOpen, setNavOpen }) {
  return (
    <header className={`command-nav ${navOpen ? "is-open" : ""}`}>
      <button className="brand-mark" type="button" onClick={() => jumpTo("launch")}>
        <span className="brand-core">AKD</span>
        <span className="brand-sub">Orbital Foundry</span>
      </button>

      <nav className="nav-links" aria-label="Primary navigation">
        {chapters.map((chapter, index) => (
          <button
            aria-current={activeChapter === index ? "page" : undefined}
            className={activeChapter === index ? "is-active" : ""}
            key={chapter.id}
            onClick={() => jumpTo(chapter.id)}
            type="button"
          >
            <span>{chapter.marker}</span>
            {chapter.label}
          </button>
        ))}
      </nav>

      <button
        aria-expanded={navOpen}
        aria-label="Toggle navigation"
        className="nav-toggle"
        onClick={() => setNavOpen((value) => !value)}
        type="button"
      >
        {navOpen ? <FiX /> : <FiMenu />}
      </button>
    </header>
  );
}

function ChapterRail({ activeChapter, progress, jumpTo }) {
  return (
    <aside className="chapter-rail" aria-label="Story position">
      <span className="rail-readout">{Math.round(progress * 100).toString().padStart(2, "0")}</span>
      <div className="rail-track">
        <span style={{ height: `${progress * 100}%` }} />
      </div>
      <div className="rail-nodes">
        {chapters.map((chapter, index) => (
          <button
            aria-label={chapter.label}
            className={activeChapter === index ? "is-active" : ""}
            key={chapter.id}
            onClick={() => jumpTo(chapter.id)}
            type="button"
          />
        ))}
      </div>
    </aside>
  );
}

function Chapter({ id, marker, eyebrow, title, align = "left", children }) {
  return (
    <section className={`chapter chapter-${align}`} id={id}>
      <MotionDiv
        className="chapter-module"
        initial={{ opacity: 0, y: 34 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ amount: 0.46, once: false }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="chapter-heading">
          <span className="chapter-marker">{marker}</span>
          <p>{eyebrow}</p>
        </div>
        <h2>{title}</h2>
        {children}
      </MotionDiv>
    </section>
  );
}

function LaunchBay() {
  return (
    <section className="chapter launch-chapter" id="launch">
      <MotionDiv
        className="launch-copy"
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="status-line">
          <span />
          Available for opportunities
        </div>
        <p className="launch-kicker">Full-stack developer // creative systems builder</p>
        <h1>Arijeet Kumar Das</h1>
        <p className="launch-intro">
          I build production-minded web systems with the instincts of a frontend
          engineer and the curiosity of a creative technologist.
        </p>
        <div className="launch-actions">
          <a className="primary-action" href="#artifacts">
            Artifact vault
            <FiArrowUpRight />
          </a>
          <a className="secondary-action" href="/resume_new.pdf" download="Arijeet_Kumar_Das_Resume.pdf">
            <FiDownload />
            Resume
          </a>
        </div>
      </MotionDiv>

      <MotionDiv
        className="mission-strip"
        initial={{ opacity: 0, x: 34 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p>Current coordinates</p>
        <strong>Bangalore, India</strong>
        <p>Primary stack</p>
        <strong>React / Node / Data</strong>
        <p>Operating mode</p>
        <strong>Build, test, ship</strong>
      </MotionDiv>
    </section>
  );
}

function OperatorDeck() {
  return (
    <Chapter
      align="right"
      eyebrow="Human operator"
      id="operator"
      marker="02"
      title="Ambitious engineering, with product gravity."
    >
      <p className="chapter-copy">
        I am an MCA student at B.M.S. College of Engineering who turns rough
        ideas into usable systems. My work sits between frontend craft,
        backend reliability, and the practical decisions that make a product
        feel ready for real people.
      </p>
      <div className="metric-array">
        {metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </Chapter>
  );
}

function ToolchainArray() {
  return (
    <Chapter
      eyebrow="Toolchain array"
      id="toolchain"
      marker="03"
      title="A practical stack tuned for interfaces, services, and data."
    >
      <div className="toolchain-array">
        {skillGroups.map((group, groupIndex) => (
          <MotionDiv
            className="tool-band"
            initial={{ opacity: 0, x: groupIndex % 2 === 0 ? -26 : 26 }}
            key={group.title}
            transition={{ delay: groupIndex * 0.08, duration: 0.58 }}
            viewport={{ amount: 0.6, once: false }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3>{group.title}</h3>
            <div>
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </MotionDiv>
        ))}
      </div>
    </Chapter>
  );
}

function MissionLog() {
  return (
    <Chapter
      align="right"
      eyebrow="Mission log"
      id="missions"
      marker="04"
      title="Internships where prototypes had to become workflows."
    >
      <div className="mission-log">
        {experiences.map((experience, index) => (
          <MotionArticle
            className="mission-entry"
            initial={{ opacity: 0, y: 24 }}
            key={`${experience.company}-${experience.period}`}
            transition={{ delay: index * 0.08, duration: 0.55 }}
            viewport={{ amount: 0.5, once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span>{(index + 1).toString().padStart(2, "0")}</span>
            <div>
              <h3>{experience.role}</h3>
              <p>{experience.company}</p>
            </div>
            <time>{experience.period}</time>
            <p>{experience.detail}</p>
          </MotionArticle>
        ))}
      </div>
    </Chapter>
  );
}

function ArtifactVault({ selectedProject, setSelectedProject }) {
  const project = projects[selectedProject];

  return (
    <Chapter
      eyebrow="Artifact vault"
      id="artifacts"
      marker="05"
      title="Shipped systems, stored as machine parts."
    >
      <div className="artifact-console">
        <div className="artifact-index">
          {projects.map((item, index) => (
            <button
              className={selectedProject === index ? "is-selected" : ""}
              key={item.title}
              onClick={() => setSelectedProject(index)}
              type="button"
            >
              <span>{(index + 1).toString().padStart(2, "0")}</span>
              <strong>{item.title}</strong>
              <em>{item.type}</em>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <MotionArticle
            animate={{ opacity: 1, y: 0 }}
            className="artifact-detail"
            exit={{ opacity: 0, y: -14 }}
            initial={{ opacity: 0, y: 14 }}
            key={project.title}
            transition={{ duration: 0.35 }}
          >
            <p className="artifact-type">{project.type}</p>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="artifact-stack">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="artifact-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FiGithub />
                Source
              </a>
              {project.demo ? (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink />
                  Live
                </a>
              ) : null}
            </div>
          </MotionArticle>
        </AnimatePresence>
      </div>
    </Chapter>
  );
}

function SignalDock() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const onChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        "service_voifais",
        "template_4o016x9",
        form,
        "Rs-bB6GrUMDFkPElR",
      );
      setForm({ name: "", email: "", message: "" });
      setStatus("sent");
    } catch (error) {
      console.error(error);
      setStatus("failed");
    }
  };

  return (
    <Chapter
      align="right"
      eyebrow="Docking signal"
      id="signal"
      marker="06"
      title="Transmit the next brief."
    >
      <div className="signal-grid">
        <div className="contact-manifest">
          <a href="mailto:dasarijeetkumar@gmail.com">
            <FiMail />
            dasarijeetkumar@gmail.com
          </a>
          <a href="tel:+918402064033">
            <FiRadio />
            +91 8402064033
          </a>
          <span>
            <FiMapPin />
            Bangalore, India
          </span>
          <div className="social-dock">
            {contactLinks.map(({ Icon, href, label }) => {
              const SocialIcon = Icon;
              return (
                <a href={href} key={label} rel="noopener noreferrer" target="_blank" aria-label={label}>
                  <SocialIcon />
                </a>
              );
            })}
          </div>
        </div>

        <form className="signal-form" onSubmit={onSubmit}>
          <label>
            Name
            <input
              autoComplete="name"
              name="name"
              onChange={onChange}
              required
              type="text"
              value={form.name}
            />
          </label>
          <label>
            Email
            <input
              autoComplete="email"
              name="email"
              onChange={onChange}
              required
              type="email"
              value={form.email}
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              onChange={onChange}
              required
              rows="4"
              value={form.message}
            />
          </label>
          <button disabled={status === "sending"} type="submit">
            <FiSend />
            {status === "sending" ? "Transmitting" : "Send signal"}
          </button>
          <p className={`form-status status-${status}`}>
            {status === "sent"
              ? "Transmission received."
              : status === "failed"
                ? "Transmission failed. Email link remains active."
                : "Secure channel standing by."}
          </p>
        </form>
      </div>
    </Chapter>
  );
}

function OrbitalFoundryScene({
  activeChapter,
  cursorRef,
  progressRef,
  renderProfile,
  selectedProject,
  setSelectedProject,
}) {
  return (
    <>
      <color attach="background" args={["#030303"]} />
      <fog attach="fog" args={["#030303", 5.8, 24]} />
      <AdaptiveDpr />
      <CameraRig cursorRef={cursorRef} progressRef={progressRef} />
      <SceneLights activeChapter={activeChapter} cursorRef={cursorRef} />
      <ParticleField count={renderProfile.particles} lowPower={renderProfile.lowPower} />
      <FoundryFloor renderProfile={renderProfile} />
      <group position={[0, -0.18, 0]}>
        <DockingFrame />
        <ReactorCore activeChapter={activeChapter} />
        <ToolchainSatellites activeChapter={activeChapter} lowPower={renderProfile.lowPower} />
        <ProjectCapsules
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
        <HologramStack activeChapter={activeChapter} />
      </group>
      <Sparkles
        color="#ffb454"
        count={renderProfile.sparkles}
        noise={0.42}
        opacity={renderProfile.lowPower ? 0.12 : 0.17}
        scale={[9, 3, 9]}
        size={renderProfile.lowPower ? 1.2 : 1.5}
        speed={0.035}
      />
    </>
  );
}

function CameraRig({ cursorRef, progressRef }) {
  const { camera } = useThree();
  const smoothedProgress = useRef(0);
  const smoothedCursor = useRef({ x: 0, y: 0 });
  const currentLook = useRef(new THREE.Vector3(0, 0, 0));
  const targetPosition = useRef(new THREE.Vector3());
  const targetLook = useRef(new THREE.Vector3());

  const cameraPath = useMemo(() => {
    const positions = [
      new THREE.Vector3(0, 1.72, 8.65),
      new THREE.Vector3(3.35, 2.18, 6.55),
      new THREE.Vector3(-3.75, 2.32, 6.1),
      new THREE.Vector3(3.0, 1.55, 4.95),
      new THREE.Vector3(-2.7, 1.88, 4.7),
      new THREE.Vector3(0.45, 2.62, 7.25),
    ];
    const looks = [
      new THREE.Vector3(0, -0.04, 0),
      new THREE.Vector3(0.14, 0.02, -0.18),
      new THREE.Vector3(-0.16, 0.02, -0.1),
      new THREE.Vector3(0.24, -0.13, -0.2),
      new THREE.Vector3(-0.18, -0.04, 0.02),
      new THREE.Vector3(0, 0.1, 0),
    ];

    return {
      position: new THREE.CatmullRomCurve3(positions, false, "centripetal", 0.28),
      look: new THREE.CatmullRomCurve3(looks, false, "centripetal", 0.28),
    };
  }, []);

  useFrame((state, delta) => {
    const targetProgress = progressRef.current;
    const progressDelta = targetProgress - smoothedProgress.current;
    const unclampedStep = progressDelta * dampFactor(1.9, delta);
    const maxStep = delta * 0.48;
    smoothedProgress.current = clamp(
      smoothedProgress.current + clamp(unclampedStep, -maxStep, maxStep),
      0,
      1,
    );

    const cursor = cursorRef.current;
    smoothedCursor.current.x = THREE.MathUtils.lerp(
      smoothedCursor.current.x,
      cursor.x,
      dampFactor(2.2, delta),
    );
    smoothedCursor.current.y = THREE.MathUtils.lerp(
      smoothedCursor.current.y,
      cursor.y,
      dampFactor(2.2, delta),
    );

    const cinematicProgress = smoothstep(smoothedProgress.current);
    cameraPath.position.getPoint(cinematicProgress, targetPosition.current);
    cameraPath.look.getPoint(cinematicProgress, targetLook.current);

    targetPosition.current.x += smoothedCursor.current.x * 0.1;
    targetPosition.current.y += smoothedCursor.current.y * 0.055;
    targetPosition.current.z += Math.sin(state.clock.elapsedTime * 0.08) * 0.035;

    targetLook.current.x += smoothedCursor.current.x * 0.036;
    targetLook.current.y += smoothedCursor.current.y * 0.022;

    camera.position.lerp(targetPosition.current, dampFactor(2.9, delta));
    currentLook.current.lerp(targetLook.current, dampFactor(3.05, delta));
    camera.lookAt(currentLook.current);
  });

  return null;
}

function SceneLights({ activeChapter, cursorRef }) {
  const keyLight = useRef(null);
  const beacon = useRef(null);
  const beaconTarget = 1.7 + activeChapter * 0.18;

  useFrame((state, delta) => {
    const cursor = cursorRef.current;

    if (keyLight.current) {
      keyLight.current.position.x = THREE.MathUtils.lerp(
        keyLight.current.position.x,
        -2.4 + cursor.x * 0.7,
        dampFactor(2.2, delta),
      );
      keyLight.current.position.y = THREE.MathUtils.lerp(
        keyLight.current.position.y,
        3.4 + cursor.y * 0.38,
        dampFactor(2.2, delta),
      );
    }

    if (beacon.current) {
      const breathe = Math.sin(state.clock.elapsedTime * 0.55) * 0.08;
      beacon.current.intensity = THREE.MathUtils.lerp(
        beacon.current.intensity,
        beaconTarget + breathe,
        dampFactor(2.8, delta),
      );
    }
  });

  return (
    <>
      <ambientLight intensity={0.22} />
      <directionalLight
        color="#fff1d1"
        intensity={1.25}
        position={[-5.5, 5.8, 4]}
        ref={keyLight}
      />
      <pointLight color="#ffb454" distance={12} intensity={2.4} position={[0, 0.2, 0]} ref={beacon} />
      <pointLight color="#b74122" distance={10} intensity={1.1} position={[3.5, -0.8, -2]} />
      <spotLight
        angle={0.4}
        color="#f4ead7"
        intensity={1.5}
        penumbra={0.65}
        position={[0, 6.4, 2.2]}
        target-position={[0, 0, 0]}
      />
    </>
  );
}

function ReactorCore({ activeChapter }) {
  const core = useRef(null);
  const shell = useRef(null);
  const ringA = useRef(null);
  const ringB = useRef(null);
  const ringC = useRef(null);
  const shellMaterial = useRef(null);
  const glowMaterial = useRef(null);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    const phase = activeChapter / (chapters.length - 1);

    if (core.current) {
      core.current.rotation.y += delta * 0.018;
      core.current.rotation.x = THREE.MathUtils.lerp(
        core.current.rotation.x,
        Math.sin(time * 0.09) * 0.045,
        dampFactor(1.6, delta),
      );
    }

    if (shell.current) {
      shell.current.rotation.y += delta * 0.036;
      shell.current.rotation.z = Math.sin(time * 0.07) * 0.035;
    }

    if (shellMaterial.current) {
      shellMaterial.current.emissiveIntensity = THREE.MathUtils.lerp(
        shellMaterial.current.emissiveIntensity,
        0.22 + phase * 0.12 + Math.sin(time * 0.5) * 0.028,
        dampFactor(2.2, delta),
      );
    }

    if (glowMaterial.current) {
      glowMaterial.current.opacity = THREE.MathUtils.lerp(
        glowMaterial.current.opacity,
        0.08 + phase * 0.04 + Math.sin(time * 0.42) * 0.015,
        dampFactor(1.8, delta),
      );
    }

    if (ringA.current) ringA.current.rotation.z += delta * 0.055;
    if (ringB.current) ringB.current.rotation.x += delta * 0.037;
    if (ringC.current) ringC.current.rotation.y -= delta * 0.026;
  });

  return (
    <group ref={core}>
      <mesh ref={shell}>
        <dodecahedronGeometry args={[1.05, 1]} />
        <meshStandardMaterial
          color="#9a4b1f"
          emissive="#8f330f"
          emissiveIntensity={0.24}
          flatShading
          metalness={0.82}
          ref={shellMaterial}
          roughness={0.28}
        />
      </mesh>
      <mesh scale={1.032}>
        <dodecahedronGeometry args={[1.05, 1]} />
        <meshBasicMaterial
          color="#ffb454"
          depthWrite={false}
          opacity={0.08}
          ref={glowMaterial}
          transparent
        />
      </mesh>

      <mesh ref={ringA} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.38, 0.018, 8, 144]} />
        <meshStandardMaterial color="#ffb454" emissive="#9a3e18" emissiveIntensity={1.15} metalness={0.75} roughness={0.24} />
      </mesh>
      <mesh ref={ringB} rotation={[0.82, 0.42, 0]}>
        <torusGeometry args={[1.72, 0.012, 8, 144]} />
        <meshStandardMaterial color="#f4ead7" emissive="#ffb454" emissiveIntensity={0.42} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh ref={ringC} rotation={[0.2, 1.1, 0.38]}>
        <torusGeometry args={[2.12, 0.01, 8, 144]} />
        <meshStandardMaterial color="#6b6256" emissive="#b74122" emissiveIntensity={0.24} metalness={0.9} roughness={0.36} />
      </mesh>
    </group>
  );
}

function DockingFrame() {
  const frame = useRef(null);

  useFrame((state) => {
    if (frame.current) {
      frame.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.08) * 0.08;
    }
  });

  const beams = useMemo(
    () => [
      { position: [0, -1.08, 0], scale: [5.2, 0.04, 0.06], rotation: [0, 0, 0] },
      { position: [0, -1.08, 0], scale: [0.06, 0.04, 5.2], rotation: [0, 0, 0] },
      { position: [2.6, -0.38, 0], scale: [0.05, 1.42, 0.05], rotation: [0, 0, 0] },
      { position: [-2.6, -0.38, 0], scale: [0.05, 1.42, 0.05], rotation: [0, 0, 0] },
      { position: [0, -0.38, 2.6], scale: [0.05, 1.42, 0.05], rotation: [0, 0, 0] },
      { position: [0, -0.38, -2.6], scale: [0.05, 1.42, 0.05], rotation: [0, 0, 0] },
    ],
    [],
  );

  return (
    <group ref={frame}>
      {beams.map((beam, index) => (
        <mesh key={index} position={beam.position} rotation={beam.rotation} scale={beam.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#2a2621" emissive="#2a1208" emissiveIntensity={0.24} metalness={0.88} roughness={0.34} />
        </mesh>
      ))}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.06, 0]}>
        <torusGeometry args={[2.6, 0.012, 8, 160]} />
        <meshStandardMaterial color="#9a7350" emissive="#b74122" emissiveIntensity={0.42} metalness={0.92} roughness={0.25} />
      </mesh>
    </group>
  );
}

function ToolchainSatellites({ activeChapter, lowPower }) {
  const mesh = useRef(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const satellites = useMemo(() => {
    const total = lowPower ? 18 : 28;
    return Array.from({ length: total }, (_, index) => {
      const angle = (index / total) * Math.PI * 2;
      const radius = 2.9 + (index % 7) * 0.13;
      return {
        angle,
        radius,
        y: -0.42 + ((index % 9) - 4) * 0.08,
        size: 0.055 + (index % 4) * 0.008,
      };
    });
  }, [lowPower]);

  useFrame((state) => {
    if (!mesh.current) return;

    satellites.forEach((satellite, index) => {
      const speed = activeChapter >= 2 ? 0.065 : 0.035;
      const angle = satellite.angle + state.clock.elapsedTime * speed;
      dummy.position.set(
        Math.cos(angle) * satellite.radius,
        satellite.y + Math.sin(state.clock.elapsedTime * 0.22 + index) * 0.018,
        Math.sin(angle) * satellite.radius,
      );
      dummy.rotation.set(0.4, angle, 0.8);
      dummy.scale.set(satellite.size, satellite.size * 3.8, satellite.size);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(index, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh args={[null, null, satellites.length]} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#d4c4ad" emissive="#ffb454" emissiveIntensity={activeChapter >= 2 ? 0.34 : 0.12} metalness={0.74} roughness={0.28} />
    </instancedMesh>
  );
}

function ProjectCapsules({ selectedProject, setSelectedProject }) {
  const orbit = useRef(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    document.body.style.cursor = hovered === null ? "" : "pointer";
    return () => {
      document.body.style.cursor = "";
    };
  }, [hovered]);

  useFrame((state, delta) => {
    if (orbit.current) {
      orbit.current.rotation.y += delta * 0.015;
      orbit.current.position.y = Math.sin(state.clock.elapsedTime * 0.16) * 0.035;
    }
  });

  return (
    <group ref={orbit}>
      {projects.map((project, index) => {
        const angle = (index / projects.length) * Math.PI * 2 + Math.PI / 5;
        const radius = 3.55;
        const active = selectedProject === index;

        return (
          <group
            key={project.title}
            onClick={(event) => {
              event.stopPropagation();
              setSelectedProject(index);
            }}
            onPointerOut={() => setHovered(null)}
            onPointerOver={(event) => {
              event.stopPropagation();
              setHovered(index);
            }}
            position={[Math.cos(angle) * radius, 0.38 + (index % 2) * 0.18, Math.sin(angle) * radius]}
            rotation={[0, -angle + Math.PI / 2, 0]}
            scale={active ? 1.18 : 1}
          >
            <mesh>
              <octahedronGeometry args={[0.34, 0]} />
              <meshStandardMaterial
                color={active ? "#ffb454" : "#8c7b66"}
                emissive={active ? "#b74122" : "#1a0d07"}
                emissiveIntensity={active ? 1.18 : 0.28}
                metalness={0.88}
                roughness={0.2}
              />
            </mesh>
            <mesh position={[0, -0.42, 0]}>
              <boxGeometry args={[0.92, 0.045, 0.28]} />
              <meshStandardMaterial
                color={active ? "#f4ead7" : "#332d26"}
                emissive={active ? "#ffb454" : "#20120b"}
                emissiveIntensity={active ? 0.52 : 0.14}
                metalness={0.76}
                roughness={0.32}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

function HologramStack({ activeChapter }) {
  const group = useRef(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = -0.35 + Math.sin(state.clock.elapsedTime * 0.1) * 0.035;
      group.current.position.y = 0.16 + activeChapter * 0.012;
    }
  });

  return (
    <group position={[-2.9, 0.15, -1.7]} ref={group}>
      {[0, 1, 2, 3].map((item) => (
        <mesh key={item} position={[0, item * 0.34, item * -0.08]} rotation={[0, 0.18, 0]}>
          <planeGeometry args={[1.42 - item * 0.12, 0.18]} />
          <meshStandardMaterial
            color="#ffdfb0"
            emissive="#ffb454"
            emissiveIntensity={0.55 + item * 0.08}
            opacity={0.13 + item * 0.02}
            transparent
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function FoundryFloor({ renderProfile }) {
  return (
    <mesh position={[0, -1.34, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[10.5, 64]} />
      {renderProfile.lowPower ? (
        <meshStandardMaterial
          color="#090806"
          metalness={0.48}
          roughness={0.58}
        />
      ) : (
        <MeshReflectorMaterial
          blur={[220, 80]}
          color="#090806"
          depthScale={0.1}
          metalness={0.7}
          mirror={0.08}
          mixBlur={0.72}
          mixStrength={0.28}
          resolution={renderProfile.reflectorResolution}
          roughness={0.46}
        />
      )}
    </mesh>
  );
}

function ParticleField({ count, lowPower }) {
  const points = useRef(null);
  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const amber = new THREE.Color("#ffb454");
    const graphite = new THREE.Color("#5c544a");

    for (let index = 0; index < count; index += 1) {
      const radius = 5.5 + Math.random() * 12;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 6;
      positions[index * 3] = Math.cos(angle) * radius;
      positions[index * 3 + 1] = height;
      positions[index * 3 + 2] = Math.sin(angle) * radius;

      const color = graphite.clone().lerp(amber, Math.random() * 0.45);
      colors[index * 3] = color.r;
      colors[index * 3 + 1] = color.g;
      colors[index * 3 + 2] = color.b;
    }

    const field = new THREE.BufferGeometry();
    field.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    field.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return field;
  }, [count]);

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.y -= delta * (lowPower ? 0.0025 : 0.005);
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.025) * (lowPower ? 0.012 : 0.02);
    }
  });

  return (
    <points geometry={geometry} ref={points}>
      <pointsMaterial
        depthWrite={false}
        opacity={lowPower ? 0.38 : 0.56}
        size={lowPower ? 0.018 : 0.022}
        transparent
        vertexColors
      />
    </points>
  );
}

export default App;
