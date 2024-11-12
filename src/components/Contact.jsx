import React from 'react'

const Contact = () => {
    return (
        <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Testimonials'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
                <p className='text-gray-500 max-w-80 text-center mb-8'>Ready to Make a Move? Let’s Build Your Future Together</p>
            </div>

            <form className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12"></div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="your-name" className="block text-sm/6 font-medium text-gray-900">Your name</label>
                        <div className="mt-2">
                            <input type="text" name="your-name" id="your-name" placeholder='Your Name' className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm/6" required />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email</label>
                        <div className="mt-2">
                            <input type="email" name="email" id="email" placeholder='Email' className="block w-full rounded-md border-0 text-gray-900 px-4 py-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm/6" required />
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="message" className="block text-sm/6 font-medium text-gray-900">Message</label>
                        <div className="mt-2">
                            <textarea id="message" name="message" placeholder='Message' rows="3" className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 resize-none"></textarea>
                        </div>
                        <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences about yourself.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='bg-blue-600 text-white px-8 py-2 rounded'>Send Message</button>
                </div>
            </form>
        </div >
    )
}

export default Contact