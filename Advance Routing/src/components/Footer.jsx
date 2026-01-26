import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='w-full bg-gray-900 text-white border-t border-gray-800 mt-16'>
      <div className='max-w-7xl mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-12'>
          {/* Brand */}
          <div>
            <h3 className='text-lg font-light text-white mb-3'>
              Code Knights
            </h3>
            <p className='text-sm text-gray-400 leading-relaxed'>Professional programming education designed for career advancement.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-xs font-semibold text-white mb-4 uppercase tracking-wide'>Navigate</h4>
            <ul className='space-y-3'>
              <li><Link to="/" className='text-sm text-gray-400 hover:text-white transition'>Home</Link></li>
              <li><Link to="/courses" className='text-sm text-gray-400 hover:text-white transition'>Courses</Link></li>
              <li><Link to="/contact" className='text-sm text-gray-400 hover:text-white transition'>Contact</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className='text-xs font-semibold text-white mb-4 uppercase tracking-wide'>Featured</h4>
            <ul className='space-y-3'>
              <li><a href="#" className='text-sm text-gray-400 hover:text-white transition'>Python Fundamentals</a></li>
              <li><a href="#" className='text-sm text-gray-400 hover:text-white transition'>Web Development</a></li>
              <li><a href="#" className='text-sm text-gray-400 hover:text-white transition'>Data Structures</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='text-xs font-semibold text-white mb-4 uppercase tracking-wide'>Connect</h4>
            <p className='text-sm text-gray-400 mb-4'>hello@codeknights.com</p>
            <p className='text-xs text-gray-500'>+1 (800) 555-1234</p>
          </div>
        </div>

        <div className='border-t border-gray-800 pt-8 text-center'>
          <p className='text-xs text-gray-500'>© {currentYear} Code Knights Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer