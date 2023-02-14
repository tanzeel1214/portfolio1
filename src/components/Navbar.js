import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const links = [
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: "about"
        },
        {
            id: 3,
            link: "portfolio"
        },
        {
            id: 4,
            link: "experience"
        },
        {
            id: 5,
            link: "contact"
        },
    ]
    return (
        <div className='flex justify-between w-full items-center px-4 fixed h-20 bg-black text-white'>
            <div>
                <h1 className='text-5xl font-signature ml-2'>Tanzeel</h1>
            </div>
            <ul className='hidden md:flex'>
                {
                    links.map(({id,link}) => {
                       return <li key={id} className='capitalize cursor-pointer px-4 font-medium text-gray-500 hover:scale-125 duration-200'>
                            <Link duration={500} smooth to={link}>{link}</Link>
                        </li>
                    })
                }

            </ul>
            <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav? <FaTimes size={30}/>:<FaBars size={30}/>}
            </div>

            {
                nav && (
                    <ul className='flex flex-col justify-center items-center absolute top-0 bg-gradient-to-b w-full h-screen  from-black to-gray-600'>
                    {
                            links.map(({id,link}) => {
                               return <li key={id}  className='capitalize cursor-pointer px-4 py-6 text-4xl'>
                                    <Link onClick={()=>setNav(!nav)} duration={500} smooth to={link}>{link}</Link>
                                </li>
                            })
                        }
                    </ul>
                )
            }

           
        </div>


    )
}

export default Navbar