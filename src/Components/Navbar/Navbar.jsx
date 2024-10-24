import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
           menuRef.current.classList.toggle('nav-menu-visible');
           e.target.classList.toggle('open');
    }

    return (
        <>
            <div className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <p>SHOPPER</p>
                </div>
                <img src={nav_dropdown} alt="" onClick={dropdown_toggle} className="nav-dropdown"/>
                <ul className="nav-menu" ref={menuRef} >
                    <li onClick={() => { setMenu('shop')} } > <Link to="/" style={{textDecoration: 'none', color: '#626262'}} >Shop</Link>{menu === 'shop' ? <hr /> : ''}</li>
                    <li onClick={() => { setMenu('men') }}> <Link to='/mens' style={{textDecoration: 'none', color: '#626262'}} >Men</Link>  {menu === 'men' ? <hr /> : ''}</li>
                    <li onClick={() => { setMenu('women') }}> <Link to='/womens' style={{textDecoration: 'none', color: '#626262'}} >Women</Link>  {menu === 'women' ? <hr /> : ''}</li>
                    <li onClick={() => { setMenu('kid') }}> <Link to='/kids' style={{textDecoration: 'none', color: '#626262'}} >Kids</Link> {menu === 'kid' ? <hr /> : ''}</li>
                </ul>
                <div className="nav-login-cart">
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>
            </div>
        </>
    )
}

export default Navbar;