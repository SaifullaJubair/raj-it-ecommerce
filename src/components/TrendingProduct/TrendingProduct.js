import React from 'react';
import WomenCard from '../TrendingGroupCard/WomenCard';
import HealthCard from '../TrendingGroupCard/HealthCard';
import WinterCard from '../TrendingGroupCard/WinterCard';

const TrendingProduct = () => {
   return (
      <div className='bg-[#FAFAFA]  mt-16'>

         <div className='max-w-[1920px] lg:mx-[60px] md:mx-7 py-10 mx-7'>
            <span className=' border-black py-1  border-2 px-1.5 font-semibold lg:text-[34px] md:text-2xl text-xl mr-2'>
               <span className='font-extrabold'>Trending</span> Product
            </span>


            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-6 md:gap-4 gap-2 my-8'>
               <WomenCard></WomenCard>
               <HealthCard></HealthCard>
               <WinterCard></WinterCard>
            </div>
         </div>

      </div>
   );
};

export default TrendingProduct;