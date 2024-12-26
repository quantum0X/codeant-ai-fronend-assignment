import React from "react";

export function SocialButton({ icon, text }) {
  return (
    <button className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 border border-gray-300 hover:bg-gray-50 rounded-md transition-colors">
      <img src={icon} alt="icon" className="w-6 h-6" />
      <span>{text}</span>
    </button>
  );
}
