// KHỞI TẠO SẢN PHẨM
const allProducts = [
  // =========================
  // iPHONE 13
  // =========================
  {
    id: 1,
    name: "iPhone 13 128GB Đen",
    price: 12990000,
    image: "../Image/iphone-13-blue.jpg",
  },
  {
    id: 2,
    name: "iPhone 13 128GB Hồng",
    price: 12990000,
    image: "../Image/iphone-13-blue.jpg",
  },
  {
    id: 3,
    name: "iPhone 13 Pro 256GB Xám",
    price: 15990000,
    image: "../Image/iphone-13-blue.jpg",
  },
  {
    id: 4,
    name: "iPhone 13 Pro Max 256GB Xanh",
    price: 17990000,
    image: "../Image/iphone-13-blue.jpg",
  },

  // =========================
  // iPHONE 14
  // =========================
  {
    id: 5,
    name: "iPhone 14 128GB Đen",
    price: 13990000,
    image: "../Image/iphone-14.jpg",
  },
  {
    id: 6,
    name: "iPhone 14 128GB Tím",
    price: 13990000,
    image: "../Image/iphone-14.jpg",
  },
  {
    id: 7,
    name: "iPhone 14 Plus 128GB Xanh",
    price: 15990000,
    image: "../Image/iphone-14.jpg",
  },
  {
    id: 8,
    name: "iPhone 14 Pro 256GB Tím",
    price: 18990000,
    image: "../Image/iphone-14.jpg",
  },
  {
    id: 9,
    name: "iPhone 14 Pro Max 256GB Đen",
    price: 21990000,
    image: "../Image/iphone-14.jpg",
  },

  // =========================
  // iPHONE 15
  // =========================
  {
    id: 10,
    name: "iPhone 15 128GB Đen",
    price: 15990000,
    image: "../Image/iphone-15-black.jpg",
  },
  {
    id: 11,
    name: "iPhone 15 128GB Xanh Dương",
    price: 15990000,
    image: "../Image/iphone-15-black.jpg",
  },
  {
    id: 12,
    name: "iPhone 15 Plus 128GB Hồng",
    price: 18990000,
    image: "../Image/iphone-15-black.jpg",
  },
  {
    id: 13,
    name: "iPhone 15 Plus 256GB Đen",
    price: 21990000,
    image: "../Image/iphone-15-black.jpg",
  },
  {
    id: 14,
    name: "iPhone 15 Pro 128GB Titan Tự Nhiên",
    price: 22990000,
    image: "../Image/iphone-15-black.jpg",
  },
  {
    id: 15,
    name: "iPhone 15 Pro 256GB Titan Xanh",
    price: 24990000,
    image: "../Image/iphone-15-black.jpg",
  },
  {
    id: 16,
    name: "iPhone 15 Pro Max 256GB Titan Đen",
    price: 27990000,
    image: "../Image/iphone-15-black.jpg",
  },

  // =========================
  // iPHONE 16
  // =========================
  {
    id: 17,
    name: "iPhone 16e 128GB Trắng",
    price: 16990000,
    image: "../Image/iphone-16-yellow.jpg",
  },
  {
    id: 18,
    name: "iPhone 16e 128GB Đen",
    price: 16990000,
    image: "../Image/iphone-16-yellow.jpg",
  },
  {
    id: 19,
    name: "iPhone 16 128GB Xanh Dương",
    price: 21990000,
    image: "../Image/iphone-16-yellow.jpg",
  },
  {
    id: 20,
    name: "iPhone 16 256GB Hồng",
    price: 24990000,
    image: "../Image/iphone-16-yellow.jpg",
  },
  {
    id: 21,
    name: "iPhone 16 Plus 128GB Xanh Lá",
    price: 23990000,
    image: "../Image/iphone-16-yellow.jpg",
  },
  {
    id: 22,
    name: "iPhone 16 Pro 256GB Titan Sa Mạc",
    price: 28990000,
    image: "../Image/iphone-16-yellow.jpg",
  },
  {
    id: 23,
    name: "iPhone 16 Pro 512GB Titan Đen",
    price: 34990000,
    image: "../Image/iphone-16-yellow.jpg",
  },
  {
    id: 24,
    name: "iPhone 16 Pro Max 256GB Titan Sa Mạc",
    price: 32990000,
    image: "../Image/iphone-16-yellow.jpg",
  },
  {
    id: 25,
    name: "iPhone 16 Pro Max 512GB Titan Tự Nhiên",
    price: 38990000,
    image: "../Image/iphone-16-yellow.jpg",
  },

  // =========================
  // iPHONE 17
  // =========================
  {
    id: 26,
    name: "iPhone 17 256GB Xanh Lá",
    price: 25990000,
    image: "../Image/iphone-17-green.jpg",
  },
  {
    id: 27,
    name: "iPhone 17 256GB Đen",
    price: 25990000,
    image: "../Image/iphone-17-green.jpg",
  },
  {
    id: 28,
    name: "iPhone 17 512GB Trắng",
    price: 29990000,
    image: "../Image/iphone-17-pro-max-cam.jpg",
  },
  {
    id: 29,
    name: "iPhone Air 256GB Vàng",
    price: 23990000,
    image: "../Image/iphone-17-pro-max-cam.jpg",
  },
  {
    id: 30,
    name: "iPhone Air 512GB Xanh",
    price: 28990000,
    image: "../Image/iphone-17-pro-max-cam.jpg",
  },
  {
    id: 31,
    name: "iPhone 17 Pro 256GB Cam",
    price: 29990000,
    image: "../Image/iphone-17-pro-max-cam.jpg",
  },
  {
    id: 32,
    name: "iPhone 17 Pro 512GB Titan Đen",
    price: 34990000,
    image: "../Image/iphone-17-pro-max-cam.jpg",
  },
  {
    id: 33,
    name: "iPhone 17 Pro Max 256GB Cam",
    price: 32990000,
    image: "../Image/iphone-17-pro-max-cam.jpg",
  },
  {
    id: 34,
    name: "iPhone 17 Pro Max 512GB Cam",
    price: 37990000,
    image: "../Image/iphone-17-pro-max-cam.jpg",
  },
  {
    id: 35,
    name: "iPhone 17 Pro Max 1TB Đen",
    price: 44990000,
    image: "../Image/iphone-17-pro-max-cam.jpg",
  },
];
localStorage.setItem("allProducts", JSON.stringify(allProducts));

// KHỞI TẠI GIỎ HÀNG
let products_in_cart =
  JSON.parse(localStorage.getItem("products_in_cart")) || [];
localStorage.setItem("products_in_cart", JSON.stringify(products_in_cart));
