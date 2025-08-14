import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Projects from './Pages/Project/Projects'
import Contact from './Pages/Contact/Contact'
import Education from './Pages/Education/home'
import Skills from './Pages/Skills/skills'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <Router>

      <main className="relative flex items-center justify-center overflow-hidden bg-[#292345] text-white z-1">
        <div className="absolute w-[500px] h-[500px] bg-blue-600/10 rounded-full -top-24 -left-32 backdrop-blur-2xl opacity-60"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-600/10 rounded-full -top-24 -left-32 backdrop-blur-2xl opacity-60    animate-ping"></div>
        <div className="absolute w-[450px] h-[450px] bg-purple-600/10 rounded-full -bottom-24 -right-32 backdrop-blur-2xl opacity-60"></div>
        <div className="absolute w-[450px] h-[450px] bg-purple-600/10 rounded-full -bottom-24 -right-32 backdrop-blur-2xl opacity-60 animate-ping"></div>
        <div className="absolute w-[300px] h-[300px] bg-blue-400/10 rounded-full bottom-1/4 right-1/3 backdrop-blur-xl opacity-1 animate-ping"></div>
        <div className="absolute w-[300px] h-[300px] bg-blue-400/10 rounded-full bottom-1/4 right-1/3 backdrop-blur-xl opacity-60 "></div>

        <div className="min-h-screen  z-10 text-blue-500 py-3">
          <div className="flex justify-center"><Navbar /></div>
          <div className='mt-20 min-h-[calc(100vh-10rem)]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path='skills' element={<Skills />}/>
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/education" element={<Education />} />
            </Routes>
          </div>
        </div>
      </main>

    </Router>
  )
}