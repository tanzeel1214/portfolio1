import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import graphql from "../assets/graphql.png";
import react from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";

const Experience = () => {
    const techs =[
        {
            id:1,
            src:html,
            title:"Html",
            style:"shadow-orange-500"
        },
        {
            id:2,
            src:css,
            title: "Css",
            style:"shadow-blue-500"
        },
        {
            id:3,
            src:graphql,
            title: "Graphql",
            style:"shadow-pink-500"
        },
        {
            id:4,
            src:react,
            title: "React",
            style:"shadow-green-500"
        },
        {
            id:5,
            src:nextjs,
            title:"Nextjs",
            style:"shadow-white"
        },
        {
            id:6,
            src:javascript,
            title:"Javascript",
            style:"shadow-yellow-500"
        },
        {
            id:7,
            src:tailwind,
            title:'blue',
            style:"shadow-orange-500"
        },
        {
            id:8,
            src:github,
            title:"Github",
            style:"shadow-white"
        },
        
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black p-4 text-white w-full h-full'>
        <div className='max-w-screen-lg flex flex-col mx-auto p-4 justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold border-gray-500 inline p-2 m-4 border-b-4'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>
            <div className='grid sm:grid-cols-3 grid-cols-2 gap-8 px-12 sm:px-0'>
                {
                    techs.map(({id,src,title,style})=>{
                        return <div key={id} className={`flex flex-col items-center shadow-md  hover:scale-105 rounded-lg duration-500 ${style}`}>
                        <img src={src} className="w-20 mx-auto" alt='html'/>
                        <p className=" mt-4">{title}</p>
                    </div>
                    })
                }
                
            </div>

        </div>
    </div>
  )
}

export default Experience