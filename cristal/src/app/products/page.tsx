
'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Filter, Search, Star, Droplets, Shield, Award } from 'lucide-react';
import { Footer } from '../../components/Footer';

const products = [
  {
    id: 1,
    name: '200 ML Bottles',
    price: 6,
    originalPrice: 8,
    image: "https://images.unsplash.com/photo-1616118132534-381148898bb4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHx3YXRlciUyMGJvdHRsZSUyMHBsYXN0aWMlMjBib3R0bGUlMjBzbWFsbCUyMGJvdHRsZXxlbnwwfDF8fHwxNzU2NDE2NDAyfDA&ixlib=rb-4.1.0&q=85",
    attribution: "charlesdeluvio on Unsplash",
    category: 'small',
    description: 'Perfect for on-the-go hydration and quick refreshment',
    features: ['BIS Certified', 'UV Treated', 'Portable Size'],
    specifications: {
      volume: '200ml',
      material: 'PET Plastic',
      shelfLife: '12 months',
      packaging: '24 bottles per case'
    },
    rating: 4.8,
    reviews: 156
  },
  {
    id: 2,
    name: '500 ML Bottles',
    price: 10,
    originalPrice: 12,
    image: "https://images.unsplash.com/photo-1616118270583-190181212f36?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHx3YXRlciUyMGJvdHRsZSUyMHBsYXN0aWMlMjBib3R0bGUlMjBtZWRpdW0lMjBib3R0bGV8ZW58MHwxfHx8MTc1NjQxNjQwMnww&ixlib=rb-4.1.0&q=85",
    attribution: "charlesdeluvio on Unsplash",
    category: 'medium',
    description: 'Ideal for daily hydration needs and office use',
    features: ['FSSAI Approved', 'Mineral Enhanced', 'Ergonomic Design'],
    specifications: {
      volume: '500ml',
      material: 'PET Plastic',
      shelfLife: '12 months',
      packaging: '24 bottles per case'
    },
    rating: 4.9,
    reviews: 243
  },
  {
    id: 3,
    name: '1 L Bottles',
    price: 20,
    originalPrice: 25,
    image: "https://images.unsplash.com/photo-1655079343782-f0fc4704753e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw3fHx3YXRlciUyMGJvdHRsZSUyMHBsYXN0aWMlMjBib3R0bGUlMjBsYXJnZSUyMGJvdHRsZXxlbnwwfDF8fHwxNzU2NDE2NDAyfDA&ixlib=rb-4.1.0&q=85",
    attribution: "Amr Taha™ on Unsplash",
    category: 'large',
    description: 'Great for family use and extended activities',
    features: ['Premium Quality', 'Family Size', 'Value Pack'],
    specifications: {
      volume: '1000ml',
      material: 'PET Plastic',
      shelfLife: '12 months',
      packaging: '12 bottles per case'
    },
    rating: 4.7,
    reviews: 189
  },
  {
    id: 4,
    name: '2L Bottles',
    price: 30,
    originalPrice: 35,
    image: "https://images.unsplash.com/photo-1616118270583-190181212f36?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHx3YXRlciUyMGJvdHRsZSUyMHBsYXN0aWMlMjBib3R0bGUlMjBleHRyYSUyMGxhcmdlJTIwYm90dGxlfGVufDB8MXx8fDE3NTY0MTY0MDJ8MA&ixlib=rb-4.1.0&q=85",
    attribution: "charlesdeluvio on Unsplash",
    category: 'large',
    description: 'Perfect for sharing and large gatherings',
    features: ['Economy Size', 'Multi-serve', 'Cost Effective'],
    specifications: {
      volume: '2000ml',
      material: 'PET Plastic',
      shelfLife: '12 months',
      packaging: '6 bottles per case'
    },
    rating: 4.6,
    reviews: 134
  },
  {
    id: 5,
    name: '20 L Jar',
    price: 80,
    originalPrice: 100,
    image: "https://images.unsplash.com/photo-1662647344223-ae724eb97204?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGphciUyMHdhdGVyJTIwZGlzcGVuc2VyJTIwbGFyZ2UlMjB3YXRlciUyMGNvbnRhaW5lcnxlbnwwfDF8fGJsdWV8MTc1NjQxNjQwMnww&ixlib=rb-4.1.0&q=85",
    attribution: "Bluewater Sweden on Unsplash",
    category: 'dispenser',
    description: 'Office and home dispenser solution',
    features: ['Dispenser Compatible', 'Bulk Supply', 'Office Solution'],
    specifications: {
      volume: '20000ml',
      material: 'PC Plastic',
      shelfLife: '6 months',
      packaging: 'Individual unit'
    },
    rating: 4.9,
    reviews: 98
  }
];

