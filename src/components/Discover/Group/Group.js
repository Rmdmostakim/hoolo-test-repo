import React from 'react'
import SingleHeader from '../../Atomics/SectionHeader/SingleSectionHeader'
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft, faCircle, } from "@fortawesome/free-solid-svg-icons";
import './Group.css'

function SampleNextArrow(props) {
    return (
        <button
            className="custom-slick-btn custom-slick-next d-none"
            onClick={props.onClick}
        >
            <span>
                <FontAwesomeIcon
                    icon={faAngleRight}
                    mask={faCircle}
                    transform="shrink-7"
                />
            </span>
        </button>
    );
}

function SamplePrevArrow(props) {
    return (
        <button
            className="custom-slick-btn custom-slick-prev  d-none"
            onClick={props.onClick}
        >
            <FontAwesomeIcon
                icon={faAngleLeft}
                mask={faCircle}
                transform="shrink-7"
            />
        </button>
    );
}


const Group = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        swipeToSlide: true,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };





    return (
        <>

            <SingleHeader heading="Groups" />

            <Slider {...settings} className="mb-5"  >

                <div className='item'>
                    <div className="group-slide-item">

                        <img
                            src="/img/group.png"
                            alt="alter"
                        />


                    </div>
                </div>

                <div className='item'>
                    <div className="group-slide-item">

                        <img
                            src="/img/group-1.png"
                            alt="alter"
                        />


                    </div>
                </div>


                <div className='item'>
                    <div className="group-slide-item">

                        <img
                            src="/img/group.png"
                            alt="alter"
                        />


                    </div>
                </div>


                <div className='item'>
                    <div className="group-slide-item">

                        <img
                            src="/img/group-1.png"
                            alt="alter"
                        />


                    </div>
                </div>


                <div className='item'>
                    <div className="group-slide-item">

                        <img
                            src="/img/group.png"
                            alt="alter"
                        />


                    </div>
                </div>

                <div className='item'>
                    <div className="group-slide-item">

                        <img
                            src="/img/group-1.png"
                            alt="alter"
                        />


                    </div>
                </div>




            </Slider>

        </>
    )
}

export default Group
