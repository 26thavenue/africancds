'use client';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from "./context";
import {DM_Sans, Instrument_Serif} from 'next/font/google'
import "./globals.css"

interface LayoutProps {
  children: React.ReactNode;
}

const dm = DM_Sans({ subsets: ['latin'] })

const Layout = ({ children }: LayoutProps) => {
  return (
    <html>
      <AuthProvider>
        <body className={dm.className}>
          <div className="flex flex-col font-primary">
          <Navbar />
          <main className="flex-1 min-h-screen">
            {children}
            <Toaster position="top-right" reverseOrder={false} />
            </main>
            <Footer />
          </div>
        </body>
        
      </AuthProvider>
    </html>
    
  );
};

export default Layout;