const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'small', name: 'Small (200ml)', count: products.filter(p => p.category === 'small').length },
  { id: 'medium', name: 'Medium (500ml)', count: products.filter(p => p.category === 'medium').length },
  { id: 'large', name: 'Large (1L-2L)', count: products.filter(p => p.category === 'large').length },
  { id: 'dispenser', name: 'Dispenser (20L)', count: products.filter(p => p.category === 'dispenser').length }
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const { addToCart } = useCart();

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Helper to adapt product for cart
  const toCartProduct = (product: any, quantity: number = 1) => ({
    id: String(product.id),
    name: product.name,
    price: product.price,
    image: product.image,
    quantity,
  });

  // For modal quantity
  const [modalQuantity, setModalQuantity] = useState(1);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1547908069-e6a413bd1e9e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGJvdHRsZXMlMjBtdWx0aXBsZSUyMGJvdHRsZXMlMjBwcm9kdWN0JTIwZGlzcGxheXxlbnwwfDB8fGJsdWV8MTc1NjQxNjQwN3ww&ixlib=rb-4.1.0&q=85"
            alt="Multiple water bottles - CHUTTERSNAP on Unsplash"
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
                Our Premium Products
              </h1>
              <p className="body-lg text-ice-blue mb-8 slide-up">
                Discover our complete range of premium packaged drinking water bottles, 
                each crafted with the highest quality standards for your hydration needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-ice-blue border-b border-water-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-water-mist rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent bg-pure-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary-blue text-pure-white'
                      : 'bg-pure-white text-text-secondary hover:bg-water-mist'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group relative card-gradient rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Discount Badge */}
                {product.originalPrice > product.price && (
                  <div className="absolute top-4 right-4 bg-emerald-green text-pure-white px-2 py-1 rounded-full text-xs font-medium">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </div>
                )}

                {/* Product Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img
                    src={product.image}
                    alt={`${product.name} - ${product.attribution}`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    width="300"
                    height="200"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="heading-sm text-text-primary group-hover:text-primary-blue transition-colors duration-300">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-text-secondary">{product.rating}</span>
                    </div>
                  </div>
                  
                  <p className="body-sm text-text-secondary">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, i) => (
                      <span key={i} className="px-2 py-1 bg-primary-blue/10 text-primary-blue text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="heading-md text-emerald-green">
                        ₹{product.price}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-text-light line-through">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="body-sm text-text-light">per bottle</span>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="flex-1 px-4 py-2 border border-primary-blue text-primary-blue rounded-lg hover:bg-primary-blue hover:text-pure-white transition-all duration-300"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => addToCart(toCartProduct(product))}
                      className="px-4 py-2 bg-primary-blue text-pure-white rounded-lg hover:bg-deep-ocean transition-all duration-300 flex items-center space-x-2"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <ShoppingCart size={16} />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-water-mist rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-text-light" />
              </div>
              <h3 className="heading-lg text-text-secondary mb-2">No products found</h3>
              <p className="body-md text-text-light">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-pure-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="heading-xl text-text-primary">{selectedProduct.name}</h2>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-text-secondary hover:text-text-primary transition-colors duration-300"
                >
                  ✕
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={`${selectedProduct.name} - ${selectedProduct.attribution}`}
                    className="w-full h-96 object-cover rounded-xl"
                    width="400"
                    height="400"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="heading-lg text-emerald-green">₹{selectedProduct.price}</span>
                        {selectedProduct.originalPrice > selectedProduct.price && (
                          <span className="text-lg text-text-light line-through">₹{selectedProduct.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="body-md text-text-secondary">{selectedProduct.rating} ({selectedProduct.reviews} reviews)</span>
                      </div>
                    </div>
                    <p className="body-lg text-text-secondary">{selectedProduct.description}</p>
                  </div>

                  <div>
                    <h3 className="heading-sm text-text-primary mb-3">Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.features.map((feature: string, i: number) => (
                        <span key={i} className="px-3 py-1 bg-primary-blue/10 text-primary-blue rounded-full body-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="heading-sm text-text-primary mb-3">Specifications</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                        <div key={key} className="glass-card p-3 rounded-lg">
                          <div className="body-sm text-text-light capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          <div className="body-md text-text-primary font-medium">{String(value)}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quantity Selector */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-medium">Quantity:</span>
                    <button
                      className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      onClick={() => setModalQuantity(q => Math.max(1, q - 1))}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min={1}
                      value={modalQuantity}
                      onChange={e => setModalQuantity(Math.max(1, Number(e.target.value)))}
                      className="w-12 text-center border rounded"
                    />
                    <button
                      className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      onClick={() => setModalQuantity(q => q + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      className="flex-1 px-6 py-3 bg-primary-blue text-pure-white rounded-lg hover:bg-deep-ocean transition-all duration-300 flex items-center justify-center space-x-2"
                      onClick={() => {
                        addToCart(toCartProduct(selectedProduct, modalQuantity), modalQuantity);
                        setSelectedProduct(null);
                        setModalQuantity(1);
                      }}
                      aria-label={`Add ${selectedProduct?.name} to cart`}
                    >
                      <ShoppingCart size={20} />
                      <span>Add to Cart</span>
                    </button>
                    <button className="px-6 py-3 border border-primary-blue text-primary-blue rounded-lg hover:bg-primary-blue hover:text-pure-white transition-all duration-300">
                      Contact for Bulk Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quality Assurance */}
      <section className="py-20 ocean-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-xl text-text-primary mb-4">Quality You Can Trust</h2>
            <p className="body-lg text-text-secondary max-w-3xl mx-auto">
              Every bottle undergoes rigorous quality checks to ensure you receive the purest, 
              safest drinking water every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-ocean-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-pure-white" />
              </div>
              <h3 className="heading-md text-text-primary mb-4">Pure & Clean</h3>
              <p className="body-md text-text-secondary">
                Advanced multi-stage filtration removes all impurities while retaining essential minerals.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-green to-mint-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-pure-white" />
              </div>
              <h3 className="heading-md text-text-primary mb-4">Safety First</h3>
              <p className="body-md text-text-secondary">
                UV sterilization and ozonation ensure complete elimination of harmful microorganisms.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-water to-light-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-pure-white" />
              </div>
              <h3 className="heading-md text-text-primary mb-4">Certified Quality</h3>
              <p className="body-md text-text-secondary">
                BIS and FSSAI certified with regular third-party quality audits and testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
