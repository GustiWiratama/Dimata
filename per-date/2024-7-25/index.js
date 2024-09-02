//Segitiga
/* pseudo class
1. buat fungsi dengan nama SegitigaAngka dengan parameter height
2. buat var angka dengan nilai 1
3. looping dengan for (i=1, jika i lebih kecil atau samadengan height, i increment)
4. deklarasikan var segitiga dengan string dan kosongkan
5. for loop (j=1, jika j lebih kecil atau samadengan i, j increment)
6. deklarasikan var segitiga dengan segitiga + angka.toString.padStart untuk mengubah var angka menjadi string dan membuat string memiliki panjang minimum dan menambah 0 di awal string
7. increment angka
8. print segitiga dengan metode .trim untuk menghapus spasi kosong
9. gunakan fungsi untuk membuat segitiga dengan banyak baris tertetu
*/

function SegitigaAngka(height) {
  let angka = 1;
  for (let i = 1; i <= height; i++) {
    let segitiga = "";
    for (let j = 1; j <= i; j++) {
      // Tambahkan angka ke dalam segitiga, format dengan dua digit
      segitiga += angka.toString().padStart(2, "0") + " ";
      angka++; // Increment angka
    }
    console.log(segitiga.trim());
  }
}

SegitigaAngka(4);

// 2. kelipatan
/*  pseudo code
1. buat fungsi dengan nama logNumbers dengan parameter n
2. looping dengan for (i=1, jika i lebih kecil atau samadengan n, i increment ) 
3. jika i habis dibagi 3 dan 5, print TIGA LIMA
4. jika i habis dibagi 3, print TIGA
5. jika i habis dibagi 5, print LIMA
*/
function logNumbers(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("TIGA LIMA");
    } else if (i % 3 === 0) {
      console.log("TIGA");
    } else if (i % 5 === 0) {
      console.log("LIMA");
    } else {
      console.log(i);
    }
  }
}

// Contoh penggunaan:
logNumbers(15);

// BMI
/*  pseudo code
1. buat fungsi dengan nama bodyMassIndex dengan parameter weight dan heightCm
2. deklarasikan heightM dengan heightCm/100
3. deklarasikan bmi dengan rumus untuk menghitung bmi
4. jika bmi kurang dari 18.5, return 'berat kurang'
5. jika bmi lebih atau sama dengan 18.5 dan kurang dari samadengan 24.9, return ideal
5. jika bmi lebih atau sama dengan 25.0 dan kurang dari samadengan 29.9, return kelebihan berat badan
5. jika bmi lebih atau sama dengan 30.0 dan kurang dari samadengan 34.9, return sangat kelebihan berat badan
5. jika lebih dari itu, return obesitas
6. untuk menggunakan fungsi, deklarasikan height dan weight sesuai tinggi dan berat badan
7. deklarasikan variabel bmiSaya dengan fungsi bmi
8. print bmiSaya 
*/

function bodyMassIndex(weight, heightCm) {
  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  if (bmi < 18.5) {
    return "berat kurang";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "ideal";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    return "kelebihan berat badan";
  } else if (bmi >= 30.0 && bmi <= 34.9) {
    return "sangat kelebihan berat badan";
  } else {
    return "obesitas";
  }
}

let height = 168.5;
let weight = 59;

let bmiSaya = bodyMassIndex(weight, height);
console.log(bmiSaya);

//4. func Anti ganjil
/*  pseudo code
1. buat fungsi dengan nama antiGanjil dengan parameter arrayOfNumber
2. return arrayOfNumber dengan fungsi .filter dan tambahkan fungsi dengan parameter number.
3. isika func number dengan return jika number habis dibagi dengan 2
4. deklarasikan array baru yang ingin di filer
5. deklarasikan nomorGenap dengan fungsi (untuk hasil array yang telah difilter)
6. print nomorGenap

*/

function antiGanjil(arrayOfNumber) {
  return arrayOfNumber.filter(function (number) {
    return number % 2 === 0;
  });
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nomorGenap = antiGanjil(numbers);
console.log(nomorGenap);

//5. ubah string jadi array
/*  pseudo code
1. buat fungsi dengan nama ubahString dengan parameter string
2. deklarasikan delimeter untuk memisahkan kata di string
3. return string.split(delimeter) untuk mengubah string menjadi array
4. buat variabel kalimat1 yang berisi kalimat yang ingin diubah ke array
5. buat var kalimat1string dengan fungsi dengan parameter kalimat1
6. print kalimat1string
*/
function ubahString(string) {
  delimeter = " ";
  return string.split(delimeter);
}

let kalimat1 = "Halo saya cihuyyy";
let kalimat1string = ubahString(kalimat1);
console.log(kalimat1string);
