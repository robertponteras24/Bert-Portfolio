import { useState } from "react";
import "./style.css";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");
    
    try {
      const response = await fetch("http://localhost:3000/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setName(""); setEmail(""); setMessage("");
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      setStatus("Cannot connect to server.");
    }
  }

  return (
    <div>
      <nav className="nav">
        <a href="#home" className="logo">Berthography</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header id="home" className="hero">
        <div className="hero-bg"></div> 
        <h1>Capturing moments with <span className="accent">Berthography</span></h1>
        <p className="tagline">Capturing genuine moments and turning them into timeless memories.</p>
        <a href="#projects" className="btn">View Portfolio</a>
      </header>

      <section id="about" className="section">
        <h2>The Photographer</h2>
        <p>Welcome to Berthography. I specialize in capturing authentic emotions, beautiful light, and the unique story behind every event.</p>
      </section>

      <section id="projects" className="section">
        <h2>Selected Work</h2>
        <div className="grid grid-single">
          <article className="card">
            <div className="card-img"></div>
            <div className="card-content">
              <h3>Wedding & Event Photography</h3>
              <p>Documenting the raw emotion, grand celebrations, and intimate details of your most important days.</p>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Let's Work Together</h2>
        <p>Ready to book a session? Send me a message below:</p>
        
        {status && <p style={{ color: "#e2602a", fontWeight: "bold", marginTop: "1rem" }}>{status}</p>}

        <div className="form-intro">
          <p>Message now:</p>
          <span className="pulse-text">click here</span> <span className="arrow-down">↓</span>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required />
          <input type="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <textarea placeholder="Your Message" rows="5" value={message} onChange={e => setMessage(e.target.value)} required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>

        <div className="contact-list">
          <div className="contact-item">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="icon-btn">
              <img src="/assets/facebooklogo.jpg" alt="Facebook" />
            </a>
            <p>Robert Ponteras</p>
          </div>
          <div className="contact-item">
            <a href="tel:09123456789" className="icon-btn">
              <img src="/assets/PhoneCall.jpg" alt="Call" />
            </a>
            <p>09123456789</p>
          </div>
          <div className="contact-item">
            <a href="mailto:robertponteras1234@gmail.com" className="icon-btn">
              <img src="/assets/Gmailicon.png" alt="Email" />
            </a>
            <p>robertponteras1234@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}