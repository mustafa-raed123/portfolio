import React from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

interface Info {
  title: string;
  duration: string;
  company: string;
  description: string[];
  icon: React.ReactNode;
}

// ExperienceCard Component
const ExperienceCard = ({ title, duration, company, description, icon }: Info) => {
  return (
    <div className=" p-6 rounded-lg shadow-2xl mb-6" id='experience'>
      <div className="flex items-center mb-4">
        <div className="bg-blue-500 p-3 rounded-full text-white">
          {icon}
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-200 mt-1">{company}</p> {/* Added margin-top for spacing */}
        </div>
      </div>
      <p className="text-gray-200 mb-2 flex items-center">
        <FaCalendarAlt className="mr-2" /> {duration}
      </p>
      <ul className="list-disc list-inside text-gray-400">
        {description.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main Experience Component
export default function Experience() {
  const experiences = [
    {
      title: '.NET and Full-Stack Web Development Intern',
      duration: 'March 2024 – November 2024',
      company: 'Abdul Aziz Al Ghurair School of Advanced Computing (ASAC)',
      description: [
        'Developed full-stack applications using .NET ASP.NET Core, WebAPI, and front-end frameworks to build scalable, secure, and user-friendly solutions.',
        'Designed and implemented RESTful APIs, ensuring seamless integration between back-end services and front-end applications.',
        'Optimized database performance and queries for SQL Server, enhancing overall application efficiency.',
      ],
      icon: <FaBriefcase />,
    },
    {
      title: 'Back-End Developer Intern',
      duration: 'March 2024 – November 2024',
      company: 'Luminus Technical University College',
      description: [
        'Developed an educational platform that connects students and volunteers for academic events and sessions.',
        'Utilized ASP.NET Core and integrated Google API for seamless automation of academic processes.',
        'Collaborated with cross-functional teams, including designers, team leads, and other developers, to create high-quality products.',
        'Participated in code reviews and provided constructive feedback to other developers.',
      ],
      icon: <FaBriefcase />,
    },
  ];

  return (
    <div className="min-h-screen py-10 px-4 ">
      <h1 className="text-4xl font-bold text-center mb-10">Experience</h1>
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
}
