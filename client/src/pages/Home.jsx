import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Homecourse from "../components/Homecourse";

const Home = () => {
  return (
    <Layout>
      <Slider />

      
      <section className="py-12 px-6 bg-gray-50">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Quality Education",
              desc: "We provide industry-oriented and career-focused programs.",
            },
            {
              title: "Modern Infrastructure",
              desc: "Smart classrooms, computer labs & digital learning.",
            },
            {
              title: "Placement Support",
              desc: "We guide students towards successful career paths.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              <h2 className="text-xl font-bold text-indigo-600 mb-3">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="bg-indigo-600 mx-3 rounded-lg text-white py-10 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Empowering Students for a Brighter Future
        </h2>
        <p className="max-w-3xl mx-auto">
          Shree Satya College of Higher Education is committed to academic
          excellence, innovation, and holistic development.
        </p>
      </section>

      <Homecourse />

      <Footer />
    </Layout>
  );
};

export default Home;

export const Slider = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    { url: "/slide1.jpg", tagline: "Welcome to Shree Satya College" },//0
    { url: "/slide2.jpg", tagline: "Empowering Future Leaders" },//1
    { url: "/slide3.jpg", tagline: "Excellence in Education" },//2
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-00 ease-in-out ${
            index === current
              ? "opacity-100 translate-x-0 z-10"
              : "opacity-0 translate-x-full z-0"
          }`}
        >
          <img
            src={slide.url}
            alt="slide"
            className="w-full h-full object-cover"
          />

          
          <div className="absolute inset-0 bg-black/50"></div>

         
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
            <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold animate-fadeIn">
              {slide.tagline}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};
