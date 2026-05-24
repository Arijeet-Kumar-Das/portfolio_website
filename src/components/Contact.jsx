import { FiMail, FiPhone, FiMapPin, FiCheck } from "react-icons/fi";
import { lazy, Suspense, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionHeader from "./ui/SectionHeader";

const ContactScene = lazy(() => import("./three/ContactScene"));

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);

  const handleEmailClick = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText("dasarijeetkumar@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: select text manually
    }
  };

  const contactInfo = [
    {
      icon: copied ? FiCheck : FiMail,
      label: "Email",
      value: copied ? "Copied!" : "dasarijeetkumar@gmail.com",
      onClick: handleEmailClick,
      href: "#",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+91 8402064033",
      href: "tel:+918402064033",
      onClick: null,
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Bangalore, India",
      href: "https://maps.google.com/?q=Bangalore,India",
      onClick: null,
    },
  ];

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_voifais";
    const templateID = "template_4o016x9";
    const publicKey = "Rs-bB6GrUMDFkPElR";

    emailjs.send(serviceID, templateID, form, publicKey).then(
      () => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
      },
    );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Suspense fallback={null}>
          <ContactScene />
        </Suspense>
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-slate-950/60 via-slate-900/75 to-slate-950/85" />

      <div className="relative z-20 mx-auto max-w-6xl px-6 lg:px-16">
        <SectionHeader
          label="Signal"
          title="Establish Connection"
          className="mb-12"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-7 backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Open Comms
            </h3>

            <p className="mb-6 text-slate-300">
              I am open to full-time roles, freelance projects, and meaningful
              collaborations.
            </p>

            <div className="flex flex-col gap-3">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.onClick ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  onClick={info.onClick}
                  className="flex items-center gap-4 rounded-xl border border-slate-700 bg-slate-800/70 p-4 transition hover:border-sky-300/50 hover:bg-slate-800 cursor-pointer"
                >
                  <info.icon
                    className={`text-xl transition-colors ${
                      copied && info.label === "Email"
                        ? "text-green-400"
                        : "text-sky-300"
                    }`}
                  />

                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      {info.label}
                    </span>
                    <span
                      className={`transition-colors ${
                        copied && info.label === "Email"
                          ? "text-green-400"
                          : "text-slate-200"
                      }`}
                    >
                      {info.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-slate-700/70 bg-slate-900/80 p-8 shadow-[0_18px_50px_-35px_rgba(14,165,233,0.55)] backdrop-blur-sm"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="mb-4 w-full rounded-lg border border-slate-700 bg-slate-950/80 p-3 text-white outline-none transition focus:border-sky-300"
              onChange={onChange}
              value={form.name}
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="mb-4 w-full rounded-lg border border-slate-700 bg-slate-950/80 p-3 text-white outline-none transition focus:border-sky-300"
              onChange={onChange}
              value={form.email}
            />

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your Message"
              className="w-full rounded-lg border border-slate-700 bg-slate-950/80 p-3 text-white outline-none transition focus:border-sky-300"
              onChange={onChange}
              value={form.message}
            />

            <button
              className="mt-5 rounded-lg bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-400"
              type="submit"
            >
              Send Message please
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
