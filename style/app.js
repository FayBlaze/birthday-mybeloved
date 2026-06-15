const correctPassword = "sayangku"; // UBAH PASSWORD DI SINI

function showInput() {
    document.getElementById('click-text').style.display = 'none';
    document.getElementById('pass-container').style.display = 'flex';
}

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

setTimeout(() => {
    const btn = document.getElementById('nextBtn');
    btn.style.display = 'inline-block';// Tampilkan tombol
    btn.animate(// Animasi fade in
        [
            { opacity: 0 },
            { opacity: 1 }
        ],
        {
            duration: 1000,
            fill: 'forwards'
        }
    );
}, 7000);// Menampilkan tombol setelah 7 detik

function goToNext() {// Fungsi pindah halaman dengan fade out
    document.body.classList.add('fade-out');

    setTimeout(() => {
        window.location.href = 'text.html';
    }, 1000);
}

// Memastikan layar muncul secara mulus
window.onload = () => {
    document.body.classList.remove('fade-out');
};