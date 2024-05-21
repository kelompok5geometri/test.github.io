// Mendapatkan elemen-elemen yang diperlukan dari halaman HTML
let stars = document.getElementById('stars'); // Elemen latar belakang bintang
let meteorid = document.getElementById('meteorid'); // Elemen gambar meteor
let rocket = document.getElementById('rocket'); // Elemen gambar roket
let text = document.getElementById('text'); // Elemen teks
let button = document.getElementById('button'); // Elemen tombol

// Menambahkan event listener untuk mendengarkan peristiwa scroll
window.addEventListener('scroll', function() {
    // Mendapatkan nilai jumlah scroll vertikal dari atas halaman
    let value = window.scrollY;

    // Menggeser posisi elemen bintang secara horizontal dengan proporsi tertentu saat melakukan scroll
    stars.style.left = value * 0.25 + 'px';

    // Menggeser posisi elemen meteor secara vertikal ke atas dengan proporsi tertentu saat melakukan scroll
    rocket.style.top = value * -0.5 + 'px';

    // Mengatur margin bawah dari teks dengan proporsi tertentu saat melakukan scroll
    text.style.marginBottom = value * 1 + 'px';

    // Mengatur margin bawah dari tombol dengan proporsi tertentu saat melakukan scroll
    button.style.marginBottom = value * 1 + 'px';
});
