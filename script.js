const products = [
  { id: 1, name: "Smart Watch", price: 2999, image: "images/product1.jpg" },
  { id: 2, name: "Wireless Headphones", price: 1999, image: "images/product2.jpg" },
  { id: 3, name: "Bluetooth Speaker", price: 1499, image: "images/product3.jpg" },
];

const container = document.getElementById("productContainer");

function displayProducts(items) {
  container.innerHTML = items.map(p => `
    <div class="card">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart('${p.name}')">Add to Cart</button>
    </div>
  `).join("");
}

function addToCart(name) {
  alert(`${name} added to cart!`);
}

displayProducts(products);
