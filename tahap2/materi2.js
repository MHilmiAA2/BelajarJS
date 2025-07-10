const nama = document.getElementById("nama");
const email = document.getElementById("email");
const umur = document.getElementById("umur");

const errorNama = document.getElementById("errorNama");
const errorEmail = document.getElementById("errorEmail");
const errorUmur = document.getElementById("errorUmur");
const btnDaftar = document.getElementById("btnDaftar");
const hasil = document.getElementById("hasil");

btnDaftar.addEventListener("click", function() {
    //  Reset pesan error
    errorNama.textContent = "";
    errorEmail.textContent = "";
    errorUmur.textContent = "";
    hasil.textContent = "";

    let valid = true;

    // Validasi Nama
    if (nama.value.trim() === "") {
        errorNama.textContent = "Nama wajib diisi";
        valid = false;
        } else if (/\d/.test(nama.value)) {
        errorNama.textContent = "Nama tidak boleh mengandung angka";
        valid = false;
        }

    // Validasi Email
    if (email.value.trim() === "") {
        errorEmail.textContent = "Email wajib diisi";
        valid = false;
    } else if (!email.value.includes("@")) {
        errorEmail.textContent = "Email tidak valid";
        valid = false;
    }

    // Validasi Umur
    if (umur.value.trim() === "") {
        errorUmur.textContent = "Umur wajib diisi";
        valid = false;
    } else if (isNaN(umur.value) || parseInt(umur.value) <= 0) {
        errorUmur.textContent = "Umur harus berupa angka positif";
        valid = false;
    } else if (umur.value < 17) {
        errorUmur.textContent = "Umur minimal 17 tahun";
        valid = false;
    }

    if (valid) {
        hasil.textContent = `Pendaftaraan berhasil atas nama ${nama.value}!`;
        hasil.style.color = "green";
    } else {
        hasil.textContent = "Pendaftaran gagal, silahkan periksa kembali";
        hasil.style.color = "red";
    }
});