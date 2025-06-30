import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black fixed border-b py-1 border-blue-500 w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto rounded-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <span className="font-extrabold ml-5 flex gap-1 md:gap-3 text-4xl relative before:content-[''] before:absolute before:w-4 before:h-4 before:-top-2 before:-left-2 before:border-t-2 before:border-l-2 before:border-blue-500 after:content-[''] after:absolute after:w-4 after:h-4 after:-bottom-2 after:-right-2 after:border-b-2 after:border-r-2 after:border-blue-500">
                <span className="text-blue-400 md:hidden">A</span>    <span className="text-blue-400 hidden md:block">Alamgir</span>
                <span className="text-blue-600 md:hidden">K</span>    <span className="text-blue-600 hidden md:block">Khan</span>
              </span>
            </div>
            <div className="hidden md:block md:ml-10">
              <div className="flex items-baseline space-x-8">
                <Link
                  to="/"
                  className="text-blue-500 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-blue-500 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  About
                </Link>
                <Link
                  to="/projects"
                  className="text-blue-500 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Projects
                </Link>
                <Link
                  to="/contact"
                  className="text-blue-500 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Contact
                </Link>

                
                <Link to="/contact">
                  <button className="bg-gradient-to-r from-slate-700 to-slate-800 text-blue-500 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-full text-base font-bold
                    md:font-extrabold hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-800 hover:scale-105 transition-all duration-300">
                    Hire me
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* mob hire me btn */}
          <div className="btn w-[50%] md:hidden">
          <Link to="/contact">
                  <button className="bg-gradient-to-r from-slate-700 to-slate-800 text-blue-500 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-full text-base font-bold
                    md:font-extrabold hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-800 hover:scale-105 transition-all duration-300">
                    Hire me
                  </button>
                </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-blue-500 hover:bg-blue-500 hover:text-black focus:outline-none z-50 border-2 border-blue-500 rounded-full hover:scale-105 transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" ></div>
      )}

      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-y-0 right-0 w-64 bg-gray-900 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 h-full flex flex-col   ">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-blue-500 hover:bg-blue-500 hover:text-black p-2 border border-blue-500 rounded-md  transition-all duration-300"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1">
            <Link
              to="/"
              className="block text-blue-500 hover-text px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-blue-500 hover-text px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="block text-blue-500 hover-text px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="block text-blue-500 hover-text px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>

            <button className="bg-gradient-to-r from-slate-700 to-slate-800 text-blue-500 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-base font-bold
            md:font-extrabold hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-800 hover:scale-105 transition-all duration-300">
              Hire me
            </button>
        </div>
      </div>
    </nav>
  )
} 