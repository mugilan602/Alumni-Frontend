import React from 'react';
import './Visionmission.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';



function Visionmission() {
    return (

        <>
     
       
            <div className="2xl:container bg-white  md:pb-60">
                <div className="s-container w-[90%]  m-10 col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9 col-xxl-9">
                    <h2 className='vm_heading py-5'>VISION MISSION</h2>
                    <div className='py-5'>
                    <h2 className='vm_subheading'>VISION</h2>
                    <p className='vm_paragraph mt-5 mr-5'>
                        To emerge as a “Centre for excellence” offering Technical Education and Research Opportunities of very high standards to
                        students, develop the total personality of the individual, and instill high levels of discipline and strive to set global
                        standards, making our students technologically superior and ethically strong, who in turn shall contribute to the
                        advancement of society and humankind.
                    </p>
                    </div>
                    <div className='py-5'>
                    <h2 className='vm_subheading'>MISSION</h2>
                    <p className='vm_paragraph mt-5 mr-5'>
                        We dedicate and commit ourselves to achieve, sustain and foster unmatched excellence in Technical Education. To this
                        end, we will pursue continuous development of infrastructure and enhance state-of-the art equipment to provide our
                        students a technologically up-to-date and intellectually inspiring environment of learning, research, creativity,
                        innovation and professional activity and inculcate in them ethical and moral values.

                    </p>

                    </div>
                   

                </div>


            </div>
      

        </>
    );
}

export default Visionmission;