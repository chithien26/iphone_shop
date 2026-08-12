const productsInCart =
  JSON.parse(localStorage.getItem("products_in_cart")) || [];

function renderCheckout() {
  const checkoutProducts = document.getElementById("checkoutProducts");

  const checkoutSubtotal = document.getElementById("checkoutSubtotal");

  const checkoutTotal = document.getElementById("checkoutTotal");

  if (productsInCart.length === 0) {
    checkoutProducts.innerHTML = `
            <p class="empty-checkout">
                Không có sản phẩm trong giỏ hàng.
            </p>
        `;

    checkoutSubtotal.textContent = "0 đ";
    checkoutTotal.textContent = "0 đ";

    return;
  }

  let html = "";

  let total = 0;

  productsInCart.forEach((product) => {
    total += Number(product.price);

    html += `
            <div class="checkout-product">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div class="checkout-product-info">

                    <p class="checkout-product-name">
                        ${product.name}
                    </p>

                    <p class="checkout-product-price">
                        ${Number(product.price).toLocaleString("vi-VN")} đ
                    </p>

                </div>

            </div>
        `;
  });

  checkoutProducts.innerHTML = html;

  const formattedTotal = total.toLocaleString("vi-VN") + " đ";

  checkoutSubtotal.textContent = formattedTotal;

  checkoutTotal.textContent = formattedTotal;
}

function placeOrder(event) {
  event.preventDefault();

  const fullname = document.getElementById("fullname").value.trim();

  const phone = document.getElementById("phone").value.trim();

  const email = document.getElementById("email").value.trim();

  const address = document.getElementById("address").value.trim();

  const payment = document.querySelector(
    'input[name="payment"]:checked',
  )?.value;

  if (!payment) {
    alert("Vui lòng chọn phương thức thanh toán.");

    return;
  }

  if (productsInCart.length === 0) {
    alert("Giỏ hàng đang trống.");

    return;
  }

  alert("Đặt hàng thành công!\n\n" + "Cảm ơn bạn đã mua hàng.");

  localStorage.setItem("products_in_cart", JSON.stringify([]));

  location.href = "home.html";
}

renderCheckout();
