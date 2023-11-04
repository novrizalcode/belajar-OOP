class Lingkaran {
    constructor(jariJari) {
        this.jariJari = jariJari;
    }
    hitungDiameter() {
        return this.jariJari * 2;
    }
    hitungLuas() {
        return Math.round(Math.PI * this.jariJari ** 2);
    }
    hitungKeliling() {
        return Math.round(2 * Math.PI * this.jariJari);
    }
}

const lingkaran = new Lingkaran(40);
console.log(lingkaran.hitungDiameter());
console.log(lingkaran.hitungKeliling());
console.log(lingkaran.hitungKeliling());
