const Banner = () => {
  return (
   
         <section className="py-24 bg-primary text-white my-24 w-[80dvw] mx-auto rounded-2xl">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6">
            Join Us in Abuja
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base lg:text-lg">
            Register now to secure your participation in this landmark event for African defense and security.
          </p>
          <a href="/register" className="bg-white hover:bg-gray-100 text-primary font-medium px-8 py-3 rounded-lg transition-colors inline-block">
            Register for the Summit
          </a>
        </div>
      </section>
    
  )
}

export default Banner