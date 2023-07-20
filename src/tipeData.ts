// tipe data
let myName: string = "Mirza Maulana";
console.log({ myName });

let age: number = 17;
console.log({ age });

let isStudent: boolean = true;
console.log({ isStudent });

let isUndefined: undefined = undefined;
console.log({ isUndefined });

let isNull: null = null;
console.log({ isNull });

let isAny: any = "Ini bisa diisi tipe-data apa saja";
console.log({ isAny });

let isObject: object = { name: "Mirza", address: "Karanganyar" };
console.log({ isObject });

// Array dengan tipe elemen string
let fruits: string[] = ["apple", "banana", "orange"];
// Array dengan tipe elemen number
let numbers: number[] = [1, 2, 3, 4, 5];
// Array dengan tipe elemen boolean
let flags: boolean[] = [true, false, true];
// Array dengan tipe elemen union string atau number
let mixedArray: (string | number)[] = ["apple", 1, "banana", 2];
console.log({ mixedArray });
// Tuple, array bisa kita tetapkan jumlah nilai maupun tipe datanya;
let isTuple: [number, string, boolean];
isTuple = [17, "Mirza", true];
console.log({ isTuple });

/**
 * Custom Tipe Data Object
 */
let Friend: {
  name: string;
  age: number;
  isDead: boolean;
};
Friend = { name: "Diego", age: 18, isDead: false };
console.log({ Friend });
