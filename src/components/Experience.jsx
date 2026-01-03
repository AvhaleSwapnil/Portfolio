import React from "react";

const experiences = [
    {
        id: 1,
        role: "Software Engineer",
        company: "Athang Infotech",
        duration: "Nov 2025 - Present",
        description: "Contributed to building scalable web applications by developing responsive UIs, creating backend APIs, integrating RESTful services, and optimizing performance to ensure efficient and reliable application functionality.",
        tech: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn/ui", "Node.js", "Express.js", "MySQL(Basic)", "Redux"],
    },
    {
        id: 2,
        role: "Frontend Developer Intern",
        company: "HACKTECH",
        duration: "Jan 2025 - Mar 2025",
        description: "Developed responsive and user-friendly interfaces using React.js, JavaScript, and Tailwind CSS. Collaborated closely with backend teams to integrate RESTful APIs, ensuring smooth data flow and improved UI performance.",
        tech: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
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
                            <h3 className="text-xl font-bold text-white mb-1">{experience.role}</h3>
                            <p className="text-lg text-green-400 font-semibold mb-1">{experience.company}</p>
                            <p className="text-gray-400 text-sm italic mb-4">{experience.duration}</p>

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
