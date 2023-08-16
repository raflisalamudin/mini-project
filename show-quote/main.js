const quote = document.getElementById("quote");
const tampilkan = document.getElementById("tampilkan");
const align = document.getElementById("align");
const font = document.getElementById("font");

function kirim() {
  tampilkan.innerText = quote.value;

  if (align.value == "left") {
    tampilkan.classList.add("text-left");
    tampilkan.classList.remove("text-center");
    tampilkan.classList.remove("text-right");
  } else if (align.value == "center") {
    tampilkan.classList.add("text-center");
    tampilkan.classList.remove("text-left");
    tampilkan.classList.remove("text-right");
  } else if (align.value == "right") {
    tampilkan.classList.add("text-right");
    tampilkan.classList.remove("text-left");
    tampilkan.classList.remove("text-center");
  } else {
    tampilkan.classList.add("text-left");
  }

  if (font.value == "poppins") {
    tampilkan.classList.add("font-poppins");
    tampilkan.classList.remove("font-indie-flower");
    tampilkan.classList.remove("font-inter");
  } else if (font.value == "inter") {
    tampilkan.classList.add("font-inter");
    tampilkan.classList.remove("font-poppins");
    tampilkan.classList.remove("font-indie-flower");
  } else if (font.value == "indie-flower") {
    tampilkan.classList.add("font-indie-flower");
    tampilkan.classList.remove("font-poppins");
    tampilkan.classList.remove("font-inter");
  } else {
    tampilkan.classList.add("font-poppins");
  }
}

// form submit
const scriptURL = "https://script.google.com/macros/s/AKfycbzGsoEcm_AwbN6FtFdRlWc4nnE0bD05Zgj-STtxuALdjyo-b4zLPbZgR1V5D-jECqmm/exec";
const form = document.forms["show-quote"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
