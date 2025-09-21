import React from 'react'
import move from '../public/images/move.png'
import kid from '../public/images/boy.jpg'
import { motion, useScroll, useTransform } from "framer-motion";
import ImageSlider from './components/ImageSlider';
import real from '../public/images/real.png'
import Nav from './components/Nav';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const currentYear = new Date().getFullYear();

function App() {

  const { scrollY } = useScroll();

  // Map scroll value to opacity (fade out when scrolling)
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
  <div className='bg-black'>
    <div className="bg-[url('/images/so.jpg')] h-screen items-center bg-cover bg-center">
      <Nav/>
      <div className='flex flex-col items-center justify-center h-[80vh] lg:h-[65vh]'>
        <h1 className='text-white text-6xl  lg:text-9xl font-bold'>TRIGNA FC</h1>
        <p className='text-[20px] lg:text-2xl text-white'>WE ARE THE CHAMPIONS FOREVER</p>
        <div>
          <ul className='flex gap-4 text-white mt-5 lg:hidden'>
            <li>
              <a
                href="/"
                className="hover:text-[#1877F2] hover:scale-110 transition-transform transition-colors duration-300"
                aria-label="Facebook"
              >
              <FaFacebookF size={24} />
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-[#1877F2] hover:scale-110 transition-transform transition-colors duration-300"
                aria-label="Facebook"
              >
              <FaFacebookF size={24} />
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-[#1877F2] hover:scale-110 transition-transform transition-colors duration-300"
                aria-label="Facebook"
              >
              <FaFacebookF size={24} />
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-[#1877F2] hover:scale-110 transition-transform transition-colors duration-300"
                aria-label="Facebook"
              >
              <FaFacebookF size={24} />
              </a>
            </li>
          </ul>
        </div> 
      </div>
      <div className='text-white p-4'>
        <div className='flex justify-end lg:flex lg:justify-between lg:items-center'>
          <ul className='hidden lg:flex lg:flex-col lg:gap-4'>
            <li>
              <a
                href="/"
                className="hover:text-[#1877F2] hover:scale-110 transition-transform transition-colors duration-300"
                aria-label="Facebook"
              >
              <FaFacebookF size={24} />
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-[#1877F2] hover:scale-110 transition-transform transition-colors duration-300"
                aria-label="Facebook"
              >
              <FaFacebookF size={24} />
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-[#1877F2] hover:scale-110 transition-transform transition-colors duration-300"
                aria-label="Facebook"
              >
              <FaFacebookF size={24} />
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-[#1877F2] hover:scale-110 transition-transform transition-colors duration-300"
                aria-label="Facebook"
              >
              <FaFacebookF size={24} />
              </a>
            </li>
          </ul>

          <p className='mt-18 hidden lg:block'>TUMU, UPPER WEST REGION.</p>
          <motion.div className='w-15 h-15 bg-amber-50 flex items-center justify-center rounded-full'
            animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        style={{ opacity }}
          >
            <img src={move} alt="" className='w-10' />
          </motion.div>
        </div>
      </div>
    </div>

    {/* About Us Section */}

    <div className='text-white'>
      <div className='mt-10'>
        <h2 className='text-6xl lg:text-8xl text-center'>ABOUT US</h2>
        <span className="block before:content-[''] before:block before:w-70 lg:before:w-100 before:h-2 before:bg-blue-900 before:mx-auto before:mt-4 after:content-[''] after:block after:w-30 lg:after:w-60 after:h-2 after:bg-yellow-300 after:mx-auto after:mt-2"></span>
        <div>
        <div className='grid grid-col-1 gap-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:p-10'>
          <img src={kid} alt="" className='mt-10 rounded-2xl'/>
          <div>
            <h3 className='text-[20px] lg:text-2xl text-gray-300 ml-4'>About Us</h3>
            <h4 className='text-white text-3xl lg:text-5xl ml-4'>We Always Make The Best</h4>
            <p className='text-[20px] lg:text-2xl p-4 text-gray-300'>Trigna FC is a football club based in Tumu, Upper West Region of Ghana. Founded in 2013, the club has rapidly risen through the ranks of Ghanaian football, earning a reputation for its competitive spirit and commitment to excellence. Trigna FC plays its home matches at the Tumu Park, which has become a fortress for the team, thanks to the passionate support of its fans. The club's colors are blue and yellow, symbolizing strength and energy. Trigna FC is dedicated to nurturing local talent and has a youth academy that focuses on developing young players from the region. With a strong emphasis on teamwork and discipline, Trigna FC aims to make a significant impact in Ghanaian football and inspire the next generation of footballers.</p>
          </div>
        </div>
        </div>
      </div>
    </div>

    {/* About Us Section */}

    <div className='text-white bg-black'>
      <div className='mt-10'>
        <h2 className='text-6xl lg:text-8xl text-center'>GALLARY</h2>
        <span className="block before:content-[''] before:block before:w-70 lg:before:w-100 before:h-2 before:bg-blue-900 before:mx-auto before:mt-4 after:content-[''] after:block after:w-30 lg:after:w-60 after:h-2 after:bg-yellow-300 after:mx-auto after:mt-2"></span>
        <div className='w-full flex justify-center mt-10 mb-10'>
          <ImageSlider />
        </div>
      </div>
    </div>

    {/* About Us Section */}

    <div className='text-white mr:-2 ml-2 lg:mr-10 lg:ml-10'>
        <div>
          <h2 className='text-6xl lg:text-8xl text-center'>TSA NEWS</h2>
          <span className="block before:content-[''] before:block before:w-70 lg:before:w-100 before:h-2 before:bg-blue-900 before:mx-auto before:mt-4 after:content-[''] after:block after:w-30 lg:after:w-60 after:h-2 after:bg-yellow-300 after:mx-auto after:mt-2"></span>
        </div>
        <div className='grid grid-cols-1 gap-4 lg:grid lg:grid-cols-2 lg:gap-4 mt-20'>
          <div className="bg-[url('/images/so.jpg')] items-center bg-cover bg-center h-[400px] rounded-3xl">
            <div className='p-4 flex flex-col justify-end h-full'>
              <p className='text-gray-300 mt-4'>20 Aug, 2025</p>
              <h3 className='text-3xl font-bold text-white'>TSA LAUNCHES FOOTBALL ACADEMY</h3>
            </div>
          </div>
          <div className="bg-[url('/images/so.jpg')] items-center bg-cover bg-center h-[400px] rounded-3xl">
            <div className='p-4 flex flex-col justify-end h-full'>
              <p className='text-gray-300 mt-4'>20 Aug, 2025</p>
              <h3 className='text-3xl font-bold text-white'>TSA LAUNCHES FOOTBALL ACADEMY</h3>
            </div>
          </div>
        </div>

        {/* Second Row */ }

        <div className='hidden lg:grid lg:grid-cols-3 lg:gap-4 mt-5'>
          <div className="bg-[url('/images/so.jpg')] items-center bg-cover bg-center h-[300px] rounded-3xl">
            <div className='p-4 flex flex-col justify-end h-full'>
              <p className='text-gray-300 mt-4'>20 Aug, 2025</p>
              <h3 className='text-3xl font-bold text-white'>TSA LAUNCHES FOOTBALL ACADEMY</h3>
            </div>
          </div>
          <div className="bg-[url('/images/so.jpg')] items-center bg-cover bg-center h-[300px] rounded-3xl">
            <div className='p-4 flex flex-col justify-end h-full'>
              <p className='text-gray-300 mt-4'>20 Aug, 2025</p>
              <h3 className='text-3xl font-bold text-white'>TSA LAUNCHES FOOTBALL ACADEMY</h3>
            </div>
          </div>
          <div className="bg-[url('/images/so.jpg')] items-center bg-cover bg-center h-[300px] rounded-3xl">
            <div className='p-4 flex flex-col justify-end h-full'>
              <p className='text-gray-300 mt-4'>20 Aug, 2025</p>
              <h3 className='text-3xl font-bold text-white'>TSA LAUNCHES FOOTBALL ACADEMY</h3>
            </div>
          </div>
        </div>
    </div>
    
    {/* Footer here */ }
    <footer className="w-full h-[100%] text-white bg-black mt-10">
      <div className="flex flex-col md:flex-row justify-between px-8 py-12 gap-10 md:gap-6 xl:h-[300px]">
        {/* Contact */}
        <div className="md:w-1/4">
          <img src={real} alt="Logo" className="w-32 mb-4" />
        </div>
        {/* Contact */}
        <div className="md:w-1/4">
          <h3 className="font-semibold mb-2">Contact</h3>
          <address className="not-italic text-sm md:text-base space-y-1">
            <p>DieSachbearbeiter</p>
            <p>Choriner Straße 49</p>
            <p>10435 Berlin</p>
            <p>
              <a
                href="mailto:moinsen2@wizetemplates.com"
                className="hover:underline transition-colors duration-300"
              >
                moinsen2@wizetemplates.com
              </a>
            </p>
          </address>
        </div>

        {/* Pages */}
        <div className="md:w-1/4">
          <h3 className="font-semibold mb-2">Pages</h3>
          <nav className="flex flex-col gap-1 text-gray-700 text-sm md:text-base">
          </nav>
        </div>

        {/* Social */}
        <div className="md:w-1/4">
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a
              href="/"
              className="hover:text-[#1877F2] hover:scale-110 transition-transform transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="/"
              className="hover:text-[#1DA1F2] hover:scale-110 transition-transform transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="/"
              className="hover:text-[#E1306C] hover:scale-110 transition-transform transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="/"
              className="hover:text-[#0077B5] hover:scale-110 transition-transform transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-300 py-4 text-center text-sm">
        &copy; {currentYear} Evolve. All rights reserved.
      </div>
    </footer>

  </div>
  )
}

export default App
