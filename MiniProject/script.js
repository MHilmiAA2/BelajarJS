const inputNama = document.getElementById("nama");
const inputHarga =  document.getElementById("harga");
const inputJumlah = document.getElementById("jumlah");
const btnTambah = document.getElementById("btnTambah");
const daftarBelanja = document.getElementById("daftarBelanja");

btnTambah.addEventListener("click", function () {
  const nama = inputNama.value.trim();
  const harga = parseFloat(inputHarga.value);
  const jumlah = parseInt(inputJumlah.value);

  if (nama === "" || isNaN(harga) || isNaN(jumlah)) {
    alert("Semua kolom input harus diisi dengan benar.");
    return;
  }

  const subtotal = harga * jumlah;

  const tr = document.createElement("tr");

  tr.innerHTML = `
  <td>${nama}</td>
  <td>${harga.toLocaleString()}</td>
  <td>${jumlah}</td>
  <td>${subtotal.toLocaleString()}</td>
  `;

  daftarBelanja.appendChild(tr);

  inputNama.value = "";
  inputHarga.value = "";
  inputJumlah.value = "";
  inputNama.focus();
});
