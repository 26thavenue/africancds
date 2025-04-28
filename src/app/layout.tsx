'use client';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from "./context";
import "./globals.css"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html>
      <AuthProvider>
        <body>
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
