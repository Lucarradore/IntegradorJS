document.addEventListener('DOMContentLoaded', function () {
    
    const totalPrice = localStorage.getItem('totalPrice') || 0;
    const orderNumber = localStorage.getItem('orderNumber') || 'ORD-0000';

    document.getElementById('totalPrice').innerText = `$${totalPrice}`;
    document.getElementById('orderNumber').innerText = orderNumber;

    document.getElementById('checkoutForm').addEventListener('submit', function (event) {
        event.preventDefault(); 

        Swal.fire({
            icon: 'success',
            title: '¡Gracias por tu compra!',
            text: 'Su producto está en camino, gracias por su compra.',
            confirmButtonText: 'Aceptar',
            customClass: {
                popup: 'custom-swal-popup', 
                title: 'custom-swal-title', 
                content: 'custom-swal-content', 
                confirmButton: 'custom-swal-button' 
            }
        }).then(() => {
            window.location.href = './signup.html'; 
        });
    });
});
