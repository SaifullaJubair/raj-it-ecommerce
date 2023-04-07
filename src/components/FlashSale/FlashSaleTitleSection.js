import React from 'react';

const FlashSaleTitleSection = () => {
   return (
      <section>
         <div className='flex items-center '>
            <h2 className=' border-2 border-black px-1.5 font-semibold text-[34px] mr-2'>
               <span className='font-extrabold'>Flash</span> Sale Product</h2>
            <div>
               <p className='text-[#554FA6] ml-3 font-bold'>
                  <span className='p-1.5 bg-[#D3D1F3] rounded-md'>2d</span> : <span className='p-1.5 bg-[#D3D1F3] rounded-md'>15h</span> : <span className='p-1.5 bg-[#D3D1F3] rounded-md'>21m</span> : <span className='p-1.5 bg-[#D3D1F3] rounded-md'>47s</span>
               </p>
            </div>
         </div>
      </section>
   );
};

export default FlashSaleTitleSection;