'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, User, Building } from 'lucide-react';
import { Footer } from '../../components/Footer';

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Phone Numbers',
    details: [
      { label: 'Primary Phone', value: '+91 6389-457042', href: 'tel:+916389457042' },
      { label: 'Alternate Phone', value: '6388523335', href: 'tel:6388523335' },
      { label: 'WhatsApp', value: '+91 6389-457042', href: 'https://wa.me/916389457042' }
    ],
    color: 'text-primary-blue'
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email Address',
    details: [
      { label: 'Email', value: 'syedsahab750@gmail.com', href: 'mailto:syedsahab750@gmail.com' }
    ],
    color: 'text-emerald-green'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Business Hours',
    details: [
      { label: 'Monday - Friday', value: '9:00 AM - 6:00 PM' },
      { label: 'Saturday', value: '9:00 AM - 2:00 PM' },
      { label: 'Sunday', value: 'Closed' }
    ],
    color: 'text-cyan-water'
  }
];

const offices = [
  {
    type: 'Corporate Office',
    address: 'Unit No.1017 Ground floor, Tower-1, Express Trade Tower-2, Sector 132, Noida, Uttar Pradesh 201301',
    coordinates: { lat: 28.5355, lng: 77.3910 }
  },
  {
    type: 'Registered Office',
    address: 'D-19, Near Shemrock School, Mansarover Garden New Delhi- 110015',
    coordinates: { lat: 28.6139, lng: 77.2090 }
  }
];

const inquiryTypes = [
  'General Information',
  'Product Inquiry',
  'Customer Support',
  'Quality Concern',
  'Bulk Order',
  'Other'
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1722600857460-50501b69fd5b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxjdXN0b21lciUyMHNlcnZpY2UlMjBjYWxsJTIwY2VudGVyJTIwaGVhZHNldHxlbnwwfDF8fHwxNzU2NDE3OTI1fDA&ixlib=rb-4.1.0&q=85"
            alt="Customer service representative - Noman Khan on Unsplash"
            className="w-full h-full object-cover"
            width="1920"
            height="500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/80 to-emerald-green/60"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="heading-hero text-pure-white mb-6 slide-up">
                Contact Us
              </h1>
              <p className="body-lg text-ice-blue mb-8 slide-up">
                Get in touch with our team for any questions, support, or business inquiries. 
                We're here to help you with all your water needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-xl text-text-primary mb-4">Get In Touch</h2>
            <p className="body-lg text-text-secondary max-w-3xl mx-auto">
              Choose the best way to reach us. Our dedicated team is ready to assist you 
              with prompt and professional service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-500 slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pure-white to-water-mist mb-6 ${info.color}`}>
                  {info.icon}
                </div>
                <h3 className="heading-md text-text-primary mb-6">{info.title}</h3>
                <div className="space-y-4">
                  {info.details.map((detail, i) => (
                    <div key={i} className="flex flex-col space-y-1">
                      <span className="body-sm text-text-light">{detail.label}</span>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="body-md text-text-primary hover:text-primary-blue transition-colors duration-300"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <span className="body-md text-text-primary">{detail.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 ocean-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="heading-xl text-text-primary mb-4">Send us a Message</h2>
                <p className="body-lg text-text-secondary">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block body-md font-medium text-text-primary mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light w-5 h-5" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-water-mist rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block body-md font-medium text-text-primary mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light w-5 h-5" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-water-mist rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block body-md font-medium text-text-primary mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light w-5 h-5" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-water-mist rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block body-md font-medium text-text-primary mb-2">
                        Company/Organization
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light w-5 h-5" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-water-mist rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                          placeholder="Enter your company name (optional)"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block body-md font-medium text-text-primary mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-water-mist rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    >
                      <option value="">Select an inquiry type</option>
                      {inquiryTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block body-md font-medium text-text-primary mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-water-mist rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="Enter the subject of your message"
                    />
                  </div>

                  <div>
                    <label className="block body-md font-medium text-text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-water-mist rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="Enter your message here..."
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      className="btn-primary flex items-center justify-center gap-2 py-3 px-6"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                    
                    <a
                      href="https://wa.me/916389457042"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center justify-center gap-2 py-3 px-6 bg-green-500 hover:bg-green-600 text-white transition-all duration-300 transform hover:scale-105"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Connect on WhatsApp
                    </a>
                  </div>
                </form>
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <div className="mb-8">
                <h2 className="heading-xl text-text-primary mb-4">Our Locations</h2>
                <p className="body-lg text-text-secondary">
                  Visit us at our offices or find us on the map for directions.
                </p>
              </div>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 slide-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-emerald-green rounded-full flex items-center justify-center text-pure-white">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="heading-sm text-text-primary mb-2">{office.type}</h3>
                        <p className="body-md text-text-secondary leading-relaxed">
                          {office.address}
                        </p>
                        <button className="mt-3 px-4 py-2 border border-primary-blue text-primary-blue rounded-lg hover:bg-primary-blue hover:text-pure-white transition-all duration-300 text-sm">
                          Get Directions
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Google Maps Embed */}
                <div className="glass-card p-4 rounded-xl">
                  <iframe
                    src="https://maps.google.com/maps?width=100%25&height=400&hl=en&q=28.5355,77.3910&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                    width="100%"
                    height="300"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-ice-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-xl text-text-primary mb-4">Frequently Asked Questions</h2>
            <p className="body-lg text-text-secondary">
              Quick answers to common questions. Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="heading-sm text-text-primary mb-3">How can I place a bulk order?</h3>
              <p className="body-md text-text-secondary">
                Contact our sales team at sales@cristalclearwater.com or call 1800 833 0212 for bulk order inquiries and special pricing.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="heading-sm text-text-primary mb-3">What are your delivery areas?</h3>
              <p className="body-md text-text-secondary">
                We currently deliver across Delhi, UP, Haryana, Rajasthan, Jharkhand, Odisha, and Bihar. Contact us to check availability in your area.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="heading-sm text-text-primary mb-3">How do I become a distributor?</h3>
              <p className="body-md text-text-secondary">
                Visit our 'Become a Distributor' page to learn about requirements and fill out the application form. Our team will contact you within 48 hours.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="heading-sm text-text-primary mb-3">What quality certifications do you have?</h3>
              <p className="body-md text-text-secondary">
                We are BIS and FSSAI certified, ensuring the highest quality and safety standards for all our packaged drinking water products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}