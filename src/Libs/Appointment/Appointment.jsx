import React from "react";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";

const Appointment = () => {
  return (
    <div className="mb-40">
      <div className="relative">
        <div className="bg-[#32C2CF] rounded-lg text-white p-28 flex justify-between items-center">
          <h2 className="text-4xl font-semibold">
            Easy Steps To Get Your <br /> Solution
          </h2>
          <p className="text-slate-200">
            Easy Make Appointment With Our Best Doctor For <br /> Your Families
            In Same Day Or The Next Day
          </p>
          <button className="bg-white py-2 px-3 text-[#32C2CF] rounded-md">
            Make an Appointment
          </button>
        </div>
        <div className="absolute -bottom-44 flex gap-12 mx-40">
          <div className="border py-10 px-4 text-center w-fit rounded-xl bg-white">
            <BsFillFileEarmarkPersonFill className="text-6xl text-[#32C2CF] mx-auto" />
            <div>
              <h2 className="text-2xl font-semibold mb-4">Search Doctor</h2>
              <p>
                Before book appointment first of <br /> all  search doctor by category
              </p>
            </div>
          </div>
          <div className="border py-10 px-4 text-center w-fit rounded-xl bg-white">
            <BsFillFileEarmarkPersonFill className="text-6xl text-[#32C2CF] mx-auto" />
            <div>
              <h2 className="text-2xl font-semibold mb-4">Search Doctor</h2>
              <p>
                Before book appointment first of <br /> all  search doctor by category
              </p>
            </div>
          </div>
          <div className="border py-10 px-4 text-center w-fit rounded-xl bg-white">
            <BsFillFileEarmarkPersonFill className="text-6xl text-[#32C2CF] mx-auto" />
            <div>
              <h2 className="text-2xl font-semibold mb-4">Search Doctor</h2>
              <p>
                Before book appointment first of <br /> all  search doctor by category
              </p>
            </div>
          </div>
          <div className="border py-10 px-4 text-center w-fit rounded-xl bg-white">
            <BsFillFileEarmarkPersonFill className="text-6xl text-[#32C2CF] mx-auto" />
            <div>
              <h2 className="text-2xl font-semibold mb-4">Search Doctor</h2>
              <p>
                Before book appointment first of <br /> all  search doctor by category
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Appointment;
