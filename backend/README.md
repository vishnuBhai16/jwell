# Jewelry E-commerce Backend

A complete Node.js backend for a jewelry e-commerce website built with Express, MongoDB, and JWT authentication.

## Features

- **User Authentication**: JWT-based authentication with user registration and login
- **Product Management**: CRUD operations for jewelry products with categories
- **Order Processing**: Complete order management system
- **Image Upload**: Multer-based image upload for product images
- **Admin Panel**: Protected admin routes for managing products, users, and orders
- **Search & Filtering**: Product search by keyword and category filtering
- **Pagination**: Product listing with pagination support
- **Reviews**: Product review system with ratings

## Tech Stack

- **Runtime**: Node.js with ES modules
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer
- **Password Hashing**: bcryptjs
- **Validation**: Express async handler for error management

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jewelry-ecommerce-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy `env.example` to `.env`
   - Update the following variables:
     ```env
     NODE_ENV=development
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/jewelry_ecommerce
     JWT_SECRET=your_super_secret_jwt_key_here
     JWT_EXPIRE=30d
     ```

4. **Database Setup**
   - Ensure MongoDB is running locally or update MONGO_URI to your MongoDB instance
   - Run the seeder to populate sample data:
     ```bash
     npm run seed
     ```

## Usage

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

## API Endpoints

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
- `GET /api/orders` - Get all orders (admin only)

### File Upload
- `POST /api/upload` - Upload product image (admin only)

### Admin Routes
- `GET /api/users` - Get all users (admin only)
- `PUT /api/users/:id` - Update user (admin only)
- `DELETE /api/users/:id` - Delete user (admin only)

## Sample Data

The seeder creates:
- **Admin User**: admin@jewelry.com / 123456
- **Regular Users**: john@example.com, jane@example.com / 123456
- **Sample Products**: 6 jewelry items across different categories

## Database Models

### User
- name, email, password (hashed), isAdmin, timestamps

### Product
- name, image, brand, category, description, price, countInStock
- material, weight, dimensions, reviews, rating, numReviews
- user reference, timestamps

### Order
- user reference, orderItems, shippingAddress, paymentMethod
- itemsPrice, taxPrice, shippingPrice, totalPrice
- isPaid, isDelivered, status, timestamps

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected routes with middleware
- Admin-only route protection
- File upload validation and size limits

## Error Handling

- Centralized error handling middleware
- Async error handling with express-async-handler
- Proper HTTP status codes
- Development vs production error responses

## File Structure

```
backend/
├── config/
│   └── db.js
├── controllers/
│   ├── userController.js
│   ├── productController.js
│   └── orderController.js
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
├── models/
│   ├── userModel.js
│   ├── productModel.js
│   └── orderModel.js
├── routes/
│   ├── userRoutes.js
│   ├── productRoutes.js
│   ├── orderRoutes.js
│   └── uploadRoutes.js
├── utils/
│   └── generateToken.js
├── uploads/
├── server.js
├── seeder.js
└── package.json
```

## Deployment

### Environment Variables for Production
- Set `NODE_ENV=production`
- Use strong `JWT_SECRET`
- Configure production `MONGO_URI` (MongoDB Atlas recommended)
- Set appropriate `PORT`

### Recommended Platforms
- **Backend**: Render, Railway, or Heroku
- **Database**: MongoDB Atlas
- **File Storage**: AWS S3 or similar for production image storage

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - see LICENSE file for details
