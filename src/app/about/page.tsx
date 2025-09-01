'use client';

import { Clock, Award, Users, MapPin, Target, Eye, Heart, CheckCircle } from 'lucide-react';
import { Footer } from '../../components/Footer';

const timeline = [
  {
    year: '2021',
    title: 'Company Founded',
    description: 'Cristal Clear Water was established with a vision to provide pure, safe drinking water to every household in India.',
    icon: <Award className="w-6 h-6" />
  },
  {
    year: '2022',
    title: 'First Production Plant',
    description: 'Opened our state-of-the-art manufacturing facility in Delhi with advanced purification technology.',
    icon: <MapPin className="w-6 h-6" />
  },
  {
    year: '2023',
    title: 'Multi-State Expansion',
    description: 'Expanded operations to 7 cities across multiple states including UP, Haryana, Rajasthan, and Jharkhand.',
    icon: <Users className="w-6 h-6" />
  },
  {
    year: '2024',
    title: 'Premium Quality Recognition',
    description: 'Achieved full BIS and FSSAI certification, establishing ourselves as a premium water brand.',
    icon: <CheckCircle className="w-6 h-6" />
  }
];

const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Our Mission',
    description: 'To provide the highest quality packaged drinking water that ensures purity, safety, and taste while maintaining environmental responsibility and customer satisfaction.',
    color: 'text-primary-blue'
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: 'Our Vision',
    description: 'To become India\'s most trusted and preferred mineral water brand, setting new standards in quality and innovation while contributing to public health and wellness.',
    color: 'text-emerald-green'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Our Values',
    description: 'Integrity, Quality Excellence, Customer Focus, Environmental Stewardship, and Continuous Innovation guide every aspect of our business operations.',
    color: 'text-cyan-water'
  }
];

const certifications = [
  { name: 'BIS Certified', description: 'Bureau of Indian Standards' },
  { name: 'FSSAI Approved', description: 'Food Safety Standards Authority' },
  { name: 'ISO 9001:2015', description: 'Quality Management System' },
  { name: 'HACCP Certified', description: 'Hazard Analysis Critical Control Points' }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1613155961736-d0782a58f170?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxvZmZpY2UlMjBidWlsZGluZyUyMGNvcnBvcmF0ZSUyMGhlYWRxdWFydGVycyUyMG1vZGVybiUyMGFyY2hpdGVjdHVyZXxlbnwwfDB8fGJsdWV8MTc1NjQxNzkyMXww&ixlib=rb-4.1.0&q=85"
            alt="Modern corporate office building - Roger Starnes Sr on Unsplash"
            className="w-full h-full object-cover"
            width="1920"
            height="600"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/90 via-ocean-blue/70 to-emerald-green/60"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="heading-hero text-pure-white mb-6 slide-up">
                About Cristal Clear Water
              </h1>
              <p className="body-lg text-ice-blue mb-8 slide-up">
                Leading the industry in premium packaged drinking water with unwavering commitment 
                to purity, safety, and customer satisfaction since 2021.
              </p>
            </div>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-light-cyan/40 rounded-full float-animation"
              style={{
                left: `${15 + i * 12}%`,
                top: `${20 + (i % 4) * 20}%`,
                animationDelay: `${i * 0.7}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 ocean-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-xl text-text-primary mb-4">Our Foundation</h2>
            <p className="body-lg text-text-secondary max-w-3xl mx-auto">
              Built on strong principles and guided by clear vision, we strive to make a positive impact 
              on health and wellness through premium quality water.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-500 slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pure-white to-water-mist mb-6 ${value.color}`}>
                  {value.icon}
                </div>
                <h3 className="heading-md text-text-primary mb-4">{value.title}</h3>
                <p className="body-md text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-xl text-text-primary mb-4">Our Journey</h2>
            <p className="body-lg text-text-secondary max-w-3xl mx-auto">
              From a vision to reality - discover the milestones that shaped Cristal Clear Water 
              into the trusted brand it is today.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-blue to-emerald-green rounded-full"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} slide-up`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="text-primary-blue">{item.icon}</div>
                        <span className="heading-sm text-primary-blue">{item.year}</span>
                      </div>
                      <h3 className="heading-md text-text-primary mb-2">{item.title}</h3>
                      <p className="body-sm text-text-secondary">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 w-4 h-4 bg-primary-blue rounded-full border-4 border-pure-white shadow-lg pulse-glow"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-20 bg-ice-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-xl text-text-primary mb-6">Manufacturing Excellence</h2>
              <p className="body-lg text-text-secondary mb-6">
                Our state-of-the-art production facilities are equipped with the latest technology 
                to ensure every bottle meets the highest standards of purity and safety.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-green" />
                  <span className="body-md text-text-secondary">Advanced multi-stage filtration systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-green" />
                  <span className="body-md text-text-secondary">UV sterilization and ozonation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-green" />
                  <span className="body-md text-text-secondary">Automated quality control systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-green" />
                  <span className="body-md text-text-secondary">Hygienic bottling environment</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1590844173468-50ea17dfed6d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHx3YXRlciUyMHRyZWF0bWVudCUyMHBsYW50JTIwaW5kdXN0cmlhbCUyMGZhY2lsaXR5JTIwcHVyaWZpY2F0aW9uJTIwZXF1aXBtZW50fGVufDB8MHx8Ymx1ZXwxNzU2NDE3OTIxfDA&ixlib=rb-4.1.0&q=85"
                alt="Water treatment facility - Brett Jordan on Unsplash"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl float-animation"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-xl text-text-primary mb-4">Certifications & Standards</h2>
            <p className="body-lg text-text-secondary max-w-3xl mx-auto">
              Our commitment to quality is validated by prestigious certifications and adherence 
              to the highest industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-all duration-300 slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-emerald-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-pure-white" />
                </div>
                <h3 className="heading-sm text-text-primary mb-2">{cert.name}</h3>
                <p className="body-sm text-text-secondary">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 ocean-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-xl text-text-primary mb-4">Our Team</h2>
            <p className="body-lg text-text-secondary max-w-3xl mx-auto">
              Behind every bottle of Cristal Clear Water is a dedicated team of professionals 
              committed to excellence and innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1739285452618-0b7b3d04f953?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwb2ZmaWNlJTIwZW52aXJvbm1lbnR8ZW58MHwwfHx8MTc1NjQxNzkyMXww&ixlib=rb-4.1.0&q=85"
                alt="Professional team meeting - Ninthgrid on Unsplash"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                width="600"
                height="400"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="heading-lg text-text-primary">500+ Dedicated Professionals</h3>
              <p className="body-lg text-text-secondary">
                Our diverse team includes water quality experts, production specialists, quality assurance 
                professionals, and customer service representatives, all working together to deliver 
                excellence in every aspect of our operations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card p-4 rounded-lg text-center">
                  <div className="heading-lg text-primary-blue">50+</div>
                  <div className="body-sm text-text-secondary">Quality Experts</div>
                </div>
                <div className="glass-card p-4 rounded-lg text-center">
                  <div className="heading-lg text-emerald-green">200+</div>
                  <div className="body-sm text-text-secondary">Production Staff</div>
                </div>
                <div className="glass-card p-4 rounded-lg text-center">
                  <div className="heading-lg text-cyan-water">100+</div>
                  <div className="body-sm text-text-secondary">Distribution Team</div>
                </div>
                <div className="glass-card p-4 rounded-lg text-center">
                  <div className="heading-lg text-mint-green">150+</div>
                  <div className="body-sm text-text-secondary">Support Staff</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}