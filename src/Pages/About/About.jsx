import { Link } from 'react-router-dom';
import { SlSocialGithub } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebookF, FaInstagram , FaWhatsapp } from "react-icons/fa";

export default function About() {

  const icon = [
    { name: 'Fb', icon: <FaFacebookF /> , link:'' },
    { name: 'Insta', icon: <FaInstagram /> , link:'' },
    { name: 'Github', icon: <SlSocialGithub /> , link:'' },
    { name: 'LinkedIn', icon: <TiSocialLinkedin /> , link:'' },
    { name: 'Whwtsapp', icon: <FaWhatsapp /> , link:'' }
  ];

    const handleShowPDF = () => {
      window.open('/Alamgir CV.pdf', '_blank'); 
    };
  

  return (
   <div>
    
    <h1 className="text-4xl font-bold text-blue-500 mt-28 text-center">About Me</h1>

    <div className="container mx-auto px-4 flex flex-col md:flex-row lg:items-center justify-center min-h-[calc(100vh-12rem)]">
      
      <div className="img relative">
        <div className="img hidden -mt-[5rem] md:block mx-auto"> 
          <img className='w-full h-full rounded-2xl object-cover p-2' src="/img/about_me.png" alt="about" />
        </div>

        <div className="absolute hidden md:block icon ml-4 w-[90%] h-[3rem] -mt-5 border border-blue-800 text-white bg-gradient-to-r from-blue-700 to-blue-800 hover-text shadow-lg rounded-lg">
          <div className="icon flex items-center justify-center p-2 gap-5">
            {icon.map((d,i)=>(
              <div className='p-1 text-2xl rounded-lg bg-blue-500/90 hover:text-white hover:bg-purple-500'>{d.icon}</div>
            ))}
          </div>
        </div>
      </div>
      

        <div className="text-center md:w-[70%] mt-5 md:-mt-24">
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

          <div className="icon">
            <div className="absolute md:hidden icon w-[90%] h-[3rem] -mt-5 border border-blue-800 text-white bg-gradient-to-r from-blue-700 to-blue-800 hover-text shadow-lg rounded-lg">
              <div className="icon flex items-center justify-center p-2 gap-5">
                {icon.map((d,i)=>(
                  <div className='p-1 text-2xl rounded-lg bg-blue-500/90 hover:text-white hover:bg-purple-500'>{d.icon}</div>
                ))}
              </div>
            </div>
          </div>
          
         <div className="btn w-[20rem] mt-[5rem] md:mt-0 mx-auto flex gap-5 ">
            <Link to="/contact" className="hover-text w-full button" >
              Contact Me
            </Link>

            <button onClick={handleShowPDF} className="hover-text w-full button" >
              Download CV
            </button>
         </div>
        </div>

    </div>
   </div>
  )
} 