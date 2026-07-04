const lagu = document.getElementById('laguLatar');
const correctPassword = "05072005"; 

// Fungsi untuk memunculkan form password saat tulisan "Mulai" diklik
function showInput() {
    const clickText = document.getElementById('click-text');
    const passContainer = document.getElementById('pass-container');
    
    if (clickText && passContainer) {
        clickText.style.display = 'none'; // Sembunyikan tulisan "Mulai"
        passContainer.style.display = 'flex'; // <--- UBAH 'block' MENJADI 'flex' DI SINI
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const lagu = document.getElementById('laguLatar');

    if (lagu) {
        // Set volume agak pelan (opsional, biar tidak kaget)
        lagu.volume = 0.8; 

        // Fungsi internal untuk memaksa play
        const putarMusik = () => {
            lagu.play().then(() => {
                console.log("Musik berhasil diputar!");
                // Jika sukses diputar, hapus pemantau klik agar tidak keputar ulang terus
                document.removeEventListener('click', putarMusik);
                document.removeEventListener('touchstart', putarMusik);
            }).catch((error) => {
                console.log("Gagal autoplay, menunggu interaksi user...", error);
            });
        };

        // Langsung coba putar saat halaman siap
        putarMusik();

        // JARING PENGAMAN: Begitu layar disentuh atau diklik di mana saja, musik AKAN berputar
        document.addEventListener('click', putarMusik);
        document.addEventListener('touchstart', putarMusik); // Khusus pengguna HP
    } else {
        console.error("Elemen dengan ID 'laguLatar' tidak ditemukan!");
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