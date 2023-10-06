// Program menampilkan nama user 
var nama = "";

// Prompt user untuk memasukkan nama
nama = prompt("Masukkan nama Anda:");

// Tampilkan pesan "Halo, [nama]" selama user tidak memasukkan "exit"
while (nama !== "exit") {
  alert("Halo, " + nama + "!");
  nama = prompt("Masukkan nama Anda:");
}
