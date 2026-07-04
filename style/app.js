const lagu = document.getElementById('laguLatar');
// Tentukan password yang benar di sini (misal: "01012000")
const correctPassword = "01012000"; 

// Fungsi untuk memunculkan form password saat tulisan "Mulai" diklik
function showInput() {
    const clickText = document.getElementById('click-text');
    const passContainer = document.getElementById('pass-container');
    
    if (clickText && passContainer) {
        clickText.style.display = 'none'; // Sembunyikan tulisan "Mulai"
        passContainer.style.display = 'flex'; // <--- UBAH 'block' MENJADI 'flex' DI SINI
    }
}

// Jalankan fungsi otomatis saat halaman terbuka
window.addEventListener('DOMContentLoaded', () => {
    // Cek apakah status musik sudah diizinkan dari halaman sebelumnya
    if (localStorage.getItem('musikMenyala') === 'true' && lagu) {
        // Langsung coba putar musik secara murni
        lagu.play().catch(() => {
            /* Jaring Pengaman: Jika browser memblokir, musik berputar saat layar diklik */
            document.addEventListener('click', () => { 
                lagu.play(); 
            }, { once: true });
        });
    }
});

function checkPassword() {
    const input = document.getElementById('pwd').value;
    if(input === correctPassword) {
        // Animasi Out
        document.body.classList.add('fade-out');
        // Tunggu layar kosong lalu pindah halaman
        setTimeout(() => {
            window.location.href = 'cake.html';
        }, 1000); 
    } else {
        document.getElementById('error-message').innerText = "Password salah, coba ingat lagi! 😝";
    }
}

// Menampilkan tombol setelah 7 detik (pastikan elemen nextBtn ada di HTML jika dipakai)
setTimeout(() => {
    const btn = document.getElementById('nextBtn');
    if (btn) {
        btn.style.display = 'inline-block'; // Tampilkan tombol
        btn.animate( // Animasi fade in
            [
                { opacity: 0 },
                { opacity: 1 }
            ],
            {
                duration: 1000,
                fill: 'forwards'
            }
        );
    }
}, 7000);

function goToNext() { // Fungsi pindah halaman dengan fade out
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'text.html';
    }, 1000);
}

// Memastikan layar muncul secara mulus
window.onload = () => {
    document.body.classList.remove('fade-out');
};