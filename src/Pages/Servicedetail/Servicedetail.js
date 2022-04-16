import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Servicedetail = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>Welcome to deatail {id}</h1>
            <Link to='/checkout'>checkout</Link>
        </div>
    );
};

export default Servicedetail;