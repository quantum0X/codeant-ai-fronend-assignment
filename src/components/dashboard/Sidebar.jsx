import React from "react";
import { Phone, LogOut, Menu, Plus } from "lucide-react";
import BgImg from "../../assets/name.png";
import { navbarMenus } from "../../constants/NavbarMenus";
import UserDropdown from "./UserDropdown";

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div className="bg-white fixed w-screen md:w-full md:relative  md:h-screen col-span-1 left-0 top-0 border-r border-gray-200 py-2 md:pt-6 flex flex-col border-b md:justify-between z-20">
      <div className="sm:pr-2 md:pr-0">
        <div className="w-full px-4 flex items-center justify-between">
          <img src={BgImg} alt="icon" className="h-6 md:h-8" />

          {isOpen ? (
            <Plus
              className="block md:hidden h-8 w-8 text-2xl rotate-45"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <Menu
              className="block md:hidden h-8 w-8 text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>

        <nav
          className={`"w-full px-4 pt-4 space-y-2" ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <UserDropdown />
          <div className="w-full flex flex-col justify-evenly">
            <ul className="space-y-1">
              {navbarMenus.map((menu, i) => (
                <li key={i}>
                  <a
                    href={menu.link}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-md ${
                      menu.isActive
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {menu.icon}
                    <span>{menu.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      {/* bottom menu */}
      <div className={`w-full px-4 space-y-1 ${isOpen ? "block" : "hidden"}`}>
        <a
          href="/#"
          className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-100"
        >
          <Phone className="w-5 h-5" />
          <span>Support</span>
        </a>
        <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-100 hover:cursor-pointer">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
