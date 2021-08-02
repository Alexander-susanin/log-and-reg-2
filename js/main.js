// const signUp = document.getElementById('sign-up')
// const signIn = document.getElementById('sign-in')
// const loginIn = document.getElementById('login-in')
// const loginUp = document.getElementById('lognin-up')

// signUp.addEventListener('click', () => {
//     loginIn.classList.remove('block')
//     loginUp.classList.remove('none')

//     loginUp.classList.add('none')
//     loginUp.classList.add('block')
// })

// signIn.addEventListener('click', ()=> {
//     loginIn.classList.remove('none')
//     loginUp.classList.remove('block')
    
//     loginIn.classList.add('block')
//     loginUp.classList.add('none')
// })

const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.add('none')
    loginUp.classList.add('block')
})

signIn.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.add('block')
    loginUp.classList.add('none')
})