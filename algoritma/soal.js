// 1. Kerjakan dengan menggunakan bahasa pemograman yg anda kuasai, buat folder terpisah untuk soal ini

// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

// Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu

let kata = "NEGIE1";
let length = kata.length;
let reverse = [];
let getKata;
let result;
for (let index = 0; index < length; index++) {
  if (index < length - 1) {
    getKata = kata[length - (index + 2)];
    reverse.push(getKata);
  } else {
    reverse.push(kata[length - 1]);
  }
  result = reverse.join("");
}

console.log(result);

// 2. Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu
// const sentence = "Saya sangat senang mengerjakan soal algoritma"

// longest(sentence)
// // mengerjakan: 11 character

const sentence = "Saya sangat senang mengerjakan soal algoritma";
let stc_arr = sentence.split(" ");
let temp = stc_arr[0];
let great;

for (let index = 0; index < stc_arr.length - 1; index++) {
  if (temp.length < stc_arr[index + 1].length) {
    temp = stc_arr[index + 1];
  }
}
console.log(temp, ":", temp.length, "character");

// 3. Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT
// Contoh:

// INPUT = ['xc', 'dz', 'bbb', 'dz']
// QUERY = ['bbb', 'ac', 'dz']

// OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT

INPUT = ["xc", "dz", "bbb", "dz"];
QUERY = ["bbb", "ac", "dz"];

// console.log(INPUT[2]===QUERY[0])

let OUTPUT = [];

for (let index = 0; index < QUERY.length; index++) {
  query = QUERY[index];
  let get = 0;
  for (let indexs = 0; indexs < INPUT.length; indexs++) {
    input = INPUT[indexs];
    if (query === input) {
      get = get + 1;
    }
  }
  OUTPUT.push(get);
}
console.log(OUTPUT);

// 4.Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:
// Contoh:

// Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

// diagonal pertama = 1 + 5 + 9 = 15
// diagonal kedua = 0 + 5 + 7 = 12

// maka hasilnya adalah 15 - 12 = 3

Matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];
let diagonal1 = 0;
let diagonal2 = 0;
let get = 0;
let get2 = 0;
for (let index = 0; index < Matrix.length; index++) {
  get = Matrix[index][index];
  diagonal1 = diagonal1 + get;
}
for (let index = 0; index < Matrix.length; index++) {
  get2 = Matrix[index][Matrix.length - (index + 1)];
  diagonal2 = diagonal2 + get2;
}

Hasil = diagonal1 - diagonal2;
console.log(Hasil);
