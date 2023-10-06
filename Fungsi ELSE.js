// Program memanggil nama user
var nama = "";

// Prompt user untuk memasukkan nama
nama = prompt("Masukkan nama Anda:");

// Periksa apakah nama user kosong
if (nama === "") {
  // Jika nama user kosong, maka tampilkan pesan
  alert("Nama tidak boleh kosong!");
} else {
  // Jika nama user diisi, maka akan tampilkan pesan
  alert("Halo, " + nama + "!");
}
