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

const rexus = new Mouse("Rexus", "Gaming");
rexus.create();

const logitech = new Mouse("Logitech", "Wireless");
logitech.create();

/**
 * class inheritance di typescript
 */

class Animal {
  name: string;
  type: "Herbivora" | "Karnivora" | "Omnivora";
  constructor(name: string, type: "Herbivora" | "Karnivora" | "Omnivora") {
    this.name = name;
    this.type = type;
  }
  detail() {
    console.log(`Hewan ini namanya ${this.name} typenya ${this.type}`);
  }
}

class Kucing extends Animal {
  suara: string;
  constructor(
    name: string,
    type: "Herbivora" | "Karnivora" | "Omnivora",
    suara: string
  ) {
    super(name, type);
    this.suara = suara;
  }
  meong() {
    console.log(
      `${this.name} adalah hewan ${this.type} suaranya ${this.suara}`
    );
  }
}

const kucing = new Kucing("Kucing", "Karnivora", "Meong");
kucing.meong();
