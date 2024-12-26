import React from "react";
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div>
      <div className="relative max-w-md w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
        <input
          type="text"
          placeholder="Search Repositories"
          className="w-full text-gray-700 pl-10 pr-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none"
        />
      </div>
    </div>
  );
}
