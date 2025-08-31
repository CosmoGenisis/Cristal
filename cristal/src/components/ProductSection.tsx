'use client';

import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: '200 ML Bottles',
    price: '₹ 6',
    image: "https://images.unsplash.com/photo-1616118132534-381148898bb4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHx3YXRlciUyMGJvdHRsZSUyMHBsYXN0aWMlMjBib3R0bGUlMjBzbWFsbCUyMGJvdHRsZXxlbnwwfDF8fHwxNzU2NDE2NDAyfDA&ixlib=rb-4.1.0&q=85",
    attribution: "charlesdeluvio on Unsplash",
    description: "Perfect for on-the-go hydration"
  },
  {
    id: 2,
    name: '500 ML Bottles',
    price: '₹ 10',
    image: "https://images.unsplash.com/photo-1616118270583-190181212f36?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHx3YXRlciUyMGJvdHRsZSUyMHBsYXN0aWMlMjBib3R0bGUlMjBtZWRpdW0lMjBib3R0bGV8ZW58MHwxfHx8MTc1NjQxNjQwMnww&ixlib=rb-4.1.0&q=85",
    attribution: "charlesdeluvio on Unsplash",
    description: "Ideal for daily hydration needs"
  },
  {
    id: 3,
    name: '1 L Bottles',
    price: '₹ 20',
    image: "https://images.unsplash.com/photo-1655079343782-f0fc4704753e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw3fHx3YXRlciUyMGJvdHRsZSUyMHBsYXN0aWMlMjBib3R0bGUlMjBsYXJnZSUyMGJvdHRsZXxlbnwwfDF8fHwxNzU2NDE2NDAyfDA&ixlib=rb-4.1.0&q=85",
    attribution: "Amr Taha™ on Unsplash",
    description: "Great for family use"
  },
  {
    id: 4,
    name: '2L Bottles',
    price: '₹ 30',
    image: "https://images.unsplash.com/photo-1616118270583-190181212f36?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHx3YXRlciUyMGJvdHRsZSUyMHBsYXN0aWMlMjBib3R0bGUlMjBleHRyYSUyMGxhcmdlJTIwYm90dGxlfGVufDB8MXx8fDE3NTY0MTY0MDJ8MA&ixlib=rb-4.1.0&q=85",
    attribution: "charlesdeluvio on Unsplash",
    description: "Perfect for sharing"
  },
  {
    id: 5,
    name: '20 L Jar',
    price: '₹ 80',
    image: "https://images.unsplash.com/photo-1662647344223-ae724eb97204?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGphciUyMHdhdGVyJTIwZGlzcGVuc2VyJTIwbGFyZ2UlMjB3YXRlciUyMGNvbnRhaW5lcnxlbnwwfDF8fGJsdWV8MTc1NjQxNjQwMnww&ixlib=rb-4.1.0&q=85",
    attribution: "Bluewater Sweden on Unsplash",
    description: "Office and home dispenser"
  }
];

export function ProductSection() {
  return (
    <section className="py-20 bg-pure-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-xl text-text-primary mb-4">
            Bottles We Deliver
          </h2>
          <p className="body-lg text-text-secondary max-w-2xl mx-auto">
            Choose from our wide range of premium water bottles, 
            each crafted with the highest quality standards for your hydration needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative card-gradient rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product image */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={`${product.name} - ${product.attribution}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  width="300"
                  height="200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product info */}
              <div className="text-center space-y-3">
                <h3 className="heading-md text-text-primary group-hover:text-primary-blue transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="body-sm text-text-secondary">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="heading-lg text-emerald-green">
                    {product.price}
                  </span>
                  <span className="body-sm text-text-light">
                    Per Bottle
                  </span>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl flex items-end justify-center pb-6">
                <button className="px-6 py-3 bg-pure-white text-primary-blue heading-sm rounded-lg hover:bg-ice-blue transition-all duration-300 flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0">
                  <ShoppingCart size={18} />
                  <span>Order Now</span>
                </button>
              </div>

              {/* Floating effect */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-green rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 pulse-glow"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button className="px-10 py-4 bg-gradient-to-r from-primary-blue to-ocean-blue text-pure-white heading-sm rounded-lg hover:from-deep-ocean hover:to-primary-blue transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}