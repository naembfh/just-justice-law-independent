import React from 'react';
import call from '../../images/Contact/call.jpg'
import email from '../../images/Contact/email.png'
import facebook from '../../images/Contact/facebook.png'
import twitter from '../../images/Contact/twitter.png'


const Contact = () => {
    return (
        <div className='container'>
            <div className=' d-flex justify-content-around mt-3'>
                <div className='d-flex '>
                    <div className='d-flex mx-2'>
                        <img style={{ width: "25px", height: "25px" }} src={call} alt="" srcset="" />
                        <p>+60183141719</p>
                    </div>
                    <div className='d-flex '>
                        <img style={{ width: "25px", height: "25px" }} src={email} alt="" srcset="" />
                        <p>naembfh@gmail.com</p>
                    </div>
                </div>
                <div>
                    <img style={{ width: "25px", height: "25px" }} src={facebook} alt="" srcset="" />
                    <img style={{ width: "25px", height: "25px" }} src={twitter} alt="" srcset="" />


                </div>
            </div>
            <hr /> <hr />
        </div>
    );
};

export default Contact;