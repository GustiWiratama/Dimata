// 1.1 Sortir array
/* Pesudo code dengan elemen sort
1. buat func dengan parameter arr
2. buat if jika array kosong, maka nilai min max dan avg adalah null
3. deklarasikan var sortedArr untuk penampung array yang disortir dengan element slice untuk membuat salinan array,
   dan element sort untuk menyortir array dari yang terkecil.
4. buat var untuk hasil nilai terkecil dengan sortedArr[0];
5. buat var untuk hasil nilai terbesar dengan sortedArr[sortedArr.length - 1];
6. buat var untuk hasil nilai rata rata dengan arr.reduce((acc, num) => acc + num, 0);
7. return { min: minValue, max: maxValue, avg: avgValue };
8. buat var untuk array yang ingin disortir
9. console.log(minMaxAvg(nama array yang ingin disortir));
  */

function minMaxAvgWsort(arr) {
  if (arr.length === 0) {
    return { min: null, max: null, avg: null };
  }
  arr.sort();
  minV = arr[0];
  maxV = arr[arr.length - 1];

  let Jumlahtotal = 0;
  for (i = 0; i < arr.length; i++) {
    Jumlahtotal += arr[i];
  }
  const avgV = Jumlahtotal / arr.length;

  return { NilaiMin: minV, NilaiMax: maxV, rataRata: avgV };
}

let arrJ = [3, 6, 2, 6, 3];
sortArr = minMaxAvgWsort(arrJ);
console.log(sortArr);

// sortir array tanpa sort
/*
1. buat func dengan parameter arr
2. buat if jika array kosong, maka nilai min max dan avg adalah null
3. buat var nilaiMin dan nilaiMax dengan arrC[0] dan var total dengan 0
4. for loop dengan memanggil num arrC, jika num lebih kecil dari nilaiMin, num akan dijadikan nilai minimum
    jika num lebih besar dari nilaiMax, num akan dijadikan nilai maximum
5. total adalah total + num
6. baut var rataRata dengan total/panjang array
7.return nilai min = nilaiMin, max = nilaiMax, avg = rataRata
 */

function minMaxAvg(arrC) {
  if (arrC.length === 0) {
    return { min: null, max: null, avg: null };
  }

  let nilaiMin = arrC[0];
  let nilaiMax = arrC[0];
  let total = 0;

  for (i = 0; i < arrC.length; i++) {
    if (arrC[i] < nilaiMin) {
      nilaiMin = arrC[i];
    }
    if (arrC[i] > nilaiMax) {
      nilaiMax = arrC[i];
    }
    total += arrC[i];
  }
  const rataRata = total / arrC.length;

  return { min: nilaiMin, max: nilaiMax, avg: rataRata };
}

const newarray = [4, 3, 7, 5];
console.log(minMaxAvg(newarray));

// 1.2. gabung kata Array jadi string
/* Pseudo code
1. buat func dengan parmeter arr
2. jika panjang array adalah 0, return petik kosong
3. jika panjang array 1, return array index 0
4. jika panjang array 2, selipakn "dan"
5. gabungkan semua kata kecuali yang terakhir dengan koma
6. ambil kata terakhir
7. buat penampung array yang ingin diubah menajadi string
8. print penapung menggunakan fungsi gabungkanKata
*/

function gabungkanKata(arr) {
  let hasil = "";
  for (i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      hasil += "dan " + arr[i];
    } else {
      hasil += arr[i] + ", ";
    }
  }
  return hasil;
}

const kataArray = ["Cihuy", "Skibidi", "Sigma", "Rizz"];
console.log(gabungkanKata(kataArray));

// 1.3. String Jadi Array
/*  pseudo code
1. buat fungsi dengan nama ubahString dengan parameter string
2. deklarasikan delimeter untuk memisahkan kata di string
3. return string.split(delimeter) untuk mengubah string menjadi array
4. buat variabel kalimat1 yang berisi kalimat yang ingin diubah ke array
5. buat var kalimat1string dengan fungsi dengan parameter kalimat1
6. print kalimat1string
*/

function ubahString(string) {
  return string.split(" ");
}

let contohString = "AKU TIDAK BRAINROT";
let hasilArray = ubahString(contohString);
console.log(hasilArray);

