import React, { useState } from 'react';
import Link from 'next/link';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full ">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          rows={4}
          className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
      
      <Link href="/home" className="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block hover:bg-blue-600 align-center ml-6">
            GO BACK
      </Link>
    </form>
  );
};

export default ContactForm;
