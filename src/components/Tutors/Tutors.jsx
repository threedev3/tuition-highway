import React from "react";
import avatar1 from "../../assets/img/avatar1.png";
import avatar2 from "../../assets/img/avatar2.png";
import avatar3 from "../../assets/img/avatar3.png";
import avatar4 from "../../assets/img/avatar4.png";
import twitterIcon from "../../assets/img/twitterIcon.png";
import linkedInIcon from "../../assets/img/linkedInIcon.png";
import CustomButton from "../CustomButton/CustomButton";

const Tutors = () => {
  const tutors = [
    {
      icon: avatar1,
      name: "Theresa Webb",
      subject: "Physics",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    },
    {
      icon: avatar2,
      name: "Courtney Henry",
      subject: "metathetic",

      description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    },
    {
      icon: avatar3,
      name: "Albert Flores",
      subject: "Career Educator",

      description: "Former PM for Linear, Lambda School, and On Deck.",
    },
    {
      icon: avatar4,
      name: "Marvin McKinney",
      subject: "English",

      description: "Former frontend dev for Linear, Coinbase, and Postscript.",
    },
    // {
    //   icon: tutor5,
    //   title: "Professional Teachers",
    //   description:
    //     "Our team is made up of experienced educators proficient in a variety of curricula including GCSE, IGCSE, A-levels, IB, AP, and CBSE.",
    // },
    // {
    //   icon: tutor6,
    //   title: "Language Maestros",
    //   description:
    //     "Unlock the power of global communication with our language tutors. Whether you're keen on mastering English, delving into the intricacies of French, ",
    // },
  ];

  return (
    <div className="py-20 px-6 max-w-full relative">
      {/* <div className="absolute top-10 left-0 w-36 -z-10">
        <img src={homework} alt="" className="object-contain" />
      </div> */}
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-6 items-center text-chooseText ">
          <h3 className="lg:text-5xl sm:text-4xl text-4xl font-bold tracking-wide text-center">
            Best Tutor
          </h3>
          <p className="lg:text-xl sm:text-lg text-base text-center max-w-4xl mx-auto">
            Feature 3-4 top tutors in a carousel or grid layout
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-10 md:grid md:grid-cols-2 md:gap-10 grid grid-cols-1 gap-10">
          {tutors.map((tutor, index) => (
            <div
              key={index}
              className="bg-chooseBg p-6 flex flex-col gap-6 items-center  shadow-md rounded-[30px] hover:shadow-xl transition-shadow duration-300 relative "
            >
              <div className="w-auto">
                <img src={tutor.icon} alt="" className="object-cover" />
              </div>

              <div className="max-w-[246px] flex flex-col gap-1">
                <h3 className="md:text-2xl text-xl text-headingColor text-center ">
                  {tutor.name}
                </h3>
                <p className="sm:text-base text-sm text-orangeHeading text-center">
                  {tutor.subject}
                </p>
              </div>

              <div>
                <p className="text-headingColor sm:text-base text-sm text-center min-h-16">
                  {tutor.description}
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <img src={twitterIcon} alt="" />
                <img src={linkedInIcon} alt="" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <CustomButton text="More Tutor" />
        </div>
      </div>
    </div>
  );
};

export default Tutors;
