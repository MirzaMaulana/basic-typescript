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

/**
 * interface inheritance
 */

interface Kendaraan {
  roda: number;
  warna: string;
  tahun: number;
}

interface Motor extends Kendaraan {
  name: string;
  type: string;
  bensin: string;
}

function createMotor(motor: Motor): void {
  console.log(
    `
        --------------------
        Membuat Motor..
        --------------------
        Motor berhasil dibuat, dengan detail berikut
        nama motor = ${motor.name}
        roda = ${motor.roda}
        warna = ${motor.warna}
        tahun = ${motor.tahun}
        type = ${motor.type}
        bensin = ${motor.bensin}
        `
  );
}

const Beat = {
  roda: 2,
  warna: "Hitam",
  tahun: 2023,
  name: "Beat 2x02",
  type: "Matic",
  bensin: "Pertalite",
};

createMotor(Beat);
