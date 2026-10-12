import { Link, NavLink, Outlet, useParams } from 'react-router-dom'
import { FaBagShopping, FaBoxOpen, FaHeadset, FaRotateLeft } from 'react-icons/fa6'
import '../Styles/InfoPages.css'

const services = [
  {
    id: 'shopping',
    title: 'Shopping made simple',
    description: 'Find the right things for your everyday life with clear product details and an easy-to-use shopping experience.',
    detail: 'Browse our collections, compare product details, and add your favorites to your cart. Whether you are refreshing your home or looking for something new, Zenvora helps keep the experience straightforward from discovery to checkout.',
    highlights: ['Explore a range of curated categories', 'Review product details before you buy', 'Keep your selected items together in your cart'],
    Icon: FaBagShopping,
  },
  {
    id: 'delivery',
    title: 'Delivery support',
    description: 'Get help understanding the delivery process and what to do if you have a question about an order.',
    detail: 'We want every order to make its way to you smoothly. For delivery questions, include the product and order information you have available when contacting our team.',
    highlights: ['Help with delivery questions', 'Guidance when an order needs attention', 'Support for product and order enquiries'],
    Icon: FaBoxOpen,
  },
  {
    id: 'returns',
    title: 'Returns & exchanges',
    description: 'Need help with a purchase? We can guide you through the next steps for a return or exchange enquiry.',
    detail: 'If a product is not right for you, reach out with the item details and a short description of the issue. Our team can help you understand the available next steps.',
    highlights: ['Get help with return enquiries', 'Ask about an exchange', 'Share product concerns with customer care'],
    Icon: FaRotateLeft,
  },
  {
    id: 'support',
    title: 'Customer support',
    description: 'Get friendly guidance for product, shopping, and order-related questions.',
    detail: 'From finding a product to getting help after a purchase, our customer support page is a place to start. Send us a message with enough detail for us to understand how we can help.',
    highlights: ['Product and category questions', 'Shopping and cart guidance', 'Help with an existing enquiry'],
    Icon: FaHeadset,
  },
]

export default function Services() {
  return (
    <main className="info-page services-page">
      <section className="info-hero">
        <p className="info-eyebrow">HERE FOR YOU</p>
        <h1>Services that make shopping easier</h1>
        <p>From finding your next favorite to getting help with an order, explore the ways Zenvora is here to help.</p>
      </section>

      <nav className="service-navigation" aria-label="Service topics">
        <NavLink to="/services" end>All services</NavLink>
        {services.map(({ id, title }) => (
          <NavLink to={`/services/${id}`} key={id}>{title}</NavLink>
        ))}
      </nav>

      <Outlet />
    </main>
  )
}

export function ServicesOverview() {
  return (
    <section className="service-grid" aria-label="Available services">
      {services.map(({ id, title, description, Icon }) => (
        <article className="info-card service-card" key={id}>
          <Icon className="info-card-icon" aria-hidden="true" />
          <h2>{title}</h2>
          <p>{description}</p>
          <Link className="text-link" to={`/services/${id}`}>Explore service <span aria-hidden="true">→</span></Link>
        </article>
      ))}
    </section>
  )
}

export function ServiceDetail() {
  const { serviceId } = useParams()
  const service = services.find(({ id }) => id === serviceId)

  if (!service) {
    return (
      <section className="info-card service-detail">
        <h2>Service not found</h2>
        <p>That service page is not available. Browse the services below to find what you need.</p>
        <Link className="primary-link" to="/services">View all services</Link>
      </section>
    )
  }

  const { title, detail, highlights, Icon } = service

  return (
    <section className="info-card service-detail">
      <Icon className="info-card-icon" aria-hidden="true" />
      <p className="info-eyebrow">ZENVORA SERVICES</p>
      <h2>{title}</h2>
      <p>{detail}</p>
      <h3>How we can help</h3>
      <ul className="service-highlights">
        {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
      </ul>
      <div className="info-actions">
        <Link className="primary-link" to="/contact">Contact us</Link>
        <Link className="secondary-link" to="/services">Back to all services</Link>
      </div>
    </section>
  )
}
