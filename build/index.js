"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const str = "oke";
const bool = true;
const num = 20;
const any = 121212;
const union = "0830283"; //artinya boleh dua tipe data
const union2 = true; //artinya boleh tiga tipe data
// console.log(union2);
const arrNum = [1, 2, 3, 4];
const arrStr = ["satu", "dua", "tiga", "empat"];
const arrAny = [1, "dua", 3, "empat"];
// tuples
const arrTuples = ["satu", 2];
// enum
var Angka1;
(function (Angka1) {
    Angka1[Angka1["Satu"] = 0] = "Satu";
    Angka1[Angka1["Dua"] = 1] = "Dua";
    Angka1[Angka1["Tiga"] = 2] = "Tiga";
})(Angka1 || (Angka1 = {}));
var Angka2;
(function (Angka2) {
    Angka2[Angka2["Satu"] = 1] = "Satu";
    Angka2[Angka2["Dua"] = 2] = "Dua";
    Angka2[Angka2["Tiga"] = 3] = "Tiga";
})(Angka2 || (Angka2 = {}));
var Angka3;
(function (Angka3) {
    Angka3["Satu"] = "1";
    Angka3["Dua"] = "2";
    Angka3["Tiga"] = "3";
})(Angka3 || (Angka3 = {}));
// console.log(Angka1, Angka2, Angka3);
// function
function getName(name, umur) {
    return "halo saya " + name;
}
// arrow function
const getNameArrow = (name = "farhan") => {
    return "halo saya " + name;
};
// arrow function,void = tidak ada return
const getNameVoid = (name, umur) => {
    // menggunakan ?  pada parameter yang kedua diisi undefined jika tidak diisi (optional)
    console.log("void~halo saya " + name + " umur saya " + umur);
};
const Biodata = (name, umur) => {
    return "fn as type~" + "halo saya " + name + " umur saya " + umur;
};
// optional parameter
// return harus string;
// jika return number error karena optional parameter berisi default undefined, dan number tidak bisa di tambah undefined
const optionalParams = (val1, val2) => {
    return val1 + "" + val2;
};
// console.log(Biodata("farhan", 18));
// public, dapat diakses bebas
// protected, dapat diakses oleh class itu sendiri berserta turunannya
// private, hanya dapat diakses oleh class tersebut
class Latihan {
    constructor(name) {
        this.name = name;
    }
}
class Latihan2 {
    // simple seter atribute
    constructor(name) {
        this.name = name;
    }
}
// const latihan = new Latihan("farhan");
// console.log(latihan);
const latihan2 = new Latihan2("farhan2");
// console.log(latihan2);
// inheritence & super
class User {
    constructor(name) {
        this.name = name;
    }
}
class Admin extends User {
    constructor() {
        super(...arguments);
        this.role = "admin";
    }
}
const admin1 = new Admin("farhan");
// console.log(admin1);
// super
class Mahasiswa extends User {
    constructor(name, nim) {
        super(name);
        this.role = "mahasiswa";
        this.nim = nim;
    }
}
const mahasiswa1 = new Mahasiswa("farhan", "20200050139");
// console.log(mahasiswa1);
const mahasiswa2 = new Mahasiswa("elsa", "20200050139");
// abstract class adalah class yang tidak bisa di instansiasi langsung dan harus melalui child
class Kendaraan {
    constructor(merk) {
        this.merk = merk;
    }
    start() {
        console.log("Kendaraan berjalan");
    }
    stop() {
        console.log("Kendaraan berhenti");
    }
}
class Motor extends Kendaraan {
    constructor() {
        super(...arguments);
        this._tahun = 0; //private hanya bisa pake setter dan getter
        this.plat = "ini plat number"; //public bisa diganti dari luar
    }
    set tahun(tahun) {
        this._tahun = tahun;
    }
    get tahun() {
        return this._tahun;
    }
    getMerk() {
        console.log("ini", this.merk);
    }
}
Motor.type = "beat";
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
function cetakNama(nama) {
    return nama;
}
// console.log(cetakNama("farhan").length);
// console.log(cetakNama(123)); //tidak bisa menggunakan length karena memasukan angka, type langsung bisa terdeteksi sebagai angka, dan angka tidak bisa mendeteksi length
// generic class
class List {
    constructor(...lists) {
        this.nama = "farhan";
        this.umur = 20; //readonly hanya dapat dibaca dan tidak dapat diubah
        this.lists = lists;
    }
    addWithRest(list) {
        this.lists.push(list);
    }
    addWithRestMultiple(...lists) {
        this.lists.push(...lists);
    }
    add(list) {
        this.lists.push(list);
    }
    addMultiple(lists) {
        // let test:T = "oke"; //test error karna tidak tau bahwa T mengau ke type variable apa, karena T harus di inisialisasi ketika menanggil class
        this.lists.push(lists);
    }
    requestApi() {
        return __awaiter(this, void 0, void 0, function* () {
            return "oke";
        });
    }
}
// const list1 = new List<number | number[] | string>(1, 2, 3, 4);
// list1.addWithRest(5);
// list1.addWithRestMultiple(6, 7, "asd");
// list1.add(8);
// list1.addMultiple([9, 10, 11]);
// console.log(list1.umur);
