

import Footer from "./components/Footer";
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from "./context";
import {DM_Sans, Instrument_Serif} from 'next/font/google'
import "./globals.css"

interface LayoutProps {
  children: React.ReactNode;
}


const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-instrument-serif',
})

export const metadata = {
  title: {
    default: "ACDS Summit 2025",
    template: "%s | ACDS Summit",
  },
  description: "Africa's top defense summit connecting military leaders across the continent.",
  icons: {
    icon: "/logo.PNG", 
  },
  openGraph: {
    title: "ACDS Summit 2025",
    description: "Explore event details, gallery and logistics for Africa’s premier defense summit.",
    url: "https://japa.run",
    siteName: "ACDS Summit",
    images: [
      {
        url: "/logo.PNG", 
        width: 1200,
        height: 630,
        alt: "ACDS Summit Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACDS Summit 2025",
    description: "Join Africa’s defense leaders in Abuja, Nigeria for a historic summit.",
    images: ["/logo.PNG"],
  },
}


const Layout = ({ children }: LayoutProps) => {
  return (
    <html className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <AuthProvider>
        <body>
          <div className="flex flex-col font-primary">
            <h1 className="font-instrument"></h1>
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