// 1.4. Jumlahkan index yang sama pada 2 array
/* pseudo code
1. buat func jumlahkanArray dengan parameter arrA dan arrB
2. buat pengondisian jika panjang array tidak sama, akan error.
3. return arrA.map((num, index) => num + arrB[index]); untuk menjumlahkan nilai dengan index yang sama
4. penggunaan : buat 2 array dengan pajang sama, buat var hasil diisi dengan jumlahkanArray(arrA, arrB);
5. print var hasil
*/
function jumlahkanArray(arrA, arrB) {
  const hasiltambah = [];
  if (arrA.length !== arrB.length) {
    return "Panjang kedua array harus sama!";
  }
  for (i = 0; i < arrA.length; i++) {
    const sum = arrA[i] + arrB[i];
    hasiltambah.push(sum);
  }
  return hasiltambah;
}
let arrA = [10, 20, 30];
let arrB = [1, 2, 3];
let hasil = jumlahkanArray(arrA, arrB);

console.log(hasil);

// 1.5. Menambahkan elemen baru ke array
/* Pseudo code
1. buat func dengan parameter array dan elemen
2. buat kondisikan jika elemen yang ingin ditambah sudah ada, print "elemen sudah ada"
3. jika elemen belum ada, tambahkan elemen dengan array.push(elemen)dan print "berhasil ditambahkan"
*/
function tambahArrayBaru(array, elemen) {
  if (array.includes(elemen)) {
    console.log("Elemen sudah ada");
  } else {
    array.push(elemen);
    console.log("Berhasil ditambahkan");
  }
}

const arrBaru = [1, 2, 3];

tambahArrayBaru(arrBaru, 5);
console.log(arrBaru);

// -------------------------------------------

// 2.1. func Anti ganjil
/*  pseudo code
1. buat fungsi dengan nama antiGanjil dengan parameter arrayOfNumber
2. return arrayOfNumber dengan fungsi .filter dan tambahkan fungsi anonim dengan parameter number.
3. isika func number dengan return berisi number habis dibagi dengan 2
4. deklarasikan array baru yang ingin di filer
5. deklarasikan nomorGenap dengan fungsi (untuk hasil array yang telah difilter)
6. print nomorGenap

*/

function antiGanjil(arrayOfNumber) {
  const hasilGanjil = [];
  for (i = 0; i < arrayOfNumber.length; i++) {
    if (arrayOfNumber[i] % 2 === 0) {
      hasilGanjil.push(arrayOfNumber[i]);
    }
  }
  return hasilGanjil;
}

let arrayAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let mauGanjil = antiGanjil(arrayAngka);
console.log(mauGanjil);

// 2.2. Integer dengan limit
/* Pseudo code
1. buat function dengan rest parameter ...integers
2. deklarasikan maxsize terserah berapa
3. deklarasikan array kosong untuk menyimpan hasil
4. buat kondisi jika pajang array lebih kecil dari maxsize, print array, jika sudah = maxsize, break.
5. kembalikan hasil
*/
function insertIntegers(...integers) {
  const maxSize = 5;
  const resultArray = [];

  for (i = 0; i < integers.length; i++) {
    if (resultArray.length < maxSize) {
      resultArray.push(integers[i]);
    } else {
      break;
    }
  }

  return resultArray;
}

const result = insertIntegers(1, 2, 3, 2, 1, 2, 1, 1, 21);
console.log(result);

// 2.3. gabungkan array
/* Pseudo code
1. buat func dengan parameter arrE dan arrF
2. return arrE.concat(arrF) untuk menjumlahkan kedua array
3.
*/

function gabungArr(arrE, arrF) {
  return arrE.concat(arrF);
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8];

hasilGabung = gabungArr(arr1, arr2);
console.log(hasilGabung);

// 2.4. scan duplikat
/* Pseudo code
1. buat func dengan parameter arrD
2. return arrD.filter... untuk memeriksa apakah elemen saat ini telah muncul sebelumnya dalam array.
*/
function scanDuplicate(arrD) {
  const frekuensi = {};
  const duplikat = [];

  for (let i = 0; i < arrD.length; i++) {
    const value = arrD[i];

    if (frekuensi[value]) {
      if (!duplikat.includes(value)) {
        duplikat.push(value);
      }
    }
    frekuensi[value] = (frekuensi[value] || 0) + 1;
  }

  return duplikat;
}

const angkaArray = [1, 2, 3, 4, 3, 8, 5, 6, 0, 10, 4];
const ArrayHasil = scanDuplicate(angkaArray);
console.log(ArrayHasil);

