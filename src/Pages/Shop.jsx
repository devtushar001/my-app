import Hero from "../Components/Hero/Hero";
import NewCollection from "../Components/NewCollection/NewCollection";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Offers from "../Components/Offers/Offers";
import Popular from "../Components/Popular/Popular";

const Shop = () => {
    return (
        <>
         <Hero />
         <Popular />
         <Offers />
         <NewCollection />
         <NewsLetter />
        </>
    )
}

export default Shop;