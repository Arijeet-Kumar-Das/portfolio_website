import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { useState } from "react";
import emailjs from "@emailjs/browser";
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
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-white text-center">
          Get In <span className="text-blue-400">Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold mb-2 text-white">Let's Talk</h3>
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.href}
                className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl hover:bg-blue-800/20"
              >
                <info.icon className="text-2xl text-blue-400" />
                <span className="text-gray-200">{info.value}</span>
              </a>
            ))}
            <div className="mt-8 bg-gray-900 rounded-xl p-4 border border-blue-800 text-blue-400 font-bold">
              🏆 2nd Prize, Hack-The-Work 2025
            </div>
          </div>
          <form
            onSubmit={onSubmit}
            className="bg-gray-800 rounded-xl p-8 flex flex-col gap-4 shadow"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full p-3 bg-gray-900 rounded text-white"
              onChange={onChange}
              value={form.name}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full p-3 bg-gray-900 rounded text-white"
              onChange={onChange}
              value={form.email}
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your Message"
              className="w-full p-3 bg-gray-900 rounded text-white"
              onChange={onChange}
              value={form.message}
            ></textarea>
            <button
              className="px-6 py-3 mt-2 rounded bg-blue-500 text-white font-bold hover:bg-purple-500 transition"
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
