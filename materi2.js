let namaProduk = "Kopi Hitam";
let harga = 15000;
let jumlahBeli = 5;
let diskon = 10;

const totalHarga = harga * jumlahBeli;

console.log(`Produk : ${namaProduk}`)
console.log(`Harga : Rp.${harga}`)
console.log(`Jumlah Beli : ${jumlahBeli}`)

if (totalHarga >= 100000) {
  const totalDiskon = totalHarga - (totalHarga * diskon / 100)
  console.log(`Anda mendapatkan diskon 10%, sehingga harga yang perlu dibayar cukup sebesar : Rp.${totalDiskon}`)
} else {
  console.log(`Maaf anda tidak mendapatkan diskon, anda perlu membayar : Rp.${totalHarga}`)
}