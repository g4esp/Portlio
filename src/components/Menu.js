import React, { useState, useEffect } from "react"
import { Link, animateScroll as scroll } from "react-scroll"
export const Menu = () => {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const isMobile = window.innerWidth < 600
  const handleClosing = () => {
    if (isMobile) {
      setOpen(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.pageYOffset > 50)
    })
  }, [])
  return (
    <div className="w-full fixed z-10">
      <nav
        className={
          "relative flex flex-wrap items-center justify-between py-4 lg:py-0 transition-all duration-300 " +
          (isScrolled ? "bg-indigo-900 shadow-md" : "bg-transparent")
        }
      >
        <div className="container lg:px-20 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full px-4 lg:px-0 relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img
              src="/assets/images/logo.png"
              alt="Logo"
              width="140"
              className="cursor-pointer"
              onClick={() => {
                scroll.scrollToTop()
              }}
            />
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => {
                setOpen(!open)
              }}
            >
              <span className="block relative w-6 h-px rounded-sm bg-white"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              <span className="block relative w-3 h-px rounded-sm bg-white mt-1"></span>
            </button>
          </div>
          <div
            className={
              "w-full lg:w-auto flex lg:flex-grow items-center bg-indigo-900 lg:bg-transparent" +
              (open ? " flex" : " hidden lg:inline-block")
            }
            id="example-navbar-info"
          >
            <ul className="flex flex-col lg:flex-row list-none py-4 items-center mx-auto lg:float-right">
              <li>
                <Link
                  className="px-4 py-3 flex items-center text-lg font-poppins font-semibold text-white hover:text-red-500 cursor-pointer"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={handleClosing}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="px-4 py-3 flex items-center text-lg font-poppins font-semibold text-white hover:text-red-500 cursor-pointer"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={handleClosing}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="px-4 py-3 flex items-center text-lg font-poppins font-semibold text-white hover:text-red-500 cursor-pointer"
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={600}
                  onClick={handleClosing}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  className="px-4 py-3 flex items-center text-lg font-poppins font-semibold text-white hover:text-red-500 cursor-pointer"
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                  onClick={handleClosing}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="px-4 py-3 flex items-center text-lg font-poppins font-semibold text-white border-red-500 border-4 hover:bg-red-500"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={800}
                  onClick={handleClosing}
                >
                  Start a project
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
