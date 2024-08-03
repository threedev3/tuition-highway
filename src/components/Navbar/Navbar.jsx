import React, { useState } from "react";
import mainLogo from "../../assets/img/mainLogo.png";
import {
  Bars3Icon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import CustomButton from "../CustomButton/CustomButton";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  const navigation = [
    "Home",
    "About",
    {
      name: "What we Teach",
      dropdown: [
        { name: "British Curriculum", dropdown: ["IGCSE/A-Level Courses"] },
        "American Curriculum",
        "International Baccalaureate",
        "French Curriculum",
        "Indian CBSE",
        "FBISE",
        "Online Homeschooling",
        "SAT",
        "IELTS",
        "Coding",
      ],
    },
    "Testimonials",
    "Join as a Tutor",
  ];

  return (
    <div className="bg-white p-4 max-w-full shadow-md">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto">
        <div className="w-[164px]">
          <img src={mainLogo} alt="" className="object-cover" />
        </div>

        <div className="md:block hidden">
          <ul className="flex gap-6 font-semibold">
            {navigation.map((item, index) =>
              typeof item === "string" ? (
                <li key={index} className="cursor-pointer">
                  {item}
                </li>
              ) : (
                <li
                  key={index}
                  className="relative cursor-pointer"
                  onMouseEnter={() => setIsDropdownOpen(index)}
                  onMouseLeave={() => {
                    setIsDropdownOpen(null);
                    setOpenSubDropdown(null);
                  }}
                >
                  <div className="flex items-center">
                    {item.name}
                    <ChevronDownIcon className="ml-1 h-5 w-5" />
                  </div>
                  {isDropdownOpen === index && (
                    <ul className="absolute top-4 left-0 mt-2 w-72 bg-white shadow-lg rounded-lg py-2 flex flex-col gap-2">
                      {item.dropdown.map((subItem, subIndex) =>
                        typeof subItem === "string" ? (
                          <li
                            key={subIndex}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-full"
                          >
                            {subItem}
                          </li>
                        ) : (
                          <li
                            key={subIndex}
                            className="relative px-4 py-2 hover:bg-gray-100 cursor-pointer w-full"
                            onMouseEnter={() => setOpenSubDropdown(subIndex)}
                            onMouseLeave={() => setOpenSubDropdown(null)}
                          >
                            <div className="flex items-center justify-between">
                              {subItem.name}
                              <ChevronRightIcon className="ml-1 h-5 w-5" />
                            </div>
                            {openSubDropdown === subIndex && (
                              <ul className="absolute left-full top-0 mt-0 w-56 bg-white shadow-lg rounded-lg py-2">
                                {subItem.dropdown.map(
                                  (thirdItem, thirdIndex) => (
                                    <li
                                      key={thirdIndex}
                                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                      {thirdItem}
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="md:block hidden">
          <div className="flex gap-4 items-center">
            <CustomButton text="Get Free Trial" />
            <button className="bg-blueHeading py-2 px-6 text-white rounded-full sm:text-base text-sm">
              Cause Calculator
            </button>
          </div>
        </div>

        <div className="md:hidden block">
          <button className="p-2 border-2 border-gray-400 rounded-md">
            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
