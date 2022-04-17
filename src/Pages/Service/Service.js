import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { practise, img, description, price, btn, id } = service
    const navigate = useNavigate()
    // const navigateToDetail = id => {
    //     navigate(`/service/${id}`)
    // }
    return (
        <div>
            <h1>{practise}</h1>
            <p>{description}</p>
            <p>For Consultant {price}</p>
            {/* <button onClick={() => navigateToDetail(id)}>Bokking for {btn}</button> */}
            <Link to='/checkout'>Booking for{btn}</Link>
        </div>
    );
};

export default Service;