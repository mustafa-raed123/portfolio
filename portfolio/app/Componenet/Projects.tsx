import React from 'react'
import Image from 'next/image'
import EduLink from '@/public/EduLink.png'
import DernSupportImage from '@/public/DernSupportImage.jpg'
import BankImage from '@/public/BankImage.jpg'
export default function Projects() {
  return (
    <div className="min-h-screen py-10 px-4 " id='projects'>
      <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>
      <div className='flex flex-col md:flex-row gap-6 justify-center'>
      <div className='EduLink rounded-lg shadow-2xl md:p-6 w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105 flex flex-col'>
    <div className="relative h-36 w-full">
        <Image 
            src={EduLink} 
            alt='EduLink'
            layout="fill"
            objectFit="contain"
        />
    </div>
    <h2 className='text-2xl mt-3'>EduLink</h2>
    <p className='text-gray-300 flex-grow'> 
        EduLink is a web-based platform designed to enhance the learning experience by connecting students, volunteers, and educators in a collaborative environment. 
        The platform allows students to attend lectures, receive mentorship, and improve their skills through interactive sessions.
    </p>
    <p className='mt-4 flex-shrink-0 mb-4'> 
        <a className='bg-blue-500 text-white px-9 py-3 rounded-lg hover:bg-blue-600 transition' href="https://candid-tartufo-f84502.netlify.app/">Live</a>
    </p>
</div>
        <div className='Bank rounded-lg shadow-2xl md:p-6 w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105 flex flex-col'>
        <div className="relative h-36 w-full">
        <Image src={BankImage} 
        alt='Bank'
        layout="fill"
        objectFit="contain"
        ></Image>
        </div>
        <h2 className='text-2xl mt-3'>Nova Bank</h2>
        <p className='text-gray-300'> Bank System is a comprehensive banking application designed to simplify financial transactions and 
          account management for users. 
          It provides a secure and user-friendly platform for customers to perform banking operations such as account management,
           fund transfers, and transaction history tracking.
            The goal is to enhance the banking experience by offering a seamless and efficient digital solution.
          </p>
          <p className='mt-4 flex-shrink-0 mb-4'> 
            <a className='bg-blue-500 text-white px-9 py-3 rounded-lg hover:bg-blue-600 transition' href="https://github.com/mustafa-raed123/BankSystemProject">Source </a>          
          </p>
        </div>
        <div className='DernSupport rounded-lg shadow-2xl md:p-6 w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105 flex flex-col'>
    <div className="relative h-36 w-full">
        <Image 
            src={DernSupportImage} 
            alt='Dern Support'
            layout="fill"
            objectFit="contain"
        />
    </div>
    <h2 className='text-2xl mt-3'>Dern Support</h2>
    <p className='text-gray-300 flex-grow'> 
    Dern-Support is a tech support system that simplifies managing customer requests and complaints. It enables users to submit maintenance requests,
     which are handled by technicians and administrators. The goal is to improve user experience and communication through a user-friendly platform.
    </p>
    <p className='mt-4 flex-shrink-0 mb-4 flex flex-wrap justify-around gap-3'> 
        <a className='bg-blue-500 text-white px-9 py-3 rounded-lg hover:bg-blue-600 transition' href="https://github.com/mustafa-raed123/DernSupportBackend">Back End</a>
        <a className='bg-blue-500 text-white px-9 py-3 rounded-lg hover:bg-blue-600 transition' href="https://github.com/mustafa-raed123/DernSupportFrontEnd">Front End</a>
    </p>
</div>
      </div>
    </div>
  )
}
