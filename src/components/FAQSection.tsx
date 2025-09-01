'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'What is the pH level of Cristal Clear Water?',
    answer: 'Cristal Clear mineral water typically has a pH level between 6.5 and 8.5, making it fall within the neutral to slightly alkaline range, which is ideal for drinking.'
  },
  {
    id: 2,
    question: 'Is Cristal Clear a brand of packaged drinking water?',
    answer: 'Absolutely, Cristal Clear offers best packaged drinking water that goes through extensive purification procedures to ensure it meets the highest quality and safety standards before being bottled and distributed.'
  },
  {
    id: 3,
    question: 'What does TDS stand for in water?',
    answer: 'Total Dissolved Solids (TDS) in water represents the number of dissolved substances, such as minerals, salts, and metals, present in the water. Cristal Clear guarantees that its water contains the right amount of minerals while keeping the Total Dissolved Solids (TDS) levels low for cleanliness.'
  },
  {
    id: 4,
    question: 'Can we reuse Cristal Clear Water bottles?',
    answer: 'To ensure safety and cleanliness, it is advised not to reuse Cristal Clear mineral water bottles. Our bottles are specifically created for one-time use and are constructed using materials that ensure the preservation and security of our water bottle. It is highly encouraged to recycle the bottles to reduce the negative impact on the environment.'
  },
  {
    id: 5,
    question: 'Where does Cristal Clear water come from?',
    answer: 'Cristal Clear Packaged Drinking Water originates from pristine natural springs and undergoes meticulous filtration and purification procedures to guarantee the utmost quality and safety.'
  },
  {
    id: 6,
    question: 'Is it safe for children and pregnant women to consume Cristal Clear water?',
    answer: 'Absolutely, Cristal Clear Packaged Drinking Water is suitable for consumption by individuals of all ages, including children and expectant mothers. It complies with all regulations and undergoes rigorous testing to guarantee its safety.'
  }
];

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-20 bg-ice-blue relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <HelpCircle
            key={i}
            size={30}
            className="absolute text-primary-blue float-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-xl text-text-primary mb-4">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="body-lg text-text-secondary">
            Find answers to the most common questions about Cristal Clear Water. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="glass-card rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-pure-white/20 transition-colors duration-300 group"
              >
                <h3 className="heading-sm text-text-primary group-hover:text-primary-blue transition-colors duration-300 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === faq.id ? (
                    <ChevronUp size={24} className="text-primary-blue transform group-hover:scale-110 transition-transform duration-300" />
                  ) : (
                    <ChevronDown size={24} className="text-text-secondary group-hover:text-primary-blue transform group-hover:scale-110 transition-all duration-300" />
                  )}
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-primary-blue/20 to-transparent mb-4"></div>
                  <p className="body-md text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact support */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="heading-lg text-text-primary mb-4">
              Still Have Questions?
            </h3>
            <p className="body-lg text-text-secondary mb-6">
              Our customer support team is here to help you with any additional questions 
              about Cristal Clear Water products and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary-blue text-pure-white heading-sm rounded-lg hover:bg-deep-ocean transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="px-8 py-4 border-2 border-primary-blue text-primary-blue heading-sm rounded-lg hover:bg-primary-blue hover:text-pure-white transition-all duration-300">
                Call: 1800 833 3011
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}