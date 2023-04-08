import { Carousel } from 'flowbite-react';
import React from 'react';

const FlashCarousel = () => {
   return (
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
         <Carousel>
            <img
               src="https://www.pngmart.com/files/7/Lift-Chair-Transparent-PNG.png"
               alt="..."
            />
            <img
               src="https://www.pngmart.com/files/7/Lift-Chair-Transparent-PNG.png"
               alt="..."
            />
            <img
               src="https://www.pngmart.com/files/7/Lift-Chair-Transparent-PNG.png"
               alt="..."
            />

         </Carousel>
      </div>
   );
};

export default FlashCarousel;