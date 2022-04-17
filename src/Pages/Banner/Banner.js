
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/Banner/clearAdvice.jpg'
import banner2 from '../../images/Banner/HonestTreatment.jpg'
import banner3 from '../../images/Banner/smartstrategies.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className='text-dark fw-bolder'>
                    <h3>Clear Advice</h3>
                    <p> In the future, clients will want more business-oriented lawyers who can provide them with clear, concise and succinct advice.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption className='text-dark fw-bolder'>
                    <h3 >Honest Treatment</h3>
                    <p>Most would argue that in any relationship, honesty is very important. The attorney-client relationship is no different.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption className='text-dark fw-bolder '>
                    <h3>Smart Strategies</h3>
                    <p>
                        A SMART strategies for lawyers must be measurable. This means you can track and assess the strategies's progress with quantifiable milestones
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;