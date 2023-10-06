// Program menentukan angka input user
var input = "";

// Prompt user untuk memasukkan input
input = prompt("Masukkan input Anda:");

// Periksa input user dan tampilkan pesan sesuai dengan kondisi
switch (input) {
  case "1":
    alert("Anda memilih angka 1!");
    break;
  case "2":
    alert("Anda memilih angka 2!");
    break;
  case "3":
    alert("Anda memilih angka 3!");
    break;
  default:
    alert("Input Anda tidak valid!");
}
