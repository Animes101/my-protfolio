import React, { useState } from 'react'


import { FaHtml5,FaCss3,FaBootstrap,FaReact,FaGithub  } from "react-icons/fa";
import { SiTailwindcss,SiTypescript  } from "react-icons/si";
import { DiJavascript } from "react-icons/di";

import Skill from '../../components/skills/Skill';

const skills=[
  {
    id:1,
    name:'HTML',
    icon:<FaHtml5 />,
    title:'Advance',

  },
  {
    id:2,
    name:'CSS',
    icon:<FaCss3 />,
    title:'Advance',

  },
  {
    id:3,
    name:'BOOTSTRAP',
    icon:<FaBootstrap />,
    title:'Advance',

  },
  {
    id:4,
    name:'TAILWINDCSS',
    icon:<SiTailwindcss />,
    title:'Expect',

  },
  {
    id:5,
    name:'JAVASCRIPT',
    icon:<DiJavascript />,
    title:'Intermediate',

  },
  {
    id:6,
    name:'TYPESCRIPT',
    icon:<SiTypescript  />,
    title:'Beginner',

  },
  {
    id:7,
    name:'REACT',
    icon:<FaReact />,
    title:'Intermediate',

  },
  {
    id:8,
    name:'GITHUB',
    icon:<FaGithub />,
    title:'Advance',

  },
]

function Skills() {

  const [skillss ,setSkillss]=useState(skills);

  return (
    <section className='bg-skill-background py-6'>
      <div className='w-[90%] m-auto'>
        <h1 className='text-center text-[3.75rem]'>My <span className='text-logo-color'>Skills</span></h1>
        <h3 className='text-center text-[1.125rem] text-gray-color py-2'>My knowledge</h3>
        <hr className='text-text-color w-full'/>
        <div className='flex justify-around items-center flex-wrap mt-10 gap-y-[30px] '>
          {skillss.map((skil)=><Skill key={skil.id} skill={skil} />)}
        </div>

      </div>
    </section>
  )
}

export default Skills