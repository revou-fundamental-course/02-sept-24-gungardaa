const luasForm = document.getElementById('luas-form');
const alasInput = document.getElementById('alas');
const tinggiInput = document.getElementById('tinggi');
const hitungLuasButton = document.getElementById('hitung-luas');
const luasResultElement = document.getElementById('luas-value');

const kelilingForm = document.getElementById('keliling-form');
const sisi1Input = document.getElementById('sisi1');
const sisi2Input = document.getElementById('sisi2');
const sisi3Input = document.getElementById('sisi3');
const hitungKelilingButton = document.getElementById('hitung-keliling');
const kelilingResultElement = document.getElementById('keliling-value');

function hitungLuas(alas, tinggi) {
    return (alas * tinggi) / 2;
}

function hitungKeliling(sisi1, sisi2, sisi3) {
    return sisi1 + sisi2 + sisi3;
}

hitungLuasButton.addEventListener('click', (e) => {
    e.preventDefault();
    const alas = parseFloat(alasInput.value);
    const tinggi = parseFloat(tinggiInput.value);

    if (alas <= 0 || tinggi <= 0) {
        alert('Nilai harus lebih besar dari 0!');
        return;
    }

    const luas = hitungLuas(alas, tinggi);
    luasResultElement.innerHTML = `Luas Segitiga: ${luas.toFixed(2)}`;
});

hitungKelilingButton.addEventListener('click', (e) => {
    e.preventDefault();
    const sisi1 = parseFloat(sisi1Input.value);
    const sisi2 = parseFloat(sisi2Input.value);
    const sisi3 = parseFloat(sisi3Input.value);

    if (sisi1 <= 0 || sisi2 <= 0 || sisi3 <= 0) {
        alert('Nilai harus lebih besar dari 0!');
        return;
    }

    if (sisi1 + sisi2 <= sisi3 || sisi1 + sisi3 <= sisi2 || sisi2 + sisi3 <= sisi1) {
        alert('Sisi-sisi tidak membentuk segitiga!');
        return;
    }

    const keliling = hitungKeliling(sisi1, sisi2, sisi3);
    kelilingResultElement.innerHTML = `Keliling Segitiga: ${keliling.toFixed(2)}`;
});