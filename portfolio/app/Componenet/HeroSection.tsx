'use client'
import Image from 'next/image';
import mustafa from '@/public/mustafa.png';
import './HeroSectioncss.css';
import { Typewriter } from 'react-simple-typewriter';



export default function HeroSection() {
    const cvUrl = "/MustafaRaedCV.pdf";

    return (
        <>
            <div className="hero-container grid grid-cols-1 sm:grid-cols-2 items-center text-center mt-10 px-2 sm:px-10 mb-7" id='about'>
                <div className="space-y-4 my-11">
                    <h1 className="text-4xl sm:text-5xl font-bold">
                        <p className="text-blue-400">I am Mustafa Raed, </p>
                        <p className="text-blue-400">I am </p>
                        <Typewriter
                            words={["Software Engineer", "Full Stack Developer"]}
                            loop={0} // Infinite loop
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </h1>

                    <p className="text-lg text-gray-300">
                        I am a motivated and versatile individual, always eager to take on new challenges.
                        With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset,
                        I am ready to make a meaningful contribution and achieve great things.
                    </p>
                </div>

                <div className="flex justify-center">
                    <Image 
                        src={mustafa} 
                        alt="Profile Image" 
                        width={400} 
                        height={400} 
                        className="rounded-full shadow-lg border-4 border-blue-400"
                    />
                </div>
            </div>

            {/* Overview Section */}
            <div className="overview-container  text-white  sm:px-16 py-10 rounded-lg shadow-lg ml-1 " > 
                <h2 className="text-3xl font-bold text-blue-400 mb-4 text-center md:text-start" >Overview</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    I am a <span className="font-semibold text-white">Software Engineering specialist</span> with a British diploma from
                    <span className="text-blue-400"> Luminus Technical University College</span>. My studies equipped me with strong programming fundamentals and
                    web development skills, including a comprehensive course in Git for effective code management.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                    During my internship, I worked as part of a <span className="font-semibold text-white">Full Stack team</span>, gaining hands-on experience with 
                    <span className="text-blue-400"> JavaScript, HTML, CSS</span>, and modern frameworks. I also studied <span className="text-blue-400">React</span> 
                    to create dynamic and interactive user interfaces and completed a <span className="font-semibold text-white">9-month internship</span> in 
                    <span className="text-blue-400"> .NET software development</span>.
                </p>
              <div className='my-10 text-3xl '>
              <a
                href={cvUrl}
                download="MustafaRaedCV.pdf"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
                Download CV
            </a>
              </div>

            </div>
            <div>
               

             </div>
        </>
    );
}
