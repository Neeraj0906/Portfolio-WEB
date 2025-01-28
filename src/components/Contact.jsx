import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    alert("Thank you for reaching out!");
  };

  return (
    <section style={{marginLeft:"90px"}} className="ml-64 p-8 bg-[#ecf0f1] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold text-[#2C3E50] mb-6">Contact</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-[#2C3E50]"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-[#bdc3c7] rounded-lg mt-2"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-[#2C3E50]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-[#bdc3c7] rounded-lg mt-2"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-[#2C3E50]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-[#bdc3c7] rounded-lg mt-2"
              rows="6"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#16A085] text-white font-semibold rounded-lg"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-[#2C3E50]">
            Connect with Me
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/neeraj-s-a06151203"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 text-sky-500 hover:text-sky-700 text-xl"
            >
              <div className="w-12 h-12 bg-sky-100 flex items-center justify-center rounded-full">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-sky-500" />
              </div>
              <span>.     LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Neeraj0906"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 text-black hover:text-gray-700 text-xl"
            >
              <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-full">
                <FontAwesomeIcon icon={faGithub} className="text-black" />
              </div>
              <span>. GitHub</span>
            </a>

            {/* Email */}
            <div className="flex items-center space-x-4 text-blue-600 hover:text-blue-800 text-xl">
              <div className="w-12 h-12 bg-red-200 flex items-center justify-center rounded-full">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-600" />
              </div>
              <span>.   Email: eng20cs0301.neeraj@gmail.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4 text-blue-600 hover:text-blue-800 text-xl">
              <div className="w-12 h-12 bg-gray-400 flex items-center justify-center rounded-full">
                <FontAwesomeIcon icon={faPhone} className="text-blue-600" />
              </div>
              <span>.   Phone: 6382561931</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
