import React from "react";
import icon1 from "../../assets/img/icon1.png";
import icon2 from "../../assets/img/icon2.png";
import notes from "../../assets/img/notes.png";
import CustomButton from "../CustomButton/CustomButton";
import aGrade from "../../assets/img/agrade.png";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Reasons = () => {
  const reasons = [
    {
      title: "Qualified Expert Tutors",
      icon: icon1,
    },
    {
      title: "Personalized Learning",
      icon: icon2,
    },
    {
      title: "Flexible Scheduling",
      icon: icon1,
    },
    {
      title: "Comprehensive Curriculum",
      icon: icon2,
    },
    {
      title: "Proven Results",
      icon: icon2,
    },
  ];

  return (
    <div className="relative py-20 px-6 max-w-full">
      <div className="absolute top-10 right-10 w-24 z-10">
        <img src={notes} alt="" className="object-contain" />
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col gap-12 ">
        <div className="flex flex-col gap-6 items-center text-headingColor ">
          <h3 className="lg:text-5xl sm:text-4xl text-4xl font-bold tracking-wide text-center">
            Why Tuition Highway?
          </h3>
          <p className="lg:text-2xl sm:text-lg text-base text-center max-w-4xl mx-auto">
            5 Compelling Reasons to Join Tuition Highway
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-[30px] flex flex-col gap-6 min-h-48  hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div>
                <img
                  src={item.icon}
                  alt={item.title}
                  className="p-2 bg-blueHeading rounded-full w-10"
                />
              </div>
              <div>
                <p className="text-xl text-headingColor font-semibold">
                  {item.title}
                </p>
              </div>
              {/* <div className="overflow-hidden">
                <p className="text-base text-headingColor opacity-0 transition-opacity duration-300 ease-linear group-hover:opacity-100">
                  {item.description}
                </p>
              </div> */}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <CustomButton text="Get A Free Demo" />
        </div>

        <div className="w-full bg-gradient-to-r from-startgrad to-endGrad rounded-xl flex flex-row justify-between items-center gap-4 px-12 pr-24 h-60 mt-12">
          <div className="flex flex-col gap-4 py-6 max-w-3xl">
            <h3 className="text-white text-2xl">
              Nurturing Academic Excellence
            </h3>

            <p className="text-white">
              In today's competitive academic landscape, classroom learning
              isn't always enough. At Tuition Highway, we provide the one-on-one
              attention and tailored support your child needs to truly excel.
              Watch as their confidence grows, grades improve, and future
              opportunities expand.E
            </p>
            <div className="">
              <button className="bg-white py-2 px-6 rounded-full font-bold flex gap-1 items-center">
                Free Demo
                <ChevronRightIcon className="w-5 text-[#2165EE] font-bold" />
              </button>
            </div>
          </div>

          <div>
            <img src={aGrade} alt="" className="w-48 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
