import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const FreeDemo = () => {
  return (
    <div className="py-12 px-6 max-w-full relative bg-gradient-to-r from-startgrad to-endGrad">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-8 justify-center items-center">
        <h3 className="text-white lg:text-5xl sm:text-3xl text-2xl">
          The Minds Behind Your Success
        </h3>
        <p className="text-white lg:text-lg sm:text-base text-sm text-center">
          At Tuition Highway, our tutors are the driving force behind every
          student's success story. We believe that exceptional education starts
          with exceptional educators. Our handpicked team of expert tutors
          doesn't just teach subjects; they inspire curiosity, build confidence,
          and unlock each student's unique potential. With a perfect blend of
          academic excellence and passionate mentorship, our tutors transform
          learning from a challenge into an exciting journey of discovery and
          achievement.
        </p>
        <div>
          <button className="bg-white py-2 px-6 rounded-full font-bold flex gap-1 items-center">
            Free Demo
            <ChevronRightIcon className="w-5 text-[#2165EE] font-bold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeDemo;
