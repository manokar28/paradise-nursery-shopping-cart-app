import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/CartSlice';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { id: 1, name: 'Snake Plant', cost: 15, image: 'https://unsplash.com', description: 'Produces pure oxygen at night.' },
      { id: 2, name: 'Spider Plant', cost: 12, image: 'https://unsplash.com', description: 'Extremely resilient and filters harmful toxins.' }
    ]
  },
  {
    category: 'Aromatic Houseplants',
    plants: [
      { id: 3, name: 'Lavender', cost: 20, image: 'https://unsplash.com', description: 'Calming aromatics ideal for relaxation.' },
      { id: 4, name: 'Spearmint Mint', cost: 10, image: 'https://unsplash.com', description: 'Invigorating scent that serves great in teas.' }
    ]
  },
  {
    category: 'Low Maintenance Succulents',
    plants: [
      { id: 5, name: 'ZZ Plant', cost: 25, image: 'https://unsplash.com', description: 'Thrives in dim settings with minimal watering.' },
      { id: 6, name: 'Aloe Vera', cost: 14, image: 'https://unsplash.com', description: 'Beautiful geometric succulent with soothing gel.' }
    ]
  }
];

const ProductList = ({ onViewCart, onViewHome }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Computes absolute dynamic quantity counter
  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      {/* Target Global Top Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 40px', backgroundColor: '#2e7d32', color: 'white', alignItems: 'center' }}>
        <h2 style={{ margin: 0, cursor: 'pointer' }} onClick={onViewHome}>Paradise Nursery</h2>
        <div style={{ display: 'flex', gap: '30px' }}>
          <span onClick={onViewHome} style={{ cursor: 'pointer', fontSize: '1.1rem' }}>Home</span>
          <span style={{ cursor: 'pointer', fontSize: '1.1rem', fontWeight: 'bold', textDecoration: 'underline' }}>Plants</span>
          <span onClick={onViewCart} style={{ cursor: 'pointer', fontSize: '1.1rem', display: 'flex', alignItems: 'center' }}>
            🛒 Cart ({totalCartCount})
          </span>
        </div>
      </nav>

      {/* Main Stock Interface */}
      <div style={{ padding: '40px' }}>
        {plantsArray.map((group) => (
          <div key={group.category} style={{ marginBottom: '50px' }}>
            <h2 style={{ color: '#2e7d32', borderBottom: '2px solid #a5d6a7', paddingBottom: '10px' }}>{group.category}</h2>
            <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap', marginTop: '20px' }}>
              {group.plants.map((plant) => {
                const isItemAdded = cartItems.some((item) => item.id === plant.id);
                return (
                  <div key={plant.id} style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px', width: '250px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', backgroundColor: '#fff' }}>
                    <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px' }} />
                    <h3 style={{ margin: '15px 0 5px 0', color: '#333' }}>{plant.name}</h3>
                    <p style={{ margin: '0 0 10px 0', fontSize: '0.9rem', color: '#757575', minHeight: '40px' }}>{plant.description}</p>
                    <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#2e7d32', margin: '10px 0' }}>${plant.cost}</p>
                    <button
                      onClick={() => dispatch(addItem(plant))}
                      disabled={isItemAdded}
                      style={{
                        backgroundColor: isItemAdded ? '#b0bec5' : '#4caf50',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '4px',
                        cursor: isItemAdded ? 'not-allowed' : 'pointer',
                        fontWeight: 'bold',
                        width: '100%'
                      }}
                    >
                      {isItemAdded ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
