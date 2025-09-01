'use client';

import { useEffect, useState } from 'react';
import { Droplets } from 'lucide-react';

const stats = [
  { number: 3, label: 'Years of Excellence', suffix: '+' },
  { number: 500, label: 'Dedicated Staff', suffix: '+' },
  { number: 7, label: 'Cities Covered', suffix: '' },
  { number: 200, label: 'Housing Societies', suffix: '+' },
  { number: 9999, label: 'Happy Customers', suffix: '+' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="heading-xl text-primary-blue">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function AboutSection() {
  return (
    <section className="py-20 ocean-gradient relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <Droplets
            key={i}
            size={40}
            className="absolute text-primary-blue wave-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1616118132534-381148898bb4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGJvdHRsZSUyMHBsYXN0aWMlMjBib3R0bGUlMjBzbWFsbCUyMGJvdHRsZXxlbnwwfDF8fHwxNzU2NDE2NDAyfDA&ixlib=rb-4.1.0&q=85"
              alt="Cristal Clear Water Bottle - charlesdeluvio on Unsplash"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl float-animation"
              width="600"
              height="400"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="heading-xl text-text-primary">
              Cristal Clear Packaged Drinking Water - Purity, Safety, and Taste
            </h2>
            
            <p className="body-lg text-text-secondary">
              Cristal Clear Water is a leading manufacturer of high-quality <strong>packaged drinking water bottles</strong>. 
              Our mineral water is renowned for its cleanliness, purity, safety and taste. We are committed to maintaining 
              the best standards in accordance with the requirements set by the Bureau of Indian Standards (BIS) and the 
              Food Safety and Standards Authority of India (FSSAI).
            </p>
            
            <p className="body-lg text-text-secondary">
              Our <strong>mineral water bottles</strong> are processed in advanced plants located in multiple states, 
              including Delhi, Uttar Pradesh, Haryana, Rajasthan, and Jharkhand, as well as some cities in Odisha and Bihar. 
              These facilities are equipped with the latest technology to ensure the highest level of cleanliness and safety.
            </p>
            
            <button className="px-8 py-4 bg-primary-blue text-pure-white heading-sm rounded-lg hover:bg-deep-ocean transition-all duration-300 transform hover:scale-105 pulse-glow">
              Read More
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300"
            >
              <div className="mb-2">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </div>
              <p className="body-sm text-text-secondary font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}