/**
 * Class di TypeScript
 */

class Mouse {
  merk: string;
  type: string;
  constructor(merk: string, type: string) {
    this.merk = merk;
    this.type = type;
  }
  create() {
    console.log(`Mouse ${this.merk} Berhasil Dibuat dengan type ${this.type} `);
  }
}

const rexus = new Mouse("Rexus", "Gamin");
rexus.create();
