'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  // Function to create WhatsApp checkout link with order details
  const createWhatsAppCheckoutLink = () => {
    if (cart.length === 0) return '';
    
    const phoneNumber = '916389457042'; // Your WhatsApp number
    const orderItems = cart.map(item => 
      `${item.name} - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}`
    ).join('%0A');
    
    const message = `Hello, I would like to place an order for:%0A${orderItems}%0A%0ATotal: ₹${totalPrice}%0A%0APlease confirm my order. Thank you!`;
    
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-[60vh] flex flex-col items-center justify-center">
        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-gray-300 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-primary-blue mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
          <Link href="/products" className="px-8 py-3 bg-primary-blue text-white font-medium rounded-full hover:bg-ocean-blue transition-all duration-300 transform hover:-translate-y-1 shadow-md">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-primary-blue mb-8">Your Cart</h1>
      <div className="flex justify-end mb-6">
        {cart.length > 0 && (
          <a
            href={createWhatsAppCheckoutLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow transition-all text-lg"
            aria-label="Checkout with WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.175.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 6.318h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.896 6.994c-.003 5.455-4.438 9.89-9.898 9.89zm8.413-18.304A11.815 11.815 0 0012.05 0C5.495 0 .16 5.336.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.679a11.876 11.876 0 005.683 1.448h.005c6.554 0 11.889-5.336 11.892-11.892a11.821 11.821 0 00-3.48-8.651z"/>
            </svg>
            Checkout with WhatsApp
          </a>
        )}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-center border-b border-gray-200 py-4 gap-4 md:gap-6">
              <div className="w-24 h-24 relative rounded-lg overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-primary-blue">{item.name}</h3>
                <p className="text-ocean-blue font-bold">₹ {item.price} /- Per Bottle</p>
              </div>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  -
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  +
                </button>
              </div>
              
              <div className="text-right">
                <p className="font-bold text-primary-blue">₹ {item.price * item.quantity}</p>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm hover:text-red-700 transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          <div className="mt-4">
            <button 
              onClick={clearCart}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              Clear Cart
            </button>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-bold text-primary-blue mb-4">Order Summary</h2>
          
          <div className="space-y-2 mb-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span>₹ {item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 pt-4 mb-6">
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹ {totalPrice}</span>
            </div>
          </div>
          
          <Link 
            href={createWhatsAppCheckoutLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-500 text-white py-3 px-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1 shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.175.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M13.507 21.57h-.014a11.75 11.75 0 01-5.656-1.445l-.407-.242-4.215 1.107 1.125-4.12-.265-.422a11.642 11.642 0 01-1.766-6.2c.001-6.453 5.254-11.706 11.707-11.706 3.13 0 6.07 1.22 8.275 3.43 2.203 2.207 3.418 5.149 3.416 8.274-.002 6.452-5.255 11.703-11.7 11.703z" fillRule="nonzero"/>
            </svg>
            Checkout via WhatsApp
          </Link>
          
          <p className="text-sm text-gray-500 mt-4 text-center">
            We will contact you on WhatsApp to confirm your order and arrange payment.
          </p>
        </div>
      </div>
    </div>
  );
}