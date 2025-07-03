let namaPegawai = "Joko";
let departemen = "3";
let skor = 90;

console.log(`Nama : ${namaPegawai}`)

switch (departemen) {
  case '1':
    console.log(`Departemen : HR`)
    break;
  case '2':
    console.log(`Departemen : Keuangan`)
    break;
  case '3':
    console.log(`Departemen : Teknologi`)
    break;
  
  default:
    console.log(`Departemen : Lainnya`)
}

console.log(`Skor : ${skor}`)

if (skor >= 90) {
  console.log(`Penilaian : Sangat Baik`)
} else if (skor >= 75 && skor <= 89){
  console.log(`Penilaian : Baik`)
} else if (skor >= 60 && skor <= 74) {
  console.log(`Penilaian : Cukup`)
} else if (skor <= 59) {
  console.log(`Penilaian : Tingkatkan Lagi`)
} else {
  console.log(`Nilai ${skor} tidak diketahui`)
}
