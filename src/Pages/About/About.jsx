import { Link } from 'react-router-dom';
import { SlSocialGithub } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebookF, FaInstagram , FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { MdOutlineLocationOn , MdAttachEmail  } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default function About() {

  const icon = [
    { name: 'Email', style:'text-blue-500' , icon: <MdAttachEmail />, link:'mailto:alamgirkhqwer@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you' },
    { name: 'Insta', icon: <FaInstagram /> , link:'https://www.instagram.com/alamgir_khan_315?igsh=MWUxejMyZ3doazJmcg==' },
    { name: 'Github', icon: <SlSocialGithub /> , link:'https://github.com/Alamgir-Khan-315' },
    { name: 'LinkedIn', icon: <TiSocialLinkedin /> , link:'https://www.linkedin.com/in/alamgir-khan-248b89259/' },
    { name: 'Whwtsapp', icon: <FaWhatsapp /> , link:'https://wa.me/923154572266' }
  ];

    const handleShowPDF = () => {
      window.open('/Alamgir CV.pdf', '_blank'); 
    };
  

  return (
   <div>
    
    <h1 className="text-4xl font-bold text-blue-500 mt-28 text-center">About Me</h1>

    <div className="container mx-auto px-4 md:mt-[12rem] flex flex-col md:flex-row lg:items-center justify-center">
      
      <div className="img relative">
        <div className="img h-full bg-blue-600/40 rounded-lg shadow-xl hidden -mt-[14%] lg:-mt-[10rem] md:block mx-auto"> 
          <img className='h-[250px] w-[350px] object-cover object-top rounded-2xl p-2' src="/img/about_1.jpg" alt="about" />

          <div className="contact bg-blue-300/20 w-[95%] px-8 lg:px-12 p-2 rounded-lg text-white md:absolute lg:relative md:bottom-14 lg:bottom-0 left-0 right-0 mx-auto space-y-1 pb-6 lg:pb-6">
            <div className="email flex items-center gap-3">
              <div className="icon"><CgMail /></div>
              <span>alamgirkhqwer@gmail.com</span>
            </div>
            <div className="email flex items-center gap-3">
              <div className="icon"><FaPhone /></div>
              <span>+92 315 4572266</span>
            </div>
            <div className="email flex items-center gap-3">
              <div className="icon"><MdOutlineLocationOn /></div>
              <span>Landhi, Karachi.</span>
            </div>
          </div>
          
        </div>

        <div className="absolute hidden md:block icon ml-4 w-[90%] h-[3rem] -mt-5 border border-blue-800 text-white bg-gradient-to-r from-blue-500 to-blue-800 hover-text shadow-lg rounded-full">
          <div className="icon flex items-center justify-center p-2 gap-5">
            {icon.map((d,i)=>(
              <Link to={d.link} target="_blank"><div className='p-1 text-2xl rounded-lg bg-blue-500/90 hover:text-white hover:bg-purple-500 hover:rounded-full hover:scale-125 hover:shadow-2xl transition-all duration-300'>{d.icon}</div></Link>
            ))}
          </div>
        </div>
      </div>
      

        <div className="text-center md:w-[70%] mt-5 md:-mt-24 lg:-mt-32">
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
                   <Link to={d.link} target="_blank"><div className='p-1 text-2xl rounded-lg bg-blue-500/90 hover:text-white hover:bg-purple-500 hover:rounded-full hover:scale-125 hover:shadow-2xl transition-all duration-300'>{d.icon}</div></Link>
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