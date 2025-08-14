import { SlSocialGithub } from "react-icons/sl";
import { GoArrowRight } from "react-icons/go";
import ProjectCard from "./ProjectCard";

// Data is moved outside the component and updated with unique IDs and more variety.
const projectsData = [
  { id: 1, logo:'/img/Projects/rock-paper-scissors.png' , name: 'Rock Paper Scissors', description:'A simple interactive game where players choose rock, paper, or scissors to compete against the computer, with instant results and score tracking.', tags: ['HTML', 'CSS', 'JavaScript'], Giticon: <SlSocialGithub /> , Github:'https://github.com/Alamgir-Khan-315/Rock-Paper-Scissor.git' ,  Liveicon: <GoArrowRight/> , Live:'https://rock-paper-scissor-sigma-one.vercel.app/'},
  { id: 2, logo:'/img/Projects/portfolio-v1.png' , name: 'Personal Portfolio', description:'My personal portfolio website to showcase my skills, projects, and experience. Built with React and Tailwind CSS for a modern, responsive design.', tags: ['React', 'TailwindCSS', 'Vite'], Giticon: <SlSocialGithub /> , Github:'https://github.com/Alamgir-Khan-315/Portfolio-v1.git' ,  Liveicon: <GoArrowRight/> , Live:'https://alamgir-khan.vercel.app/'},
  // Add more projects here
];

export default function Projects() {
  return (
  <main className='container flex flex-col min-h-[calc(100vh-20rem)] justify-center mx-auto px-4 py-5 md:py-10'>

         <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center"> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Build with Code</span></h1>
      <p className="text-white text-center mt-3 md:mt-5 px-3 2xl:mb-[5%]">
        Showcasing my experience through hands-on projects and real-world applications
      </p>

      <div className="projects grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 md:mt-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
