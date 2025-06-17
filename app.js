let btnJoin = document.querySelector('.hero-join-btn')
let btnJoinJs = document.querySelector('.js-join-btn')
let hero = document.querySelector('.hero')
let exitForm = document.querySelector('.modal-exit')
let modal = document.querySelector('.join')
let body = document.querySelector('body')

btnJoin.addEventListener('click' , function(){
    modal.style.display = 'block' ;
    body.style.overflowY = 'hidden' ;
})
btnJoinJs.addEventListener('click' , function(){
    modal.style.display = 'block' ;
    body.style.overflowY = 'hidden' ;
})
exitForm.addEventListener('click' , function(){
    modal.style.display = 'none' ;
    body.style.overflowY = 'auto' ; 
})