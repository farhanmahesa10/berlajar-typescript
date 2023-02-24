const str: string = "oke";
const bool: boolean = true;
const num: number = 20;
const any: any = 121212;
const union: number | string = "0830283"; //artinya boleh dua tipe data
const union2: number | string | boolean = true; //artinya boleh tiga tipe data
// console.log(union2);

const arrNum: number[] = [1, 2, 3, 4];
const arrStr: string[] = ["satu", "dua", "tiga", "empat"];
const arrAny: any[] = [1, "dua", 3, "empat"];

// tuples

const arrTuples: [string, number] = ["satu", 2];

// enum
enum Angka1 {
  Satu,
  Dua,
  Tiga,
}
enum Angka2 {
  Satu = 1,
  Dua,
  Tiga,
}
enum Angka3 {
  Satu = "1",
  Dua = "2",
  Tiga = "3",
}

// console.log(Angka1, Angka2, Angka3);

// function
function getName(name: string, umur: number): string {
  return "halo saya " + name;
}

// arrow function
const getNameArrow = (name: string = "farhan"): string => {
  return "halo saya " + name;
};
// arrow function,void = tidak ada return
const getNameVoid = (name: string, umur?: number): void => {
  // menggunakan ?  pada parameter yang kedua diisi undefined jika tidak diisi (optional)
  console.log("void~halo saya " + name + " umur saya " + umur);
};

// console.log(getName("farhan", 18));
// getNameVoid("farhan");

// function as type

type BiodataRules = (val1: string, val2: number) => string;

const Biodata: BiodataRules = (name: string, umur: number): string => {
  return "fn as type~" + "halo saya " + name + " umur saya " + umur;
};

// optional parameter
// return harus string;
// jika return number error karena optional parameter berisi default undefined, dan number tidak bisa di tambah undefined
const optionalParams = (val1: number, val2?: number): string => {
  return val1 + "" + val2;
};

// console.log(Biodata("farhan", 18));

// public, dapat diakses bebas
// protected, dapat diakses oleh class itu sendiri berserta turunannya
// private, hanya dapat diakses oleh class tersebut

class Latihan {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}
class Latihan2 {
  // simple seter atribute
  constructor(public name: string) {}
}

// const latihan = new Latihan("farhan");
// console.log(latihan);
const latihan2 = new Latihan2("farhan2");
// console.log(latihan2);

// inheritence & super

class User {
  constructor(public name: string) {}
}

class Admin extends User {
  public role: string = "admin";
}

const admin1 = new Admin("farhan");
// console.log(admin1);

// super

class Mahasiswa extends User {
  public role: string = "mahasiswa";
  public nim: string;

  constructor(name: string, nim: string) {
    super(name);
    this.nim = nim;
  }
}

const mahasiswa1 = new Mahasiswa("farhan", "20200050139");
// console.log(mahasiswa1);

const mahasiswa2 = new Mahasiswa("elsa", "20200050139");
// console.log(mahasiswa2);

// interface adalah blue print / kerangka pada sebuah class untuk di implements, mirip function type
interface PolaKendaraan {
   merk?: string; //tanda tanya (question mark) ini menandakan required atau ngga
  start(): void;
  stop(): void;
}

// abstract class adalah class yang tidak bisa di instansiasi langsung dan harus melalui child
abstract class Kendaraan implements PolaKendaraan {
  readonly merk: string;
  constructor(merk: string) {
    this.merk = merk;
  }

  start(): void {
    console.log("Kendaraan berjalan");
  }
  stop(): void {
    console.log("Kendaraan berhenti");
  }
}

class Motor extends Kendaraan {
  public static type: string = "beat";
  private _tahun: number = 0; //private hanya bisa pake setter dan getter
  public plat: string = "ini plat number"; //public bisa diganti dari luar

  set tahun(tahun: number) {
    this._tahun = tahun;
  }
  get tahun() {
    return this._tahun;
  }

  getMerk(): void {
    console.log("ini", this.merk);
  }
}

const yamaha = new Motor("Yamaha");
console.log(yamaha.merk);
// yamaha.start();
// yamaha.tahun = 2025;
// yamaha.plat = "plat terganti";

// console.log(yamaha.plat);
// console.log(yamaha);

// const typeYamaha = Motor.type;
// console.log(typeYamaha);

// generic type, tipe data dinamis

function cetakNama<T>(nama: T) {
  return nama;
}

// console.log(cetakNama("farhan").length);
// console.log(cetakNama(123)); //tidak bisa menggunakan length karena memasukan angka, type langsung bisa terdeteksi sebagai angka, dan angka tidak bisa mendeteksi length

// generic class

class List<T> {
  public lists: T[];
  public nama: string = "farhan";
  readonly umur: number = 20; //readonly hanya dapat dibaca dan tidak dapat diubah
  constructor(...lists: T[]) {
    this.lists = lists;
  }

  addWithRest(list: T) {
    this.lists.push(list);
  }

  addWithRestMultiple(...lists: T[]) {
    this.lists.push(...lists);
  }

  add(list: T): void {
    this.lists.push(list);
  }

  addMultiple(lists: T): void {
    // let test:T = "oke"; //test error karna tidak tau bahwa T mengau ke type variable apa, karena T harus di inisialisasi ketika menanggil class
    this.lists.push(lists);
  }

  async requestApi(): Promise<string> {
    return "oke";
  }
}

// const list1 = new List<number | number[] | string>(1, 2, 3, 4);
// list1.addWithRest(5);
// list1.addWithRestMultiple(6, 7, "asd");
// list1.add(8);
// list1.addMultiple([9, 10, 11]);

// console.log(list1.umur);
