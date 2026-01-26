import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full bg-gray-950 border-b border-gray-800 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-6 py-5 flex items-center justify-between'>
        <Link to="/" className='text-2xl font-light text-white hover:text-gray-300 transition'>
          Code Knights
        </Link>
        <div className='flex gap-12 items-center'>
          <Link to="/" className='text-gray-300 hover:text-white transition duration-300 text-sm uppercase tracking-wide'>
            Home
          </Link>
          <Link to="/courses" className='text-gray-300 hover:text-white transition duration-300 text-sm uppercase tracking-wide'>
            Courses
          </Link>
          <Link to="/contact" className='text-gray-300 hover:text-white transition duration-300 text-sm uppercase tracking-wide'>
            Contact
          </Link>
          <button className='bg-white text-gray-950 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition duration-300'>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar