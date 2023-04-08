import React from 'react';
import { BsArrowLeft, BsArrowLeftShort, BsArrowRightCircleFill, } from "react-icons/bs";
import FlashCard from '../FlashCard/FlashCard';
import FlashSaleTitleSection from './FlashSaleTitleSection';
const FlashSale = () => {
   return (
      <div className='max-w-[1920px] mx-auto'>
         <div className='flex mx-[60px]'>
            <div>
               {/* flash sate title  */}
               <div className='flex items-center justify-between'>
                  <FlashSaleTitleSection></FlashSaleTitleSection>
                  <div className='flex items-center justify-center '>
                     <BsArrowLeftShort className='mr-2 text-2xl'></BsArrowLeftShort>
                     <BsArrowRightCircleFill className=' text-xl'></BsArrowRightCircleFill>
                  </div>
               </div>
               {/* flash sale card section  */}
               <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-6 gap-3'>
                  <FlashCard></FlashCard>
                  <FlashCard></FlashCard>
                  <FlashCard></FlashCard>
                  <FlashCard></FlashCard>
                  <FlashCard></FlashCard>
               </div>
            </div>
            <img src="https://i.ibb.co/5FDsVJP/adbanner.jpg" className='mx-2' alt="" />
         </div>

      </div>
   );
};

export default FlashSale;