import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";


const skillsData = [
    { name: 'HTML', icon: <IoLogoHtml5 />, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', icon: <IoLogoCss3 />, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'JavaScript', icon: <IoLogoJavascript />, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'TypeScript', icon: <SiTypescript />, link: 'https://www.typescriptlang.org/docs/' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, link: 'https://tailwindcss.com/docs/installation' },
    { name: 'React.js', icon: <GrReactjs />, link: 'https://react.dev/' },
    { name: 'Next.js', icon: <SiNextdotjs />, link: 'https://nextjs.org/docs' }
];


export default function Skills() {
    return (
    <main className='container flex flex-col min-h-[calc(100vh-20rem)] justify-center mx-auto px-4 py-5 md:py-10'>

            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 2xl:mb-[5%] text-center"> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Skills</span></h1>
                <p className='max-w-3xl mx-auto text-gray-400 mt-4 mb-12 md:mb-16 text-lg'>
                    I excel in using modern technologies to deliver high-quality results. Here are the tools and technologies I work with.
                </p>
            </div>

            <section className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8'>
                {skillsData.map((skill, i) => (
                    <a
                        key={i}
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='group flex flex-col items-center justify-center gap-4 p-6 rounded-xl bg-gray-500/10 backdrop-blur-sm border border-blue-500/20 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20'
                    >
                        <div className='text-5xl md:text-6xl text-gray-300 transition-colors duration-300 group-hover:text-blue-400'>
                            {skill.icon}
                        </div>
                        <p className='font-semibold text-white text-center'>{skill.name}</p>
                    </a>
                ))}
            </section>
        </main>
    );
}

