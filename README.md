# 💎 Jewelry E-commerce Website

A complete, production-ready jewelry e-commerce website built with the MERN stack (MongoDB, Express, React, Node.js) featuring a stunning UI, secure authentication, and comprehensive admin functionality.

## ✨ Features

### 🛍️ Customer Features
- **Elegant Product Display**: Beautiful product cards with hover effects and quick add-to-cart
- **Advanced Search & Filtering**: Search by keyword and filter by jewelry categories
- **Shopping Cart**: Persistent cart with localStorage, quantity management
- **User Authentication**: Secure JWT-based login/registration system
- **Product Reviews**: Customer rating and review system
- **Responsive Design**: Mobile-first design that works on all devices
- **Category Navigation**: Browse by Rings, Necklaces, Bracelets, Earrings, etc.

### 🔐 Authentication & Security
- **JWT Tokens**: Secure authentication with token-based sessions
- **Password Hashing**: bcrypt encryption for user passwords
- **Protected Routes**: Middleware for secure access control
- **Admin Authorization**: Role-based access control for admin features

### 🎛️ Admin Features
- **Product Management**: Full CRUD operations for jewelry products
- **User Management**: View and manage customer accounts
- **Order Management**: Track and update order statuses
- **Image Upload**: Multer-based product image management
- **Dashboard Analytics**: Overview of sales and inventory

### 🛒 E-commerce Functionality
- **Order Processing**: Complete checkout flow with shipping details
- **Payment Integration**: Ready for payment gateway integration
- **Inventory Management**: Stock tracking and management
- **Order History**: Customer order tracking and history

## 🚀 Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

### Frontend
- **React 18** - UI library
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Heroicons** - Beautiful icon set
- **Axios** - HTTP client

## 📁 Project Structure

```
jewelry-ecommerce/
├── backend/                 # Backend API
│   ├── config/             # Database configuration
│   ├── controllers/        # Business logic
│   ├── middleware/         # Authentication & error handling
│   ├── models/            # Database schemas
│   ├── routes/            # API endpoints
│   ├── utils/             # Helper functions
│   ├── uploads/           # Product images
│   ├── server.js          # Main server file
│   ├── seeder.js          # Sample data
│   └── package.json       # Backend dependencies
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── store/         # Redux store & slices
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
└── README.md              # Project documentation
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone <repository-url>
cd jewelry-ecommerce
```

### 2. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Create environment file
cp env.example .env

# Update .env with your configuration
MONGO_URI=mongodb://localhost:27017/jewelry_ecommerce
JWT_SECRET=your_super_secret_jwt_key_here
PORT=5000

# Run the seeder to populate sample data
npm run seed

# Start development server
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### 4. Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **Admin Login**: admin@jewelry.com / 123456

## 🗄️ Database Schema

### User Model
- `name`, `email`, `password` (hashed), `isAdmin`, `timestamps`

### Product Model
- `name`, `image`, `brand`, `category`, `description`, `price`
- `countInStock`, `material`, `weight`, `dimensions`
- `reviews`, `rating`, `numReviews`, `user` (reference)

### Order Model
- `user` (reference), `orderItems`, `shippingAddress`
- `paymentMethod`, `totalPrice`, `isPaid`, `isDelivered`
- `status`, `timestamps`

## 🔌 API Endpoints

### Authentication
- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile (protected)
- `PUT /api/users/profile` - Update user profile (protected)

### Products
- `GET /api/products` - Get all products (with pagination, search, filtering)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)
- `POST /api/products/:id/reviews` - Add product review (protected)
- `GET /api/products/top` - Get top-rated products

### Orders
- `POST /api/orders` - Create new order (protected)
- `GET /api/orders/myorders` - Get user orders (protected)
- `GET /api/orders/:id` - Get order by ID (protected)
- `PUT /api/orders/:id/pay` - Mark order as paid (protected)
- `PUT /api/orders/:id/deliver` - Mark order as delivered (admin only)

### File Upload
- `POST /api/upload` - Upload product image (admin only)

## 🎨 UI Components

### Core Components
- **Header**: Navigation, search, cart, user menu
- **Footer**: Company info, quick links, contact
- **ProductCard**: Product display with hover effects
- **Loader**: Loading spinner
- **Message**: Success/error notifications

### Pages
- **HomePage**: Hero section, featured products, category filtering
- **LoginPage**: User authentication
- **RegisterPage**: User registration
- **ProductPage**: Detailed product view
- **CartPage**: Shopping cart management
- **ProfilePage**: User profile management
- **AdminDashboardPage**: Admin panel

## 🔒 Security Features

- **JWT Authentication**: Secure token-based sessions
- **Password Encryption**: bcrypt hashing for user passwords
- **Route Protection**: Middleware for secure access
- **Admin Authorization**: Role-based access control
- **Input Validation**: Server-side validation and sanitization
- **CORS Configuration**: Secure cross-origin requests

## 🚀 Deployment

### Backend Deployment
1. **Environment Variables**: Set production values
2. **Database**: Use MongoDB Atlas for production
3. **Platforms**: Deploy to Render, Railway, or Heroku

### Frontend Deployment
1. **Build**: Run `npm run build`
2. **Platforms**: Deploy to Vercel, Netlify, or AWS S3

### Environment Variables for Production
```env
NODE_ENV=production
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/jewelry_ecommerce
JWT_SECRET=very_long_random_secret_key
PORT=5000
```

## 📱 Responsive Design

- **Mobile-First**: Optimized for mobile devices
- **Breakpoints**: Responsive grid system
- **Touch-Friendly**: Mobile-optimized interactions
- **Performance**: Optimized images and lazy loading

## 🧪 Testing

### Sample Data
The seeder creates:
- **Admin User**: admin@jewelry.com / 123456
- **Regular Users**: john@example.com, jane@example.com / 123456
- **Sample Products**: 6 jewelry items across different categories

### Testing the Application
1. **User Registration**: Create new customer accounts
2. **Product Browsing**: Browse and filter products
3. **Shopping Cart**: Add items and manage quantities
4. **Checkout Process**: Complete order flow
5. **Admin Panel**: Manage products and orders

## 🔧 Customization

### Styling
- **Tailwind CSS**: Easy to customize colors and components
- **CSS Variables**: Consistent design system
- **Component Library**: Reusable UI components

### Features
- **Payment Gateway**: Integrate Stripe, PayPal, etc.
- **Email Notifications**: Order confirmations and updates
- **Analytics**: Google Analytics integration
- **SEO**: Meta tags and structured data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Tailwind CSS** for the utility-first CSS framework
- **Heroicons** for the beautiful icon set
- **React Team** for the amazing frontend library
- **Express.js** for the robust backend framework

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact: info@jewelry.com
- Documentation: [Project Wiki](wiki-url)

---

**Built with ❤️ using the MERN stack**
#   j w e l l  
 