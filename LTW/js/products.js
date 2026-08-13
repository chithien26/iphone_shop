const products = localStorage.getItem("allProducts")
  ? JSON.parse(localStorage.getItem("allProducts"))
  : [];

// RENDER SẢN PHẨM
function renderProducts(listProducts) {
  const productCount = document.getElementById("productCount");
  productCount.textContent = `${listProducts.length} sản phẩm`;

  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  let html = "";
  listProducts.forEach((product) => {
    html += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}" 
        onerror="this.src='https://via.placeholder.com/300x250?text=iPhone'">
        <h3 style="height: 48px; overflow: hidden;">${product.name}</h3>
        <div class="price">${formatMoney(product.price)}</div>
        <button class="btn btn-primary" 
        onclick="addToCart(${product.id})">Thêm vào giỏ</button>
      </div>
    `;
  });

  productList.innerHTML = html;
}
renderProducts(products);

// TÌM KIẾM TỰ ĐỘNG
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  filterProducts(this.value);
});

// LỌC SẢN PHẨM
function filterProducts(keyword) {
  let products_filtered = products.filter((product) =>
    product.name.toLowerCase().includes(keyword.toLowerCase()),
  );
  renderProducts(products_filtered);
}

// FORMAT TIỀN
function formatMoney(number) {
  return number.toLocaleString("vi-VN") + " đ";
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  const products_in_cart = localStorage.getItem("products_in_cart")
    ? JSON.parse(localStorage.getItem("products_in_cart"))
    : [];
  const existingProduct = products_in_cart.find((p) => p.id === id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    products_in_cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("products_in_cart", JSON.stringify(products_in_cart));

  updateCartCount();
  //   alert("Đã thêm " + product.name + " vào giỏ hàng!");
}
