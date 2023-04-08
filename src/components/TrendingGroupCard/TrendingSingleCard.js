import React from 'react';
import { FaStar } from 'react-icons/fa';

const TrendingSingleCard = () => {
   return (
      <div>

         <div className='flex bg-white pb-2 my-4'>
            <div className='w-1/3'>
               <section className=' ml-2 mt-2 mb-2'>
                  <span className="bg-[#db310648] text-[#DB2F06] text-xs font-medium px-2.5 py-1  rounded">Sale</span>
               </section>
               <img className=" h-24 w-24 mx-auto my-auto" src="https://w7.pngwing.com/pngs/826/253/png-transparent-t-shirt-polo-shirt-clothing-sleeve-black-t-shirt-black-crew-neck-t-shirt-tshirt-fashion-cloth-thumbnail.png" alt="" />
            </div>

            <div className="py-6  pr-10 w-8/12">
               <div className="flex items-center mt-2.5  text-md text-yellow-300">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <span className="bg-blue-100 text-gray-400 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
               </div>
               <h5 className="my-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television</h5>

               <div className="flex items-center ">
                  <span className="font-bold text-[#5B9982] text-base">$ 599</span>
                  <span className=" text-xs text-gray-400 font-semibold ml-2"> <strike>$3000.00</strike></span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default TrendingSingleCard;