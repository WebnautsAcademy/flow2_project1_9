var buttonElem = document.querySelector('.button')
var popUpContainer = document.querySelector('.popup-container')
var closePopUp = document.querySelector('.close')
var calcPopUp = document.querySelector('.button-popup')

var closeCalc = document.querySelector('.close-calc')
var undoCalc = document.querySelector('.btn-sum')
var goToThanksPopUp = document.querySelector('.btn-calc')

var popup3 = document.querySelector('.popup-3')
var closeThanks = document.querySelector('.close-thanks')
var closeThanks2 = document.querySelector('.thanks-button')

var calcPopUpContainer = document.querySelector('.popup-container-calculation')


var buttonOtzvon = document.querySelector('.footer-button')
var closeFooterPopup = document.querySelector('.close-callback-popup')
var footerPopUp = document.querySelector('.footer-popup')

if (buttonElem) {
    buttonElem.addEventListener('click', function(){
        popUpContainer.classList.toggle('popup-container-hidden')
    })
    closePopUp.addEventListener('click', function(){
        popUpContainer.classList.toggle('popup-container-hidden')
    })
    calcPopUp.addEventListener('click', function() {
        popUpContainer.classList.toggle('popup-container-hidden');
        calcPopUpContainer.classList.toggle('popup-container-hidden')
    })
}

if (closeCalc) {
    closeCalc.addEventListener('click', function(){
        calcPopUpContainer.classList.toggle('popup-container-hidden')
    })
    undoCalc.addEventListener('click',  function() {
        calcPopUpContainer.classList.toggle('popup-container-hidden')
        popUpContainer.classList.toggle('popup-container-hidden')
    })
    goToThanksPopUp.addEventListener('click', function() {
        calcPopUpContainer.classList.toggle('popup-container-hidden')
        popup3.classList.toggle('popup-container-hidden')
    })
}

if (closeThanks) {
    closeThanks.addEventListener('click', function() {
        popup3.classList.toggle('popup-container-hidden')
    })
    closeThanks2.addEventListener('click', function() {
        popup3.classList.toggle('popup-container-hidden')
    })
}



buttonOtzvon.addEventListener('click', function(){
    footerPopUp.classList.toggle('popup-container-hidden')
})
closeFooterPopup.addEventListener('click', function (){
    footerPopUp.classList.toggle('popup-container-hidden')
})


