// Program DO WHILE untuk memanggil nama user 
var nama = "";

// Prompt user untuk memasukkan nama dan akan terus berulang apabila user tidak memasukan nama
do {
  nama = prompt("Masukkan nama Anda:");
} while (nama === "");

// Tampilkan pesan sapaan
alert("Halo, " + nama + "!");




// Program ELSE memanggil nama user
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




// Program FOR STATEMENT mencetak pesan sebanyak 5 kali 
var warna = "";

// Prompt user untuk memasukkan warna
warna = prompt("Masukkan warna favorit Anda:");

// Tampilkan pesan "Warna favorit Anda adalah [warna]" sebanyak 5 kali
for (var i = 0; i < 5; i++) {
  alert("Warna favorit Anda adalah " + warna);
}




// Program FUNCTION menampilkan umur user
function inputUmur() {
    // Deklarasikan variabel untuk menyimpan input user
    var umur = "";
  
    // Prompt user untuk memasukkan umur
    umur = prompt("Masukkan umur Anda:");
  
    // Tampilkan pesan sapaan
    if (isNaN(umur)) {
      alert("Umur harus berupa angka!");
    } else {
      alert("Umur Anda adalah " + umur + " tahun.");
    }
  }
  
  // Panggil function inputUmur()
  inputUmur();
  



  // Program IF menentukan umur user
let umur = prompt("Masukkan umur Anda: ");

// Cek apakah umur user lebih dari 17 tahun
if (umur > 17) {
  // Jika lebih dari 17 tahun, tampilkan pesan
  alert("Anda sudah dewasa");
} else {
  // Jika kurang dari atau sama dengan 17 tahun, tampilkan pesan
  alert("Anda masih di bawah umur");
}





// Program NESTED IF menentukan bilangan positif dan negatif
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




// Program SWITCH CASE menentukan angka input user
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




// Program WHILE menampilkan nama user 
var nama = "";

// Prompt user untuk memasukkan nama
nama = prompt("Masukkan nama Anda:");

// Tampilkan pesan "Halo, [nama]" selama user tidak memasukkan "exit"
while (nama !== "exit") {
  alert("Halo, " + nama + "!");
  nama = prompt("Masukkan nama Anda:");
}

