console.log('MYSQL_URL:', process.env.MYSQL_URL);
console.log('MYSQLHOST:', process.env.MYSQLHOST);
const pool = require('./db');
pool.query(`
  CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    date DATE NOT NULL,
    time VARCHAR(10) NOT NULL,
    guests INT DEFAULT 2,
    requests TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`).then(() => console.log('✅ Bookings table ready'))
  .catch(err => console.error('❌ Table error:', err.message));
const express = require('express');
const cors = require('cors');


const bookingRoutes = require('./routes/bookings');

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
}));
app.use(express.json());

app.use('/api/bookings', bookingRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Aurum Restaurant API is running!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});