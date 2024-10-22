import React from "react";
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const { product } = props;
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aut ab ullam necessitatibus repellendus magni, maxime non quasi, ad, quas eveniet vel reiciendis dolore! Aperiam magnam officiis ut. Quibusdam, asperiores.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, aliquid dolorem ut, repellat cupiditate dicta voluptates nihil blanditiis impedit laboriosam numquam, harum quia deleniti. Quis explicabo at quod dicta labore?
                    </div>
                    <div className="productdisplay-right-size">
                        <h1>Select Size</h1>
                        <div className="productdisplay-right-size">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button>ADD TO CART</button>
                    <p className="productdisplay-right-category"> <span>Category : Women, T-Shirt, Crop Top</span></p>
                    <p className="productdisplay-right-category"> <span>Tags : Modern, Latest</span></p>
                </div>
            </div>
        </>
    )
}

export default ProductDisplay;