import { Calendar, MapPin, Target, Users } from "lucide-react"


const Exhibition = () => {
  return (
    <div>
        <section className="relative py-16 lg:py-24">
 
            <div className="absolute inset-0 z-0">
                <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")`
                }}
                ></div>
                <div className="absolute inset-0 bg-primary/90"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Defence & Security Exhibition
                    </h2>
                    <p className="text-base lg:text-lg text-white/90 max-w-3xl mx-auto">
                    Showcase cutting-edge defence technologies, security solutions, and innovations 
                    to African military leaders and defence professionals.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-yellow-500 mb-6">
                        Exhibition Highlights
                    </h3>
                    
                    <div className="space-y-4">
                        {[
                        {
                            title: "Defence Technology Showcase",
                            description: "Display the latest military equipment, weapons systems, and defence innovations"
                        },
                        {
                            title: "Security Solutions",
                            description: "Present cybersecurity, surveillance, and intelligence gathering technologies"
                        },
                        {
                            title: "Networking Opportunities",
                            description: "Connect with Chiefs of Defence Staff and senior military officials from 54 African nations"
                        },
                        {
                            title: "B2B Meetings",
                            description: "Scheduled meetings with potential clients and strategic partners"
                        },
                        {
                            title: "Product Demonstrations",
                            description: "Live demonstrations and interactive presentations of your solutions"
                        }
                        ].map((feature, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <div className="bg-yellow-500 h-3 w-3 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                            <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                            <p className="text-white/80">{feature.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>

                     <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-yellow-500 mb-6">
            Exhibition Details
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-500 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Duration</h4>
                <p className="text-white/80">August 25-27, 2025 (3 Days)</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-500 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Venue</h4>
                <p className="text-white/80">Bola Ahmed Tinubu International Conference Centre</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-500 p-3 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Expected Attendees</h4>
                <p className="text-white/80">500+ Defence Officials & Industry Leaders</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-500 p-3 rounded-full">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Focus Areas</h4>
                <p className="text-white/80">Defence Technology, Security Solutions, Military Equipment</p>
              </div>
            </div>
          </div>
        </div>

                </div>

                

                {/* Contact Information */}
                <div className="text-center">
                    <p className="text-white/90 ttext-base lg:text-lg mb-4">
                    Interested in exhibiting your products and solutions?
                    </p>
                    <p className="text-white/90 text-base lg:text-lg mb-4">
                    Contact us for exhibition opportunities and booth reservations:
                    </p>
                   
                    <a 
                    href="mailto:secretariat@acdss.com.ng" 
                    className="bg-yellow-500 text-primary px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center text-lg"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    secretariat@acdss.com.ng
                    </a>
                </div>
                </div>
            </div>
   
    </section>
</div>
  )
}

export default Exhibition
