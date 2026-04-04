import React, { useState } from 'react'
import { FaTimes, FaUser, FaUserPlus } from 'react-icons/fa'
import { HiBuildingOffice2, HiEnvelope, HiLockClosed, HiOutlineEnvelope, HiOutlineLockClosed, HiPhone } from "react-icons/hi2"

const NewHOD = ({add}) => {
  const [open,setOpen]=useState(false);
  const onClose=()=>{
    setOpen(!open)
  }
  return (
    <>
         <FaUserPlus onClick={()=>setOpen(!open)} className='text-black size-6 absolute right-0 mr-5 cursor-pointer'/>

          <CreateHOD open={open} setOpen={setOpen} add={add} onClose={onClose}/>
    </>
  )
}

const CreateHOD=({open,setOpen,add,onClose})=>{
  const [hodData,setHodData]=useState({
    hodName :"",
    email:"",
    phone:"",
    department:"",
    password:""
  });
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");
  // const handleChange=(e)=>{
  //   const {name,value}=e.target;
  //   if(name === "Phone"){
  //     if(!/^\d*$/.test(value))
  //       return;
  //     if(value.length > 10) return;
  //     if(value.length < 10){
  //       setError("Phone number must be 10 digits");
  //     }else{
  //       setError("")
  //     }
  //   }
  //   setHodData({...hodData,[name]:value});
  // }
  const createHod=async(e)=>{
     e.preventDefault();
     if(!hodData.hodName || !hodData.email || !hodData.phone || !hodData.department || !hodData.password){
      return alert("All Field are required")
     }
    try {
      setLoading(true);
      const url=import.meta.env.VITE_SERVER_URL;
      const res=await fetch(`${url}/admin/hod`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify(hodData)
      });
      const data=await res.json();
      // console.log(data)
      if(!data.success){
        return alert(data.error)
      }
      add(data.data);
      setHodData("");
      onClose();
    } catch (error) {
      console.log(error)
    } finally{
      setLoading(false);
    }
  }
  return(
    <div className={`${open ?"flex":"hidden"} fixed inset-0 bg-gray-900/40 justify-center items-center z-50`}>
          <div className='h-100 w-80 md:w-100 md:h-140 rounded-2xl shadow-xl/40 md:ml-40 bg-amber-50 overflow-y-auto'> 
            <div className='w-full h-20  rounded-tl-2xl rounded-tr-2xl bg-gradient-to-r from-blue-500 to-blue-700 flex items-center '>
               <div className='w-25 h-full  '>
                <img src="/office-man.png" alt="logo" className='w-25 h-full  bg-cover bg-center object-contain' />
               </div>
               <h1 className='md:text-2xl text-white font-bold italic underline decoration-double underline-offset-4'>Creat HOD Account</h1>
               <FaTimes onClick={()=>setOpen(!open)} className='text-white cursor-pointer size-5 ml-13 mb-10 hover:scale-110 transition'/>
            </div>
          <form action="" onSubmit={createHod}>
            <div className='w-full h-10   flex items-end justify-start gap-2'>
              <FaUser className='size-5 text-blue-700 ml-8'/>
            <label className='font-semibold text-black/50 ' htmlFor="">Full Name</label>
              </div> 
              <div className='w-full h-10   flex items-start justify-start gap-2'>
                <input  onChange={(e)=>setHodData((prev)=>({...prev,[e.target.name]:e.target.value}))} name='hodName' value={hodData.hodName} type="text" placeholder="Enter your name" className='p-2 ml-5 w-70 md:w-80 h-8  border border-gray-500 mt-2 rounded-xl focus:outline-none' />
                </div> 
                <div className='w-full h-10   flex items-end justify-start gap-2'>
              <HiEnvelope className='size-5 text-blue-700 ml-8'/>
            <label className='font-semibold text-black/50 ' htmlFor="">Email Address</label>
              </div> 
              <div className='w-full h-10   flex items-start justify-start gap-2'>
                <input onChange={(e)=>setHodData((prev)=>({...prev,[e.target.name]:e.target.value}))} name='email' value={hodData.email} type="email"  placeholder="Email and address" className='p-2 ml-5 w-70 md:w-80 h-8  border border-gray-500 mt-2 rounded-xl focus:outline-none' />
                </div>         
                <div className='w-full h-10   flex items-end justify-start gap-2'>
              <HiLockClosed className='size-5 text-blue-700 ml-8'/>
            <label className='font-semibold text-black/50 ' htmlFor="">Password</label>
              </div>
              <div className='w-full h-10   flex items-start justify-start gap-2'>
                <input onChange={(e)=>setHodData((prev)=>({...prev,[e.target.name]:e.target.value}))} name='password' value={hodData.password} type="password" placeholder="Enter password" className='p-2 ml-5 w-70 md:w-80 h-8  border border-gray-500 mt-2 rounded-xl focus:outline-none' />
                </div>
                <div className='w-full h-10   flex items-end justify-start gap-2'>
              <HiPhone className='size-5 text-blue-700 ml-8'/>
            <label className='font-semibold text-black/50 ' htmlFor="">Phone Number</label>
              </div>
              <div className='w-full h-10   flex items-start justify-start gap-2'>
                <input onChange={(e)=>setHodData((prev)=>({...prev,[e.target.name]:e.target.value}))} name='phone' value={hodData.phone} type="tel"  placeholder="Enter phone number" className='p-2 ml-5 w-70 md:w-80 h-8  border border-gray-500 mt-2 rounded-xl focus:outline-none' />
                {error && <p style={{color:red}}>{error}</p>}
                </div>
                <div className='w-full h-10   flex items-end justify-start gap-2'>
              <HiBuildingOffice2 className='size-5 text-blue-700 ml-8'/>
            <label className='font-semibold text-black/50 ' htmlFor="">Department</label>
              </div>
              <div className='w-full h-10   flex items-start justify-start gap-2'>
                <input onChange={(e)=>setHodData((prev)=>({...prev,[e.target.name]:e.target.value}))} name='department' value={hodData.department} type="text" placeholder="Enter department name" className='p-2 ml-5 w-70 md:w-80 h-8  border border-gray-500 mt-2 rounded-xl focus:outline-none' />
                </div>
          <div className='w-full h-19 mt-5 md:mt-0 flex items-center justify-start md:ml-5 gap-8 '>
              <button onClick={()=>setOpen(!open)} type='button' className='w-35 h-7 border-2 border-gray-400 text-blue-700 text-center rounded-[5px] font-semibold cursor-pointer italic md:ml-0 ml-2'>Cancle</button>
              <button disabled={loading} type='submit' className='w-35 h-7  text-center mr-3 rounded-[5px] font-semibold  bg-gradient-to-r from-blue-500 to-blue-700 italic text-white shadow-xl/40 cursor-pointer active:scale-[0.98] transition-all'>{loading ? "created..." : "Create"}</button>
          </div>
          </form>
          </div>
    </div>
  )
}

export default NewHOD