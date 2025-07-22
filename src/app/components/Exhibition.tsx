import { Calendar, MapPin, Target, Users } from "lucide-react"


const Exhibition = () => {
  return (
    <div>
       {/* Exhibition Section */}
      {/* Exhibition Section */}
<section className="relative py-16 lg:py-24 min-h-screen flex items-center">
  {/* Background Image - Very Visible */}
  <div className="absolute inset-0 z-0">
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1743119638006-a01d4625745d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3VtbWl0JTIwRXhoaWJpdGlvbnxlbnwwfHwwfHx8MA%3D%3D")`
      }}
    ></div>
    {/* Light primary overlay to keep background very visible */}
    <div className="absolute inset-0 bg-primary/40"></div>  
  </div>

  <div className="container mx-auto px-6 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      {/* Minimal Text Content */}
      <div className="bg-white/95 backdrop-blur-sm p-8 lg:p-12 rounded-lg shadow-xl">
        <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6">
          Exhibition Space
        </h2>
        <p className="text-lg lg:text-xl text-gray-700 mb-8">
          Showcase your products, services & innovations to African leaders
        </p>
        
        {/* Exhibition Categories with Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <p className="font-semibold text-primary">Technology</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 0a1 1 0 100 2h.01a1 1 0 100-2H9z" clipRule="evenodd"/>
              </svg>
            </div>
            <p className="font-semibold text-primary">Services</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <p className="font-semibold text-primary">Solutions</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
              </svg>
            </div>
            <p className="font-semibold text-primary">Innovations</p>
          </div>
        </div>

        {/* Simple Contact */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-lg text-gray-700 mb-6">
            Ready to exhibit? Contact us:
          </p>
          <a 
            href="mailto:secretariat@acdss.com.ng" 
            className="bg-yellow-500 text-primary px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors inline-flex items-center text-sm lg:text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-6 lg:w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            secretariat@acdss.com.ng
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  )
}

export default Exhibition
