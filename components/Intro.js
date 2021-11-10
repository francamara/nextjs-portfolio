import React from 'react'
import Image from 'next/image'

function Intro() {
  return (
    <div>
      <section className='bg-white mt-20'>
        <div className='max-w-2xl px-6 text-center mx-auto'>
          <h2 className='text-3xl font-semibold text-gray-800'>
            Hi,{' '}
            <span className='bg-indigo-600 text-white rounded px-1'>
              I’m Francisco
            </span>{' '}
            . Nice to meet you.
          </h2>
          <p className='text-gray-600 mt-4'>
            I am a Junior Full Stack Web Developer with one year of experience
            using NodeJs, React, and many other modern tools used in the web
            nowadays.
          </p>

          <div
            className='flex items-end justify-center mt-16'
            aria-label='Profile Picture'
          >
            <Image
              src='/ProfilePic.png'
              alt='Francamaradev'
              className='rounded-full'
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Intro
