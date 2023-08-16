// Spread Operator
// memecah iterables menjadi single element

// const mhs = ["Ahmad", "Rafli", "Salamudin"];
// console.log(...mhs[0]);

// const mhs = ["Ahmad", "Rafli", "Salamudin"];
// const dosen = ["Bambang", "Joni", "Brando"];
// const orang = [...mhs, "Pascol", ...dosen];
// // const orang = mhs.concat(dosen);
// console.log(orang);

// mneg-copy array
// const mhs = ["Ahmad", "Rafli", "Salamudin"];
// // const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = "Diah";
// console.log(mhs1);

// const liMhs = document.querySelectorAll("li");
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);
// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join(" ");
nama.innerHTML = huruf;
