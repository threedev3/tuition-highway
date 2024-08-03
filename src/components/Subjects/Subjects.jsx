import React from "react";
import computer from "../../assets/img/computer.gif";
import maths from "../../assets/img/maths.gif";
import physics from "../../assets/img/physics.gif";
import brownBook from "../../assets/img/brownBook.png";
import CustomButton from "../CustomButton/CustomButton";

const Subjects = () => {
  const subjects = [
    {
      title: "Mathematics",
      img: maths,
    },
    {
      title: "Sciences",
      subtitle: "(Physics, Chemistry, Biology)",
      img: physics,
    },
    {
      title: "Geography",
      img: computer,
    },
    {
      title: "English",
      img: maths,
    },
    {
      title: "History",
      img: physics,
    },
    {
      title: "Modern Languages",
      img: computer,
    },
  ];

  return (
    <div className="py-20 px-6 max-w-full relative bg-heroBg">
      {/* <div className="absolute inset-0 bg-heroBg transition-all duration-500 ease-in-out blur-md "></div> */}
      <div className="absolute top-10 left-10 w-24 z-10">
        <img src={brownBook} alt="" className="object-contain" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col justify-center gap-20">
        <div className="flex flex-col gap-6 items-center text-chooseText max-w-5xl mx-auto">
          <p className="lg:text-3xl sm:text-2xl text-2xl font-semibold text-center">
            Comprehensive Coverage
          </p>
          <h3 className="lg:text-5xl sm:text-4xl text-[26px] font-bold tracking-wide text-center">
            Curricula and Subjects
          </h3>
          <p className="lg:text-xl sm:text-lg text-base text-center">
            At Tuition Highway, we offer expert tutoring across a wide range of
            curricula and subjects, ensuring your child gets the specific
            support they need.
          </p>

          <div className="flex items-center gap-6">
            <button className="py-2 px-6 bg-subjectBtn text-white rounded-full">
              Our Curricula Coverage
            </button>
            <CustomButton text="Popular Subjects We Tutor" />
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-10 md:grid md:grid-cols-2 md:gap-10 grid grid-cols-1 gap-10">
          {subjects.map((item, index) => (
            <div
              key={index}
              className="p-3 px-6 rounded-[30px] shadow-lg flex items-center gap-3 hover:shadow-2xl transition-shadow duration-300 bg-white"
            >
              <div className="w-28">
                <img src={item.img} alt="" className="object-contain" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl">{item.title}</h3>
                <p className="text-base">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <CustomButton text="Other Key Subjects" />
        </div>
      </div>
    </div>
  );
};

export default Subjects;
