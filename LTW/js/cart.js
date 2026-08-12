let current_products_in_cart =
  JSON.parse(localStorage.getItem("products_in_cart")) || [];
let total = current_products_in_cart.reduce(
  (sum, product) => sum + product.price,
  0,
);

function updateCartItems() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";
  if (current_products_in_cart.length === 0) {
    cartItems.innerHTML = "<p>Giỏ hàng đang trống.</p>";
  } else {
    let html = "";
    current_products_in_cart.forEach((product, index) => {
      html += `
                <div class="cart-item">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="cart-item-details">
                        <h3>${product.name}</h3>
                        <p>Giá: ${product.price.toLocaleString()}đ</p>
                        <button onclick="removeCart(${index})">Xóa</button>
                    </div>
                </div>
            `;
    });
    cartItems.innerHTML = html;
  }
}

function updateCartTotal() {
  const cartTotal = localStorage.getItem("products_in_cart")
    ? JSON.parse(localStorage.getItem("products_in_cart")).reduce(
        (sum, product) => sum + product.price,
        0,
      )
    : 0;
  document.getElementById("cartTotal").textContent =
    cartTotal.toLocaleString() + " đ";
  document.getElementById("cartTotalSummary").textContent =
    cartTotal.toLocaleString() + " đ";
}

function updateCart() {
  updateCartCount();
  updateCartTotal();
}
function renderCart() {
  updateCartItems();
  updateCart();
}
/* ================= XÓA SẢN PHẨM ================= */

function removeCart(index) {
  current_products_in_cart.splice(index, 1);

  localStorage.setItem(
    "products_in_cart",
    JSON.stringify(current_products_in_cart),
  );

  renderCart();
}

renderCart();