// 2.5. menemukan perbedaan
/* pseudo code
1. buat func dengan arr1 dan arr2
2. buat var set1 dan set2 dengan new Set untuk menyimpan elemen dari kedua array
3. buat var beda berisi arr1 dan elemen filter untuk memilih elemen yang berbeda,
    metode .has(item) untuk memeriksa elemen duplikat
4. !set2.has(item) berarti "pilih item dari array1 hanya jika item tersebut tidak ada dalam set2
5. return beda
*/

function cariBeda(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const beda = [
    ...arr1.filter((item) => !set2.has(item)),
    ...arr2.filter((item) => !set1.has(item)), //filter di arr1 untuk mendapatkan elemen yang tidak ada di set2, begitu sebaliknya
  ];
  return beda;
}

const arraH = [1, 2, 3, 4];
const arrI = [1, 2, 3, 5];

let beda1 = cariBeda(arraH, arrI);
console.log(`perbedaan terdapat pada : ${beda1}`);

// -------------------------------------------

// 3.1. scan tipedata primitif
/* pseudo code
1. buat func dengan parameter arr
2. return arr.filter  menyaring item, item === null adalah tipedata primitif
3. typeof item !== "object" && typeof item !== "function"  Memeriksa apakah tipe
   data elemen bukan objek atau fungsi. Jika elemen tersebut adalah elemen primitif
   maka akan diprint
   */
function ambilTipeDataPrimitif(arr) {
  const hasil1 = [];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    let type = typeof item;

    if (
      type === "number" ||
      type === "string" ||
      type === "boolean" ||
      type === "undefined"
    ) {
      hasil1.push(item);
    }
  }
  return hasil1;
}
const dataArray = [
  1,
  "string",
  null,
  false,
  undefined,
  2,
  "yes",
  undefined,
  [1, 2, 3],
];
const hasil1 = ambilTipeDataPrimitif(dataArray);
console.log(hasil1);

// 3.2. mengambil nilai kedua terkecil dari array
/* Pseudo code
1. buat func dengan parameter array
2. buat var sortedArr dengan array.slice().sort((a, b) => a - b)
3. buat var minValue diisi dengan sortedArr dengan index 1 karna mencari nilai terkecil kedua
4. return minValue
*/

function secondSmallest(arr) {
  let firstSmallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < firstSmallest) {
      secondSmallest = firstSmallest;
      firstSmallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== firstSmallest) {
      secondSmallest = arr[i];
    }
  }

  return secondSmallest;
}

const ar = [7, 3, 6, 5, 3, 2, 1, 7];
console.log("Angka terkecil kedua adalah: " + secondSmallest(ar));

// 3.3. Mengembalikan jumlah angka dari array tipe data campuran
/* PsEUDO CODE
1. 
*/
function scanNumbers(arr) {
  let number = [];
  for (let i = 0; i < arr.length; i++)
    if (typeof arr[i] === "number") {
      number.push(arr[i]);
    }
  banyakNumber = number.length;
  return banyakNumber;
}
const mixedTypeArray = [1, "cihuy", "brainrot", 10];
console.log(scanNumbers(mixedTypeArray));

// 3.4. mengembalikan jumlah nilai duplikat dari array angka
function duplikatValue(arr) {
  const hitung = {};
  const duplikat = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (hitung[value]) {
      hitung[value]++;
    } else {
      hitung[value] = 1;
    }
  }

  for (const key in hitung) {
    if (hitung[key] > 1) {
      duplikat.push(key);
    }
  }
  const jumlahDuplikat = duplikat.length;

  return `Duplikat terdapat pada : ${duplikat} | jumlah duplikat = ${jumlahDuplikat} kata`;
}

const arr3 = ["aku", "adalah", "aku", "adalah", "cihuyyy"];
console.log(duplikatValue(arr3));

// 3.5. Batu gunting kertas

function BatuGuntingKertas(PilihanPlayer) {
  const pilihan = ["batu", "gunting", "kertas"];
  const PilihanKomputer = pilihan[Math.floor(Math.random() * pilihan.length)];

  console.log(`Pilihan player: ${PilihanPlayer}`);
  console.log(`Pilihan Komputer: ${PilihanKomputer}`);

  if (PilihanPlayer === PilihanKomputer) {
    return "Seri";
  }

  if (
    (PilihanPlayer === "batu" && PilihanKomputer === "gunting") ||
    (PilihanPlayer === "gunting" && PilihanKomputer === "kertas") ||
    (PilihanPlayer === "kertas" && PilihanKomputer === "batu")
  ) {
    return "Menang";
  } else {
    return "Kalah";
  }
}

console.log(BatuGuntingKertas("kertas"));
