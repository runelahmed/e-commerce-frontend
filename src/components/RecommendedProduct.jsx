import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductCard from './ProductCard';

const RecommendedProduct = ({ category, subCategory }) => {
    
    const { products } = useContext(ShopContext);
    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item) => category === item.category)

            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory)

            setRecommended(productsCopy.slice(0, 5));
        }
    },[products])


  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={'RECOMMENDED '} text2={'PRODUCTS'} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {recommended.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default RecommendedProduct