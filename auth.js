let createUser = document.getElementById('createUser')
let form = document.getElementById('form')

form.addEventListener('submit', () => {
    let createLogin = document.getElementById('createLogin')
    let createPassword = document.getElementById('createPassword')
    let createEmail = document.getElementById('createEmail')
    let createTel = document.getElementById('createTel')
    let data = {
        pass: createPassword.value,
        email: createEmail.value,
        tel: createTel.value
    }

    localStorage.setItem(createLogin.value, JSON.stringify(data))
});