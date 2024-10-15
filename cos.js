function getCartItems() {
    const cartItems = localStorage.getItem('cart');
    return cartItems ? JSON.parse(cartItems) : [];
}

function displayCartItems() {
    const cartItems = getCartItems();
    const cartContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    let totalPrice = 0;

    cartContainer.innerHTML = ''; // Resetăm conținutul

    if (cartItems.length > 0) {
        cartItems.forEach((item, index) => {
            const itemTotal = item.price * item.quantity * (1 - 0.20); // Calculăm total cu discount
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <h3>${item.name}</h3>
                <p>£${item.price.toFixed(2)} Pret Initial</p>
                <p>£${(item.price * (1 - 0.20)).toFixed(2)} (Dupa 20% Discount)</p>
                <div class="quantity-controls">
                    <span class="quantity-label">Cantitate: ${item.quantity}</span>
                    <button class="quantity-button" onclick="updateQuantity(${index}, 1)">🢁</button>
                    <button class="quantity-button" onclick="updateQuantity(${index}, -1)">🢃</button>
                </div>
                <p>Subtotal: £${itemTotal.toFixed(2)}</p>
                <button class="remove" onclick="removeFromCart(${index})">Sterge</button>
            `;
            cartContainer.appendChild(itemElement);
            totalPrice += itemTotal;
        });
        totalPriceContainer.innerHTML = `<h2>Total: £${totalPrice.toFixed(2)}</h2>`;
    } else {
        cartContainer.innerHTML = '<p class="empty-cart-message">Cosul tau este gol.</p>';
        totalPriceContainer.innerHTML = '<h2>Total: £0.00</h2>'; // Resetăm totalul la 0
    }
}

function updateQuantity(index, change) {
    let cartItems = getCartItems();
    cartItems[index].quantity = Math.max(1, cartItems[index].quantity + change); // Asigurăm că cantitatea este cel puțin 1
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCartItems();
}

function removeFromCart(index) {
    let cartItems = getCartItems();
    cartItems.splice(index, 1); // Eliminăm produsul
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCartItems(); // Afișăm din nou produsele actualizate
}

function checkout() {
    alert("Comanda a fost finalizata!");
    localStorage.removeItem('cart'); // Golim coșul după finalizare
    displayCartItems();
}

// La încărcarea paginii coșului, afișăm produsele
document.addEventListener('DOMContentLoaded', displayCartItems);
