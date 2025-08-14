import { createSlice } from '@reduxjs/toolkit';

// Load cart from localStorage
const getCartFromStorage = () => {
  try {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : { items: [], total: 0 };
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
    return { items: [], total: 0 };
  }
};

// Save cart to localStorage
const saveCartToStorage = (cart) => {
  try {
    localStorage.setItem('cart', JSON.stringify(cart));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

const initialState = getCartFromStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, qty = 1 } = action.payload;
      const existingItem = state.items.find(item => item._id === product._id);

      if (existingItem) {
        existingItem.qty += qty;
      } else {
        state.items.push({
          _id: product._id,
          name: product.name,
          image: product.image,
          price: product.price,
          countInStock: product.countInStock,
          qty,
        });
      }

      // Recalculate total
      state.total = state.items.reduce((total, item) => total + (item.price * item.qty), 0);
      
      // Save to localStorage
      saveCartToStorage(state);
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item._id !== productId);
      
      // Recalculate total
      state.total = state.items.reduce((total, item) => total + (item.price * item.qty), 0);
      
      // Save to localStorage
      saveCartToStorage(state);
    },

    updateCartItemQty: (state, action) => {
      const { productId, qty } = action.payload;
      const item = state.items.find(item => item._id === productId);
      
      if (item) {
        if (qty <= 0) {
          // Remove item if qty is 0 or negative
          state.items = state.items.filter(item => item._id !== productId);
        } else if (qty <= item.countInStock) {
          item.qty = qty;
        }
      }
      
      // Recalculate total
      state.total = state.items.reduce((total, item) => total + (item.price * item.qty), 0);
      
      // Save to localStorage
      saveCartToStorage(state);
    },

    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      
      // Clear from localStorage
      localStorage.removeItem('cart');
    },

    loadCart: (state, action) => {
      state.items = action.payload.items || [];
      state.total = action.payload.total || 0;
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQty, clearCart, loadCart } = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) => state.cart.total;
export const selectCartItemCount = (state) => state.cart.items.reduce((total, item) => total + item.qty, 0);

export default cartSlice.reducer;
