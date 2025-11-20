function addTask() {
    // 1. Ambil input tugas
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    // 2. Ambil input tanggal BARU
    const dateInput = document.getElementById('dateInput');
    let taskDate = dateInput.value;

    // Validasi: Jika input tugas kosong
    if (taskText === "") {
        alert("Mohon masukkan tugas terlebih dahulu!");
        return;
    }

    // Format tanggal untuk tampilan (jika tanggal diisi)
    let dateDisplay = '';
    if (taskDate) {
        // Mengubah format YYYY-MM-DD menjadi DD/MM/YYYY
        // Ini opsional, bisa juga langsung menampilkan taskDate
        const dateObj = new Date(taskDate);
        dateDisplay = dateObj.toLocaleDateString('id-ID'); 
    }

    // 3. Ambil kontainer list (UL)
    const taskList = document.getElementById('taskList');

    // 4. Buat elemen list baru (LI)
    const listItem = document.createElement('li');
    
    // Isi konten LI: teks tugas, tanggal, dan tombol Hapus
    // Catatan: Gunakan <div> atau <span> terpisah untuk memformat tanggal
    listItem.innerHTML = `
        <span class="task-content">
            ${taskText} 
            <small class="task-date">${dateDisplay ? ' (' + dateDisplay + ')' : ''}</small>
        </span>
        <button class="delete-btn" onclick="deleteTask(this)">Hapus</button>
    `;

    // ... (Sisa kode Event Listener dan Append tetap sama)
    
    listItem.addEventListener('click', function(event) {
        if (event.target.tagName !== 'BUTTON') {
            listItem.classList.toggle('completed');
        }
    });

    taskList.appendChild(listItem);

    // 5. Bersihkan kotak input tugas dan tanggal
    taskInput.value = "";
    dateInput.value = ""; // Bersihkan input tanggal juga
}

function deleteTask(buttonElement) {
    const listItem = buttonElement.parentNode;
    listItem.remove();
}