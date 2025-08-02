import React, { useState, forwardRef } from 'react';
import axios from 'axios'; 
const Contact = forwardRef<HTMLElement>((_, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('sending');

  try {
    await axios.post('/contact', formData); // POST to Laravel route
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    console.error(error);
    setStatus('error');
  }
};
  return (
    <section
      ref={ref}
      className="scroll-mt-28 bg-white py-16 px-6 sm:px-12 max-w-3xl mx-auto rounded-xl shadow-lg"
      id="contact"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        <span className="inline-block border-b-4 border-yellow-300 pb-2">
          Contact Us
        </span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block mb-2 font-semibold text-gray-700">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition"
            placeholder="Subject of your message"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition"
            placeholder="Write your message here..."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className={`w-full py-3 rounded-md text-white font-semibold transition ${
            status === 'sending'
              ? 'bg-yellow-200 cursor-not-allowed'
              : 'bg-yellow-300 hover:bg-yellow-400'
          }`}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 mt-4 text-center font-semibold">
            Thanks for reaching out! We'll get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-600 mt-4 text-center font-semibold">
            Oops! Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  );
});

export default Contact;
