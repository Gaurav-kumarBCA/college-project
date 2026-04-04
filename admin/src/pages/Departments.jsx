// import React, { useEffect, useState } from 'react'
// import Layout from '../components/Layout'
// import withAuth from '../components/withAuth';

// const Departments = () => {
//   const [departmentData,setDepartmentData]=useState([]);
//   const [loading,setLoading]=useState(false)
//   useEffect(()=>{
//     const getDepartment=async()=>{
//       try {
//         setLoading(true);
//         const url=import.meta.env.VITE_SERVER_URL;
//         const res=await fetch(`${url}/admin/department`,{
//           method:"GET",
//           headers:{
//             "Content-Type":"application/json",
//             Authorization:`Bearer ${localStorage.getItem("token")}`
//           },
//         });
//         const data=await res.json();
//         setDepartmentData(data.data);
//          if(!data.success){
//         alert(data.error || "Somthing Went Wrong");
//         return
//       }
//       } catch (error) {
//         console.log(error)
//       } finally{
//         setLoading(false);
//       }
//     }
//     getDepartment();
//   },[]);
//   return (
//     <Layout>
//       <div className='w-full min-h-full bg-sky-100 shadow-xl/30 rounded-2xl relative'>
//        <div className='md:w-237 w-80 h-10 md:ml-4 ml-3 rounded-2xl bg-sky-300  flex items-center justify-center md:h-12  relative top-6'>
//         <h1 className='md:text-2xl text-white font-bold italic '>Departments Management</h1>
//     </div>
//      {loading && (
//     <div className='flex justify-center items-center h-40'>
//       <h1 className='text-xl font-semibold'>Loading...</h1>
//     </div>
//    )}
//    {!loading && departmentData.length >0 && (
//     <div  className='h-157 md:h-98 w-full   mt-10 rounded-bl-2xl rounded-br-2xl overflow-hidden overflow-y-scroll no-scrollbar select-none'>
//       <table  className='min-w-full table-auto border-collapse divide-y  divide-sky-200 '>
//       <thead className='bg-sky-400 sticky top-0 z-10'>
//         <tr>
//            <td scope='col' className='text-[10px] md:text-[17px] px-1 py-1 md:px-6 md:py-3 text-left font-medium
//             uppercase text-white tracking-wider'>#</td>
//           <td scope='col' className='text-[10px] md:text-[17px] px-1 py-1 md:px-6 md:py-3 text-left font-medium
//             uppercase text-white tracking-wider'>HOD Name</td>
//             <td scope='col' className='text-[10px] md:text-[17px] px-1 py-1 md:px-6 md:py-3 text-left font-medium
//             uppercase text-white tracking-wider'>Department Name</td>
//             <td scope='col' className='text-[10px] md:text-[17px] px-1 py-1 md:px-6 md:py-3 text-left font-medium
//             uppercase text-white tracking-wider'>Description</td>
//         </tr>
//       </thead>
//       <tbody  className='bg-sky-300 border-collapse'>
//         {departmentData.map((items,index)=>(
//           <tr key={items._id} className='border border-x border-sky-200'>
//             <td className="text-white font-medium break-word text-[10px] md:text-[17px] px-1 py-3 md:px-6 md:py-6 ">{index + 1}</td>
//             <td className="text-white font-medium break-word text-[10px] md:text-[17px] px-1 py-3 md:px-6 md:py-6 ">{items.HODName}</td>
//             <td className="text-white font-medium break-word text-[10px] md:text-[17px] px-1 py-3 md:px-6 md:py-6 ">{items.departmentName}</td>
//             <td className="text-white font-medium break-word text-[10px] md:text-[17px] px-1 py-3 md:px-6 md:py-6 ">{items.description}</td>
//           </tr>
//         ))}
//       </tbody>
//       </table>
//     </div>
//    )}
//     {!loading && departmentData.length === 0 &&(
//       <div className='flex justify-center items-center  h-40'>
//         <h1 className='text-black font-semibold italic  text-lg '>Department data not Found</h1>
//       </div>
//     )}
//     </div>
//     </Layout>
//   )
// }

// export default withAuth(Departments)


// import React, { useEffect, useState } from 'react';
// import Layout from '../components/Layout';
// import withAuth from '../components/withAuth';

// const Departments = () => {
//   const [departmentData, setDepartmentData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const getDepartment = async () => {
//       try {
//         setLoading(true);
//         const url = import.meta.env.VITE_SERVER_URL;
//         const res = await fetch(`${url}/admin/department`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`
//           },
//         });
//         const data = await res.json();
//         if (!data.success) {
//           alert(data.error || "Something Went Wrong");
//           return;
//         }
//         setDepartmentData(data.data);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getDepartment();
//   }, []);

//   return (
//     <Layout>
//       <div className="w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] 
// overflow-hidden bg-sky-400 shadow-xl/30 rounded-2xl 
// p-2 sm:p-3 md:p-5 flex flex-col gap-2 sm:gap-3 md:gap-4">

//         {/* Header */}
//         <div className='w-full max-w-5xl mx-auto h-12 sm:h-14 md:h-16 rounded-2xl bg-sky-400 flex items-center justify-center'>
//           <h1 className='text-sm sm:text-lg md:text-2xl lg:text-3xl text-white font-bold italic'>
//             Departments Management
//           </h1>
//         </div>

