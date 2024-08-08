const cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const quantity = parseInt(button.previousElementSibling.querySelector('input').value, 10);

        addToCart(product, quantity);
    });
});

function addToCart(product, quantity) {
    const existingProduct = cart.find(item => item.product === product);
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({ product, quantity });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartTotal();
}

function updateCartTotal() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-total').innerText = `Cart (${totalItems} items)`;
}

document.addEventListener('DOMContentLoaded', updateCartTotal);
