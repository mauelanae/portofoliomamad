import React, { forwardRef } from 'react';
import img1 from '../assets/abou1.webp'
import img2 from '../assets/about2.webp'
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
                    <div className='absolute right-0 top-[1200px] lg:top-[1620px] md:right-32 space-y-2 lg:space-y-8'>
                        <div className='w-56 h-16 lg:w-96 lg:h-28 flex items-center justify-center rounded-full shadow-black shadow-lg bg-[#FFDDAE] text-md lg:text-2xl font-bold'>
                            FRONTEND DEVELOPER
                        </div>
                        <div className='w-40 h-14 lg:w-80 lg:h-24 flex items-center justify-center rounded-full shadow-black shadow-lg bg-[#8FD0FF] text-md lg:text-2xl font-bold'>
                            UI/UX GRAPICH
                        </div>
                    </div>
                    <div className='absolute left-0 top-[1200px] lg:top-[1620px] md:left-32 space-y-2 lg:space-y-8 flex flex-col items-end lg:flex lg:flex-col lg:items-end'>
                        <div className='w-40 h-14 lg:w-80 lg:h-24 flex items-center justify-center rounded-full shadow-black shadow-lg bg-[#8FD0FF] text-md lg:text-2xl font-bold'>
                            DESIGN GRAPICH
                        </div>
                        <div className='w-56 h-16 lg:w-96 lg:h-28 flex items-center justify-center rounded-full shadow-black shadow-lg bg-[#FFDDAE] text-md lg:text-2xl font-bold'>
                            BACKEND DEVELOPER
                        </div>
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
