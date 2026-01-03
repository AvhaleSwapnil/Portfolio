import React from "react";

const experiences = [
    {
        id: 1,
        role: "Frontend Developer",
        company: "Tech Company", // Placeholder
        duration: "Jan 2024 - Present",
        description: "Developing modern and responsive web applications using React, Next.js, and Tailwind CSS.",
    },
    // Add more experiences here
];

const Experience = () => {
    return (
        <div className="bg-black text-white py-20" id="experience">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
                <div className="space-y-8">
                    {experiences.map((experience) => (
                        <div
                            key={experience.id}
                            className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
                        >
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                {experience.role}
                            </h3>
                            <div className="flex justify-between items-center mt-2 mb-4 text-gray-400">
                                <span className="font-semibold">{experience.company}</span>
                                <span>{experience.duration}</span>
                            </div>
                            <p className="text-gray-300">{experience.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
