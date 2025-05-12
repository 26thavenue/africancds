'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/event", label: "Event Details" },
    { href: "/gallery", label: "Gallery" },
    { href: "/location", label: "Location" },
    { href: "/register", label: "Register" },
  ]

  return (
    <nav className="bg-black/40 text-white py-8 px-6 lg:px-24 relative z-50 w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-yellow-500 font-bold text-2xl">ACDS</span>
            <span className="hidden md:inline-block font-semibold">Summit</span>
          </Link>
          <p className="mx-2">x</p>
          <img src="defense.png" className="w-10 h-10" alt="Nigerian Defense Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 items-center text-white font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors ${
                pathname === href
                  ? "text-yellow-500"
                  : "hover:text-yellow-300"
              } ${label === "Register" ? "px-4 py-2 rounded hover:bg-yellow-500" : ""}`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          onClick={toggleMenu}
          className="md:hidden w-10 h-10 flex justify-end items-center cursor-pointer z-50"
        >
          {isOpen ? (
            <X size={32} className="bg-primary" />
          ) : (
            <Menu size={32} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleMenu} />
          <div className="fixed top-0 right-0 h-full w-full bg-white text-primary z-50 flex flex-col p-6 space-y-6 pt-6">
            <div className="flex my-4 justify-end items-center mb-4">
              <button
                aria-label="Close menu"
                onClick={toggleMenu}
                className="text-[#0B3D2E] self-end"
              >
                <X size={32} />
              </button>
            </div>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={toggleMenu}
                className={`transition-colors ${
                  pathname === href
                    ? "text-yellow-500"
                    : "hover:text-yellow-500"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </>
      )}
    </nav>
  )
}

export default Navbar
