function simpanTugas() {
  const semuaLi = document.querySelectorAll("#daftarTugas li");
  const dataTugas = [];

  semuaLi.forEach((li) => {
    const teks = li.querySelector("span").textContent.trim();
    const selesai = li.querySelector("input[type='checkbox']").checked;

    dataTugas.push({ teks, selesai });
  });

  localStorage.setItem("tugas", JSON.stringify(dataTugas));
}

function muatTugas() {
  const data = JSON.parse(localStorage.getItem("tugas")) || [];

  data.forEach((item) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.selesai;

    const span = document.createElement("span");
    span.textContent = ` ${item.teks} `;

    const btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        li.classList.add("selesai");
      } else {
        li.classList.remove("selesai");
      }
      simpanTugas(); // update status
    });

    btnHapus.addEventListener("click", () => {
      li.remove();
      simpanTugas(); // update data
    });

    if (item.selesai) li.classList.add("selesai");

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btnHapus);
    document.getElementById("daftarTugas").appendChild(li);
  });
}

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

    simpanTugas();
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

muatTugas();
