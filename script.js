document.getElementById('calculate').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const checkboxes = document.querySelectorAll('.item-checkbox');
    let total = 0;
    const selectedItems = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const price = parseFloat(checkbox.getAttribute('data-price'));
            total += price;
            selectedItems.push(checkbox.parentElement.textContent.trim());
        }
    });

    document.getElementById('total').textContent = total.toFixed(2);
    document.getElementById('receipt-name').textContent = name;
    document.getElementById('receipt-items').innerHTML = selectedItems.map(item => `<li>${item}</li>`).join('');
    document.getElementById('receipt-total').textContent = total.toFixed(2);
});

document.getElementById('print').addEventListener('click', function() {
    // Show the receipt and hide the rest of the page
    const receipt = document.getElementById('receipt');
    receipt.classList.remove('hidden');

    // Hide other elements
    const container = document.querySelector('.container');
    container.style.display = 'none';

    // Print the receipt
    window.print();

    // Restore the original state after printing
    container.style.display = 'block';
    receipt.classList.add('hidden'); // Hide receipt again after printing
});