//         {/* Loading */}
//         {loading && (
//           <div className='flex justify-center items-center h-40'>
//             <h1 className='text-lg sm:text-xl font-semibold'>Loading...</h1>
//           </div>
//         )}

//         {/* Table */}
//         {!loading && departmentData.length > 0 && (
//           <div className='w-full overflow-x-auto rounded-xl'>
//             <table className='min-w-[600px] md:min-w-full w-full border-collapse'>
//               {/* Table Head */}
//               <thead className='bg-sky-500 sticky top-0 z-10'>
//                 <tr>
//                   {["#", "HOD Name", "Department Name", "Description"].map((head, i) => (
//                     <th
//                       key={i}
//                       className='text-[10px] sm:text-xs md:text-sm lg:text-base px-2 py-2 md:px-4 md:py-3 text-left font-semibold text-white uppercase'
//                     >
//                       {head}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>

//               {/* Table Body */}
//               <tbody className='bg-sky-300'>
//                 {departmentData.map((item, index) => (
//                   <tr key={item._id} className='border-b border-sky-200'>
//                     <td className='text-white text-[10px] sm:text-xs md:text-sm px-2 py-2'>{index + 1}</td>
//                     <td className='text-white text-[10px] sm:text-xs md:text-sm px-2 py-2'>{item.HODName}</td>
//                     <td className='text-white text-[10px] sm:text-xs md:text-sm px-2 py-2'>{item.departmentName}</td>
//                     <td className='text-white text-[10px] sm:text-xs md:text-sm px-2 py-2 max-w-[200px] truncate'>{item.description}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* No Data */}
//         {!loading && departmentData.length === 0 && (
//           <div className='flex justify-center items-center h-40'>
//             <h1 className='text-black font-semibold italic text-base sm:text-lg'>
//               Department data not found
//             </h1>
//           </div>
//         )}

//       </div>
//     </Layout>
//   );
// };

// export default withAuth(Departments);






// import React, { useEffect, useState } from 'react';
// import Layout from '../components/Layout';
// import withAuth from '../components/withAuth';

// const Departments = () => {
//   const [departmentData, setDepartmentData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const getDepartment = async () => {
//       try {
//         setLoading(true);
//         const url = import.meta.env.VITE_SERVER_URL;

//         const res = await fetch(`${url}/admin/department`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`
//           },
//         });

//         const data = await res.json();

//         if (!data.success) {
//           alert(data.error || "Something Went Wrong");
//           return;
//         }

//         setDepartmentData(data.data);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getDepartment();
//   }, []);

//   return (
//     <Layout>
//       <div className="w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] 
//       bg-sky-400 shadow-xl rounded-2xl 
//       p-3 sm:p-4 md:p-6 flex flex-col gap-4">

//         {/* Header */}
//         <div className='w-full flex items-center justify-center'>
//           <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold italic text-center'>
//             Departments Management
//           </h1>
//         </div>

//         {/* Loading */}
//         {loading && (
//           <div className='flex justify-center items-center h-40'>
//             <h1 className='text-lg sm:text-xl font-semibold text-white'>
//               Loading...
//             </h1>
//           </div>
//         )}

//         {/* DATA */}
//         {!loading && departmentData.length > 0 && (
//           <>
//             {/* ✅ Desktop Table */}
//             <div className='hidden md:block w-full overflow-x-auto rounded-xl'>
//               <table className='w-full min-w-[600px] border-collapse'>
//                 <thead className='bg-sky-600'>
//                   <tr>
//                     {["#", "HOD Name", "Department Name", "Description"].map((head, i) => (
//                       <th
//                         key={i}
//                         className='px-4 py-3 text-left text-white text-sm lg:text-base font-semibold uppercase'
//                       >
//                         {head}
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>

//                 <tbody className='bg-sky-300'>
//                   {departmentData.map((item, index) => (
//                     <tr key={item._id} className='border-b border-sky-200 hover:bg-sky-400 transition'>
//                       <td className='px-4 py-2 text-sm'>{index + 1}</td>
//                       <td className='px-4 py-2 text-sm'>{item.HODName}</td>
//                       <td className='px-4 py-2 text-sm'>{item.departmentName}</td>
//                       <td className='px-4 py-2 text-sm'>{item.description}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* ✅ Mobile Card View */}
//             <div className='md:hidden flex flex-col gap-3'>
//               {departmentData.map((item, index) => (
//                 <div
//                   key={item._id}
//                   className='bg-sky-300 p-4 rounded-xl shadow-md flex flex-col gap-1'
//                 >
//                   <p className='text-sm'><span className='font-semibold'>#:</span> {index + 1}</p>
//                   <p className='text-sm'><span className='font-semibold'>HOD:</span> {item.HODName}</p>
//                   <p className='text-sm'><span className='font-semibold'>Department:</span> {item.departmentName}</p>
//                   <p className='text-sm'><span className='font-semibold'>Description:</span> {item.description}</p>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}

//         {/* No Data */}
//         {!loading && departmentData.length === 0 && (
//           <div className='flex justify-center items-center h-40'>
//             <h1 className='text-white font-semibold italic text-base sm:text-lg'>
//               Department data not found
//             </h1>
//           </div>
//         )}

//       </div>
//     </Layout>
//   );
// };

// export default withAuth(Departments);