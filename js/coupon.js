// // coupon-function

// document.getElementById('coupon-id').addEventListener(
//     'keyup', function (event) {
//         const text = event.target.value;
//         const applyButton = document.getElementById('btn-apply');
//         const couponCode = 'SELL200';

//         if (text === couponCode) {
//             applyButton.removeAttribute('disabled');
//             applyButton.style.backgroundColor = '#E527B2';
//             applyButton.style.color = 'white';
//         } else {
//             applyButton.setAttribute('disabled', true);
//             applyButton.style.backgroundColor = 'white';
//             applyButton.style.color = 'black';
//         }
//     }
// );
// Function to update card selection and calculate total
function updateCart(itemName, itemPrice) {
    const cartSection = document.getElementById('cart-section');
    const cardNameElement = document.getElementById('card-name');
    const totalElement = document.getElementById('total-amount');

    cardNameElement.textContent = itemName;
    
    // Calculate total price with discount
    const total = parseFloat(totalElement.dataset.originalTotal) - (parseFloat(itemPrice) * 0.2);
    totalElement.textContent = total.toFixed(2) + ' TK';

    cartSection.style.display = 'block';
}

document.getElementById('coupon-id').addEventListener(
    'keyup', function (event) {
        const text = event.target.value;
        const applyButton = document.getElementById('btn-apply');
        const couponCode = 'SELL200';

        if (text === couponCode) {
            applyButton.removeAttribute('disabled');
            applyButton.style.backgroundColor = '#E527B2';
            applyButton.style.color = 'white';
        } else {
            applyButton.setAttribute('disabled', true);
            applyButton.style.backgroundColor = 'white';
            applyButton.style.color = 'black';
        }
    }
);

// Attach click event to card buttons
const cardButtons = document.querySelectorAll('.card-button');
cardButtons.forEach(button => {
    button.addEventListener('click', function () {
        const cardName = this.dataset.cardName;
        const cardPrice = this.dataset.cardPrice;
        updateCart(cardName, cardPrice);
    });
});







