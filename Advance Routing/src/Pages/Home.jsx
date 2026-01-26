import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-gray-950 text-white'>
      {/* Hero Section */}
      <section className='max-w-7xl mx-auto px-6 py-24 md:py-32'>
        <div className='max-w-3xl'>
          <h1 className='text-6xl md:text-7xl font-light leading-tight mb-6'>
            Professional Programming Education
          </h1>
          <p className='text-xl text-gray-300 leading-relaxed mb-8'>
            Master in-demand skills from industry experts. Learn through carefully crafted curriculum designed for professional growth and career advancement.
          </p>
          <div className='flex gap-4'>
            <Link to='/courses' className='bg-white text-gray-950 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition duration-300'>
              Explore Courses
            </Link>
            <button className='border border-gray-400 text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition duration-300'>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='border-t border-gray-800 bg-gray-900 bg-opacity-50'>
        <div className='max-w-7xl mx-auto px-6 py-16'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div>
              <p className='text-4xl font-light text-white mb-2'>5,000+</p>
              <p className='text-gray-400'>Active Students</p>
            </div>
            <div>
              <p className='text-4xl font-light text-white mb-2'>50+</p>
              <p className='text-gray-400'>Expert Instructors</p>
            </div>
            <div>
              <p className='text-4xl font-light text-white mb-2'>95%</p>
              <p className='text-gray-400'>Success Rate</p>
            </div>
            <div>
              <p className='text-4xl font-light text-white mb-2'>4 Years</p>
              <p className='text-gray-400'>Industry Leader</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className='max-w-7xl mx-auto px-6 py-24'>
        <div className='mb-16'>
          <h2 className='text-5xl font-light mb-4'>Featured Courses</h2>
          <p className='text-gray-400 text-lg'>Handpicked programs for career advancement</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
          <Link to='/courses/1' className='bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition duration-300 group'>
            <h3 className='text-2xl font-light text-white mb-3 group-hover:text-gray-100'>Python Fundamentals</h3>
            <p className='text-gray-400 mb-6'>Master the fundamentals of Python programming with expert guidance and real-world projects.</p>
            <div className='flex justify-between items-center pt-6 border-t border-gray-800'>
              <span className='text-sm text-gray-500'>6 weeks • Beginner</span>
              <span className='text-lg font-semibold text-white'>$99</span>
            </div>
          </Link>

          <Link to='/courses/2' className='bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition duration-300 group'>
            <h3 className='text-2xl font-light text-white mb-3 group-hover:text-gray-100'>Web Development (MERN Stack)</h3>
            <p className='text-gray-400 mb-6'>Build full-stack applications with MongoDB, Express, React, and Node.js in this comprehensive program.</p>
            <div className='flex justify-between items-center pt-6 border-t border-gray-800'>
              <span className='text-sm text-gray-500'>12 weeks • Intermediate</span>
              <span className='text-lg font-semibold text-white'>$199</span>
            </div>
          </Link>

          <Link to='/courses/3' className='bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition duration-300 group'>
            <h3 className='text-2xl font-light text-white mb-3 group-hover:text-gray-100'>Data Structures & Algorithms</h3>
            <p className='text-gray-400 mb-6'>Master DSA concepts essential for technical interviews and professional development.</p>
            <div className='flex justify-between items-center pt-6 border-t border-gray-800'>
              <span className='text-sm text-gray-500'>8 weeks • Intermediate</span>
              <span className='text-lg font-semibold text-white'>$149</span>
            </div>
          </Link>

          <Link to='/courses/4' className='bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition duration-300 group'>
            <h3 className='text-2xl font-light text-white mb-3 group-hover:text-gray-100'>Advanced JavaScript</h3>
            <p className='text-gray-400 mb-6'>Deep dive into advanced JavaScript concepts and patterns for production-ready code.</p>
            <div className='flex justify-between items-center pt-6 border-t border-gray-800'>
              <span className='text-sm text-gray-500'>8 weeks • Advanced</span>
              <span className='text-lg font-semibold text-white'>$149</span>
            </div>
          </Link>
        </div>

        <div className='text-center'>
          <Link to='/courses' className='inline-block text-white border border-gray-400 px-8 py-4 rounded-lg hover:bg-gray-900 transition duration-300'>
            View All Courses
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='border-t border-gray-800 bg-gray-900 bg-opacity-50'>
        <div className='max-w-7xl mx-auto px-6 py-24'>
          <h2 className='text-5xl font-light mb-16'>Why Code Knights</h2>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
            <div>
              <h3 className='text-xl font-semibold text-white mb-4'>Expert Instructors</h3>
              <p className='text-gray-400 leading-relaxed'>Learn from industry professionals with 10+ years of experience in technology and software development.</p>
            </div>

            <div>
              <h3 className='text-xl font-semibold text-white mb-4'>Practical Learning</h3>
              <p className='text-gray-400 leading-relaxed'>Build real-world projects and create a professional portfolio while mastering essential skills.</p>
            </div>

            <div>
              <h3 className='text-xl font-semibold text-white mb-4'>Career Support</h3>
              <p className='text-gray-400 leading-relaxed'>Receive personalized guidance, interview preparation, and career advancement support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='max-w-7xl mx-auto px-6 py-24'>
        <div className='bg-gray-900 border border-gray-800 rounded-lg p-12 text-center'>
          <h2 className='text-4xl font-light mb-6 text-white'>Ready to advance your career?</h2>
          <p className='text-gray-400 text-lg mb-8 max-w-2xl mx-auto'>Start learning with our expert-led courses designed for professionals serious about growth.</p>
          <Link to='/courses' className='inline-block bg-white text-gray-950 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition duration-300'>
            Browse Courses
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home