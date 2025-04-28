'use client'

import Link from "next/link"; // Correct import
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#0B3D2E] text-white py-8 px-6 lg:px-24 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-yellow-500 font-bold text-2xl">ACDS</span>
          <span className="hidden md:inline-block font-semibold">Summit</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 items-center text-white font-medium">
          <Link href="/" className="hover:text-yellow-500 transition-colors">Home</Link>
          <Link href="/event" className="hover:text-yellow-500 transition-colors">Event Details</Link>
          <Link href="/gallery" className="hover:text-yellow-500 transition-colors">Gallery</Link>
          <Link href="/location" className="hover:text-yellow-500 transition-colors">Location</Link>
          <Link href="/register" className="hover:bg-yellow-500 px-4 py-2 rounded transition-colors">Register</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          onClick={toggleMenu}
          className="md:hidden w-10 h-10 flex justify-end items-center cursor-pointer z-50"
        >
          {isOpen ? (
            <X size={32} className="bg-primary " />
          ) : (
            <Menu size={32} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay and Drawer */}
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
            <Link href="/" className="hover:text-yellow-500 transition-colors" onClick={toggleMenu}>Home</Link>
            <Link href="/event" className="hover:text-yellow-500 transition-colors" onClick={toggleMenu}>Event Details</Link>
            <Link href="/gallery" className="hover:text-yellow-500 transition-colors" onClick={toggleMenu}>Gallery</Link>
            <Link href="/location" className="hover:text-yellow-500 transition-colors" onClick={toggleMenu}>Location</Link>
            <Link href="/register" className="hover:bg-yellow-500 transition-colors" onClick={toggleMenu}>Register</Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
