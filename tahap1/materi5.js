// Function Declaration (cara umum)
// function sapa(nama) {
//     return `Halo, ${nama}`;
// }

// Function Expression
// const sapa = function(nama) {
//     return `Halo, ${nama}`;
// }

// Arrow Function (modern & ringkas)
// const sapa = (nama) => `Halo, ${nama}`;

// console.log(sapa("Kazuhiko"));

// function dengan parameter & return value
// function hitungTotal(harga, jumlah) {
//     return harga * jumlah;
// }
// let total = hitungTotal(10000,3);

// console.log(`Total harga: ${total}`);

// Tugas
// let hargaSatuan = 25000;
// let jumlahBeli = 3;
// let totalHarga = hitungTotal(hargaSatuan, jumlahBeli);
// function hitungTotal(harga, jumlah) {
//     return harga * jumlah;
// }

// console.log(`Harga Satuan : Rp.${hargaSatuan}`);
// console.log(`Jumlah Beli : ${jumlahBeli}`);
// console.log(`Total Harga : Rp.${totalHarga}`);

// if (totalHarga >= 100000) {
//     let diskon = 10;
//     let totalDiskon = totalHarga - (totalHarga * diskon / 100);
//     console.log(`Diskon : 10%`);
//     console.log(`Total Bayar : Rp.${totalDiskon}`);
// } else if (totalHarga >= 50000) {
//     let diskon = 5;
//     let totalDiskon = totalHarga - (totalHarga * diskon / 100);
//     console.log(`Diskon : 5%`);
//     console.log(`Total Bayar : Rp.${totalDiskon}`);
// } else {
//     console.log(`Maaf, tidak ada diskon`);
// }

// Revisi
let hargaSatuan = 25000;
let jumlahBeli = 3;

function hitungTotal(harga, jumlah) {
  return harga * jumlah;
}

function cekDiskon(total) {
    if (total >= 100000) {
        return 10;
    } else if (total >= 50000) {
        return 5;
    } else {
        return 0;
    }
}

function hitungBayar(harga, jumlah) {
    const total = hitungTotal(harga, jumlah);
    const diskon = cekDiskon(total);
    const potongan = total * diskon / 100;
    const totalBayar = total - potongan;

    console.log(`Harga Satuan : Rp.${harga}`);
    console.log(`Jumlah Beli  : ${jumlah}`);
    console.log(`Total Harga  : Rp.${total}`);
    console.log(`Diskon       : ${diskon}%`);
    console.log(`Total Bayar  : Rp.${totalBayar}`);
}

// Panggil fungsi utama
hitungBayar(hargaSatuan, jumlahBeli);
