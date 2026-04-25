import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { lazy, Suspense, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionHeader from "./ui/SectionHeader";

const ContactScene = lazy(() => import("./three/ContactScene"));
const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "dasarijeetkumar@gmail.com",
    href: "mailto:dasarijeetkumar@gmail.com",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91 8402064033",
    href: "tel:+918402064033",
  },
  { icon: FiMapPin, label: "Location", value: "Bangalore, India", href: "#" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
 const onSubmit = (e) => {
  e.preventDefault();

  // Replace these with your EmailJS values
  const serviceID = "service_voifais";
  const templateID = "template_4o016x9";
  const publicKey = "Rs-bB6GrUMDFkPElR";

  emailjs.send(serviceID, templateID, form, publicKey)
    .then(
      (result) => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" }); // Reset form
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
      }
    );
};


  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-24">
      <Suspense fallback={null}>
        <ContactScene />
      </Suspense>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/75 to-slate-950/85" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-16">
        <SectionHeader label="Contact" title="Get In Touch" className="mb-12" />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-7 backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-semibold text-white">Let&apos;s Talk</h3>
            <p className="mb-6 text-slate-300">
              I am open to full-time roles, freelance projects, and meaningful collaborations.
            </p>
            <div className="flex flex-col gap-3">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 rounded-xl border border-slate-700 bg-slate-800/70 p-4 transition hover:border-sky-300/50 hover:bg-slate-800"
                >
                  <info.icon className="text-xl text-sky-300" />
                  <span className="text-slate-200">{info.value}</span>
                </a>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-sky-800/50 bg-slate-900/80 p-4 text-sm font-medium text-sky-300">
              Hack-The-Work 2025 — 2nd Prize Winner
            </div>
          </div>

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
            ></textarea>
            <button
              className="mt-5 rounded-lg bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-400"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div> 
    </section>
  );
};
export default Contact;
