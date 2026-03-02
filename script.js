// Ambil elemen form berdasarkan ID
const form = document.getElementById("contact-form");

// Jalankan fungsi ketika form disubmit
form.addEventListener("submit", function (event) {

    // Ambil nilai input
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Pola validasi email menggunakan Regular Expression
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Validasi input kosong
    if (name === "" || email === "" || message === "") {
        alert("Semua field wajib diisi!");
        event.preventDefault(); // Menghentikan browser buat melakukan sebuah aksi
        return;
    }

    // Validasi format email
    if (!emailPattern.test(email)) {
        alert("Format email tidak valid!");
        event.preventDefault(); // Menghentikan browser buat melakukan sebuah aksi
        return;
    }

    // Jika semua valid
    alert("Pesan berhasil dikirim!");
});