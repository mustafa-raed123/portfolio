import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-white py-8 bg-gray-800 " id='contact'>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>
        <p className="text-center mb-6">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
        <div className="flex justify-center space-x-6 flex-wrap gap-3">
          {/* Email */}
          <a
            href="mailto:mustafa.read.mousa@gmail.com"
            className="flex items-center hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope className="mr-2" size={24} />
            Email
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/mustafa-raed123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="mr-2" size={24} />
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mustafa-raed/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="mr-2" size={24} />
            LinkedIn
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;