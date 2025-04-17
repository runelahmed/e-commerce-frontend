import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductCard from './ProductCard';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
     }, [products])

    // console.log(products);
  return (
      <div className='my-10'>
          <div className='text-center py-8 text-3xl'>
              <Title text1={'LATEST'} text2={'COLLECTION'} />
              <p className='w-3/4 m-auto text-xs sm:text md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, possimus.</p>
          </div>

          {/* Rendering Products */}
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
              {
                  latestProducts.map((latestProduct, index) => <ProductCard key={index} _id={latestProduct._id} name={latestProduct.name} image={latestProduct.image} price={latestProduct.price}/> )
              }
          </div>

    </div>
  )
}

export default LatestCollection