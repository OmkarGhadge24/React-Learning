import React from 'react'
import { Link } from 'react-router-dom'

const Courses = () => {
    const courses = [
        {
            id: 1,
            name: 'Python Fundamentals',
            price: '$99',
            duration: '6 weeks',
            level: 'Beginner',
            description: 'Master the basics of Python programming'
        },
        {
            id: 2,
            name: 'Web Development (MERN Stack)',
            price: '$199',
            duration: '12 weeks',
            level: 'Intermediate',
            description: 'Master modern web development with MongoDB, Express, React, and Node.js'
        },
        {
            id: 3,
            name: 'Data Structures & Algorithms',
            price: '$149',
            duration: '8 weeks',
            level: 'Intermediate',
            description: 'Build strong foundations in DSA for coding interviews'
        },
        {
            id: 4,
            name: 'Advanced JavaScript',
            price: '$149',
            duration: '8 weeks',
            level: 'Advanced',
            description: 'Deep dive into JavaScript with advanced patterns and async programming'
        }
    ]

    return (
        <div className='bg-gray-950 min-h-screen py-16'>
            <div className='max-w-7xl mx-auto px-6 mb-16'>
                <h1 className='text-5xl md:text-6xl font-light mb-4 text-white'>
                    All Courses
                </h1>
                <p className='text-xl text-gray-400'>Choose your learning path and start mastering new skills</p>
            </div>

            <div className='max-w-7xl mx-auto px-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {courses.map((course) => (
                        <Link
                            key={course.id}
                            to={`/courses/${course.id}`}
                            className='bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-gray-700 cursor-pointer transition duration-300 group'
                        >
                            <h3 className='text-2xl font-light text-white mb-2 group-hover:text-gray-100'>{course.name}</h3>
                            <p className='text-gray-400 mb-6 text-sm leading-relaxed'>{course.description}</p>
                            <div className='flex justify-between items-center pt-6 border-t border-gray-800'>
                                <span className='text-xs text-gray-500'>{course.duration} • {course.level}</span>
                                <span className='text-lg font-semibold text-white'>{course.price}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Courses