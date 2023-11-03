class produk {
    constructor(uid, name, price) {
        this.id = uid;
        this.nama = name;
        this.harga = price;
    }
}

const produk1 = new produk(1, "Produk Satu", 1000);
const produk2 = new produk(2, "Produk Dua", 2000);
const produk3 = new produk(3, "Produk Tiga", 3000);

console.log(produk1.id);
console.log(produk2.harga);
console.log(produk3.nama);