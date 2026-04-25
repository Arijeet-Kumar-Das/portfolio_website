import ThreeScene from "./ThreeScene";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden bg-slate-950 text-slate-100"
    >
      {/* 3D Background */}
      <ThreeScene />

      {/* Overlay layers for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/40 to-slate-950/85" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(56,189,248,0.15),transparent_45%),radial-gradient(circle_at_75%_75%,rgba(99,102,241,0.12),transparent_40%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl items-center px-6 sm:px-10 lg:px-16 pt-20 sm:pt-28">
        
        <div className="w-full max-w-3xl rounded-2xl border border-slate-700/30 bg-slate-900/30 p-8 sm:p-10 backdrop-blur-md shadow-[0_20px_80px_-30px_rgba(56,189,248,0.35)]">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur-sm">
            <span className="relative inline-flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities
          </div>

          {/* Tag */}
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-sky-400/90">
            Full Stack Developer
          </p>

          {/* Name */}
          <h1 className="relative text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            <span className="absolute -inset-1 blur-2xl bg-sky-500/10 opacity-40"></span>
            <span className="relative bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">
              Arijeet Kumar Das
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            I build scalable web applications with clean architecture and
            thoughtful user experiences. Focused on performance, clarity, and
            real-world impact.
          </p>
          <div className="mt-6 h-px w-40 bg-gradient-to-r from-sky-300/70 to-transparent" />

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            
            {/* Primary */}
            <a
              href="#projects"
              className="group relative rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition duration-300 hover:-translate-y-1 hover:bg-sky-400"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 rounded-lg bg-sky-400 opacity-0 blur-md transition duration-300 group-hover:opacity-40" />
            </a>

            {/* Secondary */}
            <a
              href="#contact"
              className="rounded-lg border border-slate-600 bg-slate-800/20 px-6 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-800/60"
            >
              Contact
            </a>
          </div>

        </div>
      </div>

      
    </section>
  );
};

export default Hero;