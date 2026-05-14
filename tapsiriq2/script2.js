let mehsulAdi = "Laptop";
let mehsulQiymeti = 2899;
let endirimFaizi = 10;
let stokdaVarmi = true;

let endirimliQiymet = mehsulQiymeti - (mehsulQiymeti * endirimFaizi / 100);

console.log("Məhsul: " + mehsulAdi + ", Endirimli Qiymət: " + endirimliQiymet + " AZN");

let netice = mehsulQiymeti > 50 && stokdaVarmi;

console.log(netice);