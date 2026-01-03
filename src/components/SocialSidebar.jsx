import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialSidebar = () => {
    return (
        <div className="fixed bottom-4 left-0 right-0 md:left-4 md:right-auto md:bottom-0 flex flex-row md:flex-col items-center justify-center gap-6 z-50">
            {/* Social Icons */}
            <div className="flex flex-row md:flex-col gap-6 text-gray-400 bg-black/50 backdrop-blur-sm md:bg-transparent p-4 md:p-0 rounded-full md:rounded-none border border-gray-800 md:border-none">
                <a
                    href="https://github.com/Nadim12334"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-green-400 hover:-translate-y-1 transition-all duration-300"
                >
                    <FaGithub size={24} />
                </a>
                <a
                    href="https://www.linkedin.com/in/nadimpatel/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-green-400 hover:-translate-y-1 transition-all duration-300"
                >
                    <FaLinkedin size={24} />
                </a>
                <a
                    href="https://www.instagram.com/nadim78647"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-green-400 hover:-translate-y-1 transition-all duration-300"
                >
                    <FaInstagram size={24} />
                </a>
                <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-green-400 hover:-translate-y-1 transition-all duration-300"
                >
                    <FaTwitter size={24} />
                </a>
            </div>

            {/* Vertical Line - Only on Desktop */}
            <div className="hidden md:block w-[1px] h-24 bg-gray-400 mt-4"></div>
        </div>
    );
};

export default SocialSidebar;
