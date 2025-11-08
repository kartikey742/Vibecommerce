const mongoose = require('mongoose');
const Product = require('./models/Product');
const dummyProducts = [
  {
    name: 'Wireless Headphones',
    price: 79.99,
    picture: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'
  },
  {
    name: 'Smart Watch',
    price: 199.99,
    picture: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500'
  },
  {
    name: 'Laptop Backpack',
    price: 49.99,
    picture: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500'
  },
  {
    name: 'Coffee Maker',
    price: 89.99,
    picture: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500'
  },
  {
    name: 'Bluetooth Speaker',
    price: 59.99,
    picture: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500'
  },
  {
    name: 'Running Shoes',
    price: 129.99,
    picture: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500'
  },
  {
    name: 'Desk Lamp',
    price: 39.99,
    picture: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500'
  },
  {
    name: 'Phone Case',
    price: 24.99,
    picture: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500'
  },
  {
    name: 'Water Bottle',
    price: 19.99,
    picture: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500'
  },
  {
    name: 'Yoga Mat',
    price: 34.99,
    picture: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500'
  },
  {
    name: 'Gaming Mouse',
    price: 69.99,
    picture: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500'
  },
  {
    name: 'Sunglasses',
    price: 149.99,
    picture: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500'
  },
  {
    name: 'Portable Charger',
    price: 44.99,
    picture: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500'
  },
  {
    name: 'Kitchen Knife Set',
    price: 99.99,
    picture: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=500'
  },
  {
    name: 'Fitness Tracker',
    price: 119.99,
    picture: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500'
  }
];

async function seedDatabase() {
  try {
   

    
    await Product.deleteMany({});
    console.log(' Cleared existing products');

    const result = await Product.insertMany(dummyProducts);
    console.log(` Successfully inserted ${result.length} products`);


  } catch (error) {
    console.error(' Error seeding database:', error);
  } 
}

module.exports = seedDatabase;