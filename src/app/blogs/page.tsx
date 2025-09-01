'use client';

import { useState } from 'react';
import { Search, Calendar, User, Clock, Tag, TrendingUp, Eye } from 'lucide-react';
import { Footer } from '../../components/Footer';

const blogPosts = [
  {
    id: 1,
    title: 'Bottled Water in India: Understanding Market Growth, Consumer Demand, and Key Challenges',
    excerpt: 'The bottled water industry is growing in India. With rising health awareness, rapid development and tourism, the demand for clean and convenient drinking water is increasing.',
    author: 'Nimmi Gurung',
    date: '2024-01-15',
    readTime: '8 min read',
    views: 7021,
    category: 'Industry Insights',
    image: "https://images.unsplash.com/photo-1743796055651-41c743ff2465?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxsYXB0b3AlMjB3cml0aW5nJTIwd29ya3NwYWNlfGVufDB8MHx8fDE3NTY0MTc5MjR8MA&ixlib=rb-4.1.0&q=85",
    attribution: "MJ Duford on Unsplash",
    featured: true
  },
  {
    id: 2,
    title: 'The Hidden Health Benefits of Warm Salt Water',
    excerpt: 'In today\'s fast-paced world, where health trends come and go, some age-old practices remain loved for their simplicity and effectiveness.',
    author: 'Nimmi Gurung',
    date: '2024-01-10',
    readTime: '6 min read',
    views: 6953,
    category: 'Health & Wellness',
    image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxsYXB0b3AlMjB3cml0aW5nJTIwd29ya3NwYWNlfGVufDB8MHx8fDE3NTY0MTc5MjR8MA&ixlib=rb-4.1.0&q=85",
    attribution: "Icons8 Team on Unsplash",
    featured: false
  },
  {
    id: 3,
    title: 'Why we Should not Drink Water While Standing? Simple Tips for Better Health!',
    excerpt: 'We all know that staying hydrated is important for our well-being, but have you ever considered that the way you drink water could affect your health?',
    author: 'Nimmi Gurung',
    date: '2024-01-05',
    readTime: '5 min read',
    views: 6184,
    category: 'Health & Wellness',
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxsYXB0b3AlMjB3cml0aW5nJTIwd29ya3NwYWNlfGVufDB8MHx8fDE3NTY0MTc5MjR8MA&ixlib=rb-4.1.0&q=85",
    attribution: "Andrew Neel on Unsplash",
    featured: false
  },
  {
    id: 4,
    title: 'Why Ice Density Is Less Than Water?',
    excerpt: 'Water is a unique substance in many ways, and one of its most unique properties is that it can freeze. This may seem counterintuitive at first.',
    author: 'Nimmi Gurung',
    date: '2023-12-28',
    readTime: '7 min read',
    views: 3442,
    category: 'Science',
    image: "https://images.unsplash.com/photo-1575278617117-86484b220657?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxsYWJvcmF0b3J5JTIwc2NpZW50aXN0cyUyMHF1YWxpdHklMjB0ZXN0aW5nfGVufDB8MHx8Ymx1ZXwxNzU2NDE3OTIxfDA&ixlib=rb-4.1.0&q=85",
    attribution: "Alexandra Lee on Unsplash",
    featured: false
  },
  {
    id: 5,
    title: 'Do You Know What is River Mouth?',
    excerpt: 'A river mouth is typically characterized by the point where a river\'s flow meets a larger body of water, creating unique ecological conditions.',
    author: 'Nimmi Gurung',
    date: '2023-12-20',
    readTime: '4 min read',
    views: 2761,
    category: 'Environment',
    image: "https://images.unsplash.com/photo-1580982331877-489fb58aeade?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxsYWJvcmF0b3J5JTIwc2NpZW50aXN0cyUyMHF1YWxpdHklMjB0ZXN0aW5nfGVufDB8MHx8Ymx1ZXwxNzU2NDE3OTIxfDA&ixlib=rb-4.1.0&q=85",
    attribution: "ThisisEngineering on Unsplash",
    featured: false
  },
  {
    id: 6,
    title: 'The Importance of Proper Hydration in Daily Life',
    excerpt: 'Understanding the crucial role of adequate water intake in maintaining optimal health and well-being throughout your daily activities.',
    author: 'Dr. Sarah Johnson',
    date: '2023-12-15',
    readTime: '6 min read',
    views: 4521,
    category: 'Health & Wellness',
    image: "https://images.unsplash.com/photo-1579165466991-467135ad3110?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwc2NpZW50aXN0cyUyMHF1YWxpdHklMjB0ZXN0aW5nfGVufDB8MHx8Ymx1ZXwxNzU2NDE3OTIxfDA&ixlib=rb-4.1.0&q=85",
    attribution: "CDC on Unsplash",
    featured: false
  }
];

