document.getElementById("form-pemesanan").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Menampilkan pesan konfirmasi
    document.getElementById("pesan-konfirmasi").style.display = "block";
    
    // Mengosongkan form setelah submit
    this.reset();
});

