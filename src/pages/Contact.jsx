import { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://portfolio-backend-7-5e78.onrender.com/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Header */}
        <p className="section-subtitle">Let’s Connect</p>
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-desc">
          Whether you have a question, opportunity, or just want to say hello,
          feel free to send a message.
        </p>

        <div className="contact-grid">

          {/* LEFT INFO */}
          <div className="contact-info">
            <div className="info-card">
              <h4>Email</h4>
              <p>abinaya03m@gmail.com</p>
            </div>

            <div className="info-card">
              <h4>Location</h4>
              <p>Tamil Nadu, India</p>
            </div>

            <div className="info-note">
              <h4>Open to opportunities</h4>
              <p>
                Actively looking for data analyst roles, internships,
                and full-stack development opportunities.
              </p>
            </div>
            <div className="info-card">
  <h4>LinkedIn</h4>
  <a
    href="https://www.linkedin.com/in/abinaya-m-367408353"
    target="_blank"
    rel="noreferrer"
  >
    View Profile
  </a>
</div>



          </div>

          {/* RIGHT FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Your Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            





            <div className="form-group">
              <label>Your Message</label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="success-msg">
  Thank you! I’ll get back to you shortly 😊
</p>

            )}

            {status === "error" && (
              <p className="error-msg">Something went wrong ❌</p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}
