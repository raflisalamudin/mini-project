// Daftar menu minuman
const menu = [
  { id: 1, name: "Coffe & Chill", price: 60000, image: "1.jpg" },
  { id: 2, name: "Special Edition Mug", price: 80000, image: "2.jpg" },
  { id: 3, name: "Sweet Dream Package", price: 120000, image: "3.jpg" },
  // Tambahkan menu lainnya
];

const menuList = document.getElementById("menu-list");
const cartList = document.getElementById("cart-list");
const totalPrice = document.getElementById("total-price");
const checkoutBtn = document.getElementById("checkout-btn");

let cart = [];
let total = 0;

// Tampilkan daftar menu
function displayMenu() {
  menuList.innerHTML = "";
  menu.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.innerHTML = `
          <div class="row">
              <div class="col-md-9">
                  <img src="${item.image}" alt="${item.name}" class="menu-image"> <br>
                  <b>${item.name} - Rp ${item.price}</b>
              </div>
              <div class="col-md-3">
                  <button class="btn btn-primary btn-sm float-start mt-3" onclick="addToCart(${item.id})">Tambahkan</button>
              </div>
          </div>
      `;
    menuList.appendChild(listItem);
  });
}

// Tambahkan item ke keranjang belanja
function addToCart(itemId) {
  const selectedItem = menu.find((item) => item.id === itemId);
  cart.push(selectedItem);
  total += selectedItem.price;
  updateCart();
}

// Perbarui tampilan keranjang belanja
function updateCart() {
  cartList.innerHTML = "";
  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.innerHTML = `
          <div class="row">
              <div class="col-md-9">
                  <img src="${item.image}" alt="${item.name}" class="menu-image"> <br>
                  ${item.name} - Rp ${item.price}
              </div>
              <div class="col-md-3">
                  <button class="btn btn-danger btn-sm float-start mt-3" onclick="removeFromCart(${item.id})">Hapus</button>
              </div>
          </div>
      `;
    cartList.appendChild(listItem);
  });
  totalPrice.innerText = total;
}

function checkout() {
  if (cart.length === 0) {
    alert("Keranjang belanja kosong. Tidak dapat checkout!!!");
    return;
  }

  const confirmation = confirm(`Total harga: Rp ${total}\nApakah Anda ingin melanjutkan dengan checkout?`);

  if (confirmation) {
    // Lakukan proses checkout sesuai kebutuhan
    // Misalnya, mengirim pesanan ke sistem kasir atau melakukan pembayaran
    alert(`Silahkan bayar senilai Rp ${total}`);
    cart = [];
    total = 0;
    updateCart();
  }
}

// Hapus item dari keranjang belanja
function removeFromCart(id) {
  const itemIndex = cart.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    total -= cart[itemIndex].price;
    cart.splice(itemIndex, 1);
    updateCart();
  }
}

// Tampilkan daftar menu awal dan pasang event listener
window.onload = () => {
  displayMenu();
  checkoutBtn.addEventListener("click", checkout);
};
