const savedData = localStorage.getItem('products_in_cart');


/* ================= THÊM GIỎ HÀNG ================= */
function renderProducts() {

    const products_in_cart = JSON.parse(localStorage.getItem("products_in_cart")) || [];
    let html = "";
    
    if (products_in_cart.length === 0) {
        html = "<p>Giỏ hàng đang trống.</p>";
    }
    else {
        products_in_cart.forEach((product, index) => {
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
    }

    document.getElementById("cartItems").innerHTML = html;

    const total = products_in_cart.reduce((sum, product) => sum + product.price, 0);
    document.getElementById("cartTotal").textContent = total.toLocaleString() + "đ";
}
function addToCart(id) {

    const product =
        products.find(p => p.id === id);

    products_in_cart.push(product);
    console.log(products_in_cart);

    localStorage.setItem("products_in_cart", JSON.stringify(products_in_cart));

    updateCart();

    alert(
        "Đã thêm " +
        product.name +
        " vào giỏ hàng!"
    );

}


/* ================= CẬP NHẬT GIỎ ================= */

function updateCart() {

    document.getElementById("cartCount").textContent =
        products_in_cart.length;

    if (products_in_cart.length === 0) {

        cartItems.innerHTML =
            "<p>Giỏ hàng đang trống.</p>";

        document.getElementById("cartTotal").textContent =
            "0 đ";
        return;

    }
}


/* ================= XÓA SẢN PHẨM ================= */

function removeCart(index) {

    products_in_cart.splice(index, 1);

    localStorage.setItem("products_in_cart", JSON.stringify(products_in_cart));

    updateCart();

}
renderProducts();