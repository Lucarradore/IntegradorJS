/////////////// SECCIÓN DE HERO ////////////////
const section = document.createElement('section');
section.id = 'inicio';

const headerContent = document.createElement('div');
headerContent.className = 'header-content container';

const swiperContainer = document.createElement('div');
swiperContainer.className = 'swiper mySwiper-1';

const swiperWrapper = document.createElement('div');
swiperWrapper.className = 'swiper-wrapper';

const slidesData = [
    { imgSrc: '/image/guitarra11.png', title: 'Guitarras ON SALE' },
    { imgSrc: '/image/guitarra10.png', title: 'GUITARRAS ON SALE' },
    { imgSrc: '/image/guitarra12.png', title: 'GUITARRAS ON SALE' },
];

slidesData.forEach((slideData) => {
    const swiperSlide = document.createElement('div');
    swiperSlide.className = 'swiper-slide';

    const slider = document.createElement('div');
    slider.className = 'slider';

    const sliderTxt = document.createElement('div');
    sliderTxt.className = 'slider-txt';

    const h1 = document.createElement('h1');
    h1.innerHTML = `${slideData.title} <span>ONSALE</span>`;
    const p = document.createElement('p');
    p.textContent = '¡Te invitamos a conocer nuestra espectacular tienda de instrumentos musicales varios. Perfecta para vos. A precios justos, e inigualables!¡Mirá!';

    const botonesDiv = document.createElement('div');
    botonesDiv.className = 'botones';

    const btnComprar = document.createElement('a');
    btnComprar.href = '#';
    btnComprar.className = 'btn-1';
    btnComprar.textContent = 'Comprar';

    const btnMenu = document.createElement('a');
    btnMenu.href = '#';
    btnMenu.className = 'btn-1';
    btnMenu.textContent = 'Menu';

    botonesDiv.appendChild(btnComprar);
    botonesDiv.appendChild(btnMenu);

    sliderTxt.appendChild(h1);
    sliderTxt.appendChild(p);
    sliderTxt.appendChild(botonesDiv);

    const sliderImg = document.createElement('div');
    sliderImg.className = 'slider-img';

    const img = document.createElement('img');
    img.src = slideData.imgSrc;
    img.alt = '';

    sliderImg.appendChild(img);

    slider.appendChild(sliderTxt);
    slider.appendChild(sliderImg);

    swiperSlide.appendChild(slider);

    swiperWrapper.appendChild(swiperSlide);
});

const swiperButtonNext = document.createElement('div');
swiperButtonNext.className = 'swiper-button-next';

const swiperButtonPrev = document.createElement('div');
swiperButtonPrev.className = 'swiper-button-prev';

const swiperPagination = document.createElement('div');
swiperPagination.className = 'swiper-pagination';

swiperContainer.appendChild(swiperWrapper);
swiperContainer.appendChild(swiperButtonNext);
swiperContainer.appendChild(swiperButtonPrev);
swiperContainer.appendChild(swiperPagination);

headerContent.appendChild(swiperContainer);
section.appendChild(headerContent);

document.body.appendChild(section);


/////////////// SECCIÓN DE PRODUCTOS ////////////////

const sectionProductos = document.createElement("section");
sectionProductos.id = "productos";

const main = document.createElement("main");
main.className = "products";

const tabsContainer = document.createElement("div");
tabsContainer.className = "tabs container";


function crearProducto(src, titulo, calidad, precio, id) {
    const swiperSlide = document.createElement("div");
    swiperSlide.className = "swiper-slide";
    const product = document.createElement("div");
    product.className = "product";

    const productImg = document.createElement("div");
    if (src === "/image/guitarra14.png" || src === "/image/guitarra15.png" || src === "/image/percusion3.png") {
        productImg.className = "producTwo-img"; 
    } else {
        productImg.className = "product-img"; 
    }

    const h4 = document.createElement("h4");
    h4.innerText = "Nuevo";
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    productImg.append(h4, img);

    const productTxt = document.createElement("div");
    productTxt.className = "product-txt";
    const productTitle = document.createElement("h4");
    productTitle.innerText = titulo;
    const p = document.createElement("p");
    p.innerText = calidad;
    const span = document.createElement("span");
    span.className = "price";
    span.innerText = precio;
    const button = document.createElement("button");
    button.className = "addToCard";
    button.setAttribute("data-product-id", id);
    button.innerText = "Add to cart";
    productTxt.append(productTitle, p, span, button);

    product.append(productImg, productTxt);
    swiperSlide.appendChild(product);

    return swiperSlide;
}

