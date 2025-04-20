import React, { useContext } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'

const Orders = () => {
  const {products, currency} = useContext(ShopContext)
  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={'MY '} text2={'ORDERS'} />
      </div>
      <div>
        {products.slice(1, 4).map((product, index) => (
          <div className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-6 text-sm">
              <img src={product.image[0]} className="w-16 sm:w-20" alt="" />
              <div>
                <p class="sm:text-base font-medium">{product.name}</p>
                <div class="flex items-center gap-3 mt-1 text-base text-gray-700">
                  <p>
                    {currency} {product.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p class="mt-1">
                  Date: <span class=" text-gray-400">Sat Apr 19 2025</span>
                </p>
                <p class="mt-1">
                  Payment: <span class=" text-gray-400">COD</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">Ready to ship</p>
              </div>
              <button className="border px-4 py-2 text-sm font-medium rounded-sm">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders