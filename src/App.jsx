import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Projects from './Pages/Project/Projects'
import Contact from './Pages/Contact/Contact'
import Education from './Pages/Education/Education'
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
      <div className="min-h-screen bg-[#292345] text-blue-500 py-3">
        <div className="flex justify-center"><Navbar /></div>
        <div className='mt-20'>
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
    </Router>
  )
}