function crearTab(id, label, productos) {
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "tabs";
    input.id = id;
    input.className = "tabInput";

    const labelElement = document.createElement("label");
    labelElement.setAttribute("for", id);
    labelElement.innerText = label;

    const tab = document.createElement("div");
    tab.className = "tab";

    const swiper = document.createElement("div");
    swiper.className = "swiper mySwiper-2";
    swiper.id = `swiper${id.replace("tab", "")}`;

    const swiperWrapper = document.createElement("div");
    swiperWrapper.className = "swiper-wrapper";

    productos.forEach(producto => {
        const { src, titulo, calidad, precio, id } = producto;
        const productoElement = crearProducto(src, titulo, calidad, precio, id);
        swiperWrapper.appendChild(productoElement);
    });

    swiper.appendChild(swiperWrapper);
    const swiperButtonNext = document.createElement("div");
    swiperButtonNext.className = "swiper-button-next";
    const swiperButtonPrev = document.createElement("div");
    swiperButtonPrev.className = "swiper-button-prev";
    swiper.append(swiperButtonNext, swiperButtonPrev);

    tab.appendChild(swiper);
    return { input, labelElement, tab };
}

const productosGuitarras = [
    { src: "/image/guitarra9.png", titulo: "GUITARRA", calidad: "calidad premium", precio: "$1.100.000", id: "1" },
    { src: "/image/guitarra7.png", titulo: "GUITARRA", calidad: "calidad premium", precio: "$400.000", id: "2" },
    { src: "/image/guitarra8.png", titulo: "GUITARRA", calidad: "calidad premium", precio: "$200.000", id: "3" },
    { src: "/image/guitarra13.png", titulo: "GUITARRA", calidad: "calidad premium", precio: "$200.000", id: "4" },
    { src: "/image/guitarra14.png", titulo: "GUITARRA", calidad: "calidad premium", precio: "$400.000", id: "5", className: "producTwo-img"},
    { src: "/image/guitarra15.png", titulo: "GUITARRA", calidad: "calidad premium", precio: "$2.000.000", id: "6", className: "producTwo-img" }
];

const productosVientos = [
    { src: "/image/viento1.png", titulo: "TROMPA", calidad: "calidad premium", precio: "$700.000", id: "7" },
    { src: "/image/viento2.png", titulo: "TROMPETA", calidad: "calidad premium", precio: "$100.000", id: "8" },
    { src: "/image/viento3.png", titulo: "SAXOFÓN", calidad: "calidad premium", precio: "$500.000", id: "9" },
    { src: "/image/viento4.png", titulo: "CLARINETE", calidad: "calidad premium", precio: "$1.000.000", id: "10" },
    { src: "/image/viento5.png", titulo: "FLAUTA MELÓDICA", calidad: "calidad premium", precio: "$200.000", id: "11" },
    { src: "/image/viento6.png", titulo: "ARMÓNICA", calidad: "calidad premium", precio: "$150.000", id: "12" }
];

const productosPercusion = [
    { src: "/image/percusion1.png", titulo: "BONGÓ", calidad: "calidad premium", precio: "$60.000", id: "13" },
    { src: "/image/percusion2.png", titulo: "PANDERETA", calidad: "calidad premium", precio: "$10.000", id: "14" },
    { src: "/image/percusion3.png", titulo: "TAMBOR", calidad: "calidad premium", precio: "$300.000", id: "15" },
    { src: "/image/percusion4.png", titulo: "MARACAS", calidad: "calidad premium", precio: "$100.000", id: "16" },
    { src: "/image/percusion5.png", titulo: "TRIÁNGULO", calidad: "calidad premium", precio: "$50.000", id: "17" },
    { src: "/image/percusion6.png", titulo: "REDOBLANTE", calidad: "calidad premium", precio: "$500.000", id: "18" }
];


const guitarrasTab = crearTab("tab1", "Guitarras", productosGuitarras);
const vientosTab = crearTab("tab2", "Vientos", productosVientos);
const percusionTab = crearTab("tab3", "Percusión", productosPercusion);

