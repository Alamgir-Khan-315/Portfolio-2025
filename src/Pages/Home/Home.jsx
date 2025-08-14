import { Link } from 'react-router-dom';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

export default function Home() {

  const handleShowPDF = () => {
    window.open('/Alamgir CV.pdf', '_blank'); 
  };

  return (
   
  <main className='container flex flex-col min-h-[calc(100vh-20rem)] justify-center mx-auto px-4 py-5 md:py-10'>
    <div className="container mx-auto px-4 py-8 text-center z-10">
        <h2 className="text-xl md:text-2xl text-gray-300 mb-2">Hi, I'm</h2>
        <h1 className="text-5xl md:text-7xl font-extrabold my-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Alamgir Khan
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          A Creative Frontend Developer
        </p>
        <p className="max-w-2xl mx-auto text-gray-400 mb-10">
          I build beautiful and responsive web applications. Passionate about
          creating intuitive user experiences and working with modern web
          technologies.
        </p>
    
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/projects"
            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 text-white font-semibold bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:bg-gray-900 shadow-lg hover:shadow-blue-500/30"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2">
              My Work <FaArrowRight />
            </span>
          </Link>
          <Link
            onClick={handleShowPDF}
            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 text-white font-semibold bg-transparent border border-gray-600 rounded-lg overflow-hidden transition-all duration-300 hover:text-white hover:border-blue-500 shadow-lg hover:shadow-purple-500/30"
          >
            <span className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ease-out group-hover:w-full"></span>
            <span className="relative flex items-center gap-2">
              Download CV <FaDownload />
            </span>
          </Link>
        </div>
    </div>
  </main>
  
  );
}

