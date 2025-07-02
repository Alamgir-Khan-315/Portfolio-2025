import React from 'react'
import { IoLogoHtml5 , IoLogoCss3 , IoLogoJavascript } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { SiNextdotjs , SiTailwindcss , SiTypescript } from "react-icons/si";

const skills = () => {

  const skill = [
      {Name:'HTML' , icon:<IoLogoHtml5 /> , link:'https://developer.mozilla.org/en-US/docs/Web/HTML'} , {Name:'CSS' , icon:<IoLogoCss3 /> , link:'https://developer.mozilla.org/en-US/docs/Web/CSS'} , {Name:'JavaScript' , icon:<IoLogoJavascript /> , link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'} ,
      {Name:'TypeScript' , icon:<SiTypescript /> , link:'https://www.typescriptlang.org/docs/'} , {Name:'Tailwind CSS' , icon:<SiTailwindcss /> , link:'https://tailwindcss.com/docs/installation'} , {Name:'React js' , icon:<GrReactjs/> , link:'https://react.dev/'} ,
      {Name:'Next js' , icon:<SiNextdotjs /> , link:'https://nextjs.org/docs'}
  ]

  return (
    <div>
      <main className='mt-28 md:w-[80%] mx-auto'>

        <h1 className="text-4xl font-bold text-blue-500 text-center">Skills</h1>

        <p className='text-gray-300 mt-5 md:mt-16 px-6 text-justify md:text-center'>I not only work with these technologies but exelent in using them with best practices to deliver high-quality
          result, <br className='hidden lg:block'/> i have been working with all these skills to build my portfolio projects
        </p>

        <section className='grid grid-cols-2 w-[80%]      md:grid-cols-3    lg:flex lg:flex-wrap gap-5 mt-12 mx-auto md:w-fit'>
          { skill.map (( d , i) => (
            <div key={i} className='border-2 border-blue-500/50 rounded-lg p-4 hover:bg-blue-500 hover:scale-110 hover:font-bold hover:shadow-2xl hover:shadow-blue-500/50
            lg:bg-purple-400 flex flex-col gap-4 lg:rounded-t-full lg:rounded-b-lg items-center lg:p-1 lg:hover:-translate-y-12 duration-500'
            onClick={() => window.open(d.link , '_blank')}>
              
              <div className='size-20 bg-gray-100 rounded-full flex items-center justify-center text-3xl md:text-4xl`'>{d.icon}</div>
              <p className='mt-5 mb-2 text-white'>{d.Name}</p>
            </div>
          ))}
        </section>

      </main>
    </div>
  )
}

export default skills