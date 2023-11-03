class Siswa {
    #nama;
    #umur;

    get nama() {
        return this.#nama;
    }

    set nama(nama) {
        if (new RegExp(/\d/).test(nama)) {
            console.error("Nama tidak boleh mengandung angka!");
        } else {
            this.#nama = nama;
        }
    }

    get umur() {
        return this.#umur;
    }

    set umur(umur) {
        if (typeof umur === "number") {
            this.#umur = umur;
        } else {
            console.error("Umur harus bertipe data integer!");
        }
    }
}

const siswa1 = new Siswa();

console.log(siswa1.nama);

siswa1.nama = "John Doe 123";
siswa1.nama = "John Doe";

console.log(siswa1.nama);
