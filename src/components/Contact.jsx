import React, { useState } from 'react';
import axios from 'axios';
import { Send, CheckCircle, AlertCircle, Loader, ArrowUp } from 'lucide-react';
import 'remixicon/fonts/remixicon.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(null); // null, loading, success, error
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Update character count for message
    if (name === 'message') {
      setCharCount(value.length);
    }

    // Clear field-level error as user types
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'Name must be less than 100 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    const trimmedMessage = formData.message.trim();
    if (!trimmedMessage) {
      newErrors.message = 'Please enter a message.';
    } else if (trimmedMessage.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    } else if (trimmedMessage.length > 5000) {
      newErrors.message = 'Message must be less than 5000 characters.';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('loading');
    setMessage('');

    try {
      // Create axios instance with timeout
      const api = axios.create({
        timeout: 30000, // 30 seconds timeout
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const response = await api.post(
        `${import.meta.env.VITE_API_URL}/api/send-email`,
        formData
      );

      setStatus('success');
      setMessage(response.data.message || 'Email sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setCharCount(0);

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus(null);
        setMessage('');
      }, 5000);
    } catch (error) {
      setStatus('error');

      // Handle different error scenarios
      if (error.response) {
        // Server responded with error status
        const statusCode = error.response.status;
        const errorMessage = error.response.data?.message;

        if (statusCode === 429) {
          setMessage(
            'Too many requests. Please wait an hour before sending another message.'
          );
        } else if (statusCode === 400) {
          setMessage(errorMessage || 'Invalid input. Please check your form.');
        } else if (statusCode === 500 || statusCode === 503) {
          setMessage(
            'Server error. Please try again later. Our team has been notified.'
          );
        } else {
          setMessage(
            errorMessage || 'Failed to send email. Please try again.'
          );
        }
      } else if (error.code === 'ECONNABORTED') {
        setMessage(
          'Request timeout. The server took too long to respond. Please try again.'
        );
      } else if (error.message === 'Network Error') {
        setMessage(
          'Network error. Please check your internet connection and try again.'
        );
      } else {
        setMessage(
          'Failed to send email. Please try again later.'
        );
      }

      console.error('Email submission error:', error);
    }
  };

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold tracking-[0.28em] uppercase text-accent">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
            Let&apos;s build something together
          </h2>
          <p className="max-w-2xl mx-auto text-text-secondary text-sm sm:text-base">
            Whether it&apos;s an internship, freelance project, or a quick question — I&apos;d love
            to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-[1.1fr,1.2fr] gap-8 items-start">
          <div className="space-y-8 rounded-3xl border border-border bg-card/90 p-6 sm:p-8 shadow-xl shadow-black/40">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-text-primary">Let&apos;s connect</h3>
             
            </div>

            <div className="space-y-5 text-sm">
              <div className="flex gap-3">
                <div className="flex h-7 w-9 items-center justify-center rounded-xl bg-primary/20 text-primary">
                  📧
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-text-muted">Email</p>
                  <a
                    href="mailto:tushar.kaklotar@email.com"
                    className="text-text-primary hover:text-accent font-semibold"
                  >
                    tusharkaklotar@proton.me
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/20 text-primary">
                  📱
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-text-muted">Phone</p>
                  <a
                    href="tel:+919537064058"
                    className="text-text-primary hover:text-accent font-semibold"
                  >
                    +91 95370 64058
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/20 text-primary">
                  📍
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-text-muted">Based in</p>
                  <p className="text-text-primary font-semibold">
                    Surat, Gujarat
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/70">
              <p className="text-xs font-semibold tracking-[0.24em] uppercase text-text-muted mb-3">
                Social
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/tusharrr01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-background hover:bg-primary hover:text-background text-lg font-semibold"
                >
                  <i className="ri-github-fill"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/tusharkaklotar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-background hover:bg-primary hover:text-background text-lg font-semibold"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
                <a
                  href="https://x.com/__tushar_01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-background hover:bg-primary hover:text-background text-lg font-semibold"
                >
                  <i className="ri-twitter-x-fill"></i>
                </a>
                <a
                  href="https://discord.gg/7Mug7mkM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-background hover:bg-primary hover:text-background text-lg font-semibold"
                >
                  <i className="ri-discord-line"></i>
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-card/90 p-6 sm:p-8 shadow-xl shadow-black/40 space-y-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-semibold text-text-primary">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  maxLength="100"
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-text-primary placeholder-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                {errors.name && (
                  <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-semibold text-text-primary">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-text-primary placeholder-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="message" className="block text-xs font-semibold text-text-primary">
                  Message
                </label>
                <span className="text-xs text-text-muted">
                  {charCount}/5000
                </span>
              </div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, idea or Feedback..."
                rows="5"
                maxLength="5000"
                required
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              {errors.message && (
                <p className="text-xs text-red-400 mt-1">{errors.message}</p>
              )}
            </div>

            {status === 'success' && (
              <div className="flex items-start gap-3 rounded-2xl border border-green-500/40 bg-green-500/10 p-4 text-sm">
                <CheckCircle className="mt-0.5 h-4 w-4 text-green-400 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-300">Message sent!</p>
                  <p className="text-green-200">{message}</p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-start gap-3 rounded-2xl border border-red-500/40 bg-red-500/10 p-4 text-sm">
                <AlertCircle className="mt-0.5 h-4 w-4 text-red-400 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-red-300">Something went wrong</p>
                  <p className="text-red-200">{message}</p>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              aria-label={status === 'loading' ? 'Sending message' : 'Send message'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/40 transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === 'loading' ? (
                <>
                  <Loader className="h-4 w-4 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Send message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      <div className="pointer-events-none">
        <button
          onClick={() => scrollToSection('#top')}
          className="pointer-events-auto absolute bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent/80 bg-background/80 text-text-secondary shadow-lg backdrop-blur hover:border-accent hover:text-accent"
        >
          <ArrowUp className="h-5 w-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Contact;
