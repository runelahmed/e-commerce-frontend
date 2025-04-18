import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductCard from '../components/ProductCard';

const Collection = () => {
  const { products, search , showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  // Toggle Category filter
  const toggleCategory = (e) => {
    const categoryValue = e.target.value;

    if (category.includes(categoryValue)) {
      setCategory((prev) => prev.filter((item) => item !== categoryValue));
    } else {
      setCategory((prev) => [...prev, categoryValue]);
    }
  };

  // Toggle subCategory Filter
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Apply filter functionality
  const applyFilter = () => {
    let productsCopy = products.slice();

    // Search function
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  // Sorting products
  const sortProducts = () => {
    let filterProductCopy = filterProducts.slice();


    switch (sortType) {
      case 'low-high':
        setFilterProducts(filterProductCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(filterProductCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  // useEffect for sortProducts
  useEffect(() => {
    sortProducts();
  }, [sortType]);

  // UseEffect for apply filter

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter products */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter((prev) => !prev)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/* Category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                value={'Men'}
                type="checkbox"
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                value={'Women'}
                type="checkbox"
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                value={'Kids'}
                type="checkbox"
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>

        {/* SubCategory filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                value={'Topwear'}
                type="checkbox"
                onClick={toggleSubCategory}
              />{' '}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                value={'Bottomwear'}
                type="checkbox"
                onClick={toggleSubCategory}
              />{' '}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                value={'Winterwear'}
                type="checkbox"
                onClick={toggleSubCategory}
              />{' '}
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* All Collection products */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL '} text2={'COLLECTIONS'} />
          {/* Product sort by price */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relevant"> Sort by: Relevant</option>
            <option value="low-high"> Sort by: Low to High</option>
            <option value="high-low"> Sort by: High to Low</option>
          </select>
        </div>
        {/* Product Map */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.length === 0 ? (
            <p className="text-center col-span-full text-gray-500">
              No products found.
            </p>
          ) : (
            filterProducts.map((filterProduct, index) => (
              <ProductCard
                key={index}
                _id={filterProduct._id}
                image={filterProduct.image}
                name={filterProduct.name}
                price={filterProduct.price}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
