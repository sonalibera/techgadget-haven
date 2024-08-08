document.addEventListener('DOMContentLoaded', () => {
    const cartItemsElement = document.getElementById('cart-items');
    const cartSummaryElement = document.getElementById('cart-summary');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartItemsElement.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach(item => {
        const productElement = document.createElement('div');
        productElement.classList.add('cart-item');
        productElement.innerHTML = `
            <h3>${item.product}</h3>
            <p>Quantity: ${item.quantity}</p>
        `;
        cartItemsElement.appendChild(productElement);
    });

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    cartSummaryElement.innerHTML = `<h3>Total Items: ${totalQuantity}</h3>`;
});

function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }

    // Simulate checkout process
    alert('Proceeding to checkout...');
    // Clear the cart
    localStorage.removeItem('cart');
    // Redirect to order confirmation page
    window.location.href = 'order-confirmation.html';
}
