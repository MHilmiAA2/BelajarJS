// Contoh Nilai
// let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// .map
// let hasil = angka.map(function(item) {
//     return item * 2;
// });
// console.log(hasil);


// .filter
// let hasil =angka.filter(function(item) {
//     return item % 2 === 0;
// });
// console.log(hasil);


// Reduce
// let total = angka.reduce(function(hasil, item) {
//     return hasil + item;
// }, 0);     <= angka tersebut sebagai nilai awal
// console.log(total);


// Tugas
let produk = [
    { nama: "Kopi", harga: 15000, stok: 10 },
    { nama: "Teh", harga: 10000, stok: 0 },
    { nama: "Susu", harga: 20000, stok: 5 }
];

let produkTersedia = produk.filter(function(item) {
    return item.stok > 0;
});

let produkTotalNilai = produkTersedia.map(function(item) {
    return {
        ...item,
        totalNilai : item.harga * item.stok
    }
});

let produkTotalSemua = produkTotalNilai.reduce(function(total, item) {
    return total + item.totalNilai;
}, 0);

console.log("Produk yang tersedia:");
produkTersedia.forEach(item => {
console.log(`- ${item.nama}`);
});

console.log("\nDaftar Nilai Produk:");
console.log(produkTotalNilai);

console.log(`\nTotal Nilai Seluruh Stok: Rp.${produkTotalSemua}`);