tabsContainer.append(guitarrasTab.input, guitarrasTab.labelElement, guitarrasTab.tab);
tabsContainer.append(vientosTab.input, vientosTab.labelElement, vientosTab.tab);
tabsContainer.append(percusionTab.input, percusionTab.labelElement, percusionTab.tab);

main.appendChild(tabsContainer);
sectionProductos.appendChild(main);
document.body.appendChild(sectionProductos);


////////////// SECCIÓN DE ACERCA /////////////////
const sectionServicios = document.createElement('section');
sectionServicios.id = 'servicios';
sectionServicios.className = 'info container';

const infoImg = document.createElement('div');
infoImg.className = 'info-img';
const img1 = document.createElement('img');
img1.src = '/image/guitarra4.png';
img1.alt = '';
infoImg.appendChild(img1);

const infoTxt = document.createElement('div');
infoTxt.className = 'info-txt';
const h2Info = document.createElement('h2');
h2Info.textContent = 'Información';
const pInfo = document.createElement('p');
pInfo.textContent = 'Disponemos de una amplia variedad de productos en nuestro catálogo, desde instrumentos de orquesta y estudio, hasta guitarras, baterías, pianos digitales, saxofones y ukeleles, además de equipos de grabación y microfonía líderes en el mercado...';
const aInfo = document.createElement('a');
aInfo.href = '/HTML/signup.html';
aInfo.target = '_blank';
aInfo.className = 'btn-2';
aInfo.textContent = 'Registrarme';

infoTxt.append(h2Info, pInfo, aInfo);
sectionServicios.append(infoImg, infoTxt);
document.body.appendChild(sectionServicios);


const sectionContacto = document.createElement('section');
sectionContacto.id = 'contacto';
sectionContacto.className = 'contacto';

const container = document.createElement('div');
container.className = 'contacto-container';

const h2 = document.createElement('h2');
h2.textContent = 'Contáctanos';

const form = document.createElement('form');
form.id = 'contactForm';
form.className = 'contact-form';

const fields = [
    { label: 'Nombre', id: 'name', type: 'text', placeholder: 'Tu nombre' },
    { label: 'Correo Electrónico', id: 'email', type: 'email', placeholder: 'Tu correo' },
    { label: 'Mensaje', id: 'message', type: 'textarea', placeholder: 'Escribe tu mensaje aquí' },
];

fields.forEach(field => {
    const fieldContainer = document.createElement('div');
    fieldContainer.className = 'form-field';

    const label = document.createElement('label');
    label.htmlFor = field.id;
    label.textContent = field.label;

    let input;
    if (field.type === 'textarea') {
        input = document.createElement('textarea');
    } else {
        input = document.createElement('input');
        input.type = field.type;
    }
    input.id = field.id;
    input.placeholder = field.placeholder;

    fieldContainer.append(label, input);
    form.appendChild(fieldContainer);
    });

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Enviar';

const errorMessage = document.createElement('p');
errorMessage.id = 'errorMessage';
errorMessage.className = 'error-message';

const successMessage = document.createElement('p');
successMessage.id = 'successMessage';
successMessage.className = 'success-message';

form.append(errorMessage, successMessage, submitButton);
container.append(h2, form);
sectionContacto.appendChild(container);
document.body.appendChild(sectionContacto);

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    errorMessage.textContent = ''; 
    successMessage.textContent = ''; 

    let hasError = false;

    if (!name) {
        errorMessage.textContent = 'Por favor, ingresa tu nombre.';
        hasError = true;
    } else if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        errorMessage.textContent = 'Por favor, ingresa un correo electrónico válido.';
        hasError = true;
    } else if (!message) {
        errorMessage.textContent = 'Por favor, escribe un mensaje.';
        hasError = true;
    }

    if (!hasError) {
        successMessage.textContent = 'Mensaje enviado con éxito. ¡Gracias por contactarnos!';
        form.reset();
    }
});


/////////////// SECCIÓN HORARIO ////////////////

const sectionHorario = document.createElement('section');
sectionHorario.id = 'horario';
sectionHorario.className = 'horario';

const horarioInfo = document.createElement('div');
horarioInfo.className = 'horario-info container';

const h2Horario = document.createElement('h2');
h2Horario.textContent = 'Horario';

const horarioTxt = document.createElement('div');
horarioTxt.className = 'horario-txt';

