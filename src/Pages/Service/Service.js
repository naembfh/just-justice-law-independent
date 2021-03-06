import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { practise, img, description, price, btn, id } = service
    const navigate = useNavigate()
    // const navigateToDetail = id => {
    //     navigate(`/service/${id}`)
    // }
    return (
        <div className='col-lg-6 col-12 border rounded p-1 text-center text-wrap'>
            <img src={img} alt="" srcset="" />
            <h1>{practise}</h1>
            <p>{description}</p>
            <p>For Consultant fee Rm {price}</p>
            {/* <button onClick={() => navigateToDetail(id)}>Bokking for {btn}</button> */}


            <Link className='btn btn-dark rouded' to='/checkout'>{btn}</Link>

        </div>
    );
};

export default Service;