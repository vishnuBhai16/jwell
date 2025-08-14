import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

// Sample data
const users = [
  {
    name: 'Admin User',
    email: 'admin@jewelry.com',
    password: '123456',
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: '123456',
    isAdmin: false,
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: '123456',
    isAdmin: false,
  },
];

const products = [
  {
    name: 'Diamond Engagement Ring',
    image: '/images/diamond-ring.jpg',
    brand: 'Luxury Jewels',
    category: 'Rings',
    description: 'Beautiful 1-carat diamond engagement ring in 18k white gold setting. Perfect for that special proposal moment.',
    rating: 4.8,
    numReviews: 12,
    price: 2999.99,
    countInStock: 5,
    material: 'White Gold',
    weight: 3.2,
    dimensions: 'Size 7',
  },
  {
    name: 'Pearl Necklace',
    image: '/images/pearl-necklace.jpg',
    brand: 'Ocean Gems',
    category: 'Necklaces',
    description: 'Elegant freshwater pearl necklace with sterling silver clasp. Perfect for formal occasions.',
    rating: 4.6,
    numReviews: 8,
    price: 299.99,
    countInStock: 12,
    material: 'Royal Silver',
    weight: 15.5,
    dimensions: '18 inches',
  },
  {
    name: 'Gold Bracelet',
    image: '/images/gold-bracelet.jpg',
    brand: 'Royal Gold',
    category: 'Bracelets',
    description: 'Classic 14k gold bracelet with intricate design. A timeless piece for any jewelry collection.',
    rating: 4.7,
    numReviews: 15,
    price: 899.99,
    countInStock: 8,
    material: 'Gold',
    weight: 8.2,
    dimensions: '7.5 inches',
  },
  {
    name: 'Sapphire Earrings',
    image: '/images/sapphire-earrings.jpg',
    brand: 'Gemstone Collection',
    category: 'Earrings',
    description: 'Stunning sapphire stud earrings in white gold setting. Perfect gift for birthdays or anniversaries.',
    rating: 4.9,
    numReviews: 20,
    price: 599.99,
    countInStock: 10,
    material: 'White Gold',
    weight: 2.8,
    dimensions: '6mm sapphire',
  },
  {
    name: 'Rose Gold Pendant',
    image: '/images/rose-gold-pendant.jpg',
    brand: 'Modern Metals',
    category: 'Pendants',
    description: 'Elegant rose gold pendant with diamond accent. A beautiful addition to any necklace.',
    rating: 4.5,
    numReviews: 6,
    price: 399.99,
    countInStock: 15,
    material: 'Rose Gold',
    weight: 1.5,
    dimensions: '12mm pendant',
  },
  {
    name: 'Platinum Chain',
    image: '/images/platinum-chain.jpg',
    brand: 'Precious Metals',
    category: 'Chains',
    description: 'High-quality platinum chain with lobster clasp. Perfect for wearing pendants or alone.',
    rating: 4.4,
    numReviews: 9,
    price: 799.99,
    countInStock: 6,
    material: 'Platinum',
    weight: 12.0,
    dimensions: '20 inches',
  },
];

const importData = async () => {
  try {
    // Clear existing data
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // Create users one by one to ensure password hashing
    const createdUsers = [];
    for (const userData of users) {
      const user = new User(userData);
      await user.save();
      createdUsers.push(user);
    }
    const adminUser = createdUsers[0]._id;

    // Add user reference to products
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    // Create products
    await Product.insertMany(sampleProducts);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
