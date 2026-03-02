import { useState } from "react";
import "../style.css";

export default function contactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
    console.log(formData);
  };

  return (
    <div className="page-wrapper">
      <div className="contact-card">
        {/* Left Section */}
        <div className="contact-left">
          <h2>Let's Talk</h2>
          <p>
            Have some big idea or brand to develop and need help?
            Then reach out we'd love to hear about your project and provide help.
          </p>

          <div className="contact-info">
            <h4>Email</h4>
            <p>info@example.com</p>
          </div>

          <div className="socials">
            <h4>Socials</h4>
            <div className="social-icons">
              <span>F</span>
              <span>In</span>
              <span>Ig</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="contact-right">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Send message</button>
          </form>
        </div>
      </div>
    </div>
  );
}