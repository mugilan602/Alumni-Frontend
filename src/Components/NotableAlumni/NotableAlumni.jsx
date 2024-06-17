import React from "react";
import { AlumniDataset } from "../../api/MockData2.js";
import { useState, useEffect } from "react";
import Navbar2 from "../Navbar/Navbar2.jsx";
import { Campus } from "../Campus/Campus.jsx";



const AlumniCard = (prop) => {
  const { img } = prop;
  let [AlumniDataSet, setAlumniDataSet] = useState(AlumniDataSet);
  return (
    <>
      <div className="w-[90%] mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
        {AlumniDataSet.map((e) => {
          return <AlumniCard key={e.id} img={e.image_url} />;
        })}
      </div>

      <div className=" shadow-lg  m-4 p-6">
        <img
          src="https://ik.imagekit.io/ytissbwn8/Alumini_Website_Assets/Veera_Muthuvel.png?updatedAt=1713521220243"
          alt="AlumniImage"
        ></img>
      </div>
    </>
  );
};

const AlumniLayout = () => {
    console.log(AlumniDataset[0].image_url)
  return (
    <>
    <Navbar2/>
    <Campus/>
      <div className="2xl:container ">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 h-[100%] px-8 py-8">
          <div className="rounded-xl p-4 w-80 justify-center items-center space-y-2 h-50   bg-white shadow-2xl ">
            <div className="">
              <img
                src={AlumniDataset[0].image_url}
                alt="Alumniimage"
                className="h-56 w-[100%] object-contain flex  rounded-xl  justify-center"
              />
            </div>
            <button className="text-[white] transition ease-in-out delay-150 bg-gradient-to-r from-[#56b49a] to-[#5c7da1]  hover: translate-y-1 hover:scale-110 hover: from-[#56b49a] hover:to-[#6B7A8E] duration-300 w-full h-8 rounded-md">
              Connect Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const NotableAlumni = () => {
  return (
    <>
      <AlumniLayout />
    </>
  );
};

export default NotableAlumni;
