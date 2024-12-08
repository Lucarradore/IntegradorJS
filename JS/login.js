const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    const emailError = document.querySelector('#emailError');
    const passwordError = document.querySelector('#passwordError');

    emailError.textContent = '';
    passwordError.textContent = '';

    let isValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        emailError.textContent = 'El correo electrónico es obligatorio.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'El formato del correo no es válido.';
        isValid = false;
    }

    if (!password) {
        passwordError.textContent = 'La contraseña es obligatoria.';
        isValid = false;
    }

    if (!isValid) return; 

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = Users.find(user => user.email === email && user.password === password);

    if (!validUser) {
        return Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Usuario y/o contraseña incorrectos!',
            confirmButtonText: 'Intentar nuevamente',
            customClass: {
                popup: 'custom-swal-popup', 
                title: 'custom-swal-title', 
                content: 'custom-swal-content', 
                confirmButton: 'custom-swal-button' 
            }
        });
    }

    Swal.fire({
        icon: 'success',
        title: '¡Bienvenid@!',
        text: `Bienvenido ${validUser.name}`,
        confirmButtonText: 'Aceptar',
        customClass: {
            popup: 'custom-swal-popup', 
            title: 'custom-swal-title', 
            content: 'custom-swal-content', 
            confirmButton: 'custom-swal-button' 
        }
        }).then(() => {
        localStorage.setItem('login_success', JSON.stringify(validUser));
        window.location.href = '/index.html';
        });
    });