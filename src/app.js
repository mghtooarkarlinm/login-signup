document.getElementById('signin').addEventListener('click',function(){
    document.querySelector('.SignIn-up').classList.add('OpenSignIn')
})

document.getElementById('reg').addEventListener('click',function(){
    document.querySelector('.SignIn-up').classList.remove('OpenSignIn')
})