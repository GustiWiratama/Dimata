let nav = document.getElementById("nav-bar");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 100) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

const itemSec = document.querySelector(".item-content");
const itemList = itemSec.querySelector(".card-item");

let myItem = [
  {
    image: "./img/Screenshot (55).png",
    itemName: "Pemugbug",
    price: "2k/pcs",
  },
  {
    image: "./img/Screenshot (55).png",
    itemName: "Pemugbug",
    price: "2k/pcs",
  },
  {
    image: "./img/Screenshot (55).png",
    itemName: "Pemugbug",
    price: "2k/pcs",
  },
  {
    image: "./img/Screenshot (55).png",
    itemName: "Pemugbug",
    price: "2k/pcs",
  },
  {
    image: "./img/Screenshot (55).png",
    itemName: "Pemugbug",
    price: "2k/pcs",
  },
  {
    image: "./img/Screenshot (55).png",
    itemName: "Pemugbug",
    price: "2k/pcs",
  },
  {
    image: "./img/Screenshot (55).png",
    itemName: "Pemugbug",
    price: "2k/pcs",
  },
];

itemList.innerHTML = myItem
  .map((item) => {
    return `<div class="card-item"><img
              src=${item.image}
              alt="product1"
              height="200px"
              width="200px"
            />
            <div class="item-desc">
              <div class="name">${item.itemName}</div>
              <div class="price">${item.price}</div>
            </div></div>`;
  })
  .join("");
console.log(itemList);
