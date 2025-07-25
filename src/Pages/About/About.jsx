import { Link } from 'react-router-dom';

export default function About() {
  return (
   <div>
    
    <h1 className="text-4xl font-bold text-blue-500 text-center">About Me</h1>

    <div className="container mx-auto px-4 flex flex-col md:flex-row mt-10 lg:items-center justify-center min-h-[calc(100vh-5rem)]">
      
      <div className="img hidden md:flex mx-auto"> 
        <img className='w-full h-full rounded-2xl object-cover p-2' src="/img/about_me.png" alt="about" />
      </div>

        <div className="text-center md:w-[70%] -mt-24 md:mt-5">
          <h1 className="text-xl md:text-2xl font-bold text-blue-500 mb-4">Alamgir Khan - Web Developer</h1>
            <p className="text-gray-300 mb-8 text-justify mx-auto md:w-[80%] px-4">Deeply curious about technology, I have developed a profound
            understanding of programming languages, frameworks, and best
            practices in software development. I derive great satisfaction from
            solving complex problems and creating user-friendly, efficient, and
            scalable solutions. My experience includes building seamless user
            interfaces using HTML, CSS, and JavaScript, and utilizing modern
            frameworks and libraries to enhance functionality and improve the user
            experience. Furthermore, I have a strong understanding of responsive
            design principles and excel in collaborating effectively with teams.
            </p>
          <Link
            to="/contact"
            className="bg-blue-500 font-bold text-black px-6 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Contact Me
          </Link>
        </div>

    </div>
   </div>
  )
} 