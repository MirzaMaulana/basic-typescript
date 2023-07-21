"use strict";
/**
 * Interface
 * adalah cara untuk mendefinisikan bentuk atau struktur dari sebuah objek
 */
const teman = {
    name: "Orlombus",
    age: 21,
    isTeman: true,
    sayHello: function () {
        console.log(`Hello ${this.name}`);
    },
};
const result2 = teman.sayHello();
function createMotor(motor) {
    console.log(`
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
        `);
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
