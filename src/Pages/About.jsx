import { Link } from 'react-router-dom'
import { FaHeart, FaRegLightbulb, FaStar } from 'react-icons/fa6'
import '../Styles/InfoPages.css'

export default function About() {
  return (
    <main className="info-page about-page">
      <section className="info-hero">
        <p className="info-eyebrow">GET TO KNOW US</p>
        <h1>A little more joy in every find</h1>
        <p>Zenvora is your place to discover thoughtful picks for everyday living, all in one simple shopping experience.</p>
      </section>

      <section className="about-story info-card">
        <div>
          <p className="info-eyebrow">OUR STORY</p>
          <h2>Made for the way you shop</h2>
          <p>We believe finding something you love should feel exciting, not complicated. Zenvora brings a variety of products and categories together so you can explore, compare, and choose with confidence.</p>
          <p>From the first browse to the moment you add an item to your cart, we keep the experience focused on what matters: useful products, clear choices, and a welcoming place to shop.</p>
          <Link className="primary-link" to="/products">Explore products</Link>
        </div>
        <div className="about-values" aria-label="What matters to us">
          <article>
            <FaHeart aria-hidden="true" />
            <div><h3>Customer first</h3><p>A helpful experience at every step.</p></div>
          </article>
          <article>
            <FaRegLightbulb aria-hidden="true" />
            <div><h3>Thoughtful discovery</h3><p>Collections that make exploring easy.</p></div>
          </article>
          <article>
            <FaStar aria-hidden="true" />
            <div><h3>Everyday value</h3><p>Good finds for everyday moments.</p></div>
          </article>
        </div>
      </section>

      <section className="about-cta">
        <h2>Need a hand along the way?</h2>
        <p>Our service pages are a good place to start.</p>
        <Link className="secondary-link" to="/services">Discover our services</Link>
      </section>
    </main>
  )
}
