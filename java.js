// =========================================================
// 1. Fungsi untuk Menampilkan dan Memperbarui Waktu Saat Ini
// =========================================================
function updateCurrentTime() {
    const timeElement = document.querySelector('.info-box p:first-child strong');
    
    // Mendapatkan tanggal dan waktu saat ini
    const now = new Date();
    
    // Format waktu (contoh: Fri Jun 17 2022 11:27:28 GMT+0100)
    // Date.prototype.toString() akan memberikan format yang mirip
    timeElement.textContent = 'Current Time: ' + now.toString();
}

// Panggil fungsi segera saat halaman dimuat
updateCurrentTime();
// Perbarui waktu setiap 1 detik (1000 milidetik)
setInterval(updateCurrentTime, 1000);

// =========================================================
// 2. Fungsi untuk Menangani Pengiriman Formulir
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.querySelector('.message-form');
    const infoBox = document.querySelector('.info-box');

    // Tambahkan event listener untuk submit form
    messageForm.addEventListener('submit', (event) => {
        // Mencegah halaman refresh
        event.preventDefault(); 
        
        // Mengambil nilai dari input form
        const nameInput = document.getElementById('name').value;
        const dateInput = document.getElementById('birth-date').value;
        const messageInput = document.getElementById('message').value;
        const genderInput = document.querySelector('input[name="gender"]:checked').value;
        
        // Konversi format tanggal lahir ke format yang lebih mudah dibaca (misalnya dd/mm/yyyy)
        let formattedDate = dateInput;
        if (dateInput) {
            const dateParts = dateInput.split('-'); // Format YYYY-MM-DD
            if (dateParts.length === 3) {
                formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
            }
        }

        // Membuat konten HTML baru untuk kotak info
        const newInfoContent = `
            <p><strong>Current Time:</strong> ${new Date().toString()}</p>
            <hr>
            <p><strong>Name:</strong> ${nameInput || '-'}</p>
            <p><strong>Tanggal Lahir:</strong> ${formattedDate || '-'}</p>
            <p><strong>Jenis Kelamin:</strong> ${genderInput || '-'}</p>
            <p><strong>Pesan:</strong> ${messageInput || '-'}</p>
        `;

        // Memperbarui isi kotak info
        infoBox.innerHTML = newInfoContent;
        
        // Opsional: Tampilkan pesan konfirmasi
        alert('Pesan berhasil dikirim dan data ditampilkan di kotak info!');
    });
});