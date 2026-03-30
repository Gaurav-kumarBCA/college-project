import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <img
            src="https://res.cloudinary.com/dsql75f5a/image/upload/v1773771167/WhatsApp_Image_2026-02-21_at_13.15.10_zk0a8f.jpg"
            alt="College Campus"
            className="absolute w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

          <div className="relative text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              About Our College
            </h1>

            <p className="max-w-2xl mx-auto text-lg opacity-90">
              Empowering students with quality education, innovation, and
              leadership skills for a brighter future.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16 px-6 md:px-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="overflow-hidden rounded-xl ">
              <img
                src="https://res.cloudinary.com/dsql75f5a/image/upload/v1773910440/WhatsApp_Image_2026-02-21_at_13.13.36_xvh7dd.jpg"
                alt="Students in Classroom"
                className="w-full object-top h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-xl shadow-lg hover:scale-105 transition duration-500"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-indigo-600">
                Who We Are
              </h2>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Shree Satya College of Higher Education is committed to academic
                excellence and holistic development. Our institution focuses on
                industry-ready skills, practical exposure, and strong moral
                values.
              </p>

              <p className="text-gray-700 leading-relaxed">
                We provide a learning environment where students grow
                intellectually, socially, and physically to become responsible
                professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Vision */}
        <section className="bg-indigo-600 text-white py-16 px-6 md:px-20">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="hover:translate-y-1 transition">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>

              <ul className="space-y-2 opacity-95">
                <li> Provide industry-oriented education</li>
                <li> Promote innovation and research</li>
                <li> Develop leadership qualities</li>
                <li> Encourage ethical values</li>
              </ul>
            </div>

            <div className="hover:translate-y-1 transition">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>

              <p className="opacity-95 leading-relaxed">
                To become a center of excellence in higher education and produce
                skilled professionals who contribute positively to society and
                the nation.
              </p>
            </div>
          </div>
        </section>

        {/* campus and garden */}

        {/* Campus & Garden */}
        <section className="bg-white py-16 px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-600">
            Campus & Environment
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Garden */}
            <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dsql75f5a/image/upload/v1773770302/IMG_20260223_152220_xgmmik.jpg"
                  alt="College Garden"
                  className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                  Green Garden
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Our college campus includes a beautiful green garden that
                  provides a peaceful environment for students to relax, study,
                  and enjoy nature.
                </p>
              </div>
            </div>

            {/* Campus */}
            <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden">
              <div className="overflow-hidden ">
                <img
                  src="https://res.cloudinary.com/dsql75f5a/image/upload/v1773770630/IMG_20260317_155434_soezfu.jpg"
                  alt="College Campus"
                  className="w-full h-64 object-cover  hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                  Modern Campus
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Our spacious and modern campus provides a comfortable learning
                  environment with advanced classrooms, labs, sports facilities,
                  and student activity areas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-16 px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-600">
            Our Facilities
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Library */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">
              <div className="overflow-hidden rounded">
                <img
                  src="/library.jpg"
                  alt="Library"
                  className="rounded mb-4 hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="font-semibold text-lg mb-2">Library</h3>

              <p className="text-gray-600">
                Well-equipped library with digital and physical resources.
              </p>
            </div>

            {/* Computer Lab */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">
              <div className="overflow-hidden rounded">
                <img
                  src="/computer_lab.jpg"
                  alt="Computer Lab"
                  className="rounded mb-4 hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="font-semibold text-lg mb-2">Computer Labs</h3>

              <p className="text-gray-600">
                Advanced computer labs with high-speed internet.
              </p>
            </div>

            {/* Sports */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">
              <div className="overflow-hidden rounded">
                <img
                  src="/sports.jpg"
                  alt="Sports"
                  className="rounded mb-4 hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="font-semibold text-lg mb-2">
                Sports & Activities
              </h3>

              <p className="text-gray-600">
                Encouraging physical fitness and extracurricular activities.
              </p>
            </div>
          </div>
        </section>

        {/* Sports Section */}
        <section className="bg-gray-100 py-16 px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-600">
            Sports & Fitness
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition">
              <img src="/sports1.jpg" className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">Outdoor Sports</h3>
                <p className="text-gray-600">
                  Cricket, football, athletics and more for physical strength
                  and teamwork.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition">
              <img src="/gym.jpg" className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">Cricket</h3>
                <p className="text-gray-600">
                  Cricket is a strategic and team-oriented sport that builds
                  coordination, focus, and leadership skills.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition">
              <img src="/martial.jpg" className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">Badminton</h3>
                <p className="text-gray-600">
                  Badminton is a fast-paced sport that improves agility,
                  reflexes, and overall fitness while promoting strategic
                  thinking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Festivals Section */}
        <section className="bg-white py-16 px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-600">
            Festivals & Events
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition">
              <img src="/fest1.jpg" className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">Cultural Fest</h3>
                <p className="text-gray-600">
                  Dance, music, drama and talent showcase events.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition">
              <img src="/fest2.jpg" className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">Tech Fest</h3>
                <p className="text-gray-600">
                  Coding competitions, hackathons, and innovation challenges.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition">
              <img src="/fest3.jpg" className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">Annual Function</h3>
                <p className="text-gray-600">
                  Celebration of achievements and student performances.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-6 text-center">
          <p>
            © {new Date().getFullYear()} Shree Satya College of Higher
            Education. All Rights Reserved.
          </p>
        </footer>
      </div>
    </Layout>
  );
};

export default About;
