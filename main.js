
let SignIn = document.getElementById('SignIn')
let btnSignin = document.getElementById('btnSignin')


btnSignin.addEventListener('click', () => {
    let loginSignIn = document.getElementById('loginSignIn').value
    let passSignIn = document.getElementById('passSignIn').value
    if (localStorage.getItem(loginSignIn).toString().includes(`"pass":"${passSignIn}"`)) {
        alert('Succesfully!')
    } else {
        alert('Неправильный логин или пароль')
    }
});

// let createUser = document.getElementById('createUser')
// let form = document.getElementById('form')

// form.addEventListener('submit', () => {
//     let createLogin = document.getElementById('createLogin')
//     let createPassword = document.getElementById('createPassword')
//     let createEmail = document.getElementById('createEmail')
//     let createTel = document.getElementById('createTel')
//     let data = {
//         pass: createPassword.value,
//         email: createEmail.value,
//         tel: createTel.value
//     }

//     localStorage.setItem(createLogin.value, JSON.stringify(data))
// });

// console.log(localStorage.getItem('tyna').toString().includes("123"));
