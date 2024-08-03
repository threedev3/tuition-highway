import React from "react";
import person from "../../assets/img/person.png";
import pen from "../../assets/img/pen.png";
import brownBook from "../../assets/img/brownBook.png";
import brownPen from "../../assets/img/brownPen.png";
import cup from "../../assets/img/cup.png";
import notes from "../../assets/img/notes.png";
import papers from "../../assets/img/papers.png";
import pencil from "../../assets/img/pencil.png";
import phone from "../../assets/img/phone.png";
import yellowBook from "../../assets/img/yellowBook.png";
import laptop from "../../assets/img/laptop.png";
import heroImage from "../../assets/img/heroImage.png";
import CustomButton from "../CustomButton/CustomButton";

const HeroSection = () => {
  return (
    <div className="h-[70vh] bg-[url('/src/assets/img/heroBg.png')] bg-no-repeat bg-cover bg-movedown max-w-full py-12 px-6 overflow-x-hidden z-10">
      <div className="absolute top-24 right-0 bottom-0 left-0 bg-heroBg transition-all duration-500 ease-in-out blur-md -z-10 h-[65vh]"></div>

      <div className="max-w-[1400px] mx-auto lg:flex lg:flex-row lg:justify-between lg:items-center flex flex-col justify-center h-full">
        <div className="lg:max-w-xl flex flex-col gap-6">
          <div>
            <h2 className="text-headingColor lg:text-[46px] lg:leading-tight md:text-4xl sm:text-3xl text-2xl font-extrabold">
              Your Journey to <br />
              <span className="text-blueHeading font-MontserratBold">
                Top Grades{" "}
              </span>
              Starts Here
            </h2>
          </div>

          <div>
            <p className="text-headingColor text-base">
              We all want to score top grades in our exams. Our expert tutors
              help students worldwide achieve their dreams of A* grades.
            </p>
          </div>

          <div className="">
            <CustomButton text="I want a A* grade too" />
          </div>
        </div>

        {/* <div className="w-full h-full relative flex items-center">
          <div className="absolute top-0 left-72 w-auto order-2">
            <img src={person} alt="" className="object-contain" />
          </div>
          <div className="absolute top-6 left-44">
            <img src={pen} alt="" className="" />
          </div>
        </div> */}

        <div className="relative w-full h-full lg:block hidden">
          {/* Person Image */}
          <img
            src={heroImage}
            alt="heroImage"
            className="absolute top-[46%] left-[68%] transform -translate-x-1/2 -translate-y-1/2 w-[60%]"
          />

          {/* Pen Image */}
          <img
            src={papers}
            alt="papers"
            className="absolute top-32 left-[42%] w-[4%]"
          />

          <img
            src={yellowBook}
            alt="yellowBook"
            className="absolute top-[42%] right-2 w-[5%]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
