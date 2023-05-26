import React from 'react';
import Marquee from "react-fast-marquee";
import marqueeBanner from '../../assets/features/nursing-color.gif';
const MarqueeComponents = () => {
    return (
      <Marquee>
        <div className='flex gap-12 my-8'>
          <img className="w-28" src={marqueeBanner} alt="" />
          <img className="w-28" src={marqueeBanner} alt="" />
          <img className="w-28" src={marqueeBanner} alt="" />
          <img className="w-28" src={marqueeBanner} alt="" />
          <img className="w-28" src={marqueeBanner} alt="" />
          <img className="w-28" src={marqueeBanner} alt="" />
          <img className="w-28" src={marqueeBanner} alt="" />
        </div>
      </Marquee>
    );
};

export default MarqueeComponents;