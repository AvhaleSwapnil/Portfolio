import React from "react";

const experiences = [
    {
        id: 1,
        role: "Frontend Developer",
        company: "Tech Solutions Inc.",
        description: "Leading the frontend development of scalable web applications. Implemented responsive designs and optimized performance by 40%.",
        tech: ["React", "Next.js", "Tailwind CSS", "Redux"],
    },
    {
        id: 2,
        role: "Web Developer Intern",
        company: "Creative Digital Agency",
        description: "Assisted in building client websites, fixing bugs, and collaborating with designers to implement UI components.",
        tech: ["HTML", "CSS", "JavaScript", "Figma"],
    },
];

const Experience = () => {
    return (
        <div className="bg-black text-white py-20" id="experience">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Experience</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {experiences.map((experience) => (
                        <div key={experience.id} className="bg-gray-900/80 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl hover:border-green-400 transition-all duration-300 transform hover:-translate-y-2">
                            <h3 className="text-xl font-bold text-white mb-2">{experience.role}</h3>
                            <p className="text-lg text-green-400 font-semibold mb-4">{experience.company}</p>

                            <p className="text-gray-300 mb-6 text-sm leading-relaxed h-20 overflow-hidden">
                                {experience.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {experience.tech.map((tech, i) => (
                                    <span key={i} className="bg-gray-800 text-green-400 text-xs px-3 py-1 rounded-full border border-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
