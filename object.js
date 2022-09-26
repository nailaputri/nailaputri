// 1.Object Literal
var siswa1 = {
    nama : "ucup",
    NIS : "12345",
    email : "ucup123@gmail.com",
    jurusan : "RPL",
}

var siswa2 = {
    nama : "jono",
    NIS : "67890",
    email : "jono123@gmail.com",
    jurusan : "TKJ",
}

// 2.Function Declaration
function buatObjectSiswa(nama,nis,email,jurusan) {
    var siswa =
        siswa.nama = nama;
        siswa.nis = nis;
        siswa.email = email;
        siswa.jurusan = jurusan;
    return siswa;
}
var siswa3 = buatObjectSiswa("budi", "14045", "budi457@gmail.com", "OTKP");
var siswa4 = buatObjectSiswa("anto", "14022", "anto789@gmail.com", "FARMASI");

// 3. Constuctor
function Siswa(nama, nis, email, jurusan){
    //var this = {};
    this.nama = nama;
    this.nis = nis;
    this.email = email;
    this.jurusan = jurusan;
    //return this;
}

var mhs4 =  new Siswa ("andi", "77890", "andi5576@gmail.com", "TBSM");

// function declaration dengan menggunakan this
function halo() {
    console.log(this);
    console.log('halo');
}
this.halo();

// object literal menggunakan this
var obj = {};
obj.halo = function(){
    console.log(this);
    console.log("halo");
}
obj.halo();