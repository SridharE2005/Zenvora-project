import React, { useEffect, useState } from 'react'
import "../Styles/Products.css"
import { useNavigate } from 'react-router-dom';

export default function Products() {
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);
  const [filterProduct,setFilterProduct]=useState([]);
  const[search,setSearch]=useState("");
  const navigate=useNavigate();
  const catogory=[
    {
    "id": 1,
    "name": "All",
    "slug": "all",
    "image": "data:image/jpeg;base64,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"
  },
  {
    "id": 2,
    "name": "Electronics",
    "slug": "electronics",
    "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 3,
    "name": "Mobiles",
    "slug": "smartphones",
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 4,
    "name": "Laptops",
    "slug": "laptops",
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 5,
    "name": "Furniture",
    "slug": "furniture",
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 6,
    "name": "Appliances",
    "slug": "home-appliances",
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 7,
    "name": "Fragrances",
    "slug": "fragrances",
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 8,
    "name": "Fashion",
    "slug": "fashion",
    "image": "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 9,
    "name": "Groceries",
    "slug": "groceries",
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 10,
    "name": "Beauty",
    "slug": "beauty",
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 11,
    "name": "Headphones",
    "slug": "mobile-accessories",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
  }
];

const handleFilter = (category) => {
  if (category === "all") {
    setFilterProduct(products);
    return;
  }
  const filtered = products.filter(
    (data) => data.category?.toLowerCase() === category.toLowerCase()
  );
  setFilterProduct(filtered);
};
  useEffect(()=>{
    fetch("https://6ac9f30d3115bcc958203d2c.mockapi.io/products/products").then((res)=>res.json())
    .then((data)=>{
      setProducts(data);
      setFilterProduct(data);
      setLoading(false);
    })
  },[])

  
const handleChange=(e)=>{
  setSearch(e.target.value);
  const filteredProduct = products.filter((product) =>{
    return product.title.toLowerCase().includes(search.toLowerCase())
  });

  setFilterProduct(filteredProduct)

  }
  return (
    <div className="product-main-container">
      <div className="product-search-container">
        <input type="text" value={search} onChange={handleChange} placeholder='Serach by Product Name'/>
      </div>
      <div className="product-filter-container">
        {catogory.map((item)=>(
          <div className="product-filter-card" key={item.id} onClick={()=>handleFilter(item.slug)}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
      <div className="product-cart-container">
       {loading?(<h2>Loading....</h2>):(filterProduct.map((data)=>(
          <div className="product-card" key={data.id} onClick={()=>navigate(`/product-details/${data.id}/${data.category}`)}>
            <img src={data.image} alt={data.name} />
            <div className="cart-details">
               <h4>{data.title}</h4>
            <p>₹{data.price}</p>
            <span>⭐{data.rating}</span>

            
            </div>
            <div className="card-button">
              <button className='add-to-cart'>Add to Cart</button>
              <button className='buy-now'>Buy Now</button>
            </div>
           

          </div>
        )))} 
      </div>
    </div>
  )
}
