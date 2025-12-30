import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { leadsAPI } from '../services/api';
import SEO from '../components/common/SEO';
import Section from '../components/common/Section';
import Container from '../components/common/Container';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Contact = () => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', company: '', phone: '', message: '' });
  const [quoteForm, setQuoteForm] = useState({ name: '', email: '', company: '', phone: '', service: '', budget: '', timeline: '', message: '', files: [] });
  const [loading, setLoading] = useState({ contact: false, quote: false });

  const services = ['Web Development', 'Mobile App Development', 'Automation Solutions', 'UI/UX Design', 'SEO & Marketing', 'Maintenance & Support'];
  const budgets = ['< $5,000', '$5,000 - $10,000', '$10,000 - $25,000', '$25,000 - $50,000', '$50,000+'];
  const timelines = ['ASAP', '1-2 months', '3-6 months', '6+ months'];

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoading({ ...loading, contact: true });
    try {
      await leadsAPI.submitContact(contactForm);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setContactForm({ name: '', email: '', company: '', phone: '', message: '' });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading({ ...loading, contact: false });
    }
  };

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    setLoading({ ...loading, quote: true });
    try {
      const formData = new FormData();
      Object.keys(quoteForm).forEach(key => {
        if (key === 'files') {
          Array.from(quoteForm.files).forEach(file => formData.append('files', file));
        } else {
          formData.append(key, quoteForm[key]);
        }
      });
      await leadsAPI.submitQuote(formData);
      toast.success('Quote request submitted successfully!');
      setQuoteForm({ name: '', email: '', company: '', phone: '', service: '', budget: '', timeline: '', message: '', files: [] });
      e.target.reset();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to submit quote request.');
    } finally {
      setLoading({ ...loading, quote: false });
    }
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with us for your digital project needs. Request a free quote or consultation."
        keywords="contact, get quote, consultation, digital agency contact"
      />

      <Section bg="gradient" padding="large" className="pt-32">
        <Container>
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Let's discuss your project and bring your ideas to life
            </p>
          </div>
        </Container>
      </Section>

      <Section bg="white" padding="large">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <a href="mailto:hello@digitalagency.com" className="text-primary-600 hover:underline">
                hello@digitalagency.com
              </a>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <a href="tel:+1234567890" className="text-primary-600 hover:underline">
                +1 (234) 567-890
              </a>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Digital Street, Tech City</p>
            </Card>
          </div>

          {/* Google Maps Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Find Us</h2>
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1703000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">
              Visit our office for a face-to-face consultation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Company</label>
                    <input
                      type="text"
                      value={contactForm.company}
                      onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message *</label>
                  <textarea
                    required
                    rows="4"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  ></textarea>
                </div>
                <Button type="submit" variant="primary" size="lg" fullWidth disabled={loading.contact}>
                  <FaPaperPlane className="mr-2" />
                  {loading.contact ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>

            {/* Quote Form */}
            <Card>
              <h2 className="text-3xl font-bold mb-6">Request a Quote</h2>
              <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={quoteForm.name}
                    onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={quoteForm.email}
                    onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Service *</label>
                  <select
                    required
                    value={quoteForm.service}
                    onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Budget</label>
                    <select
                      value={quoteForm.budget}
                      onChange={(e) => setQuoteForm({ ...quoteForm, budget: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select budget</option>
                      {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Timeline</label>
                    <select
                      value={quoteForm.timeline}
                      onChange={(e) => setQuoteForm({ ...quoteForm, timeline: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Project Details *</label>
                  <textarea
                    required
                    rows="3"
                    value={quoteForm.message}
                    onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Attachments (Max 5 files)</label>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif"
                    onChange={(e) => setQuoteForm({ ...quoteForm, files: e.target.files })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">Accepted: PDF, DOC, DOCX, TXT, Images (Max 5MB each)</p>
                </div>
                <Button type="submit" variant="accent" size="lg" fullWidth disabled={loading.quote}>
                  <FaPaperPlane className="mr-2" />
                  {loading.quote ? 'Submitting...' : 'Request Quote'}
                </Button>
              </form>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
