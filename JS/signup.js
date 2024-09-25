const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)
    
    if(isUserRegistered){
        return Swal.fire({
            icon: 'error',
            title: 'Usuario existente',
            text: '¡El usuario ya está registrado!'
        })
    }

    Users.push({name: name, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    
    Swal.fire({
        icon: 'success',
        title: '¡Registro Exitoso!',
        text: '¡Tu cuenta ha sido creada con éxito!',
        confirmButtonText: 'Iniciar sesión'
    }).then(() => {
        window.location.href = 'login.html'
    })
})
