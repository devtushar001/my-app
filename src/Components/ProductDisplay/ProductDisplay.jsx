import React, { useContext } from "react";
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext);
    return (
        <>
            <div className="productdisplay">
                <div className="productdisplay-left">
                    <div className="productdisplay-img-list">
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                    </div>
                    <div className="productdisplay-img">
                        <img src={product.image} className="productdisplay-main-image" alt="" />
                    </div>
                </div>
                <div className="productdisplay-right">
                    <h1>{product.name}</h1>
                    <div className="productdisplay-right-star">
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_dull_icon} alt="" />
                        <p>123</p>
                    </div>
                    <div className="productdisplay-right-prices">
                        <div className="productdisplay-right-price-old">
                            ${product.old_price}
                        </div>
                        <div className="productdisplay-right-price-new">
                            ${product.new_price}
                        </div>
                    </div>
                    <div className="productdisplay-right-description">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, mollitia excepturi repellat possimus sapiente, unde placeat ex exercitationem ipsum voluptas, nemo rerum quo dicta voluptatibus nisi consequatur! Quibusdam, at repudiandae!
                    </div>
                    <div className="productdisplay-right-size">
                        <h1>Select Size</h1>
                        <div className="productdisplay-right-sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <div>
                        <Link to={'/cart'}><button className="buy-now" onClick={() => {addToCart(product.id)}}>BUY NOW</button></Link>
                        <button onClick={() => {addToCart(product.id)}} >ADD TO CART</button>
                    </div>
                    <p className="productdisplay-right-category"> <span>Category : Women, T-Shirt, Crop Top</span></p>
                    <p className="productdisplay-right-category"> <span>Tags : Modern, Latest</span></p>
                </div>
            </div>
        </>
    )
}

export default ProductDisplay;