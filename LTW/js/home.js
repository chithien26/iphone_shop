
const products = [

    {
        id: 1,
        name: "iPhone 15 Plus Đen",
        price: 18990000,
        image: "../Image/iphone_15pl_black.webp"
    },

    {
        id: 2,
        name: "iPhone 16e Trắng",
        price: 16990000,
        image: "../Image/iphone-16e-white-1.jpg" 
    },

    {
        id: 3,
        name: "iPhone 16 Xanh Dương",
        price: 21990000,
        image: "../Image/iphone-16-xanh-duong-0-639175338485503058-750x500.jpg"
    },

    {
        id: 4,
        name: "iPhone 17 Pro Max Cam",
        price: 32990000,
        image: "../Image/iphone-17-pro-max-cam-1.jpg"
    },

    {
        id: 5,
        name: "iPhone 17 Xanh Lá",
        price: 25990000,
        image: "../Image/iphone-17-xanh-la-1-639175101549644401-750x500.jpg"
    },

    {
        id: 6,
        name: "iPhone Air Vàng",
        price: 23990000,
        image: "../Image/iphone-air-vang-1-639175327779784494-700x467.jpg"
    }

];

localStorage.setItem("products", JSON.stringify(products));

let products_in_cart = JSON.parse(localStorage.getItem("products_in_cart")) || [];
localStorage.setItem("products_in_cart", JSON.stringify(products_in_cart));


/* ================= HIỂN THỊ SẢN PHẨM ================= */

function renderProducts() {

    const featured = document.getElementById("featuredProducts");


    let html = "";


    products.forEach(product => {

        html += `

            <div class="product">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    onerror="this.src='https://via.placeholder.com/300x250?text=iPhone'">

                <h3>
                    ${product.name}
                </h3>

                <div class="price">
                    ${formatMoney(product.price)}
                </div>

                <button
                    class="btn btn-primary"
                    onclick="addToCart(${product.id})">

                    Thêm vào giỏ

                </button>

            </div>

        `;

    });


    featured.innerHTML = html;
}


/* ================= ĐỊNH DẠNG TIỀN ================= */

function formatMoney(number) {

    return number.toLocaleString("vi-VN") + " đ";

}





/* ================= CHUYỂN TRANG ================= */

function showPage(pageId) {

    window.location.href = `${pageId}.html`; 

}


/* ================= ĐẶT HÀNG ================= */

function placeOrder(event) {

    event.preventDefault();


    if (cart.length === 0) {

        alert(
            "Giỏ hàng đang trống!"
        );

        return;

    }


    const name =
        document.getElementById("fullname").value;


    alert(
        "Đặt hàng thành công!\n\n" +
        "Khách hàng: " +
        name +
        "\n\nCảm ơn bạn đã mua hàng tại Phone Store!"
    );


    cart = [];

    updateCart();

    document
        .querySelector("form")
        .reset();

    showPage("home");

}



renderProducts();
// document.getElementById("cartCount").textContent = localStorage.getItem("products_in_cart") ? JSON.parse(localStorage.getItem("products_in_cart")).length : 0;

