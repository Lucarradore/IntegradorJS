var swiper1 = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        
    }
});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input){
    input.addEventListener("change", function(){
        let id = input.getAttribute('data-swiper-id'); 
        let thisSwiper = document.getElementById("swiper" + id).swiper; 
        if (thisSwiper) {
            thisSwiper.update();
        }
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////PROBLEMA////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////



document.addEventListener("DOMContentLoaded", function () {
    class ShoppingCart {
        constructor() {
            this.listCards = [];
            this.products = [
                { id: 1, name: 'GUITARRA ELECTRICA', image: '/image/guitarra9-removebg-preview.png', price: 1100000 },
                { id: 2, name: 'GUITARRA ELECTRICA', image: '/image/guitarra7-removebg-preview.png', price: 400000 },
                { id: 3, name: 'GUITARRA ELECTRICA', image: '/image/guitarra8-removebg-preview.png', price: 200000 },
                { id: 4, name: 'GUITARRA ELECTRICA', image: '/image/guitarra13.png', price: 200000 },
                { id: 5, name: 'GUITARRA ELECTRICA', image: '/image/guitarra14.png', price: 400000 },
                { id: 6, name: 'GUITARRA ELECTRICA', image: '/image/guitarra15.png', price: 2000000 },
                { id: 7, name: 'TROMPA', image: '/image/viento1-removebg-preview.png', price: 700000 },
                { id: 8, name: 'TROMPETA', image: '/image/viento2-removebg-preview.png', price: 100000 },
                { id: 9, name: 'SAXOFÓN', image: '/image/viento3-removebg-preview.png', price: 500000 },
                { id: 10, name: 'CLARINETE', image: '/image/viento4.png', price: 1000000 },
                { id: 11, name: 'FLAUTA MELÓDICA', image: '/image/viento5.png', price: 2000000 },
                { id: 12, name: 'ARMÓNICA', image: '/image/viento6.png', price: 150000 },
                { id: 13, name: 'BONGÓ', image: '/image/percusion1-removebg-preview.png', price: 60000 },
                { id: 14, name: 'PANDERETA', image: '/image/percusion2-removebg-preview.png', price: 10000 },
                { id: 15, name: 'TAMBOR', image: '/image/percusion3-removebg-preview.png', price: 300000 },
                { id: 16, name: 'MARACAS', image: '/image/percusion4.png', price: 100000 },
                { id: 17, name: 'TRIÁNGULO', image: '/image/percusion5.png', price: 50000 },
                { id: 18, name: 'REDOBLANTE', image: '/image/percusion6.png', price: 500000 }
            ];

            this.init();
        }

        init() {
            this.openShopping = document.querySelector('.shopping');
            this.closeShopping = document.querySelector('.closeShopping');
            this.listCard = document.querySelector('.listCard');
            this.body = document.querySelector('body');
            this.quantity = document.querySelector('.quantity');
            this.buyButton = document.querySelector('.buy');

            this.openShopping.addEventListener('click', () => {
                this.body.classList.add('active');
            });

            this.closeShopping.addEventListener('click', () => {
                this.body.classList.remove('active');
            });

            document.querySelectorAll('.addToCard').forEach((button) => {
                button.addEventListener('click', (event) => {
                    const productId = parseInt(event.target.getAttribute('data-product-id'));
                    this.addToCard(productId);
                });
            });

            this.buyButton.addEventListener('click', () => this.handleBuy());

            this.updateCart();
        }

        addToCard(productId) {
            const product = this.products.find(p => p.id === productId);
            if (product) {
                const existingProduct = this.listCards.find(p => p.id === productId);
                if (existingProduct) {
                    existingProduct.quantity++;
                } else {
                    this.listCards.push({ ...product, quantity: 1 });
                }
                this.updateCart();
            } else {
                console.error(`Product with ID: ${productId} not found`);
            }
        }

        updateCart() {
            this.listCard.innerHTML = '';
            let count = 0;
            let totalPrice = 0;

            this.listCards.forEach((product) => {
                count += product.quantity;
                totalPrice += product.price * product.quantity;

                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <div><img src="image/${product.image}" /></div>
                    <div>${product.name}</div>
                    <div>${product.price.toLocaleString()}</div>
                    <div>
                        <button class="decrease" data-id="${product.id}">-</button>
                        <span class="quantity">${product.quantity}</span>
                        <button class="increase" data-id="${product.id}">+</button>
                    </div>
                    <div>
                        <button class="remove" data-id="${product.id}">Eliminar</button>
                    </div>
                `;

                this.listCard.appendChild(listItem);
            });

            this.quantity.innerText = count > 0 ? count : '';

            this.assignEventListeners();
        }

        assignEventListeners() {
            document.querySelectorAll('.increase').forEach(button => {
                button.addEventListener('click', (event) => {
                    const productId = parseInt(event.target.getAttribute('data-id'));
                    this.changeQuantity(productId, 1);
                });
            });

            document.querySelectorAll('.decrease').forEach(button => {
                button.addEventListener('click', (event) => {
                    const productId = parseInt(event.target.getAttribute('data-id'));
                    this.changeQuantity(productId, -1);
                });
            });

            document.querySelectorAll('.remove').forEach(button => {
                button.addEventListener('click', (event) => {
                    const productId = parseInt(event.target.getAttribute('data-id'));
                    this.removeProduct(productId);
                });
            });
        }

        changeQuantity(productId, delta) {
            const product = this.listCards.find(p => p.id === productId);
            if (product) {
                product.quantity += delta;
                if (product.quantity <= 0) {
                    this.listCards = this.listCards.filter(p => p.id !== productId);
                }
                this.updateCart();
                this.showUpdatedPriceAlert();
            } else {
                console.error(`Product with ID: ${productId} not found in cart`);
            }
        }

        removeProduct(productId) {
            this.listCards = this.listCards.filter(p => p.id !== productId);
            this.updateCart();
            this.showUpdatedPriceAlert();
        }

        calculateTotalPrice() {
            return this.listCards.reduce((acc, product) => acc + (product.price * product.quantity), 0);
        }

        showUpdatedPriceAlert() {
            const totalPrice = this.calculateTotalPrice();
            Swal.fire({
                icon: 'info',
                title: 'Carrito actualizado',
                text: `El total actualizado es ${totalPrice.toLocaleString()}`,
                showConfirmButton: true,
                timer: 3000,
                background: '#343a40',
                color: '#ffffff'
            });
        }

        handleBuy() {
            let totalPrice = this.calculateTotalPrice();
            if (this.listCards.length > 0) {
                Swal.fire({
                    icon: 'success',
                    title: 'Compra exitosa',
                    text: `Gracias por tu compra! El total es ${totalPrice.toLocaleString()}`,
                    showConfirmButton: true,
                    timer: 3000,
                    background: '#343a40',
                    color: '#ffffff'
                });
                this.listCards = [];
                this.updateCart();
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Carrito vacío',
                    text: 'Añade productos al carrito para realizar una compra.',
                    background: '#343a40',
                    color: '#ffffff'
                });

            }
         }
    }

    const shoppingCart = new ShoppingCart();
});
