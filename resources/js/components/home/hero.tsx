import React from 'react'

const Hero = () => {
    return (
        <div className=' bg-gray-50 dark:bg-secondary-brand-dark w-full flex flex-col justify-center items-center pt-10 pb-24 md:pt-20 md:py-30 text-center'>
            <span className='text-xl text-gray-400'>Mandalay Internatinal School of Acumen</span>
            <h2 className='mb-6 mt-2 text-4xl md:text-6xl text-brand-core dark:text-brand font-bold '>Welcome To MISA</h2>
            <p className='max-w-3xl text-center leading-10 font-normal'>MISA is proud to offer the Cambridge international curriculum, the world's most popular international qualification for 10 to 16 year old. It is recognized by leading universities and employers worldwide and is an international passport to progression and success.
                Our buildings are filled with children and adults who want to come to school every day. They are engaged in activities that light up their brains, sharpen their critical capacities and develop their consciences.

            </p>
        </div>
    )
}

export default Hero