const categories = [
  { name: 'All', count: blogPosts.length },
  { name: 'Health & Wellness', count: blogPosts.filter(post => post.category === 'Health & Wellness').length },
  { name: 'Industry Insights', count: blogPosts.filter(post => post.category === 'Industry Insights').length },
  { name: 'Science', count: blogPosts.filter(post => post.category === 'Science').length },
  { name: 'Environment', count: blogPosts.filter(post => post.category === 'Environment').length }
];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1743796055651-41c743ff2465?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxsYXB0b3AlMjB3cml0aW5nJTIwd29ya3NwYWNlfGVufDB8MHx8fDE3NTY0MTc5MjR8MA&ixlib=rb-4.1.0&q=85"
            alt="Blog writing workspace - MJ Duford on Unsplash"
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
                Our Blog
              </h1>
              <p className="body-lg text-ice-blue mb-8 slide-up">
                Discover insights, tips, and knowledge about water, health, and wellness. 
                Stay informed with our latest articles and expert advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-ice-blue border-b border-water-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-water-mist rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent bg-pure-white"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.name
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

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && (
        <section className="py-16 bg-pure-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-5 h-5 text-primary-blue" />
                <span className="heading-sm text-primary-blue">Featured Article</span>
              </div>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={`${featuredPost.title} - ${featuredPost.attribution}`}
                    className="w-full h-full object-cover"
                    width="600"
                    height="400"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-blue text-pure-white rounded-full body-sm">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="heading-lg text-text-primary mb-4 hover:text-primary-blue transition-colors duration-300 cursor-pointer">
                    {featuredPost.title}
                  </h2>
                  <p className="body-lg text-text-secondary mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-text-light" />
                        <span className="body-sm text-text-secondary">{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-text-light" />
                        <span className="body-sm text-text-secondary">
                          {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-text-light" />
                        <span className="body-sm text-text-secondary">{featuredPost.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4 text-text-light" />
                        <span className="body-sm text-text-secondary">{featuredPost.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="px-6 py-3 bg-primary-blue text-pure-white rounded-lg hover:bg-deep-ocean transition-all duration-300 self-start">
                    Read Full Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-20 bg-ice-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <article
                key={post.id}
                className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={`${post.title} - ${post.attribution}`}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                    width="400"
                    height="200"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-blue/90 text-pure-white rounded-full body-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="heading-sm text-text-primary hover:text-primary-blue transition-colors duration-300 cursor-pointer line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="body-sm text-text-secondary line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-text-light">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span className="body-sm">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span className="body-sm">{post.views.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-text-light">
                      <Calendar className="w-4 h-4" />
                      <span className="body-sm">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-text-light">
                      <Clock className="w-4 h-4" />
                      <span className="body-sm">{post.readTime}</span>
                    </div>
                  </div>
                  
                  <button className="w-full px-4 py-2 border border-primary-blue text-primary-blue rounded-lg hover:bg-primary-blue hover:text-pure-white transition-all duration-300">
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-water-mist rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-text-light" />
              </div>
              <h3 className="heading-lg text-text-secondary mb-2">No articles found</h3>
              <p className="body-md text-text-light">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 ocean-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="heading-xl text-text-primary mb-4">Stay Updated</h2>
            <p className="body-lg text-text-secondary mb-8">
              Subscribe to our newsletter and never miss our latest articles, tips, and insights 
              about water, health, and wellness.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-water-mist rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              />
              <button className="px-6 py-3 bg-primary-blue text-pure-white rounded-lg hover:bg-deep-ocean transition-all duration-300 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            
            <p className="body-sm text-text-light mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}