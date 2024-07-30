// Sample data (replace with actual API integration)
const products = [
    { id: 1, name: 'Organic Cotton T-Shirt', category: 'Fashion', price: 29.99, imageUrl: 'https://www.ladore.in/cdn/shop/files/Kids-Combo-Pack-of-2-Full-Sleeves-100_-Organic-Cotton-T-Shirts-_Age-0-5-Years_-Ladore-36358942_540x.jpg?v=1718621955', description: 'Made from 100% organic cotton, sustainably produced.' },
    { id: 2, name: 'Bamboo Toothbrush Set', category: 'Personal Care', price: 9.99, imageUrl: 'https://m.media-amazon.com/images/I/417JN0jtknL._PIbundle-2,TopRight,0,0_SX500SY750SH20_.jpg', description: 'Eco-friendly toothbrush set made from sustainable bamboo.' },
    { id: 3, name: 'Reusable Stainless Steel Straw', category: 'Kitchen', price: 5.99, imageUrl: 'https://www.jiomart.com/images/product/original/rvr8ieznyo/shiroya-brothers-set-of-4-reusable-metal-straws-long-stainless-steel-straw-with-cleaning-brushes-and-case-drinking-product-images-orvr8ieznyo-p605859914-0-202310272054.jpg?im=Resize=(420,420)', description: 'Durable stainless steel straw, reusable and easy to clean.' },
    { id: 4, name: 'Eco-Friendly Notebooks', category: 'Stationery', price: 12.99, imageUrl: 'https://m.media-amazon.com/images/I/41-egDZo8WL._SX300_SY300_QL70_FMwebp_.jpg', description: 'Notebooks made from recycled paper.' },
    { id: 5, name: 'Biodegradable Plant Pots', category: 'Gardening', price: 7.99, imageUrl: 'https://m.media-amazon.com/images/I/51fiy94-O+L._SY300_SX300_.jpg', description: 'Eco-friendly pots made from biodegradable materials.' }
];

// Function to display products
function displayProducts() {
    const productContainer = document.querySelector('.product-list');

    products.forEach(product => {
        const productCard = document.createElement('article');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productCard);
    });
}

// Function to add product to cart (dummy function, replace with actual cart functionality)
function addToCart(productId) {
    alert(`Product with ID ${productId} added to cart.`);
}

// Display products when page loads
window.onload = function() {
    displayProducts();
};

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent! We will get back to you shortly.');
    // Here you can add the code to actually send the form data, e.g., using Fetch API or AJAX
});