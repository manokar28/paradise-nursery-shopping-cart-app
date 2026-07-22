import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';

function App() {
  const [view, setView] = useState('landing'); // Navigation states: 'landing' | 'products' | 'cart'

  return (
    <div className="App">
      {view === 'landing' && (
        <div className="landing-page">
          <h1 style={{ fontSize: '4rem', marginBottom: '10px' }}>Paradise Nursery</h1>
          <p style={{ fontSize: '1.6rem', marginBottom: '30px' }}>Where green meets peace.</p>
          
          <button className="get-started-btn" onClick={() => setView('products')}>
            Get Started
          </button>
          
          <AboutUs />
        </div>
      )}

      {view === 'products' && (
        <ProductList 
          onViewCart={() => setView('cart')} 
          onViewHome={() => setView('landing')} 
        />
      )}

      {view === 'cart' && (
        <CartItem 
          onContinueShopping={() => setView('products')} 
        />
      )}
    </div>
  );
}

export default App;
