/**
 * Interface
 * adalah cara untuk mendefinisikan bentuk atau struktur dari sebuah objek
 */

interface Orang {
  name: string;
  age: number;
  isTeman: boolean;
  sayHello: () => void;
}

const teman: Orang = {
  name: "Orlombus",
  age: 21,
  isTeman: true,
  sayHello: function () {
    console.log(`Hello ${this.name}`);
  },
};

const result2 = teman.sayHello();
