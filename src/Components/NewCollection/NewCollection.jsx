import React from "react";
import './NewCollection.css';
import Item from '../Items/Item'
import new_collection from '../Assets/new_collections';

const NewCollection = () => {
    return (
        <>
         <div className="new-collections">
            <h1>NEW COLLECTION</h1>
            <hr />
            <div className="collection">
              {new_collection.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              })}
            </div>
         </div>
        </>
    )
}

export default NewCollection;