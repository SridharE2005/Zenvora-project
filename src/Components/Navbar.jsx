import React, { useState } from 'react'
import logo from "../assets/main-logo.png"
import { NavLink, useNavigate } from 'react-router-dom'
import "../Styles/Navbar.css"
import { IoIosSearch } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from 'react-icons/ci';
import { VscAccount } from 'react-icons/vsc';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate=useNavigate();

  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="nav-main">
<div className="nav-container">
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <h2>Zenvora</h2>
        </div>
        <div className="nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>

        <NavLink to="/products" className="nav-link">
          Products
        </NavLink>

        <NavLink to="/services" className="nav-link">
          Services
        </NavLink>

        <NavLink to="/about" className="nav-link">
          About Us
        </NavLink>

        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </div>
      <div className="search-container">
        <IoIosSearch className='search-icon' />
        <input type="text" placeholder='Serach products..'/>
      </div>
      <div className="cart-container">

        <VscAccount className='icon'/>
<CiHeart className='icon'/>
        <TiShoppingCart className='icon' onClick={()=>{
            navigate("/product-cart")
            }}/>
      </div>
      <button className='menu-btn' onClick={()=>setMenuOpen(true)}>
        <GiHamburgerMenu />
      </button>

      
    </div>
    <aside className={`sidebar ${menuOpen?"sidebar-open" : ""}`}>
        <button className='close-btn' onClick={closeMenu}>
            <HiX />
        </button>
         <div className="sidebar-logo">
            <img src={logo} alt="logo" />
            <h2>Zenvora</h2>
            
        </div>
        <div className="sidebar-links">
        <NavLink to="/" className="sidebar-link" onClick={closeMenu}>   
        Home
        </NavLink>
       
       

        <NavLink to="/products" className="sidebar-link" onClick={closeMenu}>
          Products
        </NavLink>

        <NavLink to="/services" className="sidebar-link" onClick={closeMenu}>
          Services
        </NavLink>

        <NavLink to="/about" className="sidebar-link" onClick={closeMenu}>
          About Us
        </NavLink>

        <NavLink to="/contact" className="sidebar-link" onClick={closeMenu}>
          Contact
        </NavLink>
        </div>

         <div className="sidebar-cart-container">
          <div className="sidebar-icon">
            <VscAccount className='sidebar-icon1'/>
            <h2>Profile</h2>
          </div>
          <div className="sidebar-icon">
            <CiHeart className='sidebar-icon1'/>
            <h2>Liked</h2>
          </div>
          <div className="sidebar-icon" onClick={()=>{
            navigate("/product-cart")
            closeMenu()
            }}>
            <TiShoppingCart className='sidebar-icon1'/>
            <h2>Cart</h2>
          </div>
        

        
      </div>

      </aside>
    </div>
    
  )
}
