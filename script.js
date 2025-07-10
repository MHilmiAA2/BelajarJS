/*
let saldoAwal = prompt('Masukkan saldo awal anda: ');
let saldoTambahan = prompt('Masukkan saldo tambahan: ');

const saldoAkhir = parseInt(saldoAwal) + parseInt(saldoTambahan);

alert('Saldo akhir anda adalah ' + saldoAkhir);

const today = new Date();
const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
console.log('Hari ini adalah ' + days[today.getDay()]);
*/


// Belajar DOM

/*
document.title = 'Belajar JS'

const body = document.body

const btn1 = document.getElementById('btn1')

btn1.style.backgroundColor = 'red'
btn1.style.color = 'white'
btn1.style.border = 'none'
btn1.style.padding = '10px 20px'

function gantiWarna() {
    alert('Tombol 1 diklik')
}

function tambahText() {
    const p = document.createElement('p')
    const text = document.createTextNode('Nama Saya Muh. Hilmi Abdul Aziz')
    p.appendChild(text)
    body.appendChild(p)
}

function ubahBgText() {
    const p = document.querySelectorAll('p')
    p.forEach(function (item) {
        item.style.color = 'red'
    })
}
*/



// let x = prompt('Masukan nilai suhu :')
// x = Number(x)

// if (x >= 30) {
//     alert('Panas')
// } else if (x >=10 && x <= 29) {
//     alert('Sejuk')
// } else if (x < 10) {
//     alert('Dingin')
// } else {
//     alert('Inputan tidak valid')
// }


// let x = prompt('Pilih jenis kendaraan : ').toLowerCase();
// x = String(x)


// switch (x) {
//     case 'mobil' :
//         alert('Kendaraan roda empat');
//         break;
//     case 'motor' :
//         alert('Kendaraan roda dua');
//         break;
//     case 'sepeda' :
//         alert('Kendaraan tanpa mesin');
//         break;
//     default:
//         alert('Jenis kendaraan tidak ditemukan');
//         break;
// }


// for (let i = 2; i <= 20; i+=2) {
//     console.log(i);
// }

// let i = 50;
// while (i >= 5) {
//     console.log(i);
//     i-=5;
// }

// let i = 0;
// do {
//     console.log('Belajar JavaScript!');
//     i++;
// } while (i < 7);


const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const formattedDate = `${day}-${month}-${year}`;

fetch(`https://api.aladhan.com/v1/gToH?date=${formattedDate}`)
.then(response => response.json())
.then(data => {
    const hijriDate = data.data.hijri;
    document.getElementById("hijri-date").innerText = 
        `${hijriDate.day} ${hijriDate.month.en} ${hijriDate.year} H`;
})
.catch(error => {
    document.getElementById("hijri-date").innerText = "Gagal memuat tanggal";
    console.error("Error:", error);
});
