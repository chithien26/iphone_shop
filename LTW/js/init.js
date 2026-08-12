// KHỞI TẠO SẢN PHẨM
const allProducts = [
  {
    id: 1,
    name: "iPhone 15 Plus Đen",
    price: 18990000,
    image: "../Image/iphone_15pl_black.webp",
  },

  {
    id: 2,
    name: "iPhone 16e Trắng",
    price: 16990000,
    image: "../Image/iphone-16e-white-1.jpg",
  },

  {
    id: 3,
    name: "iPhone 16 Xanh Dương",
    price: 21990000,
    image: "../Image/iphone-16-xanh-duong-0-639175338485503058-750x500.jpg",
  },

  {
    id: 4,
    name: "iPhone 17 Pro Max Cam",
    price: 32990000,
    image: "../Image/iphone-17-pro-max-cam-1.jpg",
  },

  {
    id: 5,
    name: "iPhone 17 Xanh Lá",
    price: 25990000,
    image: "../Image/iphone-17-xanh-la-1-639175101549644401-750x500.jpg",
  },

  {
    id: 6,
    name: "iPhone Air Vàng",
    price: 23990000,
    image: "../Image/iphone-air-vang-1-639175327779784494-700x467.jpg",
  },
];
localStorage.setItem("allProducts", JSON.stringify(allProducts));

// KHỞI TẠI GIỎ HÀNG
let products_in_cart =
  JSON.parse(localStorage.getItem("products_in_cart")) || [];
localStorage.setItem("products_in_cart", JSON.stringify(products_in_cart));
