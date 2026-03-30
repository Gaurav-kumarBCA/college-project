import React, { useRef, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Layout from "../components/Layout";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "9027410147lk@gmail.com",
    message: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.from_email || !formData.message) {
      alert("Please fill all the fields");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_pwc7puo",
        "template_iit9329",
        form.current,
        "iJ0hj-rHEzXQL9x0P"
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Message sent successfully!");
          setFormData({
            from_name: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error:", error);
          alert("Something went wrong while sending mail");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Layout>
      <div className="bg-gray-50 text-gray-800 min-h-screen">

        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dsql75f5a/image/upload/v1773771066/IMG_20260317_155832_w1hwfy.jpg"
            alt="College"
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="max-w-2xl mx-auto text-lg">
              We would love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-6 md:px-20">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-indigo-600">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-indigo-600 text-xl" />
                  <p>Moradabad, Uttar Pradesh</p>
                </div>

                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-indigo-600 text-xl" />
                  <p>+91-1234567890</p>
                </div>

                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-indigo-600 text-xl" />
                  <p>SSCHE@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-indigo-600">
                Send Message
              </h2>

              <form ref={form} onSubmit={submitHandler} className="space-y-4">

                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={inputHandler}
                  placeholder="Enter your name"
                  className="w-full border rounded-lg p-3"
                />

                <input
                readOnly
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={inputHandler}
                  placeholder="Enter your email"
                  className="w-full border rounded-lg p-3"
                />

                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={inputHandler}
                  placeholder="Write your message"
                  className="w-full border rounded-lg p-3"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </form>
            </div>

          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Contact;