import React from 'react'

const About = () => {
  return (
    <div name="about" className='bg-gradient-to-b from-gray-800 to-black text-white w-full
    h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>About</p>
            </div>
            <p className='text-xl mt-20'>
            Welcome to my portfolio! I am a highly motivated and driven individual with a
            passion for creativity and innovation. With a background in [your field or profession]
            , I have honed my skills and gained valuable experience that has allowed me to excel in
             my career. My portfolio showcases some of my best work, including [projects you've worked on,
              skills you excel at, or achievements you're proud of]. 
            </p>
            <br/>
            <p className='text-xl'> 
            Whether you're here to learn more about my experience and expertise or simply to get inspired,
            I hope you find something here that speaks to you. Feel free to reach out if you have any 
            questions or would like to collaborate on a project. I look forward to connecting with you!
            </p>
        </div>
    </div>
  )
}

export default About