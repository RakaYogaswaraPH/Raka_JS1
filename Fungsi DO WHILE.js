// Program memanggil nama user 
var nama = "";

// Prompt user untuk memasukkan nama dan akan terus berulang apabila user tidak memasukan nama
do {
  nama = prompt("Masukkan nama Anda:");
} while (nama === "");

// Tampilkan pesan sapaan
alert("Halo, " + nama + "!");
