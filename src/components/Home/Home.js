import React from 'react';
import FlashSale from '../FlashSale/FlashSale';
import TrendingProduct from '../TrendingProduct/TrendingProduct';

const Home = () => {
   return (
      <div className=' my-[100px]'>
         <FlashSale></FlashSale>
         <TrendingProduct></TrendingProduct>
      </div>
   );
};

export default Home;