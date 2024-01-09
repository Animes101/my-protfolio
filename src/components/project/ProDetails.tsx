import React from 'react'

type propsTypes={
    project: {
        id: number;
        imag: string;
        name: string;
        githubLink: string;
        liveDemo: string;
    }
}

function ProDetails(props:propsTypes) {

    const {project}=props;
  return (
    <article className='bg-skill-background w-[40%] p-3 hover:shadow-sm rounded-md hover:shadow-text-color'>
        <div className='w-[100%] h-[200px] no-scrollbar overflow-y-scroll'>
            <img className='w-[100%] translate  duration-1000 hover:scale-x-125' src={project.imag} alt="" />
            <p className='text-gray-color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempore mollitia adipisci assumenda fugiat voluptatibus veniam nemo, non aspernatur veritatis, maiores laboriosam dolor commodi perferendis! Perferendis accusamus voluptatibus iusto eveniet?</p>
        </div>
        <h1 className='text-logo-color text-[1.25rem] py-2'>{project.name}</h1>
       <div className='flex justify-start items-center gap-x-2'>
        <h3 className='text-logo-color rounded-md p-2 ring-2 ring-slate-800 hover:bg-logo-color hover:text-text-color cursor-pointer bg-text-color'>{project.githubLink}</h3>
        <h3 className='text-logo-color rounded-md p-2 ring-2 ring-slate-800 hover:bg-logo-color hover:text-text-color cursor-pointer bg-text-color'>{project.liveDemo}</h3>
       </div>

    </article>
  )
}

export default ProDetails