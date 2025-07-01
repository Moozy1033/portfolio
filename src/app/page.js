"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const page = () => {
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
          <div className='flex justify-between md:hidden py-4 px-4 items-center'>
            <p className='text-white text-[26px] font-bold'>AY</p>
            <button onClick={toggle}>
              {menuOpen ? (<Image src="/Images/close-ham.svg" width={35} alt="close" height={35} />) : <Image src="/Images/hamburger.svg" width={30} alt="open" height={30} />}
            </button>
          </div>
          {menuOpen && (
            <div className=''>
              <ul className='text-base text-center py-3 space-y-2'>
                <li><Link href="" className=' text-white font-semibold'>Home</Link></li>
                <li><Link href="" className=' text-white font-semibold'>Portfolio</Link></li>
                <li><Link href="" className=' text-white font-semibold'>About me</Link></li>
                <li><Link href="" className=' text-white font-semibold'>Contact</Link></li>
              </ul>
            </div>
          )}
        </nav>
        <section className='px-7 md:px-18 lg:px-[120px] md:pt-5'>
          <div className='md:flex justify-between gap-5 md:pt-5'>
            <div className='md:pt-10 text-center md:text-start'>
              <p className='text-white text-xl font-semibold pt-4 lg:pt-5'>My name is Muraina Ayodeji</p>
              <p className='text-white text-3xl md:text-4xl lg:text-5xl font-semibold py-8 md:py-10'>I'M A FRONT-END DEVELOPER</p>
              <div className='pb-5'>
                <button className='bg-gray-500 w-full md:w-auto outline outline-white text-white font-medium px-3 py-1'>Contact me</button>
              </div>
              <div className='flex justify-center md:justify-start lg:pt-2 gap-2'>
                <Link href="https://www.linkedin.com/in/muraina-malik-17354a355/" ><Image src="/Images/linkedin.svg" width={35} alt="close" height={35} /></Link>
                <Link href="https://github.com/Moozy1033" ><Image src="/Images/github.svg" width={32} alt="close" height={32} /></Link>
                <Link href="https://github.com/Moozy1033" ><Image src="/Images/github.svg" width={32} alt="close" height={32} /></Link>
              </div>
            </div>
            <div className='hidden lg:block md:pt-5 lg:pt-3.5'><Image className='' src="/Images/Image.png" width={360} alt="close" height={350} /></div>
            <div className='hidden md:block lg:hidden md:pt-5 lg:pt-3.5'><Image className='' src="/Images/Image.png" width={470} alt="close" height={470} /></div>
            
          </div>
          <div className='w-full bg-white py-1'></div>
        </section>
        <section>
          <p className='text-white font-bold text-3xl text-center'>About me</p>
        </section>
      </div>
    </>
  )
}

export default page