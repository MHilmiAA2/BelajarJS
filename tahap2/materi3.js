// const body = document.body;
// const tombolTema = document.getElementById("tombolTema");

// tombolTema.addEventListener("click", function () {
//     body.classList.toggle("dark-mode");

//     if (body.classList.contains("dark-mode")) {
//         tombolTema.textContent = "Ganti ke Light Mode";
//     } else {
//         tombolTema.textContent = "Ganti ke Dark Mode";
//     }
// });


// // Latihan
// // Sembunyikan Judul
// const judul = document.getElementById("judul");
// const tombolSembunyi = document.getElementById("sembunyikanJudul");

// tombolSembunyi.addEventListener("click", function () {
//     if (judul.style.display === "none") {
//         judul.style.display = "block";
//         tombolSembunyi.textContent = "Sembunyikan Judul";
//     } else {
//         judul.style.display = "none";
//         tombolSembunyi.textContent = "Tampilkan Judul";
//     }
// });

// // Perbesar huruf
// const deskripsi = document.getElementById("deskripsi");
// const perbesarHuruf = document.getElementById("perbesarHuruf");

// perbesarHuruf.addEventListener("click", function () {
//     if (deskripsi.style.fontSize === "1rem") {
//         deskripsi.style.fontSize = "30px";
//         perbesarHuruf.textContent = "Kembali";
//     } else {
//         deskripsi.style.fontSize = "1rem";
//         perbesarHuruf.textContent = "Perbesar";
//     }
// });


// Latihan Tantangan
const container = document.getElementById("container");
const deskripsi = document.getElementById("deskripsi");
const notifikasi = document.getElementById("notifikasi");
const btnTema = document.getElementById("btnTema");
const btnUkuran = document.getElementById("btnUkuran");
const btnNotifikasi = document.getElementById("btnNotifikasi");

btnNotifikasi.addEventListener("click", function () {
    notifikasi.classList.remove("hidden");
    
    setTimeout(() => {
        notifikasi.classList.add("hidden");
    }, 3000);
});

btnTema.addEventListener("click", function () {
    container.classList.toggle("dark-mode");

    if (container.classList.contains("dark-mode")) {
        btnTema.textContent = "Ganti ke Light Mode";
    } else {
        btnTema.textContent = "Ganti ke Dark Mode";
    }
});

btnUkuran.addEventListener("click", function () {
    if (deskripsi.style.fontSize === "" || deskripsi.style.fontSize === "16px") {
        deskripsi.style.fontSize = "20px";
        btnUkuran.textContent = "Kembali ke Ukuran Normal";
    } else {
        deskripsi.style.fontSize = "16px";
        btnUkuran.textContent = "Perbesar Ukuran Teks";
    }
});