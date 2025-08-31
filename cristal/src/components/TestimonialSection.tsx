'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Amit Verma',
    location: 'Jaipur',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    text: 'Been using Cristal Clear Water daily – the taste is pure and refreshing. The bottle quality is great too. Definitely a brand I trust now.'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Delhi',
    avatar: 'https://i.pravatar.cc/150?img=2',
    rating: 5,
    text: 'Excellent water quality! My family has been using Cristal Clear for months now. The purity and taste are unmatched. Highly recommended!'
  },
  {
    id: 3,
    name: 'Rajesh Kumar',
    location: 'Mumbai',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
    text: 'As a fitness enthusiast, I need quality hydration. Cristal Clear Water provides exactly that with perfect mineral balance.'
  }
];

export function TestimonialSection() {
  return (
    <section className="py-20 ocean-gradient relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-light-cyan/20 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-green/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-xl text-text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="body-lg text-text-secondary max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their experience with Cristal Clear Water.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-500 group slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-ocean-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Quote size={24} className="text-pure-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="body-md text-text-secondary text-center mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} avatar`}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary-blue/20 group-hover:border-primary-blue/40 transition-colors duration-300"
                  width="48"
                  height="48"
                />
                <div className="text-center">
                  <h4 className="heading-sm text-text-primary group-hover:text-primary-blue transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="body-sm text-text-light">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="heading-lg text-text-primary mb-4">
              Join Thousands of Happy Customers
            </h3>
            <p className="body-lg text-text-secondary mb-6">
              Experience the purity and quality that makes Cristal Clear Water 
              the preferred choice for families across India.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-primary-blue to-emerald-green text-pure-white heading-sm rounded-lg hover:from-deep-ocean hover:to-forest-green transition-all duration-300 transform hover:scale-105 pulse-glow">
              Try Cristal Clear Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}