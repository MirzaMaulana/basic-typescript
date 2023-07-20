"use strict";
// tipe data
let myName = "Mirza Maulana";
console.log({ myName });
let age = 17;
console.log({ age });
let isStudent = true;
console.log({ isStudent });
let isUndefined = undefined;
console.log({ isUndefined });
let isNull = null;
console.log({ isNull });
let isAny = "Ini bisa diisi tipe-data apa saja";
console.log({ isAny });
let isObject = { name: "Mirza", address: "Karanganyar" };
console.log({ isObject });
// Array dengan tipe elemen string
let fruits = ["apple", "banana", "orange"];
// Array dengan tipe elemen number
let numbers = [1, 2, 3, 4, 5];
// Array dengan tipe elemen boolean
let flags = [true, false, true];
// Array dengan tipe elemen union string atau number
let mixedArray = ["apple", 1, "banana", 2];
console.log({ mixedArray });
// Tuple, array bisa kita tetapkan jumlah nilai maupun tipe datanya;
let isTuple;
isTuple = [17, "Mirza", true];
console.log({ isTuple });
/**
 * Custom Tipe Data Object
 */
let Friend;
Friend = { name: "Diego", age: 18, isDead: false };
console.log({ Friend });
