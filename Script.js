let cart = [];

function addToCart(productName, price) {
    const productIndex = cart.findIndex(item => item.productName === productName);

    if (productIndex === -1) {
        cart.push({ productName, price, quantity: 1 });
    } else {
        cart[productIndex].quantity++;
    }

    updateCartUI();
}

function removeFromCart(index) {
    const confirmation = confirm("Are you sure you want to remove this product?");
    
    if (confirmation) {
        cart.splice(index, 1);
        updateCartUI();
    }
}

function updateCartUI() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    cart.forEach((item, index) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `${item.productName} - $${item.price} (Quantity: ${item.quantity})
            <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItemsElement.appendChild(cartItemElement);
    });
}
