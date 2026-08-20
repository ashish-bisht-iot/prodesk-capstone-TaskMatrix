require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const protect = require('./middleware/authMiddleware');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Protected test route
app.get('/api/protected-test', protect, (req, res) => {
  res.json({ message: 'You accessed a protected route!', userId: req.user.id });
});

// Simple health check route
app.get('/', (req, res) => {
  res.send('TaskMatrix API is running');
});

// Connect to MongoDB, then start server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });