import React, { useState } from "react";
import logo from "../../public/images/real.png";
import { X, Menu, Link } from "lucide-react";
import { animate, AnimatePresence, motion } from "framer-motion";

function Nav({ scrollToContact }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {title: "Home", href: "", clicked: ""},
    {title: "Blog", href: "", clicked: ""},
    {title: "Projects", href: "", clicked: ""},
    {title: "About", href: "", clicked: ""},
    {title: "Contact", href: "", clicked: "scrollToContact"},
  ]

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0]
      }
    },
    exit:{
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
  }

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      }
    }
  }

  return (
    <nav className="font-gideon fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md shadow-md">
      <div
        className={` ${
          isOpen ? "" : ""
        } flex items-center justify-between w-full px-4 py-3`}
      >
        {/* Left: Logo */}
        <div className="flex flex-row items-center space-x-2">
          <img
            src={logo}
            alt="logo"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-[50px] lg:h-[50px]"
          />
        </div>

        {/* Center: Desktop Menu */}
        <ul className="hidden md:flex  justify-center space-x-5 text-xl md:text-2xl lg:text-3xl text-[#F8F8F8]">
          <li>
            <a href="" className="hover:text-[#e13c3c]">
              Home
            </a>
          </li>
          <li>
            <a href="" className="hover:text-[#e13c3c]">
              Blog
            </a>
          </li>
          <li>
            <a href="" className="hover:text-[#e13c3c]">
              Projects
            </a>
          </li>
          <li>
            <a href="" className="hover:text-[#e13c3c]">
              About
            </a>
          </li>
          <li>
            <a onClick={scrollToContact} className="hover:text-[#e13c3c]">
              Contacts
            </a>
          </li>
        </ul>


        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-white"/> : <Menu className="text-white"/>}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
        <motion.div
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="md:hidden flex flex-col items-center h-screen justify-center origin-top mt-0 px-4 py-3 space-y-3 text-[#F8F8F8]"
        >
          <div
            
          >
            <motion.div className="flex flex-col items-center h-screen justify-center mt-0 px-4 py-3 space-y-3">
              {/* <a href="" className="hover:text-[#e13c3c]">
                Home
              </a>
              <a href="" className="hover:text-[#e13c3c]">
                Blog
              </a>
              <a href="" className="hover:text-[#e13c3c]">
                Projects
              </a>
              <a href="" className="hover:text-[#e13c3c]">
                About
              </a>
              <a onClick={scrollToContact} className="hover:text-[#e13c3c]">
                Contacts
              </a> */}
              <motion.div 
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
              >
                {
                  navLinks.map((link, index) => {
                    return (
                      <div className="overflow-hidden">
                        <MobileNavLink 
                          key={index}
                          title={link.title}
                          href={link.href}
                        />
                      </div>
                    )
                  })
                }
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
}

export default Nav;

const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.03, 1],
      },
    }, 
    open: {
      y:0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    }
  }

const MobileNavLink = ({ title, href}) => {
  return (
    <motion.div variants={mobileLinkVars} className="text-5xl uppercase">
      <a href={href} className="hover:text-[#e13c3c]"> {title} </a>
    </motion.div>
  )
}