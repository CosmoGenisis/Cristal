'use client';

import { ShieldCheck, Droplets, Factory, BadgeCheck, Microscope, Award, TestTube, Users } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Commitment to Safety and Taste',
    description: 'Strict adherence to BIS and FSSAI guidelines ensures high safety and great taste.',
    color: 'text-emerald-green'
  },
  {
    icon: Droplets,
    title: 'Advanced Purification',
    description: 'Multi-step filtration and purification systems guarantee world-class packaged drinking water quality.',
    color: 'text-primary-blue'
  },
  {
    icon: TestTube,
    title: 'Stringent Process',
    description: 'Careful water collection from premium sources, filtration, UV sterilization, and sanitized bottling.',
    color: 'text-cyan-water'
  },
  {
    icon: BadgeCheck,
    title: 'Quality Assurance',
    description: 'Human inspection, modern equipment, and automated sanitation ensure zero defects in our packaged drinking water.',
    color: 'text-mint-green'
  },
  {
    icon: Factory,
    title: 'Modern Facilities',
    description: 'State-of-the-art production plants equipped for efficient and safe mineral water bottle processing.',
    color: 'text-ocean-blue'
  },
  {
    icon: Microscope,
    title: 'Nutritional Enhancement',
    description: 'Selected mineral addition improves water\'s nutritional value.',
    color: 'text-forest-green'
  },
  {
    icon: Award,
    title: 'Regular Testing',
    description: 'Continuous quality checks to maintain highest standards.',
    color: 'text-deep-ocean'
  },
  {
    icon: Users,
    title: 'Customer Commitment',
    description: 'Providing pure, safe, and great-tasting water for customer satisfaction.',
    color: 'text-light-green'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-pure-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #0ea5e9 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #10b981 0%, transparent 50%)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-xl text-text-primary mb-4">
            Why Our Packaged Drinking Water Stands Out?
          </h2>
          <p className="body-lg text-text-secondary max-w-3xl mx-auto">
            Discover what makes Cristal Clear Water the preferred choice for millions. 
            Our commitment to excellence ensures every drop meets the highest standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-pure-white to-ice-blue p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-water-mist/30 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pure-white to-water-mist shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={32} className={`${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                {/* Glow effect */}
                <div className={`absolute inset-0 w-16 h-16 rounded-full ${feature.color.replace('text-', 'bg-')}/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="heading-sm text-text-primary group-hover:text-primary-blue transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="body-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Corner accent */}
              <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${feature.color.replace('text-', 'bg-')} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pulse-glow`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="heading-lg text-text-primary mb-4">
              Enjoy the clean, refreshing taste of Cristal Clear mineral water
            </h3>
            <p className="body-lg text-text-secondary mb-6">
              Crafted with excellence for optimal hydration and health benefits.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-green to-mint-green text-pure-white heading-sm rounded-lg hover:from-forest-green hover:to-emerald-green transition-all duration-300 transform hover:scale-105 pulse-glow">
              Experience the Difference
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}