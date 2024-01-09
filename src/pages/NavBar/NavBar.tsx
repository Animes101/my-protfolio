import React, { useEffect, useState } from 'react'

import { FaBars } from "react-icons/fa";

function NavBar() {

    const [sticky ,setSticky]=useState(false);
    const [navOpen ,setNavOpen]=useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 0 ? setSticky(true) : setSticky(false)

        })
    },[]);
    const handleNavBar=()=>{
        setNavOpen(!navOpen);
    }
  return (
    <nav className={`w-full fixed top-0 left-0  z-[999] ${sticky ? `md:bg-text-color text-background-color` : `text-text-color`}`}>
        <div className='flex justify-between items-center'>
            <div>
                <h1 className='text-logo-color text-[2.25rem] pl-6 font-extrabold cursor-pointer'>ANI<span className='text-text-color'>_</span>MES</h1>
            </div>
            <div className='bg-text-color w-[40rem] px-[3.75rem] py-3 rounded-bl-[3.5rem] hidden md:block'>
                <ul className='flex justify-between items-center'>
                    <li className='text-background-color font-bold hover:text-hover-color cursor-pointer text-[1.125rem]	'>HOME</li>
                    <li className='text-background-color font-bold hover:text-hover-color cursor-pointer text-[1.125rem]	'>ABOUT</li>
                    <li className='text-background-color font-bold hover:text-hover-color cursor-pointer text-[1.125rem]	'>SKILLS</li>
                    <li className='text-background-color font-bold hover:text-hover-color cursor-pointer text-[1.125rem]	'>PROJECTS</li>
                    <li className='text-background-color font-bold hover:text-hover-color cursor-pointer text-[1.125rem]	'>CONTACT</li>
                </ul>
            </div>
            <div onClick={handleNavBar} className='md:hidden absolute top-2 right-2'>
                <FaBars className='text-3xl text-text-color' />

                <ul className={`flex-col bg-logo-color h-screen p-2 absolute top-8 w-[200px] right-[-1000px]  ${navOpen ? 'right-[0]': 'hidden'}`}>
                    <li className='text-text-color py-3 font-bold hover:text-background-color cursor-pointer text-[1.125rem]	'>HOME</li>
                    <li className='text-text-color py-3 font-bold hover:text-background-color cursor-pointer text-[1.125rem]	'>ABOUT</li>
                    <li className='text-text-color py-3 font-bold hover:text-background-color cursor-pointer text-[1.125rem]	'>SKILLS</li>
                    <li className='text-text-color py-3 font-bold hover:text-background-color cursor-pointer text-[1.125rem]	'>PROJECTS</li>
                    <li className='text-text-color py-3 font-bold hover:text-background-color cursor-pointer text-[1.125rem]	'>CONTACT</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar