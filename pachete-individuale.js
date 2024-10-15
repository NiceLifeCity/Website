function toggleDescription(descId) {
    const description = document.getElementById(descId);
    if (description.classList.contains('hidden')) {
        description.classList.remove('hidden');
        description.classList.add('visible');
    } else {
        description.classList.remove('visible');
        description.classList.add('hidden');
    }
}

function addToCart(productName, productPrice) {
    alert(productName + " a fost adaugat in cos!");
    let cartItems = getCartItems() || [];

    let existingItem = cartItems.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ name: productName, price: productPrice, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    console.log(productName + " a fost adaugat in cos!"); // Debugging
}

function getCartItems() {
    const cartItems = localStorage.getItem('cart');
    return cartItems ? JSON.parse(cartItems) : [];
}