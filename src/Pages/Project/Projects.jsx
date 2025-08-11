import { Link } from "react-router-dom";
import { SlSocialGithub } from "react-icons/sl";
import { GoArrowRight } from "react-icons/go";

export default function Projects() {
  const Projects = [
    { logo:'/img/Projects/rock-paper-scissors.png' , name: 'Rock Paper Scissors', description:'A simple interactive game where players choose rock, paper, or scissors to compete against the computer, with instant results and score tracking.', tags: ['HTML', 'CSS', 'JavaScript'], Giticon: <SlSocialGithub /> , Github:'' ,  Liveicon: <GoArrowRight/> , Live:'/project/rock'},
    { name: 'Rock Paper Scissors', description: 'qwer' },
    { name: 'Rock Paper Scissors', description: 'qwer' },
  ];

  return (
    <main className="mt-28 md:w-[80%] mx-auto">
      <h1 className="text-4xl font-bold text-blue-500 text-center">Build with Code</h1>
      <p className="text-white text-center mt-3 md:mt-5 px-3">
        Showcasing my experience through hands-on projects and real-world applications
      </p>

      <div className="projects grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 md:mt-8">

        {Projects.map((d, i) => (
          <div key={i} className="card flex flex-col items-center border mx-3 md:mx-0 rounded-xl cursor-pointer hover:scale-105 duration-300 transition-all shadow-[0_0_10px_#3b82f6] border-blue-600/30 bg-blue-900/20" >
            <div className="logo size-14 rounded-full mt-2 bg-gradient-to-r from-purple-700 to-blue-800"><img src={d.logo} alt="" /></div>
            <h1 className="py-2 font-bold">{d.name}</h1>
            <p className="px-3 text-justify text-white my-1">{d.description}</p>

            <div className="tags my-2 flex gap-3">
              {d.tags?.map((tag, j) => (
                <div key={j} className="bg-blue-800 text-white font-semibold rounded-lg px-1">
                  {tag}
                </div>
              ))}
            </div>

            <div className="btn text-white flex gap-5 py-2">
              <Link to={d.Github}><div className="button hover-text flex items-center gap-2"><span className="text-xl">{d.Giticon}</span>Github</div></Link>
              <Link to={d.Live}><div className="button hover-text flex items-center gap-2"><span className="text-xl">{d.Liveicon}</span>Live</div></Link>
            </div>

          </div>
        ))}

      </div>
    </main>
  );
}
