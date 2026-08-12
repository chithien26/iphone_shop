function formatMoney(number) {
  return number.toLocaleString("vi-VN") + " đ";
}

function showPage(pageId) {
  window.location.href = `${pageId}.html`;
}

function updateCartCount() {
  const cartCount = localStorage.getItem("products_in_cart")
    ? JSON.parse(localStorage.getItem("products_in_cart")).length
    : 0;
  document.getElementById("cartCount")
    ? (document.getElementById("cartCount").textContent = cartCount)
    : null;
}
