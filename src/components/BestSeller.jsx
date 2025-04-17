import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductCard from './ProductCard';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    console.log(products)

  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((product) => product.bestseller);
    setBestSellers(bestProduct.slice(0, 5));
  }, [products]);
    return (
      <div className="my-10">
        <div className="text-center py-8 text-3xl">
          <Title text1={'BEST'} text2={'SELLERS'} />
          <p className="w-3/4 m-auto text-xs sm:text md:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            possimus.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {bestSellers.map((latestProduct, index) => (
            <ProductCard
              key={index}
              _id={latestProduct._id}
              name={latestProduct.name}
              image={latestProduct.image}
              price={latestProduct.price}
            />
          ))}
        </div>
      </div>
    );
};

export default BestSeller;
