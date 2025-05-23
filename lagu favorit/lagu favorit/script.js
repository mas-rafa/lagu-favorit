
//membuat data array berisi 3 lagu favorit (judul, penyanyi, jumlah_likes, jumlah_play)

var lagu = [
    ['Mangu', 'Fourtwnty', 4000, 8000, 'mangu.jpg', 'spotify.jpg'],
    ['Slalu Ada di Nadi', 'B.C.L', 1500, 2300, 'jumbo.jpg'],
    ['Lesung Pipi', 'Raim LaOde', 2440, 5400, 'lesung_pipi.jpg'],
    ['Zona Nyaman', 'Fourtwnty', 3000, 7000, 'zona_nyaman.jpg', 'spotify.jpg'],
    ['To the Bone', 'Pamungkas', 4500, 9500, 'to_the_bone.jpg', 'spotify.jpg'],
    ['Rindu Semalam', 'Fiersa Besari', 3200, 6400, 'rindu_semalam.jpg', 'spotify.jpg'],
    ['Manusia Kuat', 'Tulus', 5000, 10000, 'manusia_kuat.jpg', 'spotify.jpg'],
    ['Hati-Hati di Jalan', 'Tulus', 4700, 9300, 'hati_hati_di_jalan.jpg', 'spotify.jpg'],
    ['Cinta Luar Biasa', 'Andmesh', 4000, 8500, 'cinta_luar_biasa.jpg', 'spotify.jpg'],
];

var element = ''; // Variabel untuk menyimpan semua HTML lagu

// Menggunakan loop untuk menerapkan template ke seluruh item array lagu
lagu.forEach(item => {
    element += `
        <div class="lagu">
            <h2>${item[0]}</h2>
            <small>
                <i>${item[1]}</i>
            </small>
            <img src="/${item[4]}" alt="" srcset="">
            <div class="bawah">
                <div class="kanan">${item[2]}</div>
                <div class="kiri">${item[3]}</div>
            </div>
        </div>`;
});

var konten = document.getElementById('container');

konten.innerHTML = element