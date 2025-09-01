'use client'


import Link from "next/link"

import Navbar from "../components/Navbar";
import { Home, Calendar, Star } from "lucide-react";




const Register = () => {
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [delegateOption, setDelegateOption] = useState<string>("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [countries, setCountries] = useState([]);

// useEffect (() => {
//   fetch('https://restcountries.com/v3.1/all?fields=name')
//     .then(response => response.json())
//     .then(data => {
//       const countryNames = data.map((country:any) => country?.name?.common).sort();
//       setCountries(countryNames);
//     })
//     .catch(error => console.error('Error fetching countries:', error));
// }, []);

// const countryOptions = countries.map(country => ({
//   value: country,
//   label: country
// }));
  

// const createPaystackPayment = async(data: any) => {
//   try {
//     const { default: PaystackPop } = await import("@paystack/inline-js");
//     const paystackInstance = new PaystackPop();

//     const payload = {
//       key: process.env.NEXT_PUBLIC_PAYSTACK_KEY!,
//       email: data.email,
//       amount: 3000 * 100,
//       currency: "NGN",
//       firstName: data?.firstName,
//       lastName: data?.lastName,
//       onCancel: () => alert("Payment window closed."),
//       onSuccess: async (response: any) => {
//         console.log("Payment Success:", response);
//         await addToDB(data);
//         await submitEmail(data, "vendor");
//         setFormSubmitted(true);
//       }
//     };

//     paystackInstance.newTransaction(payload);
//   } catch (err) {
//     console.error("Paystack Error:", err);
//     setError("Payment failed. Please try again.");
//     setLoading(false);
//   }
// };


// const submitEmail = async (
//   data: any,
//   type: "standard" | "vendor" | "exhibitor" | "participant" | "sponsor"
// ) => {

//   console.log(type)
//   try {
//     let endpoint = "";

//     if (type === "standard") {
//       endpoint = "/api/standard-email";
//     } 
//     else if (type === "vendor") {
//       endpoint = "/api/vendor-email";
//     } 
//     else {
//       endpoint = "/api/multipleUser-Email";
//     }

//     const body =
//       type === "standard" || type === "vendor"
//         ? { email: data.email }
//         : {
//             email: data.email,
//             emailType: type.charAt(0).toUpperCase() + type.slice(1), 
//           };

//     const res = await fetch(endpoint, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(body),
//     });

//     if (!res.ok) {
//       setError("An error occurred");
//       return;
//     }

//     const result = await res.json();
//     console.log("Email Sent:", result);

//   } catch (err) {
//     console.error("Email Error:", err);
//     setError("Failed to send confirmation email.");
//   }
// };


// const addToDB = async(data:any) => {
//   try {

//       const { error } = await supabase
//         .from('registrations')
//         .insert([{
//           first_name: data.firstName,
//           last_name: data.lastName,
//           email: data.email,
//           phone: data.phone,
//           country: data.country,
//           organization: data.organization,
//           position: data.position,
//           delegation_type: data.delegationType,
//           dietary_requirements: data.dietary,
//           accessibility_requirements: data.accessibility,
//           exhibitItem: data.exhibitItem,
//           created_at: new Date().toISOString()
//         }])
//         .select();
//       if (error) {
//         setError("An error occurred" +  error);
//       }
//       // console.log(error)
      
//     } catch (err) {
//       console.error("Registration error:", err);
//       setError("Failed to submit registration. Please try again.");
//     } finally {
//       setLoading(false);
//     }
// }

  
// const handleSubmit = async(e: React.FormEvent) => {
//     e.preventDefault();

//     // console.log("Hit")

//     setLoading(true);
//     setError(null);

//     const form = e.target as HTMLFormElement;
//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData.entries());

//     const delegationType = data.delegationType?.toString().toLowerCase();

//   try {
     

//     if (delegationType === "standard") {
//       await addToDB(data);
//       await submitEmail(data, "standard");
//       setFormSubmitted(true)
//     } else if (delegationType === "vendor") {
//       if (typeof window !== "undefined") {
//         createPaystackPayment(data); 
//       }    
//     }else if (delegationType === 'exhibitor' || delegationType === 'participant' || delegationType === 'sponsor'){
//       console.log(data)
//       await addToDB(data)
//       await submitEmail(data,delegationType)
//       setFormSubmitted(true)
//     }
    
//   } catch (err) {
//     console.error("Error handling submission:", err);
//     setLoading(false)
//     setError("An error occurred. Please try again.");
//   }
    
// };

 
  
  return (
    <div className="min-h-screen flex flex-col">

      <div 
      // style={{
      //   backgroundImage: "url('/pattern2.png')",
      //   backgroundRepeat: "repeat",
      //   backgroundSize: "auto"
      // }} 
      className="bg-primary mb-16   flex flex-col items-center justify-center">
        <Navbar/>
        {/* <div className="flex-1 container mx-auto px-6 text-center min-h-[70dvh] flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Summit <span className="text-yellow-500">Registration</span>
          </h1>
          <p className="text-lg lg:text-2xl text-gray-300 max-w-3xl mx-auto">
            Register to attend the African Chiefs of Defence Summit 2025
          </p>
        </div> */}
      </div>
      
      <div className=" mt-16 mb-32 flex items-center justify-center p-4">
      <div className=" rounded-3xl p-12 text-center max-w-3xl  w-full transform ">
        {/* Icon */}
        <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 ">
          <Calendar className="w-10 h-10 text-white" />
        </div>

        {/* Main Message */}
        <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-6">
          Registration Has Been Closed
        </h1>
        
        <p className="text-base lg:text-xl text-gray-800 mb-10 leading-relaxed">
          We're sorry, but registration for this event is no longer available. 
          Don't worry though - there's still plenty to explore!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href='/'>
            <button
            
            className="bg-primary cursor-pointer hover:bg-primary/90 text-white px-8 py-4 rounded-xl  transition-all duration-300  hover:shadow-lg flex items-center justify-center gap-3 min-w-[200px]"
          >
            <Home className="w-6 h-6" />
            <p className="text-sm lg:text-base">Go to Home Page</p>
          </button>
          </Link>
          

          <Link href='/gallery'>
            <button
            
            className="bg-amber-500 cursor-pointer hover:bg-amber-600 text-white px-8 py-4 rounded-xl transition-all duration-300  hover:shadow-lg flex items-center justify-center gap-3 min-w-[200px]"
          >
            <Star className="w-6 h-6" />
            <p className="text-sm lg:text-base">Check Highlights</p>
            
          </button>
          </Link>

          
        </div>
      </div>
    </div>

    
    </div>
  );
};

export default Register;