import React from 'react'
import Link from 'next/link'

function LatestPosts() {
  return (
    <div className='bg-white py-20' aria-label='Blog'>
      <div className='max-w-5xl px-6 mx-auto text-center'>
        <h2 className='text-2xl font-semibold text-gray-800'>Latest Posts</h2>

        <div className='flex flex-col items-center justify-center mt-6'>
          <a
            className='max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
            href='#'
          >
            <div className='flex items-center justify-between px-4 py-2'>
              <h3 className='text-lg font-medium text-gray-700'>
                Coming soon...
              </h3>
              <span className='block text-gray-600 font-light text-sm'>
                20 Jan 2020
              </span>
            </div>
          </a>
        </div>

        <div className='flex items-center justify-center mt-12'>
          <Link href='/blog'>
            <a
              className='flex items-center text-gray-600 hover:underline hover:text-gray-500'
              href='#'
            >
              {' '}
              <span>View More</span>
              <svg
                className='h-5 w-5 ml-1'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LatestPosts
