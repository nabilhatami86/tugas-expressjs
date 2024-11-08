const express = require("express");
const app = express();
const router = require ('./routes')

app.use(express.json())
app.use(router)

app.get('/dashboard', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Halaman HTML</title>
    </head>
    <body>
        <h1>Selamat Datang di Halaman tugas</h1>
        <p>Ini adalah halaman HTML yang dikirim dari Express.</p>
    </body>
    </html>
  `);
});

app.listen(3000, () =>
  console.log(`Server berjalan di http://localhost:3000 }`)
);
