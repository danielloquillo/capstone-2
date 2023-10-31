import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';
import {FcPrevious, FcNext } from 'react-icons/fc';
import womenslogo from '../img/womenslogo.png'
import menslogo from '../img/menslogo.png'
//import arrowleft from '../img/arrowleft.svg';
//import house from '../img/arrow.svg';


const Home = () => {
  const { products } = useContext(ProductContext);

  
  const womensProducts = products.filter((item) => item.category === "women's clothing");
  const mensProducts = products.filter((item) => item.category === "men's clothing");

  // scrolling for Women's section
  
  const slideWomenLeft = () => {
    var slider = document.getElementById('Womenslider')
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideWomenRight = () => {
    var slider = document.getElementById('Womenslider')
    slider.scrollLeft = slider.scrollLeft + 500;
  };

   // scrolling for Men's section

   const slideManLeft = () => {
    var slider = document.getElementById('Manslider')
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideManRight = () => {
    var slider = document.getElementById('Manslider')
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div id="scrollTarget" className="container mx-auto">
          <div className="max-w-screen overflow-x-auto">
            <div className="mb-8">
              <div className="flex justify-center items-center mb-4">
              <img src={womenslogo} alt='' className="max-w-[700px] w-full"/>
              </div>
              <div className='relative flex items-center'>
              <FcPrevious onClick={slideWomenLeft} className='cursor-pointer text-9xl'/>
              <div id='Womenslider' className="py-9 flex flex-no-wrap    className='w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
                {womensProducts.map((product) => (
                  <div className="mr-4" key={product.id}>
                    <Product product={product} />
                  </div>
                ))}
              </div>
              <FcNext onClick={slideWomenRight} className='cursor-pointer text-9xl' />
            </div>
            </div>
          
              <div className="flex justify-center items-center mb-4">
              <img src={menslogo} alt='' className="max-w-[700px] w-full"/>
              </div>
              <div className='relative flex items-center'>
              <FcPrevious onClick={slideManLeft} className='cursor-pointer text-7xl'/>
              <div id= 'Manslider' className="py-9 flex flex-no-wrap   className='w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
                {mensProducts.map((product) => (
                  <div className="mr-4" key={product.id}>
                    <Product product={product} />
                  </div>
                  
                ))}
              </div>
              <FcNext onClick={slideManRight} className='cursor-pointer text-7xl' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;