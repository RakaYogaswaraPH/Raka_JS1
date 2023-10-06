// Program menampilkan umur user
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
  