"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const Page = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggle = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <div className='bg-gray-500 '>
        <nav className=''>
          <div className='md:flex hidden py-4 px-18 lg:px-[120px] justify-between items-center'>
            <p className='text-white text-2xl font-bold'>AY</p>
            <ul className='flex space-x-10'>
              <li><Link href="" className=' text-white font-semibold'>Home</Link></li>
              <li><Link href="" className=' text-white font-semibold'>Portfolio</Link></li>
              <li><Link href="" className=' text-white font-semibold'>About me</Link></li>
              <li><Link href="" className=' text-white font-semibold'>Contact</Link></li>
            </ul>
          </div>
          {/* Small screen nav */}
          <div className='flex justify-between md:hidden py-2 px-4 items-center shadow-lg'>
            <p className='text-white text-[27px] font-bold'>AY</p>
            <button onClick={toggle}>
              {menuOpen ? (<Image src="/Images/close-ham.svg" width={35} alt="close" height={35} />) : <Image src="/Images/hamburger.svg" width={30} alt="open" height={30} />}
            </button>
          </div>
          {menuOpen && (
            <div className='rounded-md'>
              <ul className='text-lg px-2 text-white text-center bg-black/50 py-3 space-y-2'>
                <li><Link href="" className='  font-semibold'>Home</Link></li>
                <li><Link href="" className='  font-semibold'>Portfolio</Link></li>
                <li><Link href="" className='  font-semibold'>About me</Link></li>
                <li><Link href="" className='  font-semibold'>Contact</Link></li>
              </ul>
            </div>
          )}
        </nav>
        <section className='px-7 md:px-18 lg:px-[120px] pt-5 md:pt-5'>
          <div className='md:flex justify-between gap-5 md:pt-5'>
            <div className='md:pt-10 text-center md:text-start'>
              <p className='text-white text-xl font-semibold pt-4 lg:pt-5'>My name is Muraina Ayodeji</p>
              <p className='text-white text-3xl md:text-4xl lg:text-5xl font-semibold py-8 md:py-10'>I&apos;M A FRONT-END DEVELOPER</p>
              <div className='pb-5'>
                <button className='bg-gray-500 w-full md:w-auto outline outline-white text-white font-medium px-3 py-1'>Contact me</button>
              </div>
              <div className='flex justify-center md:justify-start lg:pt-2 gap-2'>
                <Link href="https://www.linkedin.com/in/muraina-malik-17354a355/" ><Image src="/Images/linkedin.svg" width={35} alt="close" height={35} /></Link>
                <Link href="https://github.com/Moozy1033" ><Image src="/Images/github.svg" width={32} alt="close" height={32} /></Link>
                <Link href="https://www.linkedin.com/in/muraina-malik-17354a355/" ><Image src="/Images/email.svg" width={34} alt="close" height={33} /></Link>
              </div>
            </div>
            <div className='hidden lg:block md:pt-5 lg:pt-3.5'><Image className='' src="/Images/Image.png" width={360} alt="close" height={350} /></div>
            <div className='hidden md:block lg:hidden md:pt-5 lg:pt-3.5'><Image className='' src="/Images/Image.png" width={470} alt="close" height={470} /></div>

          </div>
          <div className='w-full bg-white pt-1 mt-8 md:mt-0'></div>
        </section>
        <section className='px-7 md:px-18 lg:px-[120px] bg-gray-500'>
          <div className='text-center'>
            <p className='text-white font-bold text-3xl text-center pt-7 md:pt-10 pb-8'>About me</p>
            <p className='text-white md:text-lg'>
              I&apos;m a frontend developer passionate about creating clean, responsive, and user-friendly web experiences using React, Next.js, and Tailwind CSS. I also have experience with backend tools like Node.js, Express, and MongoDB.
            </p>
            <p className='text-white pt-6 text-lg'>
              I enjoy turning ideas into functional, beautiful products and always strive to write clean, maintainable code. When I&apos;m not coding, I&apos;m usually learning something new, sketching UI.
            </p>
            <p className='text-white pt-6 text-lg'>
              I&apos;m open to freelance, collaboration, or full-time opportunities — feel free to check out my work or get in touch.
            </p>
          </div>
          <div className='lg:flex space-y-5 lg:space-y-0 gap-4 py-10'>
            {/* First card */}
            <div className='border border-white px-4 md:px-3 py-4 md:py-6 lg:py-3 flex items-center md:gap-2'>
              <div className='relative hidden md:block md:w-50 md:h-16'>
                <Image className='' src="/Images/bracket.svg" fill alt="close" />
              </div>
              <div className='space-y-2 md:space-y-1'>
                <p className='font-bold text-2xl text-white'>Development</p>
                <p className='text-white font-medium text-[15px]'>
                  I build responsive and functional websites from the ground up or based on your existing design. Clean code and user-first experiences are my priority.
                </p>
              </div>
            </div>

            {/* Second card */}
            <div className='border border-white px-4 md:px-3 py-4 md:py-6 lg:py-2 flex items-center md:gap-2'>
              <div className='relative hidden md:block md:w-50 md:h-16'>
                <Image className='' src="/Images/wrench.svg" fill alt="close" />
              </div>
              <div className='space-y-2 md:space-y-1'>
                <p className='font-bold text-2xl text-white'>Maintenance</p>
                <p className='text-white font-medium text-[15px]'>
                  I troubleshoot bugs, improve performance, and introduce new features as your site evolves — ensuring everything stays modern and optimized.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="flex flex-col md:flex-row border border-gray-300 rounded-xl overflow-hidden shadow-lg bg-white">
              <div className="md:w-1/2 w-full h-60 md:h-auto relative">
                <Image
                  src="/Images/project1.jpg"
                  alt="Project 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Project 1</h2>
                  <p className="text-gray-600 mb-4">
                    A responsive portfolio website built with Next.js and Tailwind CSS.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Link href="/projects/project-1">
                    <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">View</button>
                  </Link>
                  <a href="https://github.com/yourusername/project-1" target="_blank" rel="noopener noreferrer">
                    <button className="border border-black text-black px-4 py-2 rounded hover:bg-gray-100 transition">GitHub</button>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col md:flex-row border border-gray-300 rounded-xl overflow-hidden shadow-lg bg-white">
              <div className="md:w-1/2 w-full h-60 md:h-auto relative">
                <Image
                  src="/Images/project2.jpg"
                  alt="Project 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Project 2</h2>
                  <p className="text-gray-600 mb-4">
                    A task management app built with React, Node.js, and MongoDB.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Link href="/projects/project-2">
                    <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">View</button>
                  </Link>
                  <a href="https://github.com/yourusername/project-2" target="_blank" rel="noopener noreferrer">
                    <button className="border border-black text-black px-4 py-2 rounded hover:bg-gray-100 transition">GitHub</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
    </>
  )
}

export default Page