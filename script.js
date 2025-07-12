document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { name: "Sports Shirt", price: 19.99, image: "img/product1.jpg" },
        { name: "Running Shoes", price: 59.99, image: "img/product8.jpg" },
        { name: "Hooded Jacket", price: 29.99, image: "img/product3.jpg" },
        { name: "Back Hat", price: 39.99, image: "img/product6.jpg" },
        { name: "Metal Bottle", price: 24.99, image: "img/product4.jpg" },
        {name: ""}
    ];

    const productList = document.getElementById("product-list");

    // Function to render products
    function renderProducts(productArray) {
        productList.innerHTML = "";

        productArray.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("product-card");

            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button class="buy-now-btn" onclick="buyNow('${product.name}')">Buy Now</button>
            `;

            productList.appendChild(card);
        });
    }

    // Function to sort products based on price
    function sortProducts(order) {
        const sortedProducts = [...products];

        if (order === 'asc') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (order === 'desc') {
            sortedProducts.sort((a, b) => b.price - a.price);
        }

        renderProducts(sortedProducts);
    }

    function sortProducts(order) {
    const container = document.getElementById('product-list');
    const cards = Array.from(container.getElementsByClassName('product-card'));

    cards.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('p').textContent.replace(/[^0-9.]/g, ''));
        const priceB = parseFloat(b.querySelector('p').textContent.replace(/[^0-9.]/g, ''));
        return order === 'asc' ? priceB - priceA : priceA - priceB;
    });

    container.innerHTML = '';
    cards.forEach(card => container.appendChild(card));
}


    // Initial rendering of products
    renderProducts(products);
    
    // Add event listeners for sorting buttons
    const sortAscButton = document.getElementById("sort-asc");
    const sortDescButton = document.getElementById("sort-desc");

    sortAscButton.addEventListener("click", () => sortProducts("asc"));
    sortDescButton.addEventListener("click", () => sortProducts("desc"));
});

function buyNow(productName) {
    alert(`Thank you for buying ${productName}!`);
}
