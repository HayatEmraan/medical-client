import React from "react";
import team from "../../assets/team/teamfull.png";
import { BsFillCheckCircleFill } from "react-icons/bs";
const Team = () => {
  return (
    <div className="mb-12 flex items-center gap-4">
      <div>
        <img src={team} alt="" />
        <h2 className="text-xl text-slate-500 ms-3">
          We use only the best quality materials on the market in <br /> order
          to provide best products to our patient
        </h2>
      </div>
      <div>
        <h2 className="text-5xl font-semibold">
          We Are Always Ensure Best <br /> Medical Treatment for <br /> Your
          Health
        </h2>

        <div className="space-y-3 mt-12">
          <div className="flex gap-4 items-center">
            <BsFillCheckCircleFill className="text-orange-300" />
            <p>Top Specialist Doctor</p>
          </div>
          <div className="flex gap-4 items-center">
            <BsFillCheckCircleFill className="text-orange-300" />
            <p>State Of The Art Doctor Services</p>
          </div>
          <div className="flex gap-4 items-center">
            <BsFillCheckCircleFill className="text-orange-300" />
            <p>Discount For All Medical Treatment</p>
          </div>
          <div className="flex gap-4 items-center">
            <BsFillCheckCircleFill className="text-orange-300" />
            <p>Enrollment Is Quick And Easy</p>
          </div>
        </div>
        <div className="mt-12">
          <button className="p-3 bg-orange-300 text-xl font-semibold text-white rounded-md">Make an Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Team;
