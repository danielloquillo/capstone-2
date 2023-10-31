import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';

const SearchSidebar = ({ isOpen, closeSidebar }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { products } = useContext(ProductContext);


  const filteredProducts = searchTerm
    ? products.filter((product) => (
        (product.category === "men's clothing" ||
          product.category === "women's clothing") &&
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      ))
    : [];

  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-4 border-b">
        <div className="uppercase text-sm font-semibold">SEARCH</div>
        <div
          onClick={closeSidebar}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div className="py-4">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[480px] overflow-y-auto overflow-x-hidden border-b">
        {filteredProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            onClick={closeSidebar}
          >
            <div className="flex items-center space-x-2 cursor-pointer">
              <img
                src={product.image}
                alt={product.title}
                className="w-12 h-12 rounded-md"
              />
              <span>{product.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchSidebar;
