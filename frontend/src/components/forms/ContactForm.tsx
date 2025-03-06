import React, { useState } from 'react';
import { SectionTitle } from "../comon/SectionTitle";
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert('Email service is not configured correctly.');
      console.error('Missing environment variables for EmailJS.');
      return;
    }

    emailjs.sendForm(serviceId, templateId, form, publicKey)
      .then((result) => {
        alert('Message sent successfully!');
        console.log(result.text);

        setFormData({ name: '', email: '', title: '', message: '' });
        form.reset(); // Limpa os inputs do formulário

      })
      .catch((error) => {
        alert('Something went wrong, please try again.');
        console.error(error.text);
      });
  };


  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="px-4 w-full max-w-lg">
        <SectionTitle title="Contact Me" />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="validator w-full bg-base-200 border border-base-300 rounded px-4 py-3 text-base-content transition focus:outline-none focus:border-primary focus:bg-primary/10"
              placeholder="Your Name"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="validator w-full bg-base-200 border border-base-300 rounded px-4 py-3 text-base-content transition focus:outline-none focus:border-primary focus:bg-primary/10"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="validator w-full bg-base-200 border border-base-300 rounded px-4 py-3 text-base-content transition focus:outline-none focus:border-primary focus:bg-primary/10"
              placeholder="Title of Message"
              minLength={3}
              maxLength={30}
            />
          </div>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="validator w-full bg-base-200 border border-base-300 rounded px-4 py-3 text-base-content transition focus:outline-none focus:border-primary focus:bg-primary/10"
              placeholder="Your Message..."
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-lg hover:opacity-90 focus:ring-[var(--color-primary)] hover:-translate-y-0.5 hover:shadow-xl active:scale-95 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
