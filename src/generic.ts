/**
 * Generic type adalah fitur yang memungkinkan kita untuk
 * membuat kode yang dapat bekerja dengan berbagai jenis data tanpa harus
 * mengikatnya dengan tipe data tertentu.
 *
 * Dengan generic, kita dapat membuat komponen,fungsi,atau class yang dapat
 * beroperasi dengan tipe data yang berbeda pada setiap penggunaannya.
 * Ini memungkinkan kita untuk menciptakan kode yang lebih fleksibel, reusable, dan dapat digunakan kembali.
 */

//Contoh penggunaan dalam function
function dataStorage<D>(arg: D): D {
  return arg;
}

const namaTeman = dataStorage<string>("Kevin");
console.log(namaTeman);

const jumlahTeman = dataStorage<number>(30);
console.log(jumlahTeman);

//Contoh multi-type generic type
function displayValue<T extends number | string>(value: T): void {
  console.log(value);
}

displayValue("Hello"); // Output: Hello
displayValue(42); // Output: 42
// displayValue(true); // Error, karena tipe boolean tidak sesuai dengan tipe generic yang diberikan

//Contoh penggunaan dalam class
class DataSiswa<T> {
  private jumlah: T;
  private kelas: string;

  constructor(jumlah: T, kelas: string) {
    this.jumlah = jumlah;
    this.kelas = kelas;
  }

  getData(): string {
    return `Jumlah siswa kelas ${this.kelas} adalah ${this.jumlah}`;
  }
}

const kelasA = new DataSiswa(29, "XII PPLG 2");

console.log(kelasA.getData());
