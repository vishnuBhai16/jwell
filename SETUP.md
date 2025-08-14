# 🚀 Quick Setup Guide

## Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## 🛠️ Quick Start

### 1. Environment Setup

**Backend (.env file)**
Create a `.env` file in the `backend` folder:
```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/jewelry_ecommerce
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=30d
```

**For MongoDB Atlas users:**
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/jewelry_ecommerce
```

### 2. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3. Start the Application

**Option 1: Use the batch file (Windows)**
```bash
start.bat
```

**Option 2: Manual start**
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### 4. Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **Admin Login**: admin@jewelry.com / 123456

### 5. Populate Sample Data

```bash
cd backend
npm run seed
```

## 🔧 Troubleshooting

### Common Issues

1. **Port already in use**
   - Change PORT in .env file
   - Kill existing processes on ports 5000/5173

2. **MongoDB connection failed**
   - Ensure MongoDB is running
   - Check connection string in .env
   - For Atlas: whitelist your IP address

3. **Frontend build errors**
   - Clear node_modules and reinstall
   - Check Node.js version compatibility

4. **Backend startup errors**
   - Verify .env file exists
   - Check MongoDB connection
   - Ensure all dependencies are installed

## 📱 Testing the Application

1. **Browse Products**: Visit homepage and explore jewelry
2. **User Registration**: Create a new account
3. **Shopping Cart**: Add items and manage quantities
4. **Admin Panel**: Login as admin to manage products

## 🚀 Deployment

### Backend (Render/Railway)
1. Set environment variables
2. Connect MongoDB Atlas
3. Deploy from GitHub

### Frontend (Vercel/Netlify)
1. Build: `npm run build`
2. Deploy build folder
3. Set environment variables

## 📞 Support

- Check the main README.md for detailed documentation
- Create an issue for bugs or questions
- Ensure all prerequisites are met before setup
