
type todoType={
    skill: {
        id: number;
        name: string;
        icon: JSX.Element;
        title: string;
    }
}


function Skill(props:todoType) {

    const {skill}=props;


  return (
    <article className='sm:w-[19%] w-[100%] border-2 border-purple-50 rounded-lg p-2 shadow-lg transition duration-100 hover:rotate-2	hover:shadow-cyan-500/50'>
        <h1 className='text-logo-color text-[3.75rem] cursor-pointer block w-[300px] m-auto hover:text-text-color py-3 sm:inline-block'>{skill.icon}</h1>
        <h1 className='text-[1.25rem] py-3'>{skill.name}</h1>
        <h3 className='text-logo-color'>{skill.title}</h3>
    </article>
  )
}

export default Skill