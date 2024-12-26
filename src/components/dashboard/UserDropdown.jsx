import React from "react";
import { ChevronDown } from "lucide-react";

const UserDropdown = () => {
  return (
    <div className="relative w-full mb-4 bg-white">
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
      <select
        value={"VishalSinghAmX"}
        className="w-full text-gray-700 pl-4 md:pr-16 py-2 border bg-white border-gray-300 rounded-md focus:outline-none appearance-none"
      >
        <option value="" selected>
          VishalSinghAK
        </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
};

export default UserDropdown;
