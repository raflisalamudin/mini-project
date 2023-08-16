var tanya = true;

while (tanya) {
  // computer
  var com = Math.random();

  if (com <= 0.1) {
    com = 1;
  } else if (com > 0.1 && com <= 0.2) {
    com = 2;
  } else if (com > 0.2 && com <= 0.3) {
    com = 3;
  } else if (com > 0.3 && com <= 0.4) {
    com = 4;
  } else if (com > 0.4 && com <= 0.5) {
    com = 5;
  } else if (com > 0.5 && com <= 0.6) {
    com = 6;
  } else if (com > 0.6 && com <= 0.7) {
    com = 7;
  } else if (com > 0.7 && com <= 0.8) {
    com = 8;
  } else if (com > 0.8 && com <= 0.9) {
    com = 9;
  } else if (com > 0.9 && com <= 1) {
    com = 10;
  }

  for (var a = 3; a > 0; a--) {
    alert("Tebak angka dari 1 - 10\nAnda memiliki " + a + " kesempatan");

    // player
    var p = prompt("Masukan angka tebakan!");

    // rules
    if (p == com) {
      alert("Selamat anda menang");
      a = 0;
    } else if (p > com && p <= 10) {
      alert("Angka yang anda masukan terlalu besar");
    } else if (p < com && p > 0) {
      alert("Angka yang anda masukan terlalu kecil");
    }

    if (p > 10) {
      alert("Anda memasukan angka yg salah");
    } else if (p > 0 && p <= 10) {
    } else {
      alert("Anda memasukan angka yg salah");
    }
  }
  if (a == 0) {
    alert("Nyawa anda habis");
    alert("Dan jawabanya adalah : " + com);
  }
  tanya = confirm("lagi?");
}

alert("Terimakasih sudah bermain");
