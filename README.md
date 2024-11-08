Berikut adalah contoh file `README.md` sederhana untuk proyek Express Anda:

```markdown
# Express Project

Ini adalah proyek sederhana menggunakan [Express](https://expressjs.com/) untuk membuat beberapa rute yang menampilkan data JSON dan HTML. Proyek ini mencakup endpoint GET dan POST dengan routing dasar untuk menangani permintaan HTTP.

## Fitur
- Menampilkan pesan JSON di endpoint root.
- Mengambil detail produk berdasarkan ID.
- Menampilkan kategori dan tag dari parameter URL.
- Menangani POST data produk berdasarkan ID.
- Menyajikan halaman HTML statis.

## Instalasi

1. Clone repositori ini:
   ```bash
   git clone https://github.com/username/express-project.git
   cd express-project
   ```

2. Install dependensi:
   ```bash
   npm install
   ```

3. Jalankan server:
   ```bash
   node index.js
   ```

Server akan berjalan di `http://localhost:3000`.

## Endpoint API

- **GET /**: Menampilkan pesan `Hello, World!`
- **GET /product/:id**: Menampilkan detail produk dengan ID yang diberikan. Contoh respons:
  ```json
  {
    "id": "1",
    "name": "Product Name",
    "price": 100.00
  }
  ```
- **GET /:category/:tag**: Menampilkan kategori dan tag dari parameter URL.
  ```json
  {
    "category": "electronics",
    "tag": "latest"
  }
  ```
- **POST /product/:id**: Menyimpan data produk dengan ID tertentu. Kirim JSON body dengan nama dan harga produk:
  ```json
  {
    "name": "New Product",
    "price": 150.00
  }
  ```
  Contoh respons:
  ```json
  {
    "id": "1",
    "name": "New Product",
    "price": 150.00
  }
  ```
