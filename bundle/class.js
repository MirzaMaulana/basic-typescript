"use strict";
/**
 * Class di TypeScript
 */
class Mouse {
    constructor(merk, type) {
        this.merk = merk;
        this.type = type;
    }
    create() {
        console.log(`Mouse ${this.merk} Berhasil Dibuat dengan type ${this.type} `);
    }
}
const rexus = new Mouse("Rexus", "Gamin");
rexus.create();