const createHorarioSection = (title, content, desc) => {
    const divSection = document.createElement('div');
    divSection.className = 'horario-section';

    const divTitle = document.createElement('div');
    divTitle.className = 'horario-title';
    const h4 = document.createElement('h4');
    h4.textContent = title;
    divTitle.appendChild(h4);

    const divContentDesc = document.createElement('div');
    divContentDesc.className = 'horario-content-desc';

    for (let i = 0; i < content.length; i++) {

        const pContent = document.createElement('p');
        pContent.className = 'horario-content';
        pContent.textContent = content[i];
        divContentDesc.appendChild(pContent);

        if (desc && desc[i]) {
            const pDesc = document.createElement('p');
            pDesc.className = 'horario-desc';
            pDesc.textContent = desc[i];
            divContentDesc.appendChild(pDesc);
        }
    }

    divSection.appendChild(divTitle);
    divSection.appendChild(divContentDesc);

    return divSection;
};

const horarioSections = [
    { title: 'Dirección', content: ['Martin García 463', 'Chuquisaca 1973'], desc: ['CABA', 'CABA'] },
    { title: 'Horario', content: ['Lunes a Viernes:', 'Sábado y Domingo:'], desc: ['9 am - 22 pm', '11 am - 17 pm'] },
    { title: 'Teléfono', content: ['+54 (380) 422-1663', '+54 (380) 460-4576'], desc: [null, null] }
];

horarioSections.forEach(section => {
    const divSection = createHorarioSection(section.title, section.content, section.desc);
    horarioTxt.appendChild(divSection);
});

horarioInfo.append(h2Horario, horarioTxt);
sectionHorario.appendChild(horarioInfo);
document.body.appendChild(sectionHorario);

const socialSection = document.createElement('div');
socialSection.className = 'social-section'; 

const h4Social = document.createElement('h4');
h4Social.textContent = 'Redes Sociales';

const socialsDiv = document.createElement('div');
socialsDiv.className = 'socials';

const socialLinks = [
    { href: 'https://www.facebook.com/profile.php?id=61550067862468&mibextid=ZbWKwL', icon: 'fab fa-facebook' },
    { href: 'https://wa.me/3804221663', icon: 'fab fa-whatsapp' },
    { href: 'https://www.instagram.com/lu.carradore?igsh=eDYwbThvbHozMTky', icon: 'fab fa-instagram' }
];

socialLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.target = '_blank';

    const icon = document.createElement('i');
    icon.className = `${link.icon} social-icon`;

    const socialDiv = document.createElement('div');
    socialDiv.className = 'social';
    socialDiv.appendChild(icon);
    a.appendChild(socialDiv);

    socialsDiv.appendChild(a);
});

socialSection.append(h4Social, socialsDiv);
horarioTxt.appendChild(socialSection);

horarioInfo.append(h2Horario, horarioTxt);
sectionHorario.appendChild(horarioInfo);
document.body.appendChild(sectionHorario);

const mapSection = document.createElement('section');
const iframeMap = document.createElement('iframe');
iframeMap.className = 'map';
iframeMap.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55607.98013910735!2d-66.89697688686316!3d-29.414215844573754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9427d9873396f7e5%3A0x3e1c9c348972c7ca!2sLa%20Rioja!5e0!3m2!1ses-419!2sar!4v1716466584705!5m2!1ses-419!2sar';
iframeMap.width = '100%';
iframeMap.height = '500';
iframeMap.style.border = '0';
iframeMap.setAttribute('allow', 'fullscreen');
iframeMap.loading = 'lazy';
iframeMap.referrerPolicy = 'no-referrer-when-downgrade';

mapSection.appendChild(iframeMap);
document.body.appendChild(mapSection);

////////////// FOOTER /////////////////

const footer = document.createElement('footer');
footer.className = 'footer container';

const footerRow = document.createElement('div');
footerRow.className = 'footer-row';

const logoImg = document.createElement('img');
logoImg.src = '/image/logo.png';
logoImg.alt = 'Logo';
logoImg.className = 'logo-2';

const paymentLinks = document.createElement('div');
paymentLinks.className = 'links';
const h4Payment = document.createElement('h4');
h4Payment.textContent = 'Formas de Pago';
const ulPayments = document.createElement('ul');
['Mercadopago', 'VISA', 'Naranja', 'Cabal', 'Diners', 'AMEX', 'Maestro', 'MasterCard', 'MasterDebit'].forEach(method => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = method;
    li.appendChild(a);
    ulPayments.appendChild(li);
});
paymentLinks.append(h4Payment, ulPayments);

