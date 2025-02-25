import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { PiArmchairDuotone } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

const NavBar = () => {
  const [headerFixed, setHeaderFixed] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 550) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  const dropDownMenu = [
    {
      id: 1,
      name: "Boutique",
      link: "/#",
    },
    {
      id: 2,
      name: "Contacts",
      link: "/#",
    },
    {
      id: 3,
      name: "Sur nous",
      link: "/#",
    },
  ];

  return (
    <div
      data-sticky-type="always"
      className={`${
        headerFixed ? "fixed top-0 left-0 shadow-lg z-30 w-full" : ""
      }`}
      style={{ width: "100%" }}
    >
      <div className="flex justify-between items-center p-4 border-2 border-black ">
        <div className=" flex items-center gap-4">
          <div className="relative cursor-pointer group transition duration-300 hover:scale-110">
            <a href="#" className=" flex items-center gap-2 text-primary-500 py-2">
              Menu
              <span>
                <TiThMenuOutline className=" group-hover:rotate-180 duration-300 " />
              </span>
            </a>
            <div className="absolute z-50 hidden group-hover:block w-48 shadow-md p-2 rounded-md px-2 py-2 ">
              <ul className="bg-orange-100 space-y-2 rounded-md px-4 py-2">
                {dropDownMenu.map((data, index) => (
                  <li key={index}>
                    <a
                      className="bg-orange-100 text-gray-500 hover:text-primary duration-200 inline-block w-full p-2 rounded-md font-semibold"
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" relative group hidden sm:block animate-pulse transition duration-300 hover:scale-110">
            <input
              type="text"
              placeholder="Search"
              className=" searchbar rounded-md px-4 py-2 border border-gray-500 focus:outline-none focus:border-primary"
            ></input>
            <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
          </div>
        </div>
        <h1 className=" text-xl transition duration-500 hover:scale-150 cursor-pointer">
          <a href="/#" alt="Page Principale">
            <PiArmchairDuotone size={35} className=" ml-24" />
            LES CHAISES VOLANTES
          </a>
        </h1>
        <div className="hidden lg:block">
          <div className=" flex items-center gap-4">
            <div>
              <a
                href="/#panier"
                className=" inline-block text-primary-500 hover:text-primary duration-200"
              >
                <AiOutlineShoppingCart size={24} className=" transition duration-300 hover:scale-110" />
              </a>
            </div>
            <div>
              <a
                href="/#favoris"
                className=" inline-block text-primary-500 hover:text-primary duration-200"
              >
                <AiOutlineHeart size={24} className=" transition duration-300 hover:scale-110" />
              </a>
            </div>
            <div>
              <a
                href="/#connect"
                className=" inline-block text-primary-500 hover:text-primary duration-200  text-lg transition duration-300 hover:scale-110"
              >
                Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
