import { FaGraduationCap } from 'react-icons/fa';

// Placeholder data for education history, sorted chronologically
const educationData = [
       {
        degree: 'Bachelor in Computer Science',
        institution: 'FUUAST University',
        date: '2021 - 2025',
        description: 'Focused on software development, data structures, and algorithms. Completed a final year project on a full-stack web application.'
    }, 
    {
        degree: 'Web Development',
        institution: 'Memon Institute',
        date: '2021',
        description: 'An intensive program covering modern frontend technologies like React, Next.js, and advanced CSS techniques.'
    },
    {
        degree: 'High School Diploma',
        institution: 'Emerson College',
        date: '2018 - 2020',
        description: 'Specialized in science and mathematics, which built a strong foundation for my technical studies.'
    }
];

export default function Education() {
    return (
        <main className='container flex flex-col min-h-[calc(100vh-10rem)] justify-center mx-auto px-4 py-5 md:py-10'>

            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center"> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Education</span></h1>
                <p className='max-w-3xl mx-auto text-gray-400 mt-4 mb-12 md:mb-20 text-lg'>
                    My academic journey and the qualifications that have shaped my skills and expertise.
                </p>
            </div>


            <div className="relative max-w-3xl mx-auto">
                {/* Vertical line */}
                <div className="absolute top-0 h-full w-0.5 bg-blue-500/30 left-4 md:left-1/2 md:-translate-x-1/2"></div>

                {educationData.map((item, index) => (
                    <div key={index} className="relative pl-12 md:pl-0 mb-12">
                        {/* Dot */}
                        <div className="absolute top-0 left-4 md:left-1/2 w-8 h-8 bg-[#0a0a0a] border-4 border-blue-500 rounded-full -translate-x-1/2 flex items-center justify-center">
                            <FaGraduationCap className="text-blue-300" />
                        </div>


                        <div className={`relative md:w-1/2 p-5 rounded-xl bg-gray-500/10 backdrop-blur-sm border border-blue-500/20 ${index % 2 === 0 ? 'md:ml-[54%]  md:pl-10' : 'md:-ml-[4%] md:text-right md:pr-10'}`}>
                            {/* Arrow */}
                            <div className={`absolute top-4 h-0 w-0 border-t-8 border-b-8 hidden md:block ${index % 2 === 0 ? 'border-r-8 border-r-blue-500/20 border-l-0 border-t-transparent border-b-transparent -left-2' : 'border-l-8 border-l-blue-500/20 border-r-0 border-t-transparent border-b-transparent -right-2'}`}></div>
                            <p className="text-sm font-semibold text-blue-400 mb-1">{item.date}</p>
                            <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
                            <h4 className="text-md font-medium text-gray-300 mb-3">{item.institution}</h4>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

