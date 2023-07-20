/**
 * Custom Tipe Data Object
 */
type Male = string;
type Famale = string;

type TypeTeman = {
  name: string;
  gender: Male; //ini adalah tipe yang kita buat diatas
  age: number;
  isDead: boolean;
};

let Friend: TypeTeman;

Friend = {
  name: "Ronaldo",
  gender: "Lanang",
  age: 19,
  isDead: false,
};
console.log(Friend);
