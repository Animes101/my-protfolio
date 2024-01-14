import { FaFacebook ,FaLinkedin,FaTwitterSquare ,FaGithubSquare} from "react-icons/fa";

import hero from '../../assets/1.png'

function Hero() {
  return (
    <div className='w-full h-[700px] md:h-screen relative '>
      <div className='sm:flex justify-between items-center flex-wrap w-[90%] m-auto  absolute top-0 right-0 left-0 bottom-0'>
        <div className='sm:w-[50%] w-[100% ] '>
          <img className='sm:w-[80%] w-[50%] block mx-auto mt-[60px] md:mt-[0]  h-full rounded-lg ' src={hero} alt="hero" />
        </div>
        <div className='sm:w-[50%] w-[100%] '>
          <h1 className='text-[3.75rem] py-4 text-logo-color text-center sm:text-start '>Hello!</h1>
          <h1 className='text-[2rem] text-center sm:text-start py-2'>My Name is Animes Barman</h1>
          <h3 className='text-[1.5rem] text-center sm:text-start py-2 text-gray-color'>Front-End web Developer</h3>
          <button className='rounded-md block w-[200px] m-auto sm:m-[0]  my-2 cursor-wait bg-white text-logo-color p-2 hover:text-white hover:bg-logo-color'>Contact Me</button>
          <ul className='flex justify-center sm:justify-start gap-x-4'>
            <li className='text-gray-color hover:text-text-color text-[2rem] cursor-pointer py-2 bg-background-color'><FaFacebook /></li>
            <li className='text-gray-color hover:text-text-color text-[2rem] cursor-pointer py-2 bg-background-color'><FaLinkedin /></li>
            <li className='text-gray-color hover:text-text-color text-[2rem] cursor-pointer py-2 bg-background-color'><FaTwitterSquare/></li>
            <li className='text-gray-color hover:text-text-color text-[2rem] cursor-pointer py-2 bg-background-color'><FaGithubSquare/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Hero