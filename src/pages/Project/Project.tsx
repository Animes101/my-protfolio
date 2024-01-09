import React, { useState } from 'react';

import ProDetails from '../../components/project/ProDetails';



import imageProject1 from '../../assets/project1.jpg'

const projects=[
  {
    id:1,
    imag:imageProject1,
    name:'travel-project',
    githubLink:'Github',
    liveDemo:'live demo',

  },
  {
    id:2,
    imag:imageProject1,
    name:'travel-project',
    githubLink:'Github',
    liveDemo:'live demo',

  },
  {
    id:3,
    imag:imageProject1,
    name:'travel-project',
    githubLink:'Github',
    liveDemo:'live demo',

  },{
    id:4,
    imag:imageProject1,
    name:'travel-project',
    githubLink:'Github',
    liveDemo:'live demo',

  }
]

function Project() {

  const [allProjects ,setallProjects]=useState(projects);
  return (
    <section>
      <div className='w-[90%] m-auto'>
        <h1 className='text-[3.75rem] text-text-color text-center'>My <span className='text-logo-color'>Projects</span></h1>
        <h3 className='text-gray-color text-center py-2'>My awesome works</h3>
        <hr className='text-text-color py-2' />
        <div className='flex justify-between items-start'>
          <div className='w-[60%] flex justify-evenly items-center gap-y-2 flex-wrap'>
           {allProjects.map((project)=> <ProDetails key={project.id} project={project}/> )}
          </div>
          <div className='w-[40%]'>
            img
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project