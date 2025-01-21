import React, { forwardRef, useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Layout, Code, Palette, Icon, icons } from 'lucide-react';
import ui1 from '../assets/project/uidesign1.jpg'
import ui2 from '../assets/project/uidesign2.webp'
import ui3 from '../assets/project/uidesign3.webp'
import ui4 from '../assets/project/uidesign4.webp'
import ui5 from '../assets/project/uidesign5.webp'
import ui6 from '../assets/project/uidesign6.webp'
import web1 from '../assets/project/webdesign1.webp'
import web2 from '../assets/project/webdesign2.webp'

const Projectsection = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('UI/UX DESIGN')
  const [currentSlide, setCurrentSlide] = useState(0)

  const categories = [
    {
      name: 'UI/UX DESIGN',
      icon: Layout,
    },
    {
      name: 'WEB DEVELOPMENT',
      icon: Code,
    },
  ];

  const portfolioContent = {
    'UI/UX DESIGN': [
      {
        title1: 'Web UI Design',
        title2: 'Digital Agency Custompedia Semarang',
        description: 'I designed UI/UX for PT Custompedia Creative Group, a digital agency in Semarang, focusing on developing a platform that reflects their brand identity. The design includes a modern and responsive layout, prioritizing ease of navigation and user experience to increase client engagement. The process involved strategic branding exploration and visual implementation that aligned with the company`s vision.',
        image: ui1,
        client: 'Custompedia',
        role: 'UI/UX DESIGN',
      },
      {
        title1: 'Web UI Design',
        title2: 'App Cashier Coffe Shop',
        description: 'I designed the UI/UX for a coffee shop cashier and ordering app called Sivinaries.coff. The design includes three main features: coffee menu to display a list of products with an attractive appearance, coffee ordering that makes it easy for customers to choose and customize orders, and payment with a simple and efficient flow. The design focuses on creating a user experience that is intuitive, modern, and optimally supports business operations.',
        image: ui2,
        client: 'Sivinaries.Coff',
        role: 'UI/UX DESIGN',
      },
      {
        title1: 'Web UI Design',
        title2: 'Website Profile Beil',
        description: 'The Beil company profile website is crafted to reflect its role as a comprehensive digital cashier solution. The UI/UX design emphasizes simplicity, professionalism, and user-centric navigation to effectively communicate Beil`s mission: streamlining business transactions, inventory, and reporting within a single integrated system.',
        image: ui3,
        client: 'Sivinaries',
        role: 'UI/UX DESIGN',
      },
      {
        title1: 'Web UI Design',
        title2: 'Website Ticket Event',
        description: 'The UI/UX design for Funnev focuses on delivering an engaging and seamless experience for users to discover, browse, and purchase tickets for their favorite events. Funnev is crafted to be intuitive, visually appealing, and functionally robust, ensuring that users enjoy every step of their journey.',
        image: ui4,
        client: 'Sivinaries',
        role: 'UI/UX DESIGN',
      }, 
      {
        title1: 'Web UI Design',
        title2: 'Website Kampanye Calon Gubernur',
        description: 'The UI/UX design for Ahmad Luthfi and Taj Yasin’s campaign website is crafted to inspire trust, connect with the community, and effectively communicate their vision for Central Java. The design emphasizes clarity, accessibility, and engagement to ensure voters can easily learn about the candidates, their mission, and their programs.',
        image: ui5,
        client: 'Zilenial',
        role: 'UI/UX DESIGN',
      },
      {
        title1: 'Web UI Design',
        title2: 'Website Mobile Booking Barbershop',
        description: 'This UI/UX design provides a simple and intuitive way for users to book barbershop services. Users can fill out a booking form with their details, preferred date, time, and service. Once submitted, the form will automatically redirect to the barbershop WhatsApp for confirmation. The design ensures a smooth and efficient booking process, combining convenience with direct communication.',
        image: ui6,
        client: 'HendBarber',
        role: 'UI/UX DESIGN',
      }
    ],
    'WEB DEVELOPMENT': [
      {
        title1: 'Web Development',
        title2: 'Website Pendataan Penyakit di Puskesmas',
        description: 'The UI/UX design for Goakreo, a disease data collection website for healthcare centers, focuses on functionality, clarity, and ease of use. It is designed to empower healthcare workers at puskesmas (community health centers) with an efficient tool for recording, managing, and analyzing disease data to support better public health decisions.',
        image: web1,
        client: 'Sivinaries',
        role: 'Website Developer',
      },
      {
        title1: 'Web Development',
        title2: 'Website Profile Sivinaries',
        description: 'The Sivinaries company profile website is designed to showcase its expertise as a leading software house, delivering innovative and customized digital solutions. The UI/UX design reflects Sivinaries` professionalism, creativity, and commitment to excellence, ensuring an engaging and user-friendly experience for potential clients and partners.',
        image: web2,
        client: 'Sivinaries',
        role: 'Website Developer',
      },
      {
        title1: 'Web Development',
        title2: 'Website Booking Berbershop',
        description: 'This mobile barbershop booking website is built using React.js, designed to make booking quick and easy. Users can fill out a form with their details, preferred service, date, and time. Once submitted, the form automatically sends the booking information to the barbershop WhatsApp number for confirmation. The design ensures a seamless user experience with fast and direct communication.',
        image: ui6,
        client: 'HendBerber',
        role: 'Website Developer',
      }
    ]
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category.name);
    setCurrentSlide(0);
    setIsOpen(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === portfolioContent[selectedCategory].length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? portfolioContent[selectedCategory].length - 1 : prev - 1
    );
  };

  const currentProject = portfolioContent[selectedCategory][currentSlide];


  const { projectsRef } = ref
  return (
    <main className="overflow-x-hidden">
      <section ref={projectsRef} id="projects">
        <div className="bg-white text-black relative px-4 md:px-10 lg:px-24 py-8 md:py-16">
          {/* Category Selector */}
          <div className="relative lg:absolute mb-8 lg:-mb-24 z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-6 py-3 bg-[#FFDDAE] backdrop-blur rounded-full flex items-center space-x-2 text-black font-bold hover:bg-[#FFDDAE]/70 transition-colors w-full md:w-auto"
            >
              <span>{selectedCategory}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="absolute top-full mt-2 w-full bg-white/10 backdrop-blur-2xl rounded-lg overflow-hidden shadow-md z-10">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => handleCategorySelect(category)}
                    className="w-full px-6 py-3 text-left hover:bg-[#FFDDAE] flex items-center space-x-2"
                  >
                    <category.icon className="w-5 h-5" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Display */}
          <div className="relative flex flex-col lg:flex-row lg:items-center space-y-0 lg:space-y-0 gap-8">
            {/* Project Content */}
            <div className="lg:w-1/2 space-y-4">
              <h1 className="text-3xl md:text-6xl font-bold font-madesun">{currentProject.title1}</h1>
              <h2 className="text-xl md:text-2xl font-bold">{currentProject.title2}</h2>
              <p className="text-sm md:text-base lg:text-lg">{currentProject.description}</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                  <span className="font-semibold font-madesun text-2xl">Client:</span>
                  <span>{currentProject.client}</span>
                </div>
                <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                  <span className="font-semibold font-madesun text-2xl">Role:</span>
                  <span>{currentProject.role}</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="object-cover max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-[#FFDDAE] rounded-full hover:bg-[#FFDDAE]/70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-[#FFDDAE] rounded-full hover:bg-[#FFDDAE]/70 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
})

Projectsection.displayName = 'Projectsection'
export default Projectsection