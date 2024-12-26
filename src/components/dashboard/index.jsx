import React, { useEffect, useState } from "react";
import RepositoryList from "./RepositoryList";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const onResize = () => {
      setIsOpen(window.innerWidth >= 768);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [setIsOpen]);
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-7 lg:grid-cols-5 bg-[#FAFAFA]">
      <div className="md:col-span-2 lg:col-span-1 bg-green-200">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="md:col-span-5 lg:col-span-4 md:p-4 md:overflow-hidden md:h-screen">
        <div className="hide-scroll overflow-y-scroll h-full pt-10 md:pt-0 pb-4">
          <RepositoryList isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
