import React from 'react';
import { BsArrowLeftShort, BsArrowRightCircleFill } from 'react-icons/bs';
import TrendingSingleCard from './TrendingSingleCard';

const HealthCard = () => {
   return (
      <div  >
         <div className='flex items-center justify-between mb-4'>
            <h1 className='text-2xl font-semibold '><span className='font-bold'>Food </span> For Health</h1>
            <div className='flex items-center justify-center '>
               <BsArrowLeftShort className='mr-2 text-2xl'></BsArrowLeftShort>
               <BsArrowRightCircleFill className=' text-xl'></BsArrowRightCircleFill>
            </div>
         </div>

         <TrendingSingleCard></TrendingSingleCard>
         <TrendingSingleCard></TrendingSingleCard>
         <TrendingSingleCard></TrendingSingleCard>
         <div className='text-center text-white font-semibold bg-[#17201D] rounded py-3'>
            <button>VIEW ALL</button></div>
      </div>
   );
};

export default HealthCard;