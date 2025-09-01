'use client';

import { Droplets, Leaf, Zap, Heart } from 'lucide-react';

const compositions = [
  {
    icon: Droplets,
    name: 'Calcium',
    amount: '0.5mg',
    description: 'Calcium is an important mineral that plays a vital role in maintaining healthy bones and teeth, facilitating muscle movement, and facilitating nerve communication.',
    color: 'text-primary-blue'
  },
  {
    icon: Leaf,
    name: 'Magnesium',
    amount: '0.2mg',
    description: 'Magnesium is important for more than 300 biochemical reactions in the body, such as energy production, muscle function, and maintaining healthy bones and heart rhythm.',
    color: 'text-emerald-green'
  },
  {
    icon: Zap,
    name: 'Carbohydrate',
    amount: '0g',
    description: 'Carbohydrates are the main source of energy for the body, especially for brain function and physical activity.',
    color: 'text-cyan-water'
  },
  {
    icon: Heart,
    name: 'Potassium',
    amount: '0.1mg',
    description: 'Potassium is an essential electrolyte that plays an important role in maintaining fluid balance, muscle function and nerve transmission in the body.',
    color: 'text-mint-green'
  }
];

export function WaterComposition() {
  return (
    <section className="py-20 bg-ice-blue relative overflow-hidden">
      {/* Background waves */}
      <div className="absolute inset-0">
        <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z" 
                fill="rgba(14, 165, 233, 0.1)" className="wave-animation"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-xl text-text-primary mb-4">
            Cristal Clear Water Composition
          </h2>
          <p className="body-lg text-text-secondary max-w-3xl mx-auto">
            Our water is carefully balanced with essential minerals to provide optimal hydration 
            and health benefits for your daily wellness needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {compositions.map((comp, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-500 group slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pure-white to-water-mist mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <comp.icon size={32} className={`${comp.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="heading-md text-text-primary group-hover:text-primary-blue transition-colors duration-300">
                  {comp.name}
                </h3>
                <div className={`heading-lg ${comp.color} font-bold`}>
                  {comp.amount}
                </div>
                <p className="body-sm text-text-secondary leading-relaxed">
                  {comp.description}
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="heading-lg text-text-primary mb-4">
              Perfect Mineral Balance
            </h3>
            <p className="body-lg text-text-secondary">
              Each bottle of Cristal Clear Water contains the perfect balance of essential minerals, 
              carefully maintained through our advanced purification process to ensure optimal taste and health benefits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}