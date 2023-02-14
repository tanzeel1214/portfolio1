import React from 'react'
import heroImage from "../assets/me.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div name="home" className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg  mx-auto flex items-center justify-center flex-col h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-white font-bold text-4xl md:text-7xl'>I'm a full stack developer</h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        Experienced web developer with a strong background in developing
                        award-winning applications for a diverse clientele. 5+ years of
                        industry experience includes programming, debugging, and wireframes.
                        Received 80%+ experience scores on every web application built for SoftwareX.
                    </p>
                    <div>
                        <Link to='portfolio' smooth duration={500} className='group text-white bg-gradient-to-r from-cyan-500
                         to-blue-500 rounded-md cursor-pointer flex items-center w-fit py-3 px-6 my-2
                        '>portfolio
                            <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} /></span>
                        </Link>
                    </div>

                </div>
                <div>
                <img className='rounded-2xl w-1/3 mx-auto md:w-2/3' src={heroImage} alt='abc' />
            </div>
            </div>
            

        </div>
    )
}

export default Home