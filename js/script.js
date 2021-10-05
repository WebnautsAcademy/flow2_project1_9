// var someVariable = document.querySelector()
// var logo_element = document.querySelector('.logo')
// var logo_all = document.querySelectorAll('a')

var buttonElem = document.querySelector('.button')

var buttonOtzvon = document.querySelector('.footer-button')
var closeFooterPopup = document.querySelector('.close-callback-popup')
var footerPopUp = document.querySelector('.footer-popup')

buttonOtzvon.addEventListener('click', function(){
    footerPopUp.classList.toggle('popup-container-hidden')
})
closeFooterPopup.addEventListener('click', function (){
    footerPopUp.classList.toggle('popup-container-hidden')
})


console.log(footerPopUp)

// var popupContainerElement = document.querySelector('.popup-container')
// var buttonCloseElement = document.querySelector('.close')

// buttonElem.addEventListener('click', function () {
    // if (buttonElem.classList.contains('button-red')) {
    //     buttonElem.classList.remove('button-red')        
    // } else {
    //     buttonElem.classList.add('button-red')
    // }
    // buttonElem.classList.toggle('button-red')
    // popupContainerElement.classList.remove('popup-container-hidden')

// })

// buttonCloseElement.addEventListener('click', function () {
    // popupContainerElement.classList.add('popup-container-hidden')
// })  