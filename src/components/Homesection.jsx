import React, { forwardRef, useRef } from 'react';
import mad from '../assets/coverfront.svg'
import vector from '../assets/Vector.svg'

const Homesection = forwardRef((props, ref) => {

  const { homeRef } = ref
  const { onButtonClick } = props
  return (
    <main className="overflow-x-hidden"> {/* Tambah overflow-x-hidden untuk mencegah horizontal scroll */}
      <section
        ref={homeRef}
        className="h-auto my-20 md:h-screen bg-white
          px-4 sm:px-8 md:px-24 p-8" // Responsive padding
        id="home">
        {/* Responsive heading */}
        <h1 className='text-center md:text-end font-madesun 
          text-5xl md:text-[100px] mt-16
          -mb-2 md:-mb-6'>
          PORTOFOLIO
        </h1>

        {/* Container untuk konten utama */}
        <div className="relative">
          {/* Button dengan posisi responsif */}
          <button
            onClick={onButtonClick}
            className='absolute 
              right-0 md:right-[128px] 
              bottom-[122px] md:bottom-[104px]
              py-4 md:py-6 
              px-4 md:px-6 
              rounded-2xl sm:rounded-3xl 
              drop-shadow-lg 
              bg-[#8FD0FF] 
              z-10
              transform translate-x-0 lg:translate-x-[100px]'
          >
            <img
              src={vector}
              className='p-1 sm:p-2 w-8 sm:w-10 md:w-12'
              alt="Vector"
            />
          </button>

          {/* Gambar dengan ukuran responsif */}
          <div className='flex justify-center items-center 
            my-4 '>
            <img
              src={mad}
              alt="Cover"
              className='object-contain 
                w-full 
                max-w-[600px] md:max-w-[1500px]
                h-auto'
            />
          </div>

          {/* Teks deskripsi responsif */}
          <div className="max-w-xs md:max-w-xl 
            mx-auto lg:mx-0 
            mt-4 md:-mt-4">
            <p className="text-base md:text-xl 
              leading-relaxed 
              text-center md:text-left">
              Creative Traveler in the World of Coding & Design:
              Full-Stack Developer, UI/UX Designer, and Graphic
              Designer Ready to Bring Ideas to Life.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
});

Homesection.displayName = 'Homesection';
export default Homesection;