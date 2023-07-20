/**
 * Function di TypeScript
 */
//standar function
function sayHello() {
  return "Greatings!!";
}
console.log(sayHello());
//function diatas akan di deklarasikan menjadi string

// kita juga bisa mendeklarasikan sebuah function menjadi number
function isNumber(): number | string {
  //kamu juga bebas menetapkan nilai function ini
  return "ini String tapi bisa juga di isi number";
}
console.log(isNumber());

//menggunakan arrow function
const fullName = (): string => "Mirza Maulana";
const result = fullName();
console.log(result);
