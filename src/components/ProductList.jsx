import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/CartSlice';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { id: 1, name: 'Snake Plant', cost: 15, image: 'https://unsplash.com', description: 'Produces pure oxygen during the night hours.' },
      { id: 2, name: 'Spider Plant', cost: 12, image: 'https://unsplash.com', description: 'Extremely resilient and neutralizes common household toxins.' },
      { id: 3, name: 'Peace Lily', cost: 18, image: 'https://unsplash.com', description: 'Splendid white blossoms that clear moisture mold spores.' },
      { id: 4, name: 'Boston Fern', cost: 22, image: 'https://unsplash.com', description: 'Functions beautifully as a natural room humidifier.' },
      { id: 5, name: 'English Ivy', cost: 14, image: 'https://unsplash.com', description: 'Elegant climbing vine known to filter airborne waste particles.' },
      { id: 6, name: 'Rubber Plant', cost: 26, image: 'https://unsplash.com', description: 'Broad glossy structural leaves that absorb chemical pollutants.' }
    ]
  },
  {
    category: 'Aromatic Houseplants',
    plants: [
      { id: 7, name: 'Lavender', cost: 20, image: 'https://unsplash.com', description: 'Calming botanical scents ideal for peaceful rest environments.' },
      { id: 8, name: 'Spearmint Mint', cost: 10, image: 'https://unsplash.com', description: 'Crisp invigorating herbal aroma perfect for brewing herbal teas.' },
      { id: 9, name: 'Rosemary Shrub', cost: 16, image: 'https://unsplash.com', description: 'Fragrant woody culinary herb believed to boost daily memory retention.' },
      { id: 10, name: 'Eucalyptus Plant', cost: 28, image: 'https://unsplash.com', description: 'Refreshing menthol scent which naturally clears breathing paths.' },
      { id: 11, name: 'Sweet Jasmine', cost: 24, image: 'https://unsplash.com', description: 'Exquisite sweet floral perfume that lowers stress parameters.' },
      { id: 12, name: 'Lemon Balm', cost: 12, image: 'https://unsplash.com', description: 'Citrusy herbal leaves that naturally repel biting garden insects.' }
    ]
  },
  {
    category: 'Low Maintenance Succulents',
    plants: [
      { id: 13, name: 'ZZ Plant', cost: 25, image: 'https://unsplash.com', description: 'Thrives in dark corners with very sparse irrigation requirements.' },
      { id: 14, name: 'Aloe Vera', cost: 14, image: 'https://unsplash.com', description: 'Architectural succulent containing therapeutic skin-soothing gel.' },
      { id: 15, name: 'Jade Succulent', cost: 15, image: 'https://unsplash.com', description: 'Thick smooth tear-shaped foliage representing luck and stability.' },
      { id: 16, name: 'Pothos Vine', cost: 13, image: 'https://unsplash.com', description: 'Trailing accent plant that remains resilient against erratic watering.' },
      { id: 17, name: 'Cast Iron Plant', cost: 30, image: 'https://unsplash.com', description: 'Survives extreme neglect, varying drafts, and low ambient sunlight.' },
      { id: 18, name: 'Chinese Evergreen', cost: 19, image: 'https://unsplash.com', description: 'Sturdy patterned leaves that flourish inside low warm environments.' }
    ]
  }
];

const ProductList = ({ onViewCart, onViewHome }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 40px', backgroundColor: '#2e7d32', color: 'white', alignItems: 'center' }}>
        <h2 style={{ margin: 0, cursor: 'pointer' }} onClick={onViewHome}>Paradise Nursery</h2>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <span onClick={onViewHome} style={{ cursor: 'pointer', fontSize: '1.1rem' }}>Home</span>
          <span style={{ cursor: 'pointer', fontSize: '1.1rem', fontWeight: 'bold', textDecoration: 'underline' }}>Plants</span>
          <span onClick={onViewCart} style={{ cursor: 'pointer', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
            🛒 Cart ({totalCartCount})
          </span>
        </div>
      </nav>

      <div style={{ padding: '40px' }}>
        {plantsArray.map((group) => (
          <div key={group.category} style={{ marginBottom: '50px' }}>
            <h2 style={{ color: '#2e7d32', borderBottom: '2px solid #a5d6a7', paddingBottom: '10px', marginBottom: '25px' }}>{group.category}</h2>
            <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}>
              {group.plants.map((plant) => {
                const isItemAdded = cartItems.some((item) => item.id === plant.id);
                return (
                  <div key={plant.id} style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px', width: '250px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', backgroundColor: '#fff' }}>
                    <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px' }} />
                    <h3 style={{ margin: '15px 0 5px 0', color: '#1a202c' }}>{plant.name}</h3>
                    <p style={{ margin: '0 0 10px 0', fontSize: '0.9rem', color: '#718096', minHeight: '40px', lineHeight: '1.4' }}>{plant.description}</p>
                    <p style={{ fontWeight: 'bold', fontSize: '1.25rem', color: '#2e7d32', margin: '10px 0' }}>${plant.cost}</p>
                    <button
                      onClick={() => dispatch(addItem(plant))}
                      disabled={isItemAdded}
                      style={{
                        backgroundColor: isItemAdded ? '#cbd5e1' : '#4caf50',
                        color: isItemAdded ? '#64748b' : 'white',
                        border: 'none',
                        padding: '12px 20px',
                        borderRadius: '4px',
                        cursor: isItemAdded ? 'not-allowed' : 'pointer',
                        fontWeight: 'bold',
                        width: '100%',
                        transition: 'background-color 0.2s'
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
