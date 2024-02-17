// Contact.js

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Email sent successfully!');
        // Reset form fields
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <>

<div className="py-2 px-4 mx-auto max-w-screen-md">
<h2 className="mb-4 text-4xl font-extrabold text-center text-gray-900">
  Contact Us
</h2>
<form>
  <div className="grid grid-cols-2 gap-4">
    <input
      type="text"
      name="firstName"
      value={formData.firstName}
      onChange={handleChange}
      placeholder="First Name"
      className="p-2 border border-gray-300 rounded-lg"
      required
    />
    <input
      type="text"
      name="lastName"
      value={formData.lastName}
      onChange={handleChange}
      placeholder="Last Name"
      className="p-2 border border-gray-300 rounded-lg"
    />
  </div>
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Email Address"
    className="w-full mt-4 p-2 border border-gray-300 rounded-lg"
    required
  />
  <input
    type="text"
    name="Query"
    value={formData.subject}
    onChange={handleChange}
    placeholder="Query"
    className="w-full mt-4 p-2 border border-gray-300 rounded-lg"
    required
  />
  <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Message"
    rows="4"
    className="w-full mt-4 p-2 border border-gray-300 rounded-lg"
    required
  />
  <button
    type="button"
    onClick={handleSubmit}
    className="mt-4 p-2 w-full text-white rounded-lg border-black-600 shadow-sm bg-gray-400 hover:scale-105"
  >
    Send Message
  </button>
</form>
</div>

    </>
    
  );
}
