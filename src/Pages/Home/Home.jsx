import React from "react";
import banner from "../../assets/banner.avif";
import Marquee from "../../Libs/Marquee/Marquee";
import MarqueeComponents from "../../Libs/Marquee/Marquee";
import Appointment from "../../Libs/Appointment/Appointment";
import Team from "../../Libs/Team/Team";
import DatePick from "../../Libs/DatePick/DatePick";
const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row-reverse justify-between items-center">
        <div>
          <img style={{width: '850px'}} className="rounded-lg" src={banner} alt="" />
        </div>
        <div className="space-y-12">
          <h2 className="text-6xl font-bold">Find your doctor and <br /> make an appointment</h2>
          <p>
            Select preferred doctor and time slot to <br /> book appointment or
            consultation
          </p>
          <DatePick/>
        </div>
          </div>
          <div>
              <MarqueeComponents/>
          </div>
          <div>
              <Appointment/>
          </div>
          <div>
              <Team/>
          </div>
    </div>
  );
};

export default Home;
