// function belanja(uang) {
//     hargaBarang = 150000;

//     if (uang >= hargaBarang) {
//         console.log("Barang bisa dibeli");
//     } else {
//         console.log("Uang tidak cukup");
//     }
// }

// belanja(150000);

// let menyapa = document.getElementById("sapa");
// let btn = document.getElementById("btnSapa");

// btn.addEventListener("click", function () {
//     menyapa.textContent = "Halo, Selamat datang";
// })


document.getElementById("cekBelanja").addEventListener("click", function () {
    let belanja = Number(document.getElementById("belanja").value);
    let uang = Number(document.getElementById("uang").value);
    let output = document.getElementById("output");

    if (uang <= belanja) {
        output.textContent = "Uang Tidak Cukup";
        output.classList.add("output");
    } else {
        output.textContent = "Uang Cukup Ayo Beli";
        output.classList.add("output");
    };
});
