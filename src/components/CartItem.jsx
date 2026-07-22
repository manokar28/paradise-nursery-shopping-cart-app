import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '../features/CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.cost * item.quantity, 0);
  };

  const handleCheckout = () => {
    alert('Thank you for choosing Paradise Nursery! Our automated inventory fulfillment line is processing your checkout request.');
  };

  return (
    <div style={{ padding: '40px', maxWidth: '850px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#2e7d32', marginBottom: '30px' }}>Your Shopping Basket</h2>
      
      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={{ fontSize: '1.2rem', color: '#4a5568' }}>Your shopping cart is currently empty.</p>
          <button onClick={onContinueShopping} style={{ padding: '12px 28px', backgroundColor: '#2e7d32', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '15px', fontWeight: 'bold' }}>
            Return to Plant Catalog
          </button>
        </div>
      ) : (
        <div>
          <h3 style={{ textAlign: 'right', color: '#1a202c', marginBottom: '25px', fontSize: '1.4rem' }}>
            Grand Total Amount: <span style={{ color: '#2e7d32' }}>${calculateTotalAmount()}</span>
          </h3>
          
          {cartItems.map((item) => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', padding: '20px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                <img src={item.image} alt={item.name} style={{ width: '90px', height: '90px', objectFit: 'cover', borderRadius: '6px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }} />
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '1.25rem', color: '#1a202c' }}>{item.name}</h4>
                  <p style={{ margin: '0', color: '#718096', fontSize: '0.95rem' }}>Unit Cost: ${item.cost}</p>
                  <p style={{ margin: '5px 0 0 0', fontWeight: 'bold', color: '#2e7d32' }}>Subtotal: ${item.cost * item.quantity}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button 
                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))} 
                    disabled={item.quantity <= 1} 
                    style={{ width: '32px', height: '32px', cursor: item.quantity <= 1 ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}
                  >
                    -
                  </button>
                  <span style={{ fontSize: '1.1rem', fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                  <button 
                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))} 
                    style={{ width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}
                  >
                    +
                  </button>
                </div>
                <button 
                  onClick={() => dispatch(removeItem(item.id))} 
                  style={{ padding: '8px 16px', backgroundColor: '#dc2626', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', transition: 'background-color 0.2s' }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
            <button onClick={onContinueShopping} style={{ padding: '12px 26px', backgroundColor: '#475569', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
              Continue Shopping
            </button>
            <button onClick={handleCheckout} style={{ padding: '12px 32px', backgroundColor: '#2e7d32', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
              Checkout Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
