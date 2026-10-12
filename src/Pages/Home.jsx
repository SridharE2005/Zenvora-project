import React from 'react'
import home from "../assets/Home-picture.png"
import "../Styles/Home.css"
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const navigate=useNavigate();
  const catogory=[
  {
    "id": 1,
    "name": "Electronics",
    "slug": "electronics",
    "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 2,
    "name": "Mobiles",
    "slug": "smartphones",
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 3,
    "name": "Laptops",
    "slug": "laptops",
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 4,
    "name": "Furniture",
    "slug": "furniture",
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 5,
    "name": "Appliances",
    "slug": "home-appliances",
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 6,
    "name": "Fragrances",
    "slug": "fragrances",
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 7,
    "name": "Fashion",
    "slug": "fashion",
    "image": "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 8,
    "name": "Groceries",
    "slug": "groceries",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 9,
    "name": "Beauty",
    "slug": "beauty",
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 10,
    "name": "Headphones",
    "slug": "mobile-accessories",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
  }
];
  return (
    <div className="home-container">
      <div className="home-top-container">
        <div className="home-content-container">
        <h1>Discover The Latest Trends in Fashion
</h1>
        <p>Premium quality products, best prices and
an exceptional shopping experience.</p>
        <div className="home-buttons">
          <button className='shop' onClick={()=>navigate("/products")}>Shop Now</button>
          <button className="explore" onClick={()=>navigate("/services")}>Learn more</button>
        </div>
      </div>
      <div className="home-image-container">
        <img src={home} alt="home-image" />
      </div>
      </div>

      <div className="category-container">
        
        <div className="category-cards">
        {catogory.map((item)=>(
          <div className="category-card" key={item.id} onClick={()=>navigate("/products")}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            </div>
        ))}
          
          </div>
      </div>
      
    </div>
  )
}
