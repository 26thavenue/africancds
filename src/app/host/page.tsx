'use client'

import supabase from "../lib/utils"
import { useEffect, useState } from 'react';
import Papa from 'papaparse'; 
import toast from 'react-hot-toast';


const AdminDashboard = () => {
  const [registrations, setRegistrations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [exporting,setExporting] = useState(false)
  const PAGE_SIZE = 10;

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        setLoading(true);
        const from = (currentPage - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;


        const { data, error } = await supabase
          .from('registrations')
          .select('*')
          .order('created_at', { ascending: false })
          .range(from, to);

        if (error) throw error;
        setRegistrations(data || []);
        setTotalCount(totalCount || 0);
      } catch (err) {
        console.error('Error fetching registrations:', err);
        setError('Failed to load registrations');
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
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



  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
     
      <aside className="w-full md:w-64 bg-[#0B3D2E]/90 text-white p-6 hidden lg:block">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav>
          <ul className="space-y-4 ">
            <li className="font-semibold">Registered Delegates</li>
          </ul>
        </nav>
      </aside>

       <div className ="flex flex-col gap-4 w-full ">
        <main className="flex-1 p-6 sm:p-10">
        <header className="mb-6 flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold text-gray-800">Delegates Overview</h1>
            <p className="text-gray-600">All registered participants</p>
          </div>
          

          <button
            onClick={() => handleExportCSV()}
            className={` font-medium px-8 py-3 rounded-lg  inline-block
                    ${exporting ? "bg-gray-400 cursor-not-allowed text-white" :"bg-primary text-white cursor-pointer hover:bg-primary/90 transition-colors"} 
            `}
                    >
                      {exporting ? 'Exporting ...' : 'Export to CSV'}
          </button>
        </header>

        {
        loading ? 
          <div>Loading ...</div>
        :
         error ? <div className="border-l-4 border-red-600 p-4 bg-red-50 rounded-lg">{error}</div>  :

        <>
           <div className="flex flex-wrap gap-4 mb-8">
          <div className="shadow bg-white rounded-lg w-full sm:w-[250px] h-[150px] p-4 flex flex-col justify-between">
            <h1 className="text-lg font-bold">Number of Attendees</h1>
            <h3 className="text-6xl font-bold text-center text-primary">{registrations.length}</h3>
          </div>

          <div className="shadow bg-white rounded-lg w-full sm:w-[250px] h-[150px] p-4 flex flex-col justify-between">
            <h1 className="text-lg font-bold">Standard Delegates</h1>
            <h3 className="text-6xl font-bold text-center text-primary">
              {registrations.filter(r => r.delegation_type === 'Standard').length}
            </h3>
          </div>

          <div className="shadow bg-white rounded-lg w-full sm:w-[250px] h-[150px] p-4 flex flex-col justify-between">
            <h1 className="text-lg font-bold">Vendors</h1>
            <h3 className="text-6xl font-bold text-center text-primary">
              {registrations.filter(r => r.delegation_type === 'Vendor').length}
            </h3>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-auto rounded-lg shadow bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-[#0B3D2E] text-white">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Name</th>
                <th className="px-4 py-3 text-left font-medium">Email</th>
                <th className="px-4 py-3 text-left font-medium">Phone</th>
                <th className="px-4 py-3 text-left font-medium">Country</th>
                <th className="px-4 py-3 text-left font-medium">Organization</th>
                <th className="px-4 py-3 text-left font-medium">Position</th>
                <th className="px-4 py-3 text-left font-medium">Delegation</th>
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
                </tr>
              ))}
            </tbody>
          </table>
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
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
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
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
      </div>
     

    </div>
  );
};

export default AdminDashboard;
