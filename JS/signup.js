const signupForm = document.querySelector('#signupForm');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    const nameError = document.querySelector('#nameError');
    const emailError = document.querySelector('#emailError');
    const passwordError = document.querySelector('#passwordError');

    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    let isValid = true;

    if (!name) {
    nameError.textContent = 'El nombre es obligatorio.';
    isValid = false;
    }

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
    } else if (password.length < 6) {
    passwordError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
    isValid = false;
    }

    if (!isValid) return; 

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.find(user => user.email === email);

    if (isUserRegistered) {
    return Swal.fire({
        icon: 'error',
        title: 'Usuario existente',
        text: '¡El usuario ya está registrado!',
        confirmButtonText: 'Aceptar',
        customClass: {
            popup: 'custom-swal-popup', 
            title: 'custom-swal-title', 
            content: 'custom-swal-content', 
            confirmButton: 'custom-swal-button'
        }
    });
    }

    Users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(Users));

    Swal.fire({
        icon: 'success',
        title: '¡Registro Exitoso!',
        text: '¡Tu cuenta ha sido creada con éxito!',
        confirmButtonText: 'Iniciar sesión',
        customClass: {
            popup: 'custom-swal-popup', 
            title: 'custom-swal-title', 
            content: 'custom-swal-content', 
            confirmButton: 'custom-swal-button' 
        }
        }).then(() => {
        window.location.href = '/index.html';
    });
    });