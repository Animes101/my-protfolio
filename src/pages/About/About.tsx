import React from 'react'

import about from '../../assets/about.jpg'

function About() {
  return (
    <section className='w-full h-screen'>

      <div className='w-[90%] m-auto '>
        <h1 className='text-center text-text-color text-[3.75rem]'>About <span className='text-[3.75rem] text-logo-color'>Me</span></h1>
        <h3 className='text-center text-gray-color my-2'>My introduction</h3>
        <hr className='py-3 text-text-color' />
        <div className='flex justify-between items-center'>
          <div className='w-[50%]'>
            <p className='text-text-color text-start leading-8	'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, minus. Labore nihil laboriosam ipsam necessitatibus accusamus exercitationem sint dolore facere eos deserunt repellendus velit ratione, quas nisi error quisquam molestias.</p>
            <article className='flex justify-start items-center gap-10 mt-5'>
              <div>
                <h1 className='text-[3.75rem] text-text-color '>02<span className='text-logo-color '>+</span></h1>
                <h3>Years experience</h3>
              </div>
              <div>
                <h1 className='text-[3.75rem] text-text-color '>12<span className='text-logo-color '>+</span></h1>
                <h3>Completed Projects</h3>
              </div>
              <div>
                <h1 className='text-[3.75rem] text-text-color '>06<span className='text-logo-color '>+</span></h1>
                <h3>Companies Work</h3>
              </div>
            </article>
            <button className='rounded-md p-2 mt-3 cursor-wait bg-logo-color'>Download CV</button>
          </div>
          <div className='w-[50%]'>
            <img  className='w-[60%] m-auto rounded-tl-[35px] rounded-br-[35px] ' src={about} alt="" />
          </div>
        </div>
      </div>

    </section>
  )
}

export default About