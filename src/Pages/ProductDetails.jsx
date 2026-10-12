
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { addCart, clearMessage } from "../Redux/cartSlice";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const dispatch=useDispatch();
  const{message}=useSelector((state) => state.cart);
  const handleAddCart=()=>{
    if(product){
      dispatch(addCart(product));
      

  }
}
useEffect(() => {
  if (message) {
    alert(message);
    dispatch(clearMessage());
  }
}, [message, dispatch]);
  useEffect(() => {
    const controller = new AbortController();

    async function fetchProduct() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://6ac9f30d3115bcc958203d2c.mockapi.io/products/products",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        const foundProduct = data.find(
          (item) => String(item.id) === String(id)
        );

        if (!foundProduct) {
          setError("Product not found!");
        } else {
          setProduct(foundProduct);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Something went wrong while fetching the product.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchProduct();

    return () => controller.abort();
  }, [id]);

  if (loading) {
    return (
      <div className="product-details-status">
        <div className="product-loader"></div>
        <p>Loading product details...</p>
      </div>
    );
  }

  if (error) {
    return <div className="product-details-status">{error}</div>;
  }

  return (
    <div className="product-details-main-container">
      <div className="product-breadcrumb">
        Home / Products / {product.category}
      </div>

      <div className="product-details-container">
        {/* LEFT SIDE: Product Image */}
        <div className="product-image-section">
          <div className="product-image-wrapper">
            <img
              src={product.image}
              alt={product.title}
              className="product-details-image"
              onError={(event) => {
                event.currentTarget.style.visibility = "hidden";
              }}
            />
          </div>

          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={handleAddCart}
            >
              🛒 Add to Cart
            </button>

            <button
              type="button"
              className="buy-now"
              onClick={() => alert("Buy Now feature coming soon!")}
            >
              ⚡ Buy Now
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Product Information */}
        <div className="product-details-info">
          <span className="product-category-badge">
            {product.category}
          </span>

          <h1>{product.title}</h1>

          <div className="product-rating">
            <span>★ {product.rating ?? "N/A"}</span>
            <span className="rating-label">Customer rating</span>
          </div>

          <div className="product-price-section">
            <span className="price-label">Special price</span>

            <h2>
              ₹
              {Number(product.price).toLocaleString("en-IN")}
            </h2>

            <p className="offer-text">
              ✓ Great choice for your needs
            </p>
          </div>

          <div className="product-info-divider"></div>

          <section className="product-specifications">
            <h3>Product Specifications</h3>

            {product.specifications?.length > 0 ? (
              <ul>
                {product.specifications.map((specification, index) => (
                  <li key={index}>
                    <span className="specification-bullet">✓</span>
                    <span>{specification}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="empty-message">
                No specifications available.
              </p>
            )}
          </section>

          <section className="product-reviews">
            <h3>Customer Reviews</h3>

            {product.reviews?.length > 0 ? (
              product.reviews.map((review, index) => (
                <div className="product-review-card" key={index}>
                  <div className="review-header">
                    <strong>{review.user || "Customer"}</strong>
                    <span className="review-rating">
                      ★ {review.rating}
                    </span>
                  </div>

                  <p>{review.comment}</p>
                </div>
              ))
            ) : (
              <p className="empty-message">
                No customer reviews available.
              </p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

