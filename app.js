import express from 'express';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Tambahkan ini
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Konfigurasi koneksi database
const koneksi = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Endpoint untuk create/insert data
app.post('/api/formportofolio', async (req, res) => {
  const data = { ...req.body };
  const querySql = 'INSERT INTO form SET ?';

  try {
    const [result] = await koneksi.query(querySql, data);
    res.status(201).json({ success: true, message: 'Berhasil insert data!', result });
  } catch (err) {
    res.status(500).json({ message: 'Gagal insert data!', error: err });
  }
});

// Menjalankan server
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
