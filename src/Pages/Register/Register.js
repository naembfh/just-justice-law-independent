import { async } from '@firebase/util';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState('')

    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating,] = useUpdateProfile(auth);

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = (event) => {
        if (password !== event.target.value) {
            return;
        }
        if (password === event.target.value) {
            setConfirmPassword(event.target.value)
        }

    }
    const handleLoginSubmit = async (event) => {
        event.preventDefault()
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: [name] });
        navigate('/chekout')

    }
    return (
        <div className='w-50 mx-auto'>

            <h1 className='text-center'>Register</h1>
            <Form onSubmit={handleLoginSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onBlur={handleNameBlur} type="text" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="Password" />
                </Form.Group>

                <Button className='btn btn-dark rouded' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='text-center'>Already Register ? <Link className='btn btn-dark rouded' to='/login'>Login First</Link></p>
        </div>

    );
};

export default Register;