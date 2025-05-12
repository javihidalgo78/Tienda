const productosContainer = document.getElementById("products");

function displayProducts(){
    productsContainer.innerHTML = products.map(product => {
        `
<div class="product-card">
        img src="product-card"${product.image}" alt="${product.name}">
        <h3>$"{product.name}</h3>
        <p>Precio: ${product.price.toFixed(2)}€</p>
        
    `
    })
}


let contenido = "";
productos.forEach(element => {
    contenido += `
        <div class="producto">
            <img src="${element.imagen}" class="imagenProducto">
            <div class="infoProducto">
                <p><strong>${element.nombre}</strong></p>
                <p>Descripción: ${element.descripcion}</p>
                <p>Precio: $${element.precio.toFixed(2)}</p>
            </div>
        </div>
    `;
});
document.getElementById("productos").innerHTML = contenido;


function displayProducts(){
    productsContainer.innerHTML = products.map(product =>
        `
<div class="product-card">
        <img src="product-card"${product.image}" alt="${product.name}">
        <h3>$"{product.name}</h3>
        <p>Precio: ${product.price.toFixed(2)}€</p>
        <select id="size-${product.id}">
            ${product.sizes.map(talla =>
                `<option value=">${talla}">${talla}</option>`
            ).join('')
        }
        </select>
        <button onclick="addToCart(${product.id})">Añadir al carrito</button>
        </div>
    `
    ).join('');
}

function addToCart(productId){
    const producto = products.find(p => p.id === productId)
    const size = document.getElementById(`size-${productId}`).value;
    alert()
}
displayProducts();

/**
 * Unified product data structure
 * Each object has: id, name, price, description, onSale (boolean), image, and sizes
 */
const products = [
    {id: 1, name: "R.E.M.", price: 20.00, description: "Manga corta", onSale: false, image: "imagenes/camisetarem.jpg", sizes: ["S", "M", "L", "XL"]},
    {id: 2, name: "The Beatles", price: 20.00, description: "Manga corta", onSale: false, image: "imagenes/beatles.jpg", sizes: ["S", "M", "L", "XL"]},
    {id: 3, name: "Pink Floyd", price: 20.00, description: "Manga corta", onSale: false, image: "imagenes/pinkfloyd.jpg", sizes: ["S", "M", "L", "XL"]},
    {id: 4, name: "Ramones", price: 20.00, description: "Manga corta", onSale: false, image: "imagenes/ramones.jpg", sizes: ["S", "M", "L", "XL"]},
    {id: 5, name: "U2", price: 20.00, description: "Manga corta", onSale: false, image: "imagenes/u2.jpg", sizes: ["S", "M", "L", "XL"]},
];

// Get reference to the products container
const productsContainer = document.getElementById("products");

/**
 * Display all products in the container
 */
function displayProducts() {
    productsContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p class="description">${product.description}</p>
            <p class="price">Precio: ${product.price.toFixed(2)}€</p>
            <div class="size-selector">
                <label for="size-${product.id}">Talla:</label>
                <select id="size-${product.id}">
                    ${product.sizes.map(size =>
                        `<option value="${size}">${size}</option>`
                    ).join('')}
                </select>
            </div>
            <button class="add-to-cart" data-product-id="${product.id}">Añadir al carrito</button>
        </div>
    `).join('');
   
            
    
    // Add event listeners to the add-to-cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

/**
 * Filter products by category
 * @param {string} category - The category to filter by
 */
function filterByCategory(category) {
    if (category === 'all') {
        displayProducts();
        return;
    }
    
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(category.toLowerCase());
    });
    
    productsContainer.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p class="description">${product.description}</p>
            <p class="price">Precio: ${product.price.toFixed(2)}€</p>
            <div class="size-selector">
                <label for="size-${product.id}">Talla:</label>
                <select id="size-${product.id}">
                    ${product.sizes.map(size =>
                        `<option value="${size}">${size}</option>`
                    ).join('')}
                </select>
            </div>
            <button class="add-to-cart" data-product-id="${product.id}">Añadir al carrito</button>
        </div>
    `).join('');
    
    // Add event listeners to the add-to-cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

/**
 * Add a product to the shopping cart
 * @param {Event} event - The click event
 */
function addToCart(event) {
    const productId = parseInt(event.target.getAttribute('data-product-id'));
    const selectedSize = document.getElementById(`size-${productId}`).value;
    const product = products.find(p => p.id === productId);
    
    if (product) {
        console.log(`Added ${product.name} (${selectedSize}) to cart`);
        // Here you would add the actual cart functionality
        alert(`Producto añadido al carrito: ${product.name} - Talla: ${selectedSize}`);
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    
    // Optional: Add event listeners for category filters
    const categoryButtons = document.querySelectorAll('.category-filter');
    if (categoryButtons) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const category = e.target.getAttribute('data-category');
                filterByCategory(category);
            });
        });
    }
});