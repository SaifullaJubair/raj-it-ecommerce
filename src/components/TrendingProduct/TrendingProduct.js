import React from 'react';
import WomenCard from '../TrendingGroupCard/WomenCard';
import HealthCard from '../TrendingGroupCard/HealthCard';
import WinterCard from '../TrendingGroupCard/WinterCard';

const TrendingProduct = () => {
   return (
      <div className='bg-[#FAFAFA]  my-16'>

         <div className='max-w-[1920px] mx-[60px] '>
            <span className=' border-black py-1  border-2 px-1.5 font-semibold text-[34px] mr-2'>
               <span className='font-extrabold'>Trending</span> Product
            </span>


            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8'>
               <WomenCard></WomenCard>
               <HealthCard></HealthCard>
               <WinterCard></WinterCard>
            </div>
         </div>

      </div>
   );
};

export default TrendingProduct;