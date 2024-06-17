import React from 'react'
import Navbar2 from "../Navbar/Navbar2";
import { Campus } from '../Campus/Campus';
import "./CeoMessage.css";
import "tailwindcss/tailwind.css";

const CeoMessage = () => {
  return (
<>
<Navbar2/>
   {/* <Campus/> */}
   <div className="bg-black py-10">
      <div className="2xl:container">
        <div className="w-[90%] mx-auto grid grid-cols-1 items-start gap-14 hover:shadow-xl bg-slate-50">
          <div className="relative bg-container flex items-center justify-center">
            <p className="pge  text-white w-96 m-10 absolute bottom-0 left-1/2 transform -translate-x-1/2  mb-36  mt-12 text-5xl  md:text-5xl pb-20 lg:text-6xl 6xl:text-6xl md:top-0 md:left-0 md:transform-none">
              To think is wise, to plan is wiser and to do is the wisest.
            </p>
            <p className="pge ml-2 pt-5 text-white w-[60%] m-10 mt-96 absolute bottom-0 left-1/2 transform -translate-x-1/2 text-2xl  md:text-2xl md:ml-6 pb-16 lg:text-2xl 2xl:text-2xl md:top-0 md:left-0 md:transform-none">
              -Mr.Sai Prakash Leo Muthu 
            </p>
            <p className="pge ml-2 pt-14 text-white w-[60%] m-10 mt-96 absolute bottom-0 left-1/2 transform -translate-x-1/2 text-2xl md:text-2xl md:ml-6 lg:text-2xl 2xl:text-2xl md:top-0 md:left-0 md:transform-none">
              CEO- Sairam Institutions
            </p>
          </div>
        </div>
      </div>
    </div>
</>
  )
}

export default CeoMessage