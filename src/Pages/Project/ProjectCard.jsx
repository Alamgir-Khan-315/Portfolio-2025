import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function ProjectCard({ project }) {
  const { logo, name, description, tags, Giticon, Github, Liveicon, Live } = project;

  return (
    <div className="card flex flex-col items-center border mx-3 md:mx-0 rounded-xl cursor-pointer hover:scale-105 duration-300 transition-all hover:shadow-[0_0_10px_#3b82f6] border-blue-600/30 bg-blue-900/20">
      <div className="logo size-14 rounded-full mt-2 bg-gradient-to-r from-purple-700 to-blue-800 flex items-center justify-center">
        <img src={logo} alt={`${name} logo`} className="size-12 object-contain" />
      </div>
      <h1 className="py-2 font-bold text-lg">{name}</h1>
      <p className="px-3 text-justify text-white my-1 flex-grow">{description}</p>

      <div className="tags my-2 flex flex-wrap justify-center gap-2 px-2">
        {tags?.map((tag) => (
          <div key={tag} className="bg-blue-800 text-white font-semibold rounded-lg px-2 py-1 text-sm">
            {tag}
          </div>
        ))}
      </div>

      <div className="btn text-white flex gap-5 py-3">
        <Link to={Github} target="_blank" className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-2 text-white font-semibold bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:bg-gray-900 shadow-lg hover:shadow-blue-500/30">
          <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative flex items-center gap-2"> Github {Giticon}</span>
        </Link>
        <Link to={Live} target="_blank" className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-1 text-white font-semibold bg-transparent border border-gray-600 rounded-lg overflow-hidden transition-all duration-300 hover:text-white hover:border-blue-500 shadow-lg hover:shadow-purple-500/30">
          <span className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ease-out group-hover:w-full"></span>
          <span className="relative flex items-center gap-2"> Live {Liveicon}</span>
        </Link>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    Giticon: PropTypes.element.isRequired,
    Github: PropTypes.string.isRequired,
    Liveicon: PropTypes.element.isRequired,
    Live: PropTypes.string.isRequired,
  }).isRequired,
};