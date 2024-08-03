import React from "react";
import step from "../../assets/img/step.png";
import step1 from "../../assets/img/step1.png";
import step2 from "../../assets/img/step2.png";
import lastStep from "../../assets/img/lastStep.png";
import stepArrow from "../../assets/img/stepArrow.png";

const Working = () => {
  return (
    <div className="py-20 px-6 max-w-full relative">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-6 items-center text-chooseText ">
          <h3 className="lg:text-5xl sm:text-4xl text-4xl font-bold tracking-wide text-center">
            How Tuition Highway Works
          </h3>
        </div>

        <div className="xl:grid xl:grid-cols-6 xl:justify-center xl:items-center lg:grid lg:grid-cols-3 lg:justify-center lg:items-center md:grid md:grid-cols-2 grid grid-cols-1 justify-center items-center">
          <div className="custom-shape color-change first-step mx-auto">
            <div class="arrow">
              <div class="curve blue-curve"></div>
              <div class="point blue-point"></div>
            </div>
          </div>
          <div className="custom-shape mx-auto">
            <div class="arrow">
              <div class="curve"></div>
              <div class="point"></div>
            </div>
          </div>
          <div className="custom-shape color-change mx-auto">
            <div class="arrow">
              <div class="curve blue-curve"></div>
              <div class="point blue-point"></div>
            </div>
          </div>
          <div className="custom-shape mx-auto">
            <div class="arrow">
              <div class="curve"></div>
              <div class="point"></div>
            </div>
          </div>
          <div className="custom-shape color-change mx-auto">
            <div class="arrow">
              <div class="curve blue-curve"></div>
              <div class="point blue-point"></div>
            </div>
          </div>
          <div className="custom-shape last-step mx-auto"></div>

          {/* <div className="relative">
            <img src={step1} alt="" className="w-60 object-contain" />
            <img
              src={stepArrow}
              alt=""
              className="absolute top-[37%] right-0 w-6"
            />

            <div className="flex flex-col gap-3 w-[80%] max-h-[80%] absolute top-0 p-6">
              <p>Step 1</p>
              <h3>Assessment</h3>

              <p className="mt-5">
                We evaluate your current academic standing and goals.
              </p>
            </div>
          </div>
          <div className="relative -ml-6">
            <img src={step} alt="" className="w-[234px] object-contain" />

            <div className="flex flex-col gap-3 w-[80%] max-h-[80%] absolute top-0 py-6 px-8">
              <p>Step 2</p>
              <h3>Assessment</h3>

              <p className="mt-5">
                We evaluate your current academic standing and goals.
              </p>
            </div>
          </div>
          <div className="relative -ml-7">
            <img src={step2} alt="" className="w-[234px] object-contain" />

            <div className="flex flex-col gap-3 w-[80%] max-h-[80%] absolute top-0 py-6 px-8">
              <p>Step 3</p>
              <h3>Assessment</h3>

              <p className="mt-5">
                We evaluate your current academic standing and goals.
              </p>
            </div>
          </div>
          <div className="relative -ml-7">
            <img src={step} alt="" className="w-64 object-contain" />

            <div className="flex flex-col gap-3 w-[80%] max-h-[80%] absolute top-0 py-6 px-8">
              <p>Step 4</p>
              <h3>Assessment</h3>

              <p className="mt-5">
                We evaluate your current academic standing and goals.
              </p>
            </div>
          </div>
          <div className="relative -ml-7">
            <img src={step2} alt="" className="w-64 object-contain" />

            <div className="flex flex-col gap-3 w-[80%] max-h-[80%] absolute top-0 py-6 px-8">
              <p>Step 5</p>
              <h3>Assessment</h3>

              <p className="mt-5">
                We evaluate your current academic standing and goals.
              </p>
            </div>
          </div>
          <div className="relative -ml-7">
            <img src={lastStep} alt="" className="w-48 object-contain" />

            <div className="flex flex-col gap-3 w-[100%] max-h-[100%] absolute top-0 py-6 px-8">
              <p>Step 6</p>
              <h3>Assessment</h3>

              <p className="mt-5">
                We evaluate your current academic standing and goals.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Working;
