import { useState } from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import AOS from 'aos';

import { useEffect } from 'react';
import 'aos/dist/aos.css';  // Import the AOS styles
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });


  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to Firestore)
    console.log(formData);
  };

  return (
    <div className="h-[100vh] bg-[#032917] flex items-center justify-center">
      <div className="bg-[#0F4A2D] p-8 rounded-2xl shadow-lg w-full max-w-3xl " data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-[#EEAE03] font-serif mb-6">Get in Touch</h2>
        <div className="flex justify-between mb-8">
          <div className="flex items-center">
            <FiMapPin className="text-blue-500 text-2xl mr-2" />
            <p className="text-white font-semibold">Ghaziabad, Uttar Pradesh</p>
          </div>
          <div className="flex items-center">
            <FiPhone className="text-green-500 text-2xl mr-2" />
            <p className="text-white font-semibold">+91-7905032249</p>
          </div>
          <div className="flex items-center">
            <FiMail className="text-red-500 text-2xl mr-2" />
            <p className="text-white font-semibold">shreyas@example.com</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[#EEAE03]">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 bg-green-800 rounded mt-1"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-[#EEAE03]">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 bg-green-800 rounded mt-1"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-[#EEAE03]">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 bg-green-800 rounded mt-1"
              placeholder="Your Message"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
