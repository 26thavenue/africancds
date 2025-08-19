'use client'

import supabase from "../lib/utils"
import { useEffect, useState } from 'react';
import Papa from 'papaparse'; 
import toast from 'react-hot-toast';
import ProtectedRoute from "../components/ProtectedRoute";
import LoadingSpinner from "../components/Spinner";
import Select from 'react-select';



const AdminDashboard = () => {
  const [registrations, setRegistrations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [exporting,setExporting] = useState(false)
  const [mailSending, setMailSending] = useState<string | null>(null);
  const [stats, setStats] = useState<{ total: number; standard: number; vendor: number; exhibitor:number } | null>(null);
  const [delegationFilter, setDelegationFilter] = useState<string>("All");


  const PAGE_SIZE = 10;
  const ALL_TYPES = ["Standard", "Vendor", "Participant", "Exhibitor", "Speaker"];


const fetchRegistrations = async (range?: { from: number; to: number }, filterValue?: string) => {
      try {
        setLoading(true);

        let query = supabase
          .from('registrations')
          .select('*', { count: 'exact' }) 
          .order('created_at', { ascending: false });

        const currentFilter = filterValue ?? delegationFilter;
        
        if (currentFilter !== "All") {
          console.log(currentFilter);
          query = query.eq("delegation_type", currentFilter);
        }

        if (range) {
          query = query.range(range.from, range.to);
        }

        const { data, error, count } = await query;

        if (error) throw error;

        setRegistrations(data || []);
        setTotalCount(count || data?.length || 0);
      } catch (err) {
        console.error('Error fetching registrations:', err);
        setError('Failed to load registrations');
      } finally {
        setLoading(false);
      }
};

const fetchStats = async () => {
    const { data, error } = await supabase
      .from('registrations')
      .select('*');

    if (error) throw error;

    return {
      total: data.length,
      standard: data.filter(d => d.delegation_type === 'Standard').length,
      vendor: data.filter(d => d.delegation_type === 'Vendor').length,
      exhibitor: data.filter(d => d.delegation_type === 'Exhibitor').length,
    }
};

  useEffect(() => {
    const from = (currentPage - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    fetchRegistrations({ from, to });

    
  }, [currentPage]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const result = await fetchStats();
        setStats(result);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    };

    getStats();
}, []);

  
const handleExportCSV = async () => {
  setExporting(true);

 try {
    
    const { data, error } = await supabase
      .from('registrations')
      .select('*');
    
    if (error) throw error;

    
    const csv = Papa.unparse(data);  

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', 'registrations.csv');
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('Exported successfully!');
  } catch (err) {
    console.error('Error exporting CSV:', err);
    setError('Failed to export CSV');
     toast.error('Failed to export CSV!');
  } finally {
    setExporting(false);
  }
};

const handleSendConfirmationMail = async(email:string, id:string) =>{
  setMailSending(id);
   try {
    
    const res = await fetch("/api/confirmVendor-email", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email}),
    });

    toast.success("Confirmation Email has been sent")

    if (!res.ok) {
      setError("An error occurred")
    }

  } catch (err) {
    console.error("Email Error:", err);
    setMailSending(null)
    setError("Failed to send confirmation email.");
  }finally{
    setMailSending(null)
  }
}



  return (
    <ProtectedRoute>
       <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
     
     
      <aside className="w-full md:w-64 bg-primary/90 text-white p-6 hidden lg:block">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav>
          <ul className="space-y-4 ">
            <li className="font-semibold">Registered Delegates</li>
          </ul>
        </nav>
      </aside>

       <div className ="flex flex-col gap-4 w-full ">
        <main className="flex-1 p-6 sm:p-10">
        <header className="mb-6 flex  flex-col lg:flex-row space-y-4 lg:space-y-0 items-center justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold text-gray-800">Delegates Overview</h1>
            <p className="text-gray-600">All registered participants</p>
          </div>
          
          <div className="flex items-center gap-8">
            <button
            onClick={handleExportCSV}
            className={`relative font-medium px-8 py-3 rounded-lg inline-block h-[44px] overflow-hidden
              ${exporting
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-primary text-white cursor-pointer hover:bg-primary/90 transition-colors"
              }
            `}
          >
            <span
              className={`transition-opacity duration-300 ease-in-out ${
                exporting ? "opacity-0" : "opacity-100"
              }`}
            >
              Export to CSV
            </span>

            <span
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
                exporting ? "opacity-100" : "opacity-0"
              }`}
            >
              <LoadingSpinner />
            </span>
          </button>

          <select
            value={delegationFilter}
            onChange={(e) => {
              setDelegationFilter(e.target.value);
              console.log(e.target.value)
              setCurrentPage(1); 
              fetchRegistrations({ from: 0, to: PAGE_SIZE - 1 },e.target.value);
            }}
            className="border px-3 py-2 rounded-md cursor-pointer"
          >
            <option value="All" className="cursor-pointer ">All Delegates</option>
            {ALL_TYPES.map((type) => (
              <option key={type} value={type} className="">
                {type}
              </option>
            ))}
           
          </select>
          </div>

          

        </header>

        {
        loading ? 
          <div>Loading ...</div>
        :
         error ? <div className="border-l-4 border-red-600 p-4 bg-red-50 rounded-lg">{error}</div>  :

        <>
           <div className="flex flex-wrap  gap-4 mb-8 w-full ">
          <div className="shadow bg-white rounded-lg w-full sm:w-[250px] h-[150px] p-4 flex flex-col justify-between">
            <h1 className="text-lg font-bold">Number of Attendees</h1>
            <h3 className="text-6xl font-bold text-center text-primary">{stats && stats.total}</h3>
          </div>

          <div className="shadow bg-white rounded-lg w-full sm:w-[250px] h-[150px] p-4 flex flex-col justify-between">
            <h1 className="text-lg font-bold">Standard Delegates</h1>
            <h3 className="text-6xl font-bold text-center text-primary">
              {stats && stats.standard}
            </h3>
          </div>

          <div className="shadow bg-white rounded-lg w-full sm:w-[250px] h-[150px] p-4 flex flex-col justify-between">
            <h1 className="text-lg font-bold">Vendors</h1>
            <h3 className="text-6xl font-bold text-center text-primary">
              {stats && stats.vendor}
            </h3>
          </div>

          <div className="shadow bg-white rounded-lg w-full sm:w-[250px] h-[150px] p-4 flex flex-col justify-between">
            <h1 className="text-lg font-bold">Exhibitor</h1>
            <h3 className="text-6xl font-bold text-center text-primary">
              {stats && stats.exhibitor}
            </h3>
        </div>
        </div>

        
        

        {/* Table */}
        <div className="overflow-x-auto rounded-lg shadow bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Name</th>
                <th className="px-4 py-3 text-left font-medium">Email</th>
                <th className="px-4 py-3 text-left font-medium">Phone</th>
                <th className="px-4 py-3 text-left font-medium">Country</th>
                <th className="px-4 py-3 text-left font-medium">Organization</th>
                <th className="px-4 py-3 text-left font-medium">Position</th>
                <th className="px-4 py-3 text-left font-medium">Delegation</th>
                <th className="px-4 py-3 text-left font-medium">Actions</th>
                <th className="px-4 py-3 text-left font-medium">Extra Detail</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((d, idx) => (
                <tr key={idx} className="border-b border-gray-200">
                  <td className="px-4 py-3">{d.first_name} {d.last_name}</td>
                  <td className="px-4 py-3">{d.email}</td>
                  <td className="px-4 py-3">{d.phone}</td>
                  <td className="px-4 py-3">{d.country}</td>
                  <td className="px-4 py-3">{d.organization}</td>
                  <td className="px-4 py-3">{d.position || "-"}</td>
                  <td className="px-4 py-3">{d.delegation_type}</td>
                  
                  <td>
                    {d.delegation_type == "Vendor" ? 
                   <button
                    onClick={() => handleSendConfirmationMail(d.email, idx.toString())}
                    className="bg-primary/90 relative min-w-50 px-6 py-2 text-sm text-white rounded-sm cursor-pointer h-[40px] overflow-hidden"
                  >
                    <span
                      className={`transition-opacity duration-300 ease-in-out ${
                        mailSending === idx.toString() ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      Send Confirmation Email
                    </span>

                    <span
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
                        mailSending === idx.toString() ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <LoadingSpinner />
                    </span>
                  </button>
 : 
                    <button disabled className="bg-gray-100 px-6 py-2 text-sm text-black cursor-not-allowed rounded-sm max-h-sm" >
                        Send Confirmation Mail
                    </button>   
                    }
                    
                  </td>

                  <td className="px-4 py-3">{d.exhibitItem }</td>
                </tr>
              ))}

             
            </tbody>

            
          </table>

           {registrations.length === 0 && (
              <div className="bg-gray-100 rounded-lg shadow p-8 text-center w-full">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      No applications found
                    </h3>
                    <p className="text-gray-500">
                      {delegationFilter === "All" 
                        ? "No registrations available at the moment." 
                        : `No ${delegationFilter.toLowerCase()} applications found.`
                      }
                    </p>
                  </div>
                  {delegationFilter !== "All" && (
                    <button
                      onClick={() => {
                        setDelegationFilter("All");
                        setCurrentPage(1);
                        fetchRegistrations({ from: 0, to: PAGE_SIZE - 1 }, "All");
                      }}
                      className="text-primary cursor-pointer hover:text-primary/80 font-medium"
                    >
                      View all applications
                    </button>
                  )}
                </div>
              </div>)}
        </div>
        </>
        
        }
        {error && <div className="border-l-4 border-red-600 p-4 bg-red-50 rounded-lg">{error}</div>}

        {/* Cards */}
       
        </main>

      <div className=" flex justify-between items-center max-w-md mb-8 p-6 sm:p-10 mx-auto">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
        >
          Previous
        </button>

        <span className="text-sm text-gray-600 mx-6">Page {currentPage}</span>

        <button
          onClick={() =>
            setCurrentPage(prev =>
              prev < Math.ceil(totalCount / PAGE_SIZE) ? prev + 1 : prev
            )
          }
          disabled={currentPage >= Math.ceil(totalCount / PAGE_SIZE)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
        >
          Next
        </button>
      </div>
      </div>
     

    </div>
    </ProtectedRoute>
   
  );
};

export default AdminDashboard;
