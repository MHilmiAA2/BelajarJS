let harga = document.getElementById('harga');
let jumlah = document.getElementById('jumlah');
let total = document.getElementById('hasil');

function hitung() {
    // Mengambil nilai dari input harga dan jumlah
    let hargaValue = parseFloat(harga.value);
    let jumlahValue = parseFloat(jumlah.value);

    // Memastikan nilai yang diambil adalah angka
    if (isNaN(hargaValue) || isNaN(jumlahValue)) {
        total.textContent = "Masukkan angka yang valid";
        return;
    }

    // Menghitung Total
    let totalValue = hargaValue * jumlahValue;

    // Menampilkan hasil ke dalam elemn dengan id=hasil
    total.innerHTML = `Total: Rp.${totalValue.toLocaleString('id-ID')}`;
}