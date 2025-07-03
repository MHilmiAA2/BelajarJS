let namaProduk = "Baju Polos";
let hargaProduk = 12000;
let stok = 20;
const diskon = 50;
let hargaDiskon = hargaProduk - (hargaProduk * diskon / 100);

console.log(`Nama Produk : ${namaProduk}`);
console.log(`Harga Produk : Rp.${hargaProduk}`);
console.log(`Stok : ${stok}`);
console.log(`Diskon 10% jadi ${hargaDiskon}`);
