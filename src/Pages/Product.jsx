import React, { useContext } from "react";
import ShopContext from '../Context/ShopContext'
import { useParams } from "react-router-dom";

const Product = () => {
    const {all_products} = useContext(ShopContext);
    const {ProductId} = useParams();
    const product = all_products.find((e) => e.id === Number(ProductId));
    return (
        <>
          
        </>
    )
}

export default Product;