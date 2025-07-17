const VenueMap = () => (
  <div className="w-full h-full lg:h-[450px] my-8 lg:flex-row flex-col flex items-center bg-primary">
    <div className="lg:w-1/2 w-full py-12 lg:py-0  text-white flex justify-center items-center flex-col space-y-3">
        <h1 className="lg:text-6xl text-3xl  mb-4">Venue</h1>
        <p className="lg:text-lg text-yellow-500">Location: Bola Ahmed Tinubu International Conference Centre</p>
        <p className="lg:text-lg text-yellow-500">Date: 25th-27th August 2025</p>
    </div>
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.2193892069677!2d7.4921611!3d9.043742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b1f8e5b1765%3A0x96688ea11a2ac825!2sAbuja%20International%20Conference%20Centre!5e0!3m2!1sen!2sng!4v1752781441272!5m2!1sen!2sng" 
      width="100%" 
      height="100%" 
      allowFullScreen
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  
  </div>
);

export default VenueMap