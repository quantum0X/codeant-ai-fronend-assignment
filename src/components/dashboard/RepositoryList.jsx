import React from "react";
import { Database, Plus, RefreshCw } from "lucide-react";
import { repositories } from "../../constants/Repositories";
import { SearchBar } from "./SearchBar";

export default function RepositoryList({ isOpen, setIsOpen }) {
  return (
    <div className="relative flex bg-white h-fit flex-col md:rounded-lg md:border border-gray-200 overflow-hidden">
      {/* black cover */}

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed md:hidden top-0 left-0 bg-black opacity-50 h-screen w-screen z-10 
      ${!isOpen ? "hidden" : "block"}
        `}
      ></div>

      <div className="p-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div>
            <div className="text-2xl font-semibold">Repositories</div>
            <div>33 total repositories</div>
          </div>
          <div className="flex flex-row gap-2 py-4">
            <button className="flex flex-row justify-center gap-2 px-4 py-2 rounded-md items-center border border-gray-200">
              <RefreshCw className="w-5 h-5" />
              Refresh All
            </button>
            <button className="flex flex-row justify-center items-center bg-primary gap-2 px-4 py-2 rounded-md text-white">
              <Plus className="w-5 h-5" />
              Add Repository
            </button>
          </div>
        </div>
        <SearchBar />
      </div>

      {/* repo list */}
      <div className="">
        {repositories.map((repo) => (
          <div
            key={repo.name}
            className="bg-white py-4 px-4 border-t border-gray-200 hover:bg-[#F5F5F5]"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <div className="flex font-medium text-lg">
                    {repo.name}
                    <div className="px-2 border border-[#B2DDFF] text-[#175CD3] -ml-1 bg-[#EFF8FF] rounded-full scale-75">
                      {repo.visibility}
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex items-center space-x-4 text-sm text-gray-900">
                  <span className="flex justify-center items-center gap-2">
                    {repo.language}
                    <div className="h-2 w-2 rounded-full bg-primary scale-90"></div>
                  </span>
                  <div className="flex items-center space-x-1">
                    <Database className="w-4 h-4" />
                    <span>{repo.size} KB</span>
                  </div>
                  <span>Updated {repo.updated}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
