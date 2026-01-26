import React from 'react'
import { useParams, Link } from 'react-router-dom'

const CourseDetail = () => {
    const { id } = useParams()

    const coursesData = {
        1: {
            name: 'Python Fundamentals',
            price: '$99',
            duration: '6 weeks',
            level: 'Beginner',
            description: 'Master the basics of Python programming with hands-on projects and expert guidance.',
            curriculum: [
                'Introduction to Python',
                'Variables and Data Types',
                'Control Flow (if/else, loops)',
                'Functions and Modules',
                'Object-Oriented Programming',
                'File Handling',
                'Error Handling',
                'Final Project: Build a real application'
            ],
            learnings: [
                'Write clean and efficient Python code',
                'Understand programming fundamentals',
                'Build functional applications',
                'Debug and solve problems',
                'Apply OOP principles'
            ],
            instructor: 'John Smith',
            students: '2,000+'
        },
        2: {
            name: 'Web Development (MERN Stack)',
            price: '$199',
            duration: '12 weeks',
            level: 'Intermediate',
            description: 'Master modern web development with MongoDB, Express, React, and Node.js. Build full-stack applications.',
            curriculum: [
                'HTML5 & CSS3 Fundamentals',
                'JavaScript ES6+',
                'React Basics & Advanced',
                'State Management & Redux',
                'Node.js & Express',
                'MongoDB & Database Design',
                'REST APIs Development',
                'Authentication & Authorization',
                'Deployment & DevOps',
                'Capstone Project: Full-stack application'
            ],
            learnings: [
                'Build responsive web applications',
                'Create dynamic user interfaces',
                'Develop backend APIs',
                'Work with databases',
                'Deploy applications to production',
                'Understand full-stack development'
            ],
            instructor: 'Sarah Johnson',
            students: '3,500+'
        },
        3: {
            name: 'Data Structures & Algorithms',
            price: '$149',
            duration: '8 weeks',
            level: 'Intermediate',
            description: 'Build strong foundations in DSA for coding interviews and competitive programming.',
            curriculum: [
                'Array and Linked Lists',
                'Stacks and Queues',
                'Trees and Graphs',
                'Sorting and Searching',
                'Dynamic Programming',
                'Greedy Algorithms',
                'Hash Tables and Sets',
                'Interview Preparation & Mock Tests'
            ],
            learnings: [
                'Understand data structure operations',
                'Solve complex algorithmic problems',
                'Optimize code performance',
                'Ace coding interviews',
                'Think algorithmically',
                'Handle large-scale data'
            ],
            instructor: 'Michael Chen',
            students: '2,800+'
        },
        4: {
            name: 'Advanced JavaScript',
            price: '$149',
            duration: '8 weeks',
            level: 'Advanced',
            description: 'Deep dive into JavaScript with advanced patterns, async programming, and modern best practices.',
            curriculum: [
                'Closures & Scope Chain',
                'Prototypes & Inheritance',
                'Callbacks, Promises & Async/Await',
                'Functional Programming',
                'Design Patterns',
                'Error Handling Best Practices',
                'Performance Optimization',
                'Testing & Debugging',
                'Real-world Project Implementation'
            ],
            learnings: [
                'Master advanced JavaScript concepts',
                'Write production-ready code',
                'Handle asynchronous operations',
                'Apply design patterns',
                'Optimize performance',
                'Debug complex applications'
            ],
            instructor: 'David Lee',
            students: '1,900+'
        }
    }

    const course = coursesData[id]

    if (!course) {
        return (
            <div className='bg-gray-950 min-h-screen flex items-center justify-center'>
                <div className='text-center'>
                    <h1 className='text-4xl font-light text-white mb-4'>Course Not Found</h1>
                    <Link to='/courses' className='text-gray-400 hover:text-white'>Back to Courses</Link>
                </div>
            </div>
        )
    }

    return (
        <div className='bg-gray-950 min-h-screen py-16'>
            {/* Header */}
            <div className='bg-gray-900 border-b border-gray-800 py-16 mb-16'>
                <div className='max-w-7xl mx-auto px-6'>
                    <Link to='/courses' className='text-gray-400 hover:text-white mb-6 inline-block'>← Back to Courses</Link>
                    <h1 className='text-5xl md:text-6xl font-light text-white mb-4'>{course.name}</h1>
                    <p className='text-xl text-gray-300 max-w-2xl leading-relaxed'>{course.description}</p>
                </div>
            </div>

            <div className='max-w-7xl mx-auto px-6'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    {/* Main Content */}
                    <div className='lg:col-span-2'>
                        {/* Course Info */}
                        <div className='bg-gray-900 border border-gray-800 rounded-lg p-8 mb-8'>
                            <div className='grid grid-cols-3 gap-8'>
                                <div>
                                    <p className='text-gray-400 text-sm mb-2 uppercase tracking-wide'>Duration</p>
                                    <p className='text-3xl font-light text-white'>{course.duration}</p>
                                </div>
                                <div>
                                    <p className='text-gray-400 text-sm mb-2 uppercase tracking-wide'>Level</p>
                                    <p className='text-3xl font-light text-white'>{course.level}</p>
                                </div>
                                <div>
                                    <p className='text-gray-400 text-sm mb-2 uppercase tracking-wide'>Students</p>
                                    <p className='text-3xl font-light text-white'>{course.students}</p>
                                </div>
                            </div>
                        </div>

                        {/* What You'll Learn */}
                        <div className='bg-gray-900 border border-gray-800 rounded-lg p-8 mb-8'>
                            <h2 className='text-3xl font-light text-white mb-8'>What You'll Learn</h2>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {course.learnings.map((item, index) => (
                                    <div key={index} className='flex items-start gap-4'>
                                        <span className='text-white font-light text-xl mt-1 flex-shrink-0'>•</span>
                                        <span className='text-gray-300 leading-relaxed'>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Curriculum */}
                        <div className='bg-gray-900 border border-gray-800 rounded-lg p-8'>
                            <h2 className='text-3xl font-light text-white mb-8'>Course Curriculum</h2>
                            <div className='space-y-4'>
                                {course.curriculum.map((topic, index) => (
                                    <div key={index} className='bg-gray-800 p-4 rounded border border-gray-700 hover:border-gray-600 transition'>
                                        <span className='font-semibold text-white'>Module {index + 1}:</span>
                                        <span className='text-gray-300 ml-2'>{topic}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div>
                        {/* Price Card */}
                        <div className='bg-gray-900 border border-gray-800 rounded-lg p-8 sticky top-20'>
                            <p className='text-gray-400 text-sm mb-3 uppercase tracking-wide'>Course Price</p>
                            <p className='text-5xl font-light text-white mb-8'>{course.price}</p>

                            <button className='w-full bg-white text-gray-950 font-semibold py-4 rounded-lg hover:bg-gray-100 transition duration-300 mb-4'>
                                Enroll Now
                            </button>

                            <button className='w-full border border-gray-400 text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition duration-300 mb-8'>
                                Add to Wishlist
                            </button>

                            <div className='border-t border-gray-800 pt-8 space-y-6'>
                                <div>
                                    <p className='text-gray-400 text-sm mb-2 uppercase tracking-wide'>Instructor</p>
                                    <p className='text-white font-light text-lg'>{course.instructor}</p>
                                </div>
                                <div>
                                    <p className='text-gray-400 text-sm mb-2 uppercase tracking-wide'>Skill Level</p>
                                    <p className='text-white font-light text-lg'>{course.level}</p>
                                </div>
                                <div>
                                    <p className='text-gray-400 text-sm mb-2 uppercase tracking-wide'>Duration</p>
                                    <p className='text-white font-light text-lg'>{course.duration}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetail
