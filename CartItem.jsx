import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '../features/CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.cost * item.quantity, 0);
  };

  return (
    <div style={{ padding: '40px', maxWidth: '850px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#2e7d32', marginBottom: '30px' }}>Shopping Cart Review</h2>
      
      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '5px' }}>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Your basket feels incredibly light! Try adding some green friends.</p>
          <button onClick={onContinueShopping} style={{ padding: '12px 25px', backgroundColor: '#2e7d32', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '15px', fontWeight: 'bold' }}>
            Browse Catalog
          </button>
        </div>
      ) : (
        <div>
          <h3 style={{ textAlign: 'right', color: '#333', marginBottom: '20px' }}>Grand Total: ${calculateTotalAmount()}</h3>
          
          {cartItems.map((item) => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e0e0e0', padding: '20px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                <img src={item.image} alt={item.name} style={{ width: '90px', height: '90px', objectFit: 'cover', borderRadius: '6px' }} />
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem' }}>{item.name}</h4>
                  <p style={{ margin: '0', color: '#757575' }}>Unit Value: ${item.cost}</p>
                  <p style={{ margin: '5px 0 0 0', fontWeight: 'bold', color: '#2e7d32' }}>Subtotal: ${item.cost * item.quantity}</p>
                </div>
              </div>

              {/* Manipulation Control Layout */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))} disabled={item.quantity <= 1} style={{ width: '30px', height: '30px', cursor: item.quantity <= 1 ? 'not-allowed' : 'pointer' }}>-</button>
                  <span style={{ fontSize: '1.1rem', fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                  <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))} style={{ width: '30px', height: '30px', cursor: 'pointer' }}>+</button>
                </div>
                <button onClick={() => dispatch(removeItem(item.id))} style={{ padding: '8px 16px', backgroundColor: '#e53935', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Action Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
            <button onClick={onContinueShopping} style={{ padding: '12px 25px', backgroundColor: '#757575', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
              Continue Shopping
            </button>
            <button onClick={() => alert('Coming Soon')} style={{ padding: '12px 30px', backgroundColor: '#2e7d32', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
              Checkout Plant Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
