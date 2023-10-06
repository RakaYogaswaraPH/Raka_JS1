// Program menentukan bilangan positif dan negatif
var input = "";

// Prompt user untuk memasukkan input
input = prompt("Masukkan input Anda:");

// Periksa apakah input user adalah angka
if (isNaN(input)) {
  // Jika input user bukan angka, tampilkan pesan kesalahan
  alert("Input Anda harus berupa angka!");
} else {
  // Jika input user adalah angka, periksa apakah inputnya positif atau negatif
  if (input >= 0) {
    // Jika inputnya positif, tampilkan pesan positif
    alert("Input Anda positif!");
  } else {
    // Jika inputnya negatif, tampilkan pesan negatif
    alert("Input Anda negatif!");
  }
}
