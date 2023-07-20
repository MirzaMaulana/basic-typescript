/**
 * Function di TypeScript
 */
//standar function
function sayHello() {
  return "Greatings!!";
}
console.log(sayHello());
//function diatas akan di deklarasikan menjadi string

// kita juga bisa mengekspektasi nilai yang dikeluar sebuah function itu number atau string
function isNumber(): number | string {
  //kamu juga bebas menetapkan nilai function ini
  return "ini String tapi bisa juga di isi number";
}

//menggunakan arrow function
const fullName = (): string => "Mirza Maulana";

//void adalah function yang tidak boleh mengembalikan nilai apapun
const isVoid = (): void => {
  console.log(isNumber());
  console.log(fullName());
};

isVoid();

/**
 * Function dengan Paramater
 */
//kita wajib mendeklarasikan tipe data ke paramater agar disiplin!
function tambah(x: number, y: number): string {
  // ekspektasi kita yang dikembalikan adalah string
  return `${x} ditambah ${y} itu adalah ${x + y}`;
}

const result = tambah(10, 8);
console.log(result);