const companyLinks = document.createElement('div');
companyLinks.className = 'links';
const h4Company = document.createElement('h4');
h4Company.textContent = 'Company';
const ulCompany = document.createElement('ul');
['Home', 'Productos', 'Servicios', 'Contacto', 'Horario'].forEach(method => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = method;
    li.appendChild(a);
    ulCompany.appendChild(li);
});
companyLinks.append(h4Company, ulCompany);

footerRow.appendChild(logoImg);
footerRow.appendChild(paymentLinks);
footerRow.appendChild(companyLinks);

footer.appendChild(footerRow);

document.body.appendChild(footer);


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


/////////////CARRITO/////////////


class ShoppingCart {
    constructor() {
        this.listCards = [];
        this.products = [
            { id: 1, name: 'GUITARRA ELECTRICA', image: '../../image/guitarra9.png', price: 1100000 },
            { id: 2, name: 'GUITARRA ELECTRICA', image: 'image/guitarra7.png', price: 400000 },
            { id: 3, name: 'GUITARRA ELECTRICA', image: 'image/guitarra8.png', price: 200000 },
            { id: 4, name: 'GUITARRA ELECTRICA', image: '/image/guitarra13.png', price: 200000 },
            { id: 5, name: 'GUITARRA ELECTRICA', image: '/image/guitarra14.png', price: 400000 },
            { id: 6, name: 'GUITARRA ELECTRICA', image: '/image/guitarra15.png', price: 2000000 },
            { id: 7, name: 'TROMPA', image: '/image/viento1.png', price: 700000 },
            { id: 8, name: 'TROMPETA', image: '/image/viento2.png', price: 100000 },
            { id: 9, name: 'SAXOFÓN', image: '/image/viento3.png', price: 500000 },
            { id: 10, name: 'CLARINETE', image: '/image/viento4.png', price: 1000000 },
            { id: 11, name: 'FLAUTA MELÓDICA', image: '/image/viento5.png', price: 2000000 },
            { id: 12, name: 'ARMÓNICA', image: '/image/viento6.png', price: 150000 },
            { id: 13, name: 'BONGÓ', image: '/image/percusion1.png', price: 60000 },
            { id: 14, name: 'PANDERETA', image: '/image/percusion2.png', price: 10000 },
            { id: 15, name: 'TAMBOR', image: '/image/percusion3.png', price: 300000 },
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
            console.error(`Producto con ID: ${productId} no encontrado`);
        }
    }

    updateCart() {
        this.listCard.innerHTML = '';
        let count = 0;

        this.listCards.forEach((product) => {
            count += product.quantity;

            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <div><img src="${product.image}" /></div>
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

        this.quantity.innerText = count;
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

    calculateTotalPrice() {
        return this.listCards.reduce((total, product) => total + (product.price * product.quantity), 0);
    }

    changeQuantity(productId, amount) {
        const product = this.listCards.find(p => p.id === productId);
        if (product) {
            product.quantity += amount;
            if (product.quantity <= 0) {
                this.removeProduct(productId);
            }
        }
        this.updateCart();
        const totalPrice = this.calculateTotalPrice();
        Swal.fire({
            icon: 'success',
            title: `Monto actualizado: ${totalPrice.toLocaleString()}`,
            showConfirmButton: "Aceptar",
            customClass: {
                popup: 'custom-swal-popup', 
                title: 'custom-swal-title', 
                content: 'custom-swal-content', 
                confirmButton: 'custom-swal-button' 
            }
        });
    }

    removeProduct(productId) {
        this.listCards = this.listCards.filter(product => product.id !== productId);
        this.updateCart();
    }

    handleBuy() {
        const totalPrice = this.calculateTotalPrice();
        if (this.listCards.length > 0) {
            localStorage.setItem('totalPrice', totalPrice);
            localStorage.setItem('orderNumber', `ORD-${Date.now()}`);
            window.location.href = './HTML/checkout.html';
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Carrito vacío',
                text: 'Añade productos al carrito para realizar una compra.',
                confirmButtonText: 'Aceptar',
                customClass: {
                    popup: 'custom-swal-popup',
                    title: 'custom-swal-title',
                    content: 'custom-swal-content',
                    confirmButton: 'custom-swal-button'
                }
            });
        }
    }
}

const shoppingCart = new ShoppingCart();
