function belanja(uang) {
    hargaBarang = 150000;

    if (uang >= hargaBarang) {
        console.log("Barang bisa dibeli");
    } else {
        console.log("Uang tidak cukup");
    }
}

belanja(150000);

let menyapa = document.getElementById("sapa");
let btn = document.getElementById("btnSapa");

btn.addEventListener("click", function () {
    menyapa.textContent = "Halo, Selamat datang";
})
