const inCart = [
	{
		img: "./assets/images/product_1.png",
		name: "Hoodie",
		category: "Clothes",
		quantity: 1,
		price: 220,
		size: "L",
	},
	{
		img: "./assets/images/product_2.png",
		name: "Mini Bag",
		category: "Accessories",
		quantity: 1,
		size: "Oversize",
		price: 120,
	},
	{
		img: "./assets/images/product_3.png",
		name: "Sweater",
		category: "Clothes",
		quantity: 1,
		size: "L",
		price: 150,
	},
];

const products = [
	{
		img: "./assets/images/product_1.png",
		name: "Hoodie",
		category: "Clothes",
		quantity: 1,
		price: 220,
		size: "L",
	},
	{
		img: "./assets/images/product_2.png",
		name: "Mini Bag",
		category: "Accessories",
		quantity: 1,
		size: "Oversize",
		price: 120,
	},
	{
		img: "./assets/images/product_3.png",
		name: "Sweater",
		category: "Clothes",
		quantity: 1,
		size: "L",
		price: 150,
	},
	{
		img: "./assets/images/product_4.png",
		name: "Sport Bag",
		category: "Bag",
		quantity: 1,
		price: 185,
		size: "Oversize",
	},
	{
		img: "./assets/images/product_5.png",
		name: "Sport Shoes",
		category: "Shoes",
		quantity: 1,
		size: "7.5",
		price: 230,
	},
	{
		img: "./assets/images/product_6.png",
		name: "Glass",
		category: "Accessories",
		quantity: 1,
		size: "Oversize",
		price: 85,
	},
	{
		img: "./assets/images/product_7.png",
		name: "Sweater SM-2022",
		category: "Clothes",
		quantity: 1,
		size: "L",
		price: 195,
	},
	{
		img: "./assets/images/product_8.png",
		name: "Wallet",
		category: "Accessories",
		quantity: 1,
		size: "Oversize",
		price: 110,
	},
	{
		img: "./assets/images/product_9.png",
		name: "Cardigan",
		category: "Clothes",
		quantity: 1,
		size: "L",
		price: 285,
	},
	{
		img: "./assets/images/product_10.png",
		name: "Sweater PM-2022",
		category: "Clothes",
		quantity: 1,
		size: "L",
		price: 215,
	},
];

const cartContainer = document.querySelector(".cart");
const subtotal = document.querySelector(".subtotal-contain .subtotal .price");
const shipping = document.querySelector(".subtotal-contain .shipping .price");
const total = document.querySelector(".subtotal-contain .total .price");
const addNewProduct = document.querySelector(".add-to-cart");
const overlay = document.querySelector(".overlay");
const newProductsContain = document.querySelector(".new_products");
const newProducts = document.querySelector(
	".new_products .new_products-container"
);
const closeModal = newProductsContain.querySelector(".icon-close");
const totalInCart = document.querySelector(".in_cart .in_cart-item");
const totalInCartIcon = document.querySelector(
	".cart_header-cart .total-in-cart"
);
let SHIPPING = 14;
shipping.innerText = `$${SHIPPING.toFixed(2)}`;
// render function
const render = () => {
	// total price
	let subtotalVal = 0;
	inCart.forEach((item) => (subtotalVal += item.price * item.quantity));
	subtotal.innerText = `$${subtotalVal.toFixed(2)}`;
	total.innerText = `$${(subtotalVal + SHIPPING).toFixed(2)}`;
	// render cart
	cartContainer.innerHTML = inCart
		.map((item) => {
			return `<!-- cart item -->
        <div class="cart_item">
            <!-- image -->
            <div class="cart_item-img">
                <img src="${item.img}" alt="product image" />
            </div>
            <!-- info -->
            <div class="cart_item-info">
                <div class="name">${item.name}</div>
                <div class="category">${item.category}</div>
                <div class="size">${item.size}</div>
            </div>
            <!-- quantity -->
            <div class="cart_item-quantity">
                <div class="quantity">${item.quantity}</div>
                <div class="quantity-control">
                    <div class="incr-quantity">
                        <ion-icon class="icon" name="caret-up-outline"></ion-icon>
                    </div>
                    <div class="decr-quantity">
                        <ion-icon class="icon" name="caret-down-outline"></ion-icon>
                    </div>
                </div>
            </div>
            <!-- price -->
            <div class="cart_item-price">$${(
							item.quantity * item.price
						).toFixed(2)}</div>
        </div>`;
		})
		.join("");

	totalInCartIcon.innerText = inCart.length;
	inCart.length > 1
		? (totalInCart.innerText = inCart.length + " items in cart")
		: (totalInCart.innerText = inCart.length + " item in cart");
	const decrBtn = document.querySelectorAll(".cart_item .decr-quantity");
	const incrBtn = document.querySelectorAll(".cart_item .incr-quantity");

	decrBtn.forEach((btn, index) => {
		btn.addEventListener("click", () => {
			if (inCart[index].quantity <= 1) {
				inCart.splice(index, 1);
			} else {
				inCart[index].quantity -= 1;
			}
			render();
		});
	});

	incrBtn.forEach((btn, index) => {
		btn.addEventListener("click", () => {
			inCart[index].quantity += 1;
			render();
		});
	});
};
render();

newProducts.innerHTML = products
	.map((product) => {
		return `<div class="new_products-item">
    <div class="image">
    <img src="${product.img}" alt="" />
    </div>
    <div class="info">
    <div class="name">${product.name}</div>
    <div class="category">${product.category}</div>
    <div class="price">$${product.price.toFixed(2)}</div>
    </div>
    </div>`;
	})
	.join("");
// toggle
const closeModalProduct = () => {
	overlay.classList.replace("active", "hide");
	newProductsContain.classList.replace("active", "hide");
	if (
		overlay.classList.contains("hide") &&
		newProductsContain.classList.contains("hide")
	) {
		setTimeout(() => {
			overlay.classList.remove("hide");
			newProductsContain.classList.remove("hide");
		}, 200);
	}
};
addNewProduct.addEventListener("click", () => {
	overlay.classList.add("active");
	newProductsContain.classList.add("active");
});
overlay.addEventListener("click", () => {
	closeModalProduct();
});

closeModal.addEventListener("click", () => {
	closeModalProduct();
});

const newProductsItem = document.querySelectorAll(
	".new_products .new_products-container .new_products-item"
);

newProductsItem.forEach((product, index) => {
	product.addEventListener("click", () => {
		const decrBtn = document.querySelectorAll(".cart_item .decr-quantity");
		const incrBtn = document.querySelectorAll(".cart_item .incr-quantity");
		console.log(decrBtn, incrBtn);
		decrBtn.forEach((btn, index) => {
			btn.addEventListener("click", () => {
				inCart[index].quantity--;
				render();
			});
		});

		incrBtn.forEach((btn, index) => {
			btn.addEventListener("click", () => {
				inCart[index].quantity++;
				render();
			});
		});

		const result = inCart.find((item) => item.name === products[index].name);
		if (result) {
			result.quantity++;
		} else {
			inCart.push(products[index]);
		}
		render();
		closeModalProduct();
	});
});
