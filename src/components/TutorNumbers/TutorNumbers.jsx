import React from "react";

const TutorNumbers = () => {
  const numbers = [
    {
      title: "Average Teaching Experience",
      count: "15+ Years",
    },
    {
      title: "Hold Advanced Degrees",
      count: "90%",
    },
    {
      title: "Subjects Covered",
      count: "50+",
    },
    {
      title: "Students Successfully Taught",
      count: "10,000+",
    },
  ];

  return (
    <div className="py-12 px-6 max-w-full relative bg-gradient-to-r from-startgrad to-endGrad ">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12 justify-center items-center">
        <h3 className="text-white lg:text-5xl sm:text-3xl text-2xl text-center">
          Our Tutors by the Numbers
        </h3>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8 md:grid md:grid-cols-2 md:gap-8 grid grid-cols-1 gap-8">
          {numbers.map((item, index) => (
            <div key={index} className="p-3 flex flex-col gap-4">
              <p className="text-white text-2xl font-semibold text-center min-h-20">
                {item.title}
              </p>
              <h3 className="text-white text-3xl text-center">{item.count}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorNumbers;
