# 🛒 VibeCommerce - E-Commerce Platform

A full-stack MERN e-commerce application with real-time cart management, product browsing, and checkout functionality.

![VibeCommerce Home](./screenshots/home.png)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## ✨ Features

- 🛍️ **Product Catalog** - Browse through a wide range of products with images and pricing
- 🛒 **Shopping Cart** - Add products to cart with quantity selection
- ➕ **Quantity Control** - Increase/decrease product quantities before adding to cart
- 📊 **Cart Management** - View, update, and remove items from cart
- 💳 **Checkout System** - Complete checkout with user details
- 🎨 **Responsive Design** - Mobile-friendly interface
- 🔄 **Real-time Updates** - Instant cart updates without page refresh
- 💾 **Persistent Cart** - Cart items stored in MongoDB database
- ⚡ **Redux State Management** - Centralized state for cart items and loading states

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI framework
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **CSS3** - Styling with modern animations

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB

### Additional Tools
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Development server auto-restart
- **Concurrently** - Run multiple scripts simultaneously

## 📸 Screenshots

### Home Page - Product Grid
![Product Grid](./screenshots/home.png)
*Browse through available products with dynamic quantity selectors*

### Shopping Cart
![Shopping Cart](./screenshots/cart.png)
*View all cart items with quantity controls and total price calculation*

### Checkout Success
![Checkout Success](./screenshots/checkout.png)
*Order confirmation with customer details and timestamp*

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Clone Repository
```bash
git clone https://github.com/kartikey742/Vibecommerce.git
cd Vibecommerce
```

### Install Dependencies

**Root directory:**
```bash
npm install
```

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

## 🔐 Environment Variables

Create a `.env` file in the `backend` directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

**Example:**
```env
MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/vibecommerce?retryWrites=true&w=majority
PORT=5000
```

## ▶️ Running the Application

### Development Mode (Both Frontend & Backend)

From the root directory:
```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:5000`
- Frontend dev server on `http://localhost:3000`

### Run Individually

**Backend only:**
```bash
cd backend
npm run server
```

**Frontend only:**
```bash
cd frontend
npm start
```

### Production Build

**Frontend:**
```bash
cd frontend
npm run build
```

## 📁 Project Structure

```
vibecommerce/
├── backend/
│   ├── config/
│   │   └── dbconnect.js          # MongoDB connection
│   ├── models/
│   │   ├── Product.js             # Product schema
│   │   └── Cart.js                # Cart schema
│   ├── routes/
│   │   ├── Product.js             # Product routes
│   │   └── Cart.js                # Cart routes
│   ├── seed.js                    # Database seeder
│   ├── server.js                  # Express server
│   ├── .env                       # Environment variables
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx         # Navigation bar
│   │   │   ├── Product.jsx        # Product card component
│   │   │   ├── Cartitem.jsx       # Cart item component
│   │   │   └── CheckoutForm.jsx   # Checkout form modal
│   │   ├── pages/
│   │   │   ├── Home.jsx           # Home page
│   │   │   └── Cart.jsx           # Cart page
│   │   ├── store/
│   │   │   ├── store.js           # Redux store configuration
│   │   │   └── cartSlice.js       # Cart slice with reducers
│   │   ├── css/
│   │   │   ├── navbar.css
│   │   │   ├── product.css
│   │   │   ├── Cart.css
│   │   │   ├── form.css
│   │   │   └── checkout.css
│   │   ├── App.js                 # Main app component
│   │   └── index.js               # Entry point
│   └── package.json
│
├── screenshots/                   # Application screenshots
├── .gitignore
├── package.json                   # Root package.json
└── README.md
```

## 🔌 API Endpoints

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |

### Cart

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/cart` | Get all cart items |
| POST | `/api/cart` | Add item to cart |
| PUT | `/api/cart/:id` | Update cart item quantity |
| DELETE | `/api/cart/:id` | Remove item from cart |

### Checkout

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/checkout` | Process checkout and clear cart |

## 📦 Database Models

### Product Schema
```javascript
{
  name: String,
  price: Number,
  picture: String
}
```

### Cart Schema
```javascript
{
  productId: ObjectId (ref: 'Product'),
  quantity: Number
}
```

## 🎯 Key Features Explained

### Redux State Management
The application uses Redux Toolkit for centralized state management:
- **cartItems**: Array of cart items
- **loading**: Loading state for async operations
- **Actions**: setCartItems, setLoading, addCartItem, removeCartItem, updateCartItem

### Responsive Design
- Mobile-first approach
- Grid layout for products
- Flexible cart display
- Touch-friendly controls

### Real-time Cart Updates
- Instant UI updates when adding/removing items
- Optimistic UI updates
- Cart count badge in navbar
- Total price calculation

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Kartikey Kumar**
- GitHub: [@kartikey742](https://github.com/kartikey742)
- Email: kumarkartikey742@gmail.com

## 🙏 Acknowledgments

- Product images from [Unsplash](https://unsplash.com)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Inspiration from modern e-commerce platforms

---

⭐ If you like this project, please give it a star on GitHub!
