import React, { useRef } from 'react';
import { 
  Calendar, 
  Users, 
  Shirt, 
  Thermometer, 
  CreditCard,
  Building2,
  PartyPopper
} from 'lucide-react';

const ParticipantInfoSection = () => {
  const infoItems = [
    {
      icon: <CreditCard className="text-primary" size={24} />,
      title: "Summit Tags",
      description: "Summit tags are controlled items and are required to enter all events."
    },
    {
      icon: <Building2 className="text-primary" size={24} />,
      title: "Summit Venue", 
      description: "The venue for the Summit is Bola Ahmed Tinubu International Conference Centre, Abuja."
    },
    {
      icon: <Users className="text-primary" size={24} />,
      title: "Plenary Sessions",
      description: "Plenary Sessions will be held at Kashim Shettima Hall, Bola Ahmed Tinubu International Conference Centre, Abuja. Please see the Summit Programme of Events for more details."
    },
    {
      icon: <Building2 className="text-primary" size={24} />,
      title: "Exhibitions",
      description: "Exhibitions will be held at the Main Hall of the Bola Ahmed International Conference Centre, Abuja."
    },
    {
      icon: <PartyPopper className="text-primary" size={24} />,
      title: "Gala Night",
      description: "Gala night will be held on 27 August 2025 at the Transcorp Hilton, Abuja."
    },
    {
      icon: <Calendar className="text-primary" size={24} />,
      title: "Participation in the Events",
      description: "Participation in the various events is strictly by invitation."
    },
    {
      icon: <Thermometer className="text-primary" size={24} />,
      title: "Weather",
      description: "Average temperatures in Abuja vary between 21°C and 27°C. Prepare for cooler temperatures in the evening and potential rainfall."
    },

  ];

  const dressCode = [
    { event: "Summit", attire: "Military Service uniform for the Summit (for just military personnel)." },
    { event: "Welcome Reception", attire: "Business casual (jacket without tie) for welcome reception." },
    { event: "Gala Night", attire: "Business formal (jacket with tie) for gala night." }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="max-w-4xl mx-auto mb-4 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 lg:mb-8 text-center">
            Participant Information
          </h2>
          
          
          <div className=" rounded-lg p-6 lg:p-8 mb-2 lg:mb-8 ">
            
            <p className="text-gray-700 leading-relaxed mb-4 lg:text-xl  ">
              Welcome to the African Chiefs of Defence Staff Summit (ACDSS) 2025 holding in Abuja, Nigeria, 25 – 27 August 2025. 
              Information related to the events can be found below. Should you have any questions, kindly contact the ACDSS Organising Committee.
              We look forward to your successful participation at this historic event.
            </p>
          </div>
        </div>

        {/* Event Information Grid */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {infoItems.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      
        {/* Dress Code Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-primary/7 rounded-lg p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shirt className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary">Dress Code</h3>
            </div>
            
            <p className="text-gray-700 mb-6">Recommended dress for the various events is as follows:</p>
            
            <div className="space-y-4">
              {dressCode.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-primary">{item.event}:</span>
                    <span className="text-gray-700 ml-2">{item.attire.split(' for ')[0]}.</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       

       
      </div>
    </section>
  );
};

export default ParticipantInfoSection;