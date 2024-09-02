import { useState } from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to Firestore)
    console.log(formData);
  };

  return (
    <div className="h-[100vh] bg-gradient-to-r from-green-800 via-green-700 to-green-900 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
        <div className="flex justify-between mb-8">
          <div className="flex items-center">
            <FiMapPin className="text-blue-500 text-2xl mr-2" />
            <p className="text-gray-700">Ghaziabad, Uttar Pradesh</p>
          </div>
          <div className="flex items-center">
            <FiPhone className="text-green-500 text-2xl mr-2" />
            <p className="text-gray-700">+91-7905032249</p>
          </div>
          <div className="flex items-center">
            <FiMail className="text-red-500 text-2xl mr-2" />
            <p className="text-gray-700">shreyas@example.com</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
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
