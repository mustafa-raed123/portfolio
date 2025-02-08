import React from 'react';
import Image from 'next/image';

// Skill data organized into categories
const skillsData = {
  frontEnd: [
    { name: 'HTML', image: '/skills/html.jpg' },
    { name: 'CSS', image: '/skills/css.png' },
    { name: 'JavaScript', image: '/skills/js.jpg' },
    { name: 'React', image: '/skills/react.png' },
    { name: 'Tailwind CSS', image: '/skills/tailwind.jpg' },
  ],
  backEnd: [
    { name: 'ASP.NET', image: '/skills/asp.jpg' },
    { name: 'C#', image: '/skills/cCharp.jpg' },
    { name: 'SQL', image: '/skills/sql.png' },
    { name: 'efcore', image: '/skills/efCore.png' },
  ],
  others: [
    { name: 'Git', image: '/skills/git.png' },
    { name: 'GitHub', image: '/skills/github.png' },
    { name: 'Postman', image: '/skills/postman.png' },
  ],
};

export default function Skills() {
  return (
    <div className="min-h-screen py-10 px-4 " id='skills'>
      <h1 className="text-4xl font-bold text-center mb-10">Skills</h1>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {/* Front End Skills */}
        <div className=" rounded-lg shadow-2xl skills p-6 w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold text-center mb-4">Front End</h3>
          <div className="grid grid-cols-2 gap-4">
            {skillsData.frontEnd.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative h-20 w-20">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <p className="mt-2 text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back End Skills */}
        <div className=" rounded-lg shadow-2xl skills p-6 w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold text-center mb-4">Back End</h3>
          <div className="grid grid-cols-2 gap-4">
            {skillsData.backEnd.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative h-20 w-20">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <p className="mt-2 text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div className=" rounded-lg shadow-2xl skills p-6 w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold text-center mb-4">Others</h3>
          <div className="grid grid-cols-2 gap-4">
            {skillsData.others.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative h-20 w-20">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <p className="mt-2 text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}