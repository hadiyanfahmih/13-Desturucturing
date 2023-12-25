// ! ARRAY
// BASIC DESTRUCTURING
document.writeln("<h1>1. Array Destructuring</h1>");
document.writeln("<h3>1.1. Destructuring Pada Array</h3>");
const buah = ["Mangga", "Durian", "Anggur", "Cempedak", "Manggis", "Sawo"];

const [buah1, buah2, buah3, ...others] = buah;
document.writeln(`<p>Buah 1 : ${buah1}, Buah 2 : ${buah2} dan Buah 3 : ${buah3}</p>`);

const [buah4, buah5, buah6] = others;
document.writeln(`<p>Buah 4 : ${buah4}, Buah 5 : ${buah5} dan Buah 6 : ${buah6}</p>`);

// FUNCTION DESTRUCTURING
document.writeln("<h3>1.2. Destructuring Pada Array Sebagai Parameter</h3>");
function luasSegitiga([alas, tinggi]) {
  return 1 / 2 * (alas * tinggi);
}

const nilai = [4, 5];
const hasilLuas = luasSegitiga(nilai);
document.writeln(`Luas Segitiga : ${hasilLuas}`);

// ! OBJECT
// BASIC DESTRUCTURING
document.writeln("</br><h1>2. Object Destructuring</h1>");
document.writeln("<h3>2.1. Destructuring Pada Object</h3>");
const orang = {
  namaDepan: "Fahmi",
  namaBelakang: "Hariyadi",
  tinggiBadan: 175,
  alamat: {
    kota: "Pontianak",
    negara: "Indonesia",
  },
  penampilan: "Ganteng",
  status: "Sudah punya orang",
}

const
  {
    namaDepan: first, namaBelakang: last, tinggiBadan = "Tidak diketahui", alamat: { kota, negara }, ...anothers
  } = orang;

document.writeln(`<p>Nama saya ${first} ${last}. Tinggi badan saya ${tinggiBadan}. Saya tinggal di ${kota}, ${negara}.</p>`);

const { penampilan, status } = anothers

document.writeln(`<p>Saya orangnya ${penampilan}, makanya ${status}.</p>`);


// FUNCTION DESTRUCTURING
document.writeln("<h3>2.2. Destructuring Pada Object Sebagai Parameter</h3>");
function printIdentitas({ namaDepan, namaBelakang, tinggiBadan, alamat, ...lainya }) {
  document.writeln(`<p>Nama Lengkap : ${namaDepan} ${namaBelakang}</p>`);
  document.writeln(`<p>Tinggi Badan : ${tinggiBadan}</p>`);
  document.writeln(`<p>Kota : ${alamat.kota}</p>`);
  document.writeln(`<p>Cek Spread Syntax ...lainya = ${lainya.penampilan}</p>`);
  document.writeln(`<p>Cek Spread Syntax ...lainya = ${lainya.status}</p>`);
  console.table(lainya);
}

printIdentitas(orang);