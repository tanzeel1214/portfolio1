import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-full bg-gradient-to-b from-black to-gray-500 text-white pt-10'>
        <div className="max-w-screen-lg w-full h-full flex flex-col justify-center mx-auto">
            <div className='pb-8'>
                <p className='text-4xl font-bold border-gray-400 border-b-4 inline'>Contact Us</p>
                <p className='mt-6'>Submit the form below to contact with me</p>                    
            </div>
            <div className='flex items-center justify-center'>
                <form action='https://getform.io/f/4e82fea4-7012-4580-a60a-6e2565afacd0' method='post'
                className='flex flex-col w-full md:w-1/2 mx-auto p-4'>
                    <input type="text" name='text' placeholder='Enter your name' className='bg-transparent p-2 shadow-md 
                    focus:outline-none rounded-md shadow-gray-300 ' />
                    <input type="text" name='email' placeholder='Enter your email' className='bg-transparent p-2 my-6 shadow-md 
                    focus:outline-none rounded-md shadow-gray-300'/>
                    <textarea placeholder='Enter your message' name='message' rows={8} className="bg-transparent  shadow-md 
                    focus:outline-none rounded-md p-2 shadow-gray-300" />
                    <button  className='py-3 my-6 px-6 mx-auto flex items-center bg-gradient-to-b from-cyan-500 to-blue-500
                     hover:scale-105 duration-300 rounded-md  '>let's talk</button>
                </form> 
            </div>
        </div>
    </div>
  )
}

export default Contact 