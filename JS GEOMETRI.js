function Hitung() {
    var firstTermInput = document.getElementById('first-term').value;
    var commonRatioInput = document.getElementById('common-ratio').value;
    var numTermsInput = document.getElementById('num-terms').value;

    // Konversi nilai input menjadi nilai numerik
    var firstTerm = parseFraction(firstTermInput);
    var commonRatio = parseFraction(commonRatioInput);
    var numTerms = parseFraction(numTermsInput);

    // Inisialisasi variabel result, sum, dan term
    var result = "";
    var sum = 0;
    var term = firstTerm;

    // Perhitungan deret geometri
    for (var i = 0; i < numTerms; i++) {
        result += term;
        sum += term;
        term *= commonRatio;
        if (i < numTerms - 1) {
            result += ", ";
        }
    }

    // Menampilkan hasil perhitungan di dalam elemen HTML yang sesuai
    document.getElementById('result').innerHTML = "Deret: " + result;
    document.getElementById('sum').innerHTML = "Jumlah: " + sum;
}

function Hapus() {
    document.getElementById('result').innerHTML = "";
    document.getElementById('sum').innerHTML = "";
}

function Reset() {
    document.getElementById('first-term').value = "";
    document.getElementById('common-ratio').value = "";
    document.getElementById('num-terms').value = "";
    Hapus();
}


function Keluar() {
    const confirmation = confirm("Apakah Anda yakin ingin keluar?");
    if (confirmation) {
        window.location.href = "about:blank"; // Navigasikan ke halaman kosong
    }
}

