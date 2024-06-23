import "./Events.css";
import React from "react";

function Events() {
  return (
    <div className="2xl:container py-10">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col mx-auto hover:shadow-xl border w-full lg:w-80 pr-2 pl-2">
          <p className="font-bold px-5 p-4 font-Roboto tracking-widest text-2xl text-blue-800">
            EVENTS
          </p>
          <div className="font-Roboto flex justify-start border border-l-0 border-r-0 border-b-0 pt-14 pb-14 items-start w-[100%] py-5 px-5 text-start scale-105 hover:shadow-xl hover:bg-slate-200">
            <div className="flex flex-col justify-centre items-centre">
              <p className="font-Roboto">MAR</p>
              <p className="font-Roboto text-2xl">25</p>
            </div>
            <a href="" className="font-Roboto">
              <button className="w-full h-full">XXXX</button>
            </a>
          </div>

          <div className="font-Roboto flex justify-start border-l-0 border-r-0 pt-14 pb-14 items-start w-[100%] py-5 px-5 text-start gap-4 scale-105 hover:shadow-xl border hover:bg-slate-200">
            <div className="flex flex-col justify-center items-center">
              <p className="font-Roboto">MAR</p>
              <p className="font-Roboto text-2xl">24</p>
            </div>
            <a href="" className="font-Roboto">
              <button className="w-full h-full">XXXX</button>
            </a>
          </div>

          <div className="font-Roboto flex justify-start pt-14 pb-14 items-start w-[100%] py-5 px-5 text-start gap-4 scale-105 hover:shadow-xl hover:bg-slate-200">
            <div className="flex flex-col justify-center items-center">
              <p className="font-Roboto">MAR</p>
              <p className="font-Roboto text-2xl">24</p>
            </div>
            <a href="" className="font-Roboto">
              <button className="w-full h-full">XXXX</button>
            </a>
          </div>
        </div>

        <div className="text-start lg:w-[100%] border">
          <p className="font-bold px-5 p-4 font-Roboto tracking-widest text-2xl text-blue-800">
            NEWSROOM
          </p>
          <div className="font-Roboto flex flex-col h-[100%] w-[100%]">
            <div className="font-Roboto flex gap-2 border border-l-0 border-r-0 hover:shadow-xl w-[100%] p-4 hover:bg-slate-200">
              <img
                src="https://ik.imagekit.io/qgyfqyn9z/alumni%20website/Screenshot%202024-04-10%20193806.png?updatedAt=1712817910039"
                className="h-20 md:h-32 lg:h-44"
              />
              <div className="flex flex-col justify-start items-start text-start flex-grow">
                <div className="flex justify-between w-full p-3">
                  <p className="font-Roboto text-lg tracking-widest font-bold">
                    SAIRAM NEWSLETTER
                  </p>
                  <p className="font-Roboto px-8 py-2 text-sm text-gray-400">
                    22 Mar 2024
                  </p>
                </div>
                <p className="font-Roboto p-3 justify-start text-gray-500">
                  XXXX
                </p>
                <div className="flex justify-end w-full py-10 px-6">
                  <a
                    href=""
                    className="border border-spacing-2 pr-5 pl-5 font-Roboto border-black rounded-full hover:bg-blue-500 focus:bg-blue-500 hover:text-white focus:text-white text-black"
                  >
                    <button className="w-full h-full">Read More</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="font-Roboto flex pr-10 gap-2 border border-l-0 border-r-0 hover:shadow-xl w-[100%] p-4 hover:bg-slate-200">
              <img
                src="https://ik.imagekit.io/qgyfqyn9z/alumni%20website/Screenshot%202024-04-10%20193806.png?updatedAt=1712817910039"
                className="h-20 md:h-32 lg:h-44"
              />
              <div className="flex flex-col justify-start items-start text-start flex-grow">
                <div className="flex justify-between w-full p-3">
                  <p className="font-Roboto text-lg tracking-widest font-bold">
                    SAIRAM NEWSLETTER
                  </p>
                  <p className="font-Roboto px-8 py-2 text-sm text-gray-400">
                    22 Mar 2024
                  </p>
                </div>
                <p className="font-Roboto justify-start p-3 text-gray-500">
                  XXXX
                </p>
                <div className="flex justify-end w-full py-10 px-6">
                  <a
                    href=""
                    className="border border-spacing-2 pr-5 pl-5 font-Roboto border-black rounded-full hover:bg-blue-500 focus:bg-blue-500 hover:text-white focus:text-white text-black"
                  >
                    <button className="w-full h-full">Read More</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
