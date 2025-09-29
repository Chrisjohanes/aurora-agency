// Import library
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Tentukan folder public sebagai static files
app.use(express.static(path.join(__dirname, 'public')));

// Routing default → arahkan ke index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint untuk handle contact form
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  console.log('📩 Pesan baru diterima:');
  console.log(`Nama   : ${name}`);
  console.log(`Email  : ${email}`);
  console.log(`Pesan  : ${message}`);

  // Kamu bisa kembangkan untuk kirim ke email / database
  res.json({ success: true, message: 'Pesan Anda berhasil dikirim! Terima kasih 🙌' });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});
