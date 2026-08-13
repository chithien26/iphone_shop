const featuredProducts = localStorage.getItem("allProducts")
  ? JSON.parse(localStorage.getItem("allProducts")).slice(22, 28)
  : [];

function addToCart(id) {
  const products = JSON.parse(localStorage.getItem("allProducts")) || [];
  const product = products.find((p) => p.id === id);
  const products_in_cart =
    JSON.parse(localStorage.getItem("products_in_cart")) || [];

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

function renderHome() {
  const featuredProductsElement = document.getElementById("featuredProducts");
  let html = "";
  featuredProducts.forEach((product) => {
    html += `
          <div class="product">
          <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x250?text=iPhone'">
          <h3 style="height: 48px; overflow: hidden;">${product.name}</h3>
          <div class="price">${formatMoney(product.price)}</div>
          <button class="btn btn-primary" onclick="addToCart(${product.id})">Thêm vào giỏ</button>
          </div>
          `;
  });
  featuredProductsElement.innerHTML = html;
}

renderHome();
