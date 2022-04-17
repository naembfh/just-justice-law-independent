import React from 'react';
import lawyer from '../../images/Lawyer/3968614.jpg'

const About = () => {
    return (
        <div className='d-lg-flex flex-lg-row flex-sm-column'>
            <img style={{ width: "500px" }} src={lawyer} alt="" srcset="" />
            <div className='text-center mt-5 '>
                <h1>Hi, I am Mr. Kp Murugan from "Just Justice"</h1>
                <h2 className='mt-2'>Just Justice was founded with one goal in mind to be the go employment lawyer for workers accross the country.Our mantra is "Fighting for workers."</h2>
                <h3 className='mt-2' >I believe that win is never enough- it is important that we achieve the overall best outcome for you.</h3>
                <h3 className='mt-2' >I believe that win is never enough- it is important that we achieve the overall best outcome for you.</h3>
                <h4 className='mt-2'>Mr Kp Murugan from the land "down under".He was born in blue - color family and was raised in an enviroment which valued hard work.
                </h4>

            </div>
        </div>
    );
};

export default About;