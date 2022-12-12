import React from 'react';
import img1 from '../../../Images/carusal/slider-1.jpg';
import img2 from '../../../Images/carusal/slider-2.jpg';
import img3 from '../../../Images/carusal/slider-3.jpg';
import img4 from '../../../Images/carusal/slider-4.jpg';
import './banner.css'
import { BiArrowToLeft,BiArrowToRight } from "react-icons/bi";


const Banner = () => {
    return (
        <div className=''>
            <div className="carousel w-full h-5/6 mb-0">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='carusal-img'>
                        <img src={img1} className="w-screen  rounded" />
                    </div>
                    <div className="absolute flex justify-center text-center left-60  top-1/4">
                        <div className='  text-white '>
                            {/* <h1 className='text-9xl ml-96 mb-0 font-semibold title'><span className=' text-yellow-500'>Green</span>Van</h1>   <br />
                            <p><span className='text-xl ml-96 '>Agro Company For Good Health</span></p> */}
                        </div>
                    </div>

                    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-96  top-2/4">
                        {/* <div className='ml-96'>
                            <button className="btn btn-warning mr-5 ">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Sector</button>
                        </div> */}


                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">
                        <a href="#slide4" className="btn   mr-5"><BiArrowToLeft/></a>
                        <a href="#slide2" className="btn  mr-5"><BiArrowToRight/></a>
                    </div>
                </div>








                <div id="slide2" className="carousel-item relative w-full">
                    <div className='carusal-img'>
                        <img src={img2} className="w-screen" />
                    </div>
                    <div className="absolute flex justify-center text-center left-60  top-1/4">
                        <div className='  text-white '>
                            {/* <h1 className='text-9xl ml-96 mb-0 font-semibold title'><span className=' text-yellow-500'>Green</span>Van</h1>   <br />
                            <p><span className='text-xl ml-96 '>Agro Company For Good Health</span></p> */}
                        </div>
                    </div>

                    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-96  top-2/4">
                        <div className='ml-96'>
                            {/* <button className="btn btn-warning mr-5 ">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Sector</button> */}
                        </div>

                    </div>



                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">
                        <a href="#slide1" className="btn   mr-5"><BiArrowToLeft/></a>
                        <a href="#slide3" className="btn   mr-5"><BiArrowToRight/></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='carusal-img'>
                        <img src={img3} className="w-screen" />
                    </div>
                    <div className="absolute flex justify-center text-center left-60  top-1/4">
                        <div className='  text-white '>
                            {/* <h1 className='text-9xl ml-96 mb-0 font-semibold title'><span className=' text-yellow-500'>Green</span>Van</h1>   <br />
                            <p><span className='text-xl ml-96 '>Agro Company For Good Health</span></p> */}
                        </div>
                    </div>

                    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-96  top-2/4">
                        <div className='ml-96'>
                            {/* <button className="btn btn-warning mr-5 ">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Sector</button> */}
                        </div>

                    </div>




                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">
                        <a href="#slide2" className="btn   mr-5"><BiArrowToLeft/></a>
                        <a href="#slide4" className="btn   mr-5"><BiArrowToRight/></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className='carusal-img'>
                        <img src={img4} className="w-screen" />
                    </div>
                    <div className="absolute flex justify-center text-center left-60  top-1/4">
                        <div className='  text-white '>
                            {/* <h1 className='text-9xl ml-96 mb-0 font-semibold title'><span className=' text-yellow-500'>Green</span>Van</h1>   <br />
                            <p><span className='text-xl ml-96 '>Agro Company For Good Health</span></p> */}
                        </div>
                    </div>

                    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-96  top-2/4">
                        <div className='ml-96'>
                            {/* <button className="btn btn-warning mr-5 ">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Sector</button> */}
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">
                        <a href="#slide3" className="btn   mr-5"><BiArrowToLeft/></a>
                        <a href="#slide1" className="btn   mr-5"><BiArrowToRight/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;