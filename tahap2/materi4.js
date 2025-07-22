document.getElementById("btnTambah").addEventListener("click", function () {
    const input = document.getElementById("inputTugas");
    const nilaiTugas = input.value.trim();

    if (nilaiTugas === "") {
        alert("Tugas tidak boleh kosong");
        return;
    }

    const li = document.createElement("li");
    li.textContent = `${nilaiTugas} `;
    li.classList.add("item-tugas");

    const btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";
    btnHapus.classList.add("btn-hapus");
    btnHapus.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(btnHapus);

    document.getElementById("daftarTugas").appendChild(li);

    input.value = "";
    input.focus();
});
