import React, { useState } from 'react'
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  const [name ,setName]=useState('');
  const [email ,setEmail]=useState('');
  const [message ,setMessage]=useState('');

  const handleNameChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value)
  }

  const handleEmailChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)
  }

  const handleMessageChange=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setMessage(e.target.value)
  }

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{

    e.preventDefault();

    const contact={name ,message,email} ;

    console.log(contact);
    setEmail('');
    setMessage('');
    setName('');


  }
    return (
    <section className='py-[20px]'>
      <div className='w-[90%] m-auto'>
        <h1 className='text-center text-[3.75rem] text-text-color'>Contact <span className='text-logo-color'>Me</span></h1>
        <h3 className='text-center text-gray-color text-[1.125rem] py-2'>Get in touch</h3>
        <hr className='text-text-color py-2' />
        <div className='w-[90%] m-auto bg-skill-background p-3 flex justify-between items-start'>
          <div className='w-[60%]'>
          <form onSubmit={handleSubmit} action="">
          <input onChange={handleNameChange} value={name} type="text" name="" className='text-text-color border border-text-color bg-gray-color text-[1.125rem block w-[100%] p-2 rounded-md focus:ring-4 focus:ring-logo-color outline-none  my-2' placeholder='Enter Your Name' id="" />
            <input onChange={handleEmailChange} value={email} type="email" name="" className='text-text-color border border-text-color bg-gray-color text-[1.125rem block w-[100%] p-2 rounded-md focus:ring-4 focus:ring-logo-color outline-none  my-2' placeholder='Enter Your Email' id="" />
            <textarea onChange={handleMessageChange} value={message} className='w-[100%] bg-gray-color text-[1.125rem] p-2 my-2' name=""  placeholder='Your Message' id=""></textarea>
            <button type='submit' className='px-4 py-2 hover:text-logo-color hover:bg-text-color bg-logo-color border rounded-md '>Send</button>
          </form>
          </div>
          <div className='w-[40%] flex flex-col   items-start ps-5'>
            <div className='flex items-center justify-between pb-6'>
              <BiLogoGmail  className='text-3xl hover:text-text-color cursor-help text-logo-color'/>
              <a href="" className='text-text-color hover:text-red-400 text-[1.125rem] ps-3 hover:underline'>animesbarman101@gmail.com</a>
            </div>
            <div className='flex items-center justify-between pb-6'>
              <FaWhatsapp className='text-3xl hover:text-text-color cursor-help text-logo-color' />
              <a href="" className='text-text-color hover:text-red-400 text-[1.125rem] ps-3 hover:underline'>01304653124</a>
            </div>
            <div className='flex items-center justify-between pb-6'>
              <FaLocationDot className='text-3xl hover:text-text-color cursor-help text-logo-color' />
              <a href="" className='text-text-color hover:text-red-400 text-[1.125rem] ps-3 hover:underline'>Thakurgaon ,Thakurgaon Cyty</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact