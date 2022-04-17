import React from 'react';
import Google from '../../../images/Social/google.png'


const SocialLogin = () => {
    return (
        <>
            <button className='btn btn-dark rouded'>
                <img src={Google} alt="" srcset="" />
                <span>Google Sign In</span>
            </button>
        </>
    );
};

export default SocialLogin;