const VenueMap = () => (
  <div className="w-full h-full lg:h-[450px] my-8 lg:flex-row flex-col flex items-center bg-primary">
    <div className="lg:w-1/2 w-full py-12 lg:py-0  text-white flex justify-center items-center flex-col space-y-3">
        <h1 className="lg:text-6xl text-3xl  mb-4">Venue</h1>
        <p className="lg:text-lg text-yellow-500">Location: Transcorp Hilton Hotel Abuja</p>
        <p className="lg:text-lg text-yellow-500">Date: 25th-27th August 2025</p>
    </div>
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8845047082264!2d7.492405974672892!3d9.07428539098889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd42594163dd1%3A0x2b97d2308e5f8ee1!2sTranscorp%20Hilton%20Abuja!5e0!3m2!1sen!2sng!4v1746470061997!5m2!1sen!2sng" 
      width="100%" 
      height="100%" 
      allowFullScreen
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  
  </div>
);

export default VenueMap