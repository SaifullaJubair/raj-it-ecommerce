import React from 'react';
import { BsArrowLeft, BsArrowLeftShort, BsArrowRightCircleFill, } from "react-icons/bs";
import FlashCard from '../FlashCard/FlashCard';
import FlashSaleTitleSection from './FlashSaleTitleSection';
const FlashSale = () => {
   return (
      <div className='max-w-[1920px] mx-auto'>
         <div className='flex md:flex-col lg:flex-col xl:flex-col 2xl-flex-row flex-col lg:mx-[60px] md:mx-7 mx-6'>
            <div>
               {/* flash sate title  */}
               <div className='flex items-center justify-between'>
                  <FlashSaleTitleSection></FlashSaleTitleSection>
                  <div className='flex items-center justify-center '>
                     <BsArrowLeftShort className='mr-2 text-2xl'></BsArrowLeftShort>
                     <BsArrowRightCircleFill className='mr-4 text-xl'></BsArrowRightCircleFill>
                  </div>
               </div>
               {/* flash sale card section  */}
               <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 mt-6 gap-8 '>
                  <FlashCard></FlashCard>
                  <FlashCard></FlashCard>
                  <FlashCard></FlashCard>
                  <FlashCard></FlashCard>
                  <FlashCard></FlashCard>
                  <img src="https://i.ibb.co/5FDsVJP/adbanner.jpg" className='h-[516px]' alt="" />
               </div>
            </div>
         </div>

      </div>
   );
};

export default FlashSale;