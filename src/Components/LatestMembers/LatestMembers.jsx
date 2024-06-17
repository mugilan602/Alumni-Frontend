import './LatestMembers.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ReactDOM from 'react-dom';
import { ProductDataset } from "../../api/MockData.js";
import { icon1, icon4 } from '../../assets/image.js';
import { icon2 } from "../../assets/image.js";
import { icon3 } from "../../assets/image.js";

import "swiper/css";
/*prop
optional chain
destructuring on fly */


// const PhotosCard = (prop) => {
//     const { img } = prop;
//     return (
//         <>


//             <div className=' shadow-lg m-4 p-6'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB_eFgLb2gS5sVutB67chC8HGPlfDHIelYChUoKF7cs1nCb0312D3DWyVq0X1P1AszFrA&usqp=CAU' alt='product' ></img>
//             </div>

//         </>
//     )
// }
// const PhotosLayout = () => {
//     return (
//         <>
//         <div className='2xl:container bg-white'>
//            <div className='shadow-lg  m-5 p-6'>
//            <div className="w-[100%]  grid  grid-cols-1 space-y-3 ">
//                 <h1 className='w-[100%] mx-auto bg-white font-semibold text-[#0c6cb1] text-xl m-3 p-4 shadow-xl'>GALLERY</h1>
//             </div>
//             <Swiper
//                 slidesPerView={5}
//                 spaceBetween={20}
//                 breakpoints={{
//                     0: { slidesPerView: 1, spaceBetween: 20 },
//                     480: { slidesPerView: 2, spaceBetween: 10 },
//                     768: { slidesPerView: 3, spaceBetween: 10 },
//                     1024: { slidesPerView: 4, spaceBetween: 50 },
//                     1200: { slidesPerView: 5, spaceBetween: 50 }
//                 }}
//                 autoplay={{ delay: 2500, disableOnInteraction: false }}
//                 pagination={{ clickable: false }}
//                 navigation
//                 modules={[Autoplay, Navigation]}
//                 className="mySwiper">
//                 {ProductDataset.map((e) => {
//                     return(<>
//                     <SwiperSlide key={e.team_id}>
//                         <PhotosCard
//                             img={e.image_url} />
//                     </SwiperSlide></>)
                    



//                 })}


//             </Swiper>
            


//             </div>




//             </div>

//         </>
//     )
// }
const MemberCard = (prop) => {
    const { img } = prop;
    return (
        <>


            <div className=' shadow-lg  m-4 p-6'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB_eFgLb2gS5sVutB67chC8HGPlfDHIelYChUoKF7cs1nCb0312D3DWyVq0X1P1AszFrA&usqp=CAU' alt='product' ></img>
            </div>

        </>
    )
}
const MemberLayout = () => {
    return (
        <>
        <div className='2xl:container bg-white'>
           <div className='shadow-lg  m-5 p-6'>
           <div className="w-[100%]  grid  grid-cols-1 space-y-3 ">
                <h1 className='w-[100%] mx-auto bg-white font-semibold text-[#0c6cb1] text-xl m-3 p-4 shadow-xl'>NOTABLE ALUMNI</h1>
            </div>
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 20 },
                    480: { slidesPerView: 2, spaceBetween: 10 },
                    768: { slidesPerView: 3, spaceBetween: 10 },
                    1024: { slidesPerView: 4, spaceBetween: 50 },
                    1200: { slidesPerView: 5, spaceBetween: 50 }
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: false }}
                navigation
                modules={[Autoplay, Navigation]}
                className="mySwiper">
                {ProductDataset.map((e) => {
                    return(<>
                    <SwiperSlide key={e.team_id}>
                        <MemberCard
                            img={e.image_url} />
                    </SwiperSlide></>)
                    



                })}


            </Swiper>
            


            </div>




            </div>

        </>
    )
}




/*const Btn = () => {
    return (
        <>
           <div className='2xl:container'>
            <div className="w-[90%] mx-auto grid  grid-cols-1 ">
                <div className='flex flex-col justify-center items-center h-[200px]'>
                    < button className='border border-[#0c6cb1] w-[60%] h-[60px] text-[#0c6cb1]' >Social Media Handlings</button></div>

            </div>
            </div>
        </>
    )
}*/
// const Follow = () => {
//     return(
//         <>
//         <div class="2xl:container">
//     <div class="w-[90%] mx-auto py-5 grid grid-cols-1">
     
     
//         <div class="flex  justify-center items-center py-5 space-x-1">
//           <a href="https://www.facebook.com/sairamec">
//           <img src={icon1} alt="icon1" class="w-[48px] px-2 m-1"/></a>
//           <a href="https://www.instagram.com/sairamec/">
//           <img src={icon2} alt="icon1" class="w-[58px] px-2 m-1"/></a>
//           <a href="https://twitter.com/sairam_EC">
//           <img src={icon3} alt="icon1" class="w-[48px] px-2 m-1"/></a>
//           <a href="https://www.linkedin.com/school/sri-sairam-engineering-college/about/">
//           <img src={icon4} alt="icon1" class="w-[48px] px-2 m-1"/></a>
          
//        </div>    
//     </div>
//   </div>
//         </>
//     )
// }

const LatestMembers = () => {
    return (
        <>
           
            {/* <PhotosLayout /> */}
            
            <MemberLayout />
            {/* < Follow/> */}
          

        </>
    )
}
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />)
export default LatestMembers;