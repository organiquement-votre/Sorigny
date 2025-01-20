import React, { useState } from 'react';
import { postsCBD as initialPosts } from './nouveauxCBD';
import Swal from 'sweetalert2';

const CBD = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(initialPosts.map(post => post.category))];

  const filteredPosts = selectedCategory === 'all'
    ? initialPosts
    : initialPosts.filter(post => post.category === selectedCategory);

  const showProductDetails = (post) => {
    Swal.fire({
      title: post.title,
      html: `
        <div class="swal2-product-details">
          <img 
            src="${post.image}" 
            alt="${post.title}" 
            class="swal2-product-image"
            style="width: 100%; max-height: 300px; object-fit: contain; border-radius: 8px; margin-bottom: 16px;"
          />
          <div class="swal2-product-description" style="text-align: left; margin-bottom: 16px;">
            ${post.longDescription || post.content}
          </div>
          ${post.price ? `
          <div class="swal2-product-price" style="font-size: 1.25rem; font-weight: bold; color: #059669;">
            Prix : ${post.price}€ / gramme
          </div>
        ` : ''}
        </div>
      `,
      width: 600,
      showConfirmButton: false,
      showCloseButton: true,
      customClass: {
        container: 'swal2-product-modal',
        popup: 'swal2-product-popup',
        content: 'swal2-product-content'
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-12">
      <h1 className="text-3xl font-bold mb-8">Nos produits CBD</h1>

      <div className="flex gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {category === 'all' ? 'Tous les produits' : category}
          </button>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {filteredPosts.map(post => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-64 object-contain"
              />
              <span className="absolute top-72 right-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                {post.category}
              </span>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-4">
                {new Date(post.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <p className="text-gray-800">
                {post.content.length > 150 
                  ? `${post.content.substring(0, 150)}...` 
                  : post.content
                }
              </p>
              
              <button 
                onClick={() => showProductDetails(post)}
                className="mt-4 text-green-600 hover:text-green-700 font-medium flex items-center"
              >
                En savoir plus 
                <svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default CBD;