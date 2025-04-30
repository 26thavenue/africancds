'use client'

import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold-light">ACDS Summit</h3>
            <p className="text-gray-300 mb-4">
              African Chiefs of Defense Staff Summit 2025
            </p>
            <p className="text-gray-300">July 9-11, 2025</p>
            <p className="text-gray-300">Transcorp Hotel, Abuja</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold-light">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-gold-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/event" className="text-gray-300 hover:text-gold-light transition-colors">
                  Event Details
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-gold-light transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-gray-300 hover:text-gold-light transition-colors">
                  Location
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-300 hover:text-gold-light transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold-light">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={18} className="text-gold-light mr-3" />
                <span className="text-gray-300">+234 123 456 7890</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-gold-light mr-3" />
                <span className="text-gray-300">contact@acdssummit2025.org</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="text-gold-light mr-3" />
                <span className="text-gray-300">Transcorp Hotel, Abuja, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 African Chiefs of Defense Staff Summit. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              A continental initiative for peace and security
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
