import { async } from '@firebase/util';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const location = useLocation()
    const navigate = useNavigate()


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail(auth);

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true })
    }




    const handleLoginSubmit = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    const handleResetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Reset Email Sent')
        }
        else {
            toast('Enter Your Email Address')
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center'>Login</h1>
            <Form onSubmit={handleLoginSubmit} className=''>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                </Form.Group>

                <Button className='btn btn-dark rouded' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {
                error && <p className='text-danger'>{error.message}</p>
            }
            <div className='text-center'>
                <p >New to here ? <Link className='btn btn-dark rouded' to='/register'>Register First</Link></p>
                <p>Forger Password ? <button className='btn btn-dark rouded' onClick={handleResetPassword}>Reset Password</button> </p>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;