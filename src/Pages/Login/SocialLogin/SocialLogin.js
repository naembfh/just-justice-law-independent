import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Google from '../../../images/Social/google.png'


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const location = useLocation()


    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true })
    }



    return (
        <>
            {
                error && <p className='text-danger'>{error.message}</p>
            }
            <button className='btn btn-dark rouded'
                onClick={() => signInWithGoogle()}>
                <img src={Google} alt="" srcset="" />
                <span>Google Sign In</span>
            </button>
        </>
    );
};

export default SocialLogin;