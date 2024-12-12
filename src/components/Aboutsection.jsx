import React, { forwardRef } from 'react';
import img1 from '../assets/about1.svg'
import img2 from '../assets/about2.svg'
import img3 from '../assets/about3.svg'
import img4 from '../assets/about4.svg'

const Aboutsection = forwardRef((props, ref) => {
    const { infoRef } = ref
    return (
        <main className='mt-20'>
            <section
                ref={infoRef}
                className="h-screen bg-black
                px-4 sm:px-8 md:px-24 p-28"
                id="info"
            >
                <div className='flex flex-col items-center justify-center mb-10'>
                    <div className="max-w-5xl mx-auto md:mx-0 mt-2">
                        <h1
                            className='font-madesun text-[#FFDDAE] text-2xl text-center md:text-left md:text-5xl'>
                            About,<br />Dwi Achmad Maulana
                        </h1>
                        <p
                            className="text-white text-base md:text-3xl 
                        leading-relaxed text-center md:text-left">
                            Creative Traveler in the World of Coding & Design:
                            Full-Stack Developer, UI/UX Designer, and Graphic
                            Designer Ready to Bring Ideas to Life.
                        </p>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='absolute right-0 md:right-32'>
                        <img src={img3} className='w-32 md:w-full' />
                    </div>
                    <div className='absolute left-0 md:left-32'>
                        <img src={img4} className='w-32 md:w-full' />
                    </div>
                    <div className='absolute'>
                        <img src={img2} className='w-32 md:w-full' />
                    </div>
                    <img src={img1} className='' />
                </div>
            </section>
        </main>
    )
})

Aboutsection.displayName = 'Aboutsection'
export default Aboutsection
