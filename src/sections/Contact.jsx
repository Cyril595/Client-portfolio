import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const Contact = ({ myRef }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const toastId = toast.loading('Sending your message...');
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: "cyrilvarghese595@gmail.com", 
    };

    emailjs
      .send(
        'service_kno6z3l',
        'template_98ohwji',
        templateParams,
        'H0ZeTzkwaiDK1xQ_w'
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
        toast.success('Message sent successfully!', { 
          id: toastId,
          duration: 4000,
        });
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast.error('Failed to send message. Please try again.', { 
          id: toastId,
          duration: 5000,
        });
      });
  };

  return (
    <div ref={myRef} className="mt-[10%] text-white px-6 sm:px-[10%] pb-[10%]">
      {/* ADD THIS TOASTER COMPONENT */}
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1f2937',
            color: 'white',
            border: '1px solid #374151',
          },
        }}
      />

      {/* Heading */}
      <div className='inline-block'>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-bold font-orbitron text-center sm:text-left">
          I AM READY TO CONSULT YOU
        </h1>
        <hr className="mt-2 h-[2px] w-full border-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500" />
      </div>

      {/* Rest of your JSX remains the same */}
      <form onSubmit={sendEmail}>
        <div className="flex flex-col sm:flex-wrap lg:flex-nowrap sm:flex-row items-start sm:items-center text-lg sm:text-xl mt-10 gap-6 sm:gap-10">
          {/* Name Field */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-auto">
            <span className="whitespace-nowrap">Name</span>
            <input
              className="mt-2 sm:mt-0 sm:ml-4 outline-none border-2 border-gray-700 bg-transparent px-3 py-2 rounded-md w-full sm:w-[200px] md:w-[250px]"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-auto">
            <span className="whitespace-nowrap">Email</span>
            <input
              className="mt-2 sm:mt-0 sm:ml-4 outline-none border-2 border-gray-700 bg-transparent px-3 py-2 rounded-md w-full sm:w-[200px] md:w-[250px]"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-auto">
            <span className="whitespace-nowrap">Message</span>
            <textarea
              className="mt-2 sm:mt-0 sm:ml-4 outline-none border-2 border-gray-700 bg-transparent px-3 py-2 rounded-md w-full sm:w-[250px] md:w-[300px] h-[120px] resize-none"
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            className="cursor-pointer mt-2 sm:mt-0 border-2 border-white px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-transparent hover:text-white transition-all duration-300 text-lg sm:text-xl"
            type="submit"
          >
            SEND
          </button>
        </div>
      </form>

      {/* Contact Info */}
      <div className="font-poppins flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-start text-lg sm:text-2xl mt-10 gap-6 sm:gap-[8%]">
        <div className="flex items-center">
          <FaPhoneAlt className="text-fuchsia-800" />
          <span className="ml-3">+91 1234567890</span>
        </div>

        <div className="flex items-center">
          <MdLocationOn className="text-fuchsia-800" />
          <span className="ml-3">Mumbai, India</span>
        </div>

        <div className="flex items-center">
          <MdEmail className="text-fuchsia-800" />
          <span className="ml-3">cyrilvarghese595@gmail.com</span>
        </div>
      </div>

      <div className='flex md:hidden gap-10 mt-10 justify-center text-xl'>
        <ImFacebook2 />
        <FaSquareInstagram />
        <FaLinkedin />
      </div>
    </div>
  );
};

export default Contact;