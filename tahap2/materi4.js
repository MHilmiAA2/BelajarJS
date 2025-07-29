document.getElementById("btnTambah").addEventListener("click", function () {
    const input = document.getElementById("inputTugas");
    const nilaiTugas = input.value.trim();

    if (nilaiTugas === "") {
        alert("Tugas tidak boleh kosong");
        return;
    }

    const li = document.createElement("li");
    // li.textContent = `${nilaiTugas} `;
    li.classList.add("item-tugas");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = `${nilaiTugas}`;

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            li.classList.add("selesai");
        } else {
            li.classList.remove("selesai");
        }
    });

    const btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";
    btnHapus.classList.add("btn-hapus");
    btnHapus.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btnHapus);

    document.getElementById("daftarTugas").appendChild(li);

    input.value = "";
    input.focus();
});
