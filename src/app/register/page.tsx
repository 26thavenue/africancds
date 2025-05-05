'use client'

import { useState } from "react";
import Link from "next/link"
import supabase from "../lib/utils"

const Register = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [delgeateOption, setDelegateOption] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  

const createPaystackPayment = async(data: any) => {
  try {
    const { default: PaystackPop } = await import("@paystack/inline-js");
    const paystackInstance = new PaystackPop();

    const payload = {
      key: process.env.NEXT_PUBLIC_PAYSTACK_KEY!,
      email: data.email,
      amount: 3000 * 100,
      currency: "NGN",
      firstName: data?.firstName,
      lastName: data?.lastName,
      onCancel: () => alert("Payment window closed."),
      onSuccess: async (response: any) => {
        console.log("Payment Success:", response);
        await addToDB(data);
        await submitEmail(data, "vendor");
        setFormSubmitted(true);
      }
    };

    paystackInstance.newTransaction(payload);
  } catch (err) {
    console.error("Paystack Error:", err);
    setError("Payment failed. Please try again.");
    setLoading(false);
  }
};


const submitEmail = async (data: any, type: "standard" | "vendor" ) => {
  try {
    const endpoint = type === "standard" ? "/api/standard-email" : "/api/vendor-email";
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: data.email }),
    });

    if (!res.ok) {
      setError("An error occurred")

    }

  } catch (err) {
    console.error("Email Error:", err);
    setError("Failed to send confirmation email.");
  }
};


const addToDB = async(data:any) => {
  try {

      const { error } = await supabase
        .from('registrations')
        .insert([{
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          country: data.country,
          organization: data.organization,
          position: data.position,
          delegation_type: data.delegationType,
          dietary_requirements: data.dietary,
          accessibility_requirements: data.accessibility,
          created_at: new Date().toISOString()
        }])
        .select();
      if (error) {
        setError("An error occurred" +  error);
      }
      console.log(error)
      
    } catch (err) {
      console.error("Registration error:", err);
      setError("Failed to submit registration. Please try again.");
    } finally {
      setLoading(false);
    }
}

  
const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const delegationType = data.delegationType?.toString().toLowerCase();

  try {
    

    if (delegationType === "standard") {
      await addToDB(data);
      await submitEmail(data, "standard");
      setFormSubmitted(true)
    } else if (delegationType === "vendor") {
      if (typeof window !== "undefined") {
        createPaystackPayment(data); 
      }    
    }
    
  } catch (err) {
    console.error("Error handling submission:", err);
    setLoading(false)
    setError("An error occurred. Please try again.");
  }
    
};

 
  
  return (
    <div className="min-h-screen flex flex-col">
     
      
      
      {/* Hero Section */}
      <div className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Summit <span className="text-gold-light">Registration</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Register to attend the African Chiefs of Defense Staff Summit 2025
          </p>
        </div>
      </div>
      
      {/* Registration Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {formSubmitted ? (
              <>
                <div className="bg-green-50 border-l-4 border-primary p-8 rounded-lg text-center">
                <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h2 className="text-2xl font-bold text-primary mb-4">Registration Submitted Successfully!</h2>
                <p className="text-primary mb-6">
                  Thank you for registering for the African Chiefs of Defense Staff Summit 2025. We have received your registration and will be in touch shortly with confirmation details.
                </p>
                <p className="text-primary">
                  A confirmation email has been sent to the address you provided.
                </p>

                
              </div>
              <div className="my-8">
                 <Link href="/" className="underline text-primary text-xl text-center"> Go Home</Link>
              </div>
             
              </>
              
            ) : (
              <>
                <h2 className="text-3xl font-bold text-navy-dark mb-8 text-center">
                  Registration Form
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8 ">
                    <h3 className="text-lg font-semibold text-navy-dark mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy focus:border-navy"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy focus:border-navy"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy focus:border-navy"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone" 
                          name="phone"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy focus:border-navy"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-navy-dark mb-4">Professional Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                          Country *
                        </label>
                        <select
                          id="country"
                          name="country"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy focus:border-navy"
                        >
                          <option value="">Select your country</option>
                          <option value="Algeria">Algeria</option>
                          <option value="Angola">Angola</option>
                          <option value="Benin">Benin</option>
                          <option value="Botswana">Botswana</option>
                          <option value="Burkina Faso">Burkina Faso</option>
                          {/* Add all 55 African countries in a real implementation */}
                          <option value="Nigeria">Nigeria</option>
                          <option value="South Africa">South Africa</option>
                          <option value="Egypt">Egypt</option>
                          <option value="Kenya">Kenya</option>
                          <option value="Ghana">Ghana</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                          Organization/Institution *
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy focus:border-navy"
                        />
                      </div>
                      <div>
                        <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                          Position/Rank 
                        </label>
                        <input
                          type="text"
                          id="position"
                          name="position"
                          
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy focus:border-navy"
                        />
                      </div>
                      <div>
                        <label htmlFor="delegationType" className="block text-sm font-medium text-gray-700 mb-1">
                          Delegation Type *
                        </label>
                        <select
                          id="delegationType"
                          name="delegationType"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy focus:border-navy"
                          value={delgeateOption}
                          onChange={(e) => setDelegateOption(e.target.value)}
                        >
                          <option value="">Select delegation type</option>
                          <option value="Standard">Standard</option>
                          <option value="Vendor">Vendor</option>
                          
                        </select>
                      </div>

                      {delgeateOption === 'Vendor' && (
                        <div className="mt-4 p-4 bg-gray-50 border border-primary rounded-md md:col-span-2 text-center">
                          <p className="text-lg font-bold text-primary">
                            Vendorship fee is $3000
                          </p>
                         
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-12 border-t border-gray-200 pt-8">
              <h3 className="text-xl font-semibold text-navy-dark mb-4">
                Registration Information
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>All registrations are subject to verification and approval.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Official invitations with security clearance details will be sent following approval.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>For any registration inquiries, please contact: secretariat@acdss.com.ng</span>
                </li>
              </ul>
                  </div>

                  {error && <div className="border-l-4 border-red-600 p-8 bg-red-50 rounded-lg">{error}</div>}
                  
                  
                  {/* <div className="border-l-4 border-red-600 p-8 bg-red-50 rounded-lg">This error is on me</div>  */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-primary cursor-pointer hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-lg transition-colors inline-block"
                    >
                      {loading ? 'Submitting...' : delgeateOption == "Vendor" ?  "Payment and Registration" : "Register for Event"}
                    </button>
                  </div>
                </form>
              </>
            )}
            
           
          </div>
        </div>
      </section>


    
    </div>
  );
};

export default Register;