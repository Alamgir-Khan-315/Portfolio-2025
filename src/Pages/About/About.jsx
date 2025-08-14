import { Link } from 'react-router-dom';
import { SlSocialGithub } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineLocationOn, MdAttachEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaDownload } from 'react-icons/fa';


const socialLinks = [
  { name: 'Email', icon: <MdAttachEmail />, href: 'mailto:alamgirkhqwer@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you' },
  { name: 'Instagram', icon: <FaInstagram />, href: 'https://www.instagram.com/alamgir_khan_315?igsh=MWUxejMyZ3doazJmcg==' },
  { name: 'Github', icon: <SlSocialGithub />, href: 'https://github.com/Alamgir-Khan-315' },
  { name: 'LinkedIn', icon: <TiSocialLinkedin />, href: 'https://www.linkedin.com/in/alamgir-khan-248b89259/' },
  { name: 'Whatsapp', icon: <FaWhatsapp />, href: 'https://wa.me/923154572266' }
];

const contactDetails = [
    { icon: <MdAttachEmail />, text: 'alamgirkhqwer@gmail.com' },
    { icon: <FaPhone />, text: '+92 315 4572266' },
    { icon: <MdOutlineLocationOn />, text: 'Landhi, Karachi.' }
];


export default function About() {
  const handleShowPDF = () => {
    window.open('/Alamgir CV.pdf', '_blank');
  };

  return (
    <main className='container flex flex-col min-h-[calc(100vh-20rem)] justify-center mx-auto px-4 py-5 md:py-10'>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 2xl:mb-[5%] text-center"> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">About Me</span></h1>

      <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
        
        <div className="lg:col-span-2 space-y-2">
          
          <div className="relative group">
              <img className='h-[250px] w-full object-cover object-top rounded-2xl p-2' src="/img/about_1.jpg" alt="about" />
          </div>
            
          <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 p-6 rounded-lg space-y-4">
            {contactDetails.map((detail) => (
              <div key={detail.text} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="text-blue-400 text-2xl">{detail.icon}</div>
                <span>{detail.text}</span>
              </div>
            ))}
          </div>
        </div>


        <div className="lg:col-span-3 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">Alamgir Khan - Web Developer</h2>
          <p className="text-gray-300 mb-8 text-justify leading-relaxed">
            Deeply curious about technology, I have developed a profound
            understanding of programming languages, frameworks, and best
            practices in software development. I derive great satisfaction from
            solving complex problems and creating user-friendly, efficient, and
            scalable solutions. My experience includes building seamless user
            interfaces using HTML, CSS, and JavaScript, and utilizing modern
            frameworks and libraries to enhance functionality and improve the user
            experience. Furthermore, I have a strong understanding of responsive
            design principles and excel in collaborating effectively with teams.
          </p>


          <div className="socials mb-10 flex flex-wrap justify-center lg:justify-start items-center gap-4">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}
                 className='p-2 text-2xl rounded-full bg-gray-800/80 text-gray-300 hover:text-white hover:bg-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300'>
                {link.icon}
              </a>
            ))}
          </div>


          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/contact"  className="group relative inline-flex items-center justify-center w-full sm:w-auto py-3 px-8 text-white font-semibold bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:bg-gray-900 shadow-lg hover:shadow-blue-500/30"  >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2"> Contact me
            </span>
          </Link>
            <Link onClick={handleShowPDF} className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 text-white font-semibold bg-transparent border border-gray-600 rounded-lg overflow-hidden transition-all duration-300 hover:text-white hover:border-blue-500 shadow-lg hover:shadow-purple-500/30" >
             <span className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ease-out group-hover:w-full"></span>
             <span  className="relative flex items-center gap-2">  Download CV <FaDownload /></span>
          </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

