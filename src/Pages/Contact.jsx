import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBoxOpen, FaHeadset, FaRotateLeft } from 'react-icons/fa6'
import '../Styles/InfoPages.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="info-page contact-page">
      <section className="info-hero">
        <p className="info-eyebrow">WE'RE LISTENING</p>
        <h1>Let's talk</h1>
        <p>Have a question or need a little help? Send us a note and tell us what you need.</p>
      </section>

      <section className="contact-layout">
        <div className="contact-form-card info-card">
          <h2>Send us a message</h2>
          <p>Share a few details and we’ll point you in the right direction.</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Enter your name" required />

            <label htmlFor="contact-email">Email address</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />

            <label htmlFor="contact-topic">What can we help with?</label>
            <select id="contact-topic" name="topic" defaultValue="" required>
              <option value="" disabled>Select a topic</option>
              <option value="product">Product or shopping question</option>
              <option value="delivery">Delivery question</option>
              <option value="return">Return or exchange</option>
              <option value="other">Something else</option>
            </select>

            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="5" placeholder="How can we help?" required />

            <button className="primary-link contact-submit" type="submit">Send message</button>
            {submitted && <p className="form-notice" role="status">Thanks for reaching out. This demo form does not send messages yet, but your details are ready for a connected contact service.</p>}
          </form>
        </div>

        <aside className="contact-help">
          <h2>Looking for something specific?</h2>
          <p>Choose a topic to find help faster.</p>
          <Link className="contact-help-link" to="/services/shopping"><FaHeadset aria-hidden="true" /><span><strong>Shopping help</strong><small>Questions about browsing or products</small></span></Link>
          <Link className="contact-help-link" to="/services/delivery"><FaBoxOpen aria-hidden="true" /><span><strong>Delivery support</strong><small>Get guidance with an order</small></span></Link>
          <Link className="contact-help-link" to="/services/returns"><FaRotateLeft aria-hidden="true" /><span><strong>Returns & exchanges</strong><small>Find out what to do next</small></span></Link>
        </aside>
      </section>
    </main>
  )
}
