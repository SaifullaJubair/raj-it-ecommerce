import { Carousel } from 'flowbite-react';
import React from 'react';
import { useState } from 'react';


import { BsCart2, BsFillBarChartFill } from 'react-icons/bs';
import { FaDownload, FaExchangeAlt, FaEye, FaHeart, FaStar } from 'react-icons/fa';

const FlashCard = () => {
   const [isHovering, setIsHovering] = useState(false);


   return (
      <div className='w-[280px] ' onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} >
         <div className=" max-w-sm bg-white border border-gray-200  ">
            <div className='ml-2 mt-2'>
               <span className="bg-gray-200 text-gray-800 text-xs font-medium mr-2 px-2.5 py-1  dark:bg-gray-700 dark:text-gray-300">Dark</span>
            </div>

            <img className="p-4 h-56 mx-auto w-56 " src="https://www.pngmart.com/files/7/Lift-Chair-Transparent-PNG.png" alt='' />

            {isHovering && (
               <div>
                  <div className="h-52 w-60 mx-auto pl-6 bg-white absolute top-56 z-10">
                     <Carousel>
                        <img
                           src="https://cdn.shopify.com/s/files/1/0317/1421/products/Saddle_Chair_DawsonAndCo_TimothyOulton3.jpg?v=1651539635"
                           alt="..."
                           className='w-full h-full'
                        />
                        <img
                           src="https://img.freepik.com/free-photo/home-indoor-design-concept_23-2148811458.jpg?w=1380&t=st=1680968742~exp=1680969342~hmac=b6fd366916607df72d1393f6b4a9da07b8d165df96458197b1118d7274cb2987"
                           alt="..."
                           className='w-full h-full'
                        />
                        <img
                           src="https://img.freepik.com/free-psd/armchair-pillow_176382-870.jpg?size=626&ext=jpg&ga=GA1.2.520351952.1680967563&semt=sph"
                           alt="..."
                           className='w-full h-full'
                        />
                     </Carousel>
                  </div>

                  <div className="py-3  w-[280px]  bg-white absolute top-[550px] z-10">
                     <div className='flex items-center justify-around'>
                        <FaEye></FaEye>
                        <FaHeart></FaHeart>
                        <FaExchangeAlt></FaExchangeAlt>
                     </div>
                  </div>
               </div>
            )}
            <div className="px-5 pb-5">
               <h5 className='text-gray-400 text-sm font-semibold pb-1 ' >Smart Tv</h5>
               <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h2>

               <div className="flex items-center mt-2.5 mb-5 text-md text-yellow-300">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <span className="bg-blue-100 text-gray-400 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
               </div>
               <div className="flex items-center ">
                  <span className="font-bold text-[#5B9982] text-base">$ 599</span>
                  <span className=" text-xs text-gray-400 font-semibold ml-2"> <strike>$3000.00</strike></span>
               </div>
               <div className='bg-[#eaefeb] text-[#5B9982] hover:bg-[#5B9982] hover:text-[#eaefeb]  rounded-sm text-center mt-4 font-semibold'>
                  <section className='flex items-center justify-center gap-2'><button className=' py-2'>Add To Cart </button> <BsCart2></BsCart2></section>
               </div>
            </div>
         </div>

      </div>
   );
};

export default FlashCard;