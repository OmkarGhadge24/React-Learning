import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <div className='bg-gray-950 min-h-screen py-16'>
            <div className='max-w-7xl mx-auto px-6'>
                <div className='mb-16'>
                    <h1 className='text-5xl md:text-6xl font-light mb-4 text-white'>
                        Contact Us
                    </h1>
                    <p className='text-xl text-gray-300 max-w-2xl'>Have questions about our courses? Reach out to our team and we'll be happy to assist you.</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16'>
                    {/* Contact Info Cards */}
                    <div className='bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition'>
                        <h3 className='text-lg font-semibold text-white mb-3 uppercase tracking-wide'>Email</h3>
                        <p className='text-gray-300 mb-1'>hello@codeknights.com</p>
                        <p className='text-sm text-gray-500'>We respond within 24 hours</p>
                    </div>

                    <div className='bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition'>
                        <h3 className='text-lg font-semibold text-white mb-3 uppercase tracking-wide'>Phone</h3>
                        <p className='text-gray-300 mb-1'>+1 (800) 555-1234</p>
                        <p className='text-sm text-gray-500'>Mon–Fri, 9 AM – 6 PM</p>
                    </div>

                    <div className='bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition'>
                        <h3 className='text-lg font-semibold text-white mb-3 uppercase tracking-wide'>Location</h3>
                        <p className='text-gray-300 mb-1'>San Francisco, CA</p>
                        <p className='text-sm text-gray-500'>Visit our office</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className='max-w-2xl mx-auto'>
                    <form onSubmit={handleSubmit} className='bg-gray-900 border border-gray-800 rounded-lg p-8'>
                        <div className='mb-6'>
                            <label className='block text-white font-semibold mb-3 uppercase tracking-wide text-sm'>Full Name</label>
                            <input
                                type='text'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className='w-full bg-gray-800 border border-gray-700 text-white rounded px-4 py-3 focus:outline-none focus:border-gray-600 transition'
                                placeholder='Your Name'
                            />
                        </div>

                        <div className='mb-6'>
                            <label className='block text-white font-semibold mb-3 uppercase tracking-wide text-sm'>Email Address</label>
                            <input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className='w-full bg-gray-800 border border-gray-700 text-white rounded px-4 py-3 focus:outline-none focus:border-gray-600 transition'
                                placeholder='your.email@example.com'
                            />
                        </div>

                        <div className='mb-6'>
                            <label className='block text-white font-semibold mb-3 uppercase tracking-wide text-sm'>Subject</label>
                            <input
                                type='text'
                                name='subject'
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className='w-full bg-gray-800 border border-gray-700 text-white rounded px-4 py-3 focus:outline-none focus:border-gray-600 transition'
                                placeholder='What is this about?'
                            />
                        </div>

                        <div className='mb-8'>
                            <label className='block text-white font-semibold mb-3 uppercase tracking-wide text-sm'>Message</label>
                            <textarea
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows='6'
                                className='w-full bg-gray-800 border border-gray-700 text-white rounded px-4 py-3 focus:outline-none focus:border-gray-600 transition resize-none'
                                placeholder='Tell us more about your inquiry...'
                            />
                        </div>

                        <button
                            type='submit'
                            className='w-full bg-white text-gray-950 font-semibold py-3 rounded hover:bg-gray-100 transition duration-300'
                        >
                            Send Message
                        </button>
                    </form>

                    {submitted && (
                        <div className='mt-6 bg-gray-900 border border-green-700 rounded-lg p-4 text-center'>
                            <p className='text-green-300 font-semibold'>Thank you! We'll get back to you soon.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Contact