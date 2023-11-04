class Orang {
    constructor(nama) {
        this.nama = nama;
    }

    perkenalanDiri() {
        console.log(`Halo, perkenalkan nama saya ${this.nama}, salam kenal`);
    }
}

const kontak = [new Orang("Budi"), new Orang("Anton"), new Orang("Tono")];
console.log(kontak)
kontak.forEach((orang) => {
    console.log('org', orang)
    orang.perkenalanDiri();
});