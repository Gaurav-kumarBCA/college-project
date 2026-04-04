import React from "react";
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-gray-300 mt-10">
      
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">SSCHE</h2>
          <p className="text-sm leading-6">
            Shree Satya College of Higher Education.  
            Empowering students with quality education and innovation.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <span className="flex flex-col space-y-2 text-sm">
            <Link to={"/"} className="hover:text-white cursor-pointer transition">Home</Link>
            <Link to={"/about"} className="hover:text-white cursor-pointer transition">About</Link>
            <Link to={"/course"} className="hover:text-white cursor-pointer transition">Courses</Link>
            <Link to={"/contact"} className="hover:text-white cursor-pointer transition">Contact</Link>
          </span>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect With Us</h3>
          <div className="flex gap-4">
            <Facebook className="cursor-pointer hover:text-blue-500 transition" />
            <Instagram className="cursor-pointer hover:text-blue-500 transition" />
            <Linkedin className="cursor-pointer hover:text-blue-500 transition" />
            <Github className="cursor-pointer hover:text-blue-500 transition" />
          </div>
        </div>

      </div>

    
      <div className="border-t border-gray-600 text-center py-4 text-sm">
        © {new Date().getFullYear()} SSCHE. All Rights Reserved. 
        <h1>Developed By:- Lokesh, Gaurav, Abhishek</h1>
      </div>

    </footer>
  );
};

export default Footer;
