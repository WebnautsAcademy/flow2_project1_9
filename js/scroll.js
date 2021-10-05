var slideToLeft = document.querySelector('.left-button')
var slideToRight = document.querySelector('.right-button')
var slides = document.querySelectorAll('.slide')


slideToLeft.addEventListener('click', function(){
    var index = 0
    var is_valid = 0
    slides.forEach.call(slides, function() {
        var index_plus = index == 2 ? 0 : (index + 1)
        var index_minus = index == 0 ? 2 : (index - 1)
        if (is_valid == 0) {
            if (slides[index].classList.contains('slider-item-active')) {
                slides[index].classList.remove('slider-item-active')
                slides[index].classList.add('slider-item-left')    
                slides[index_plus].classList.add('slider-item-active')
                slides[index_plus].classList.remove('slider-item-right')
                slides[index_minus].classList.add('slider-item-right')
                slides[index_minus].classList.remove('slider-item-left')        
                is_valid = 1
                } else {
                    index = index + 1
            }

        }
       
        
    })
})

slideToRight.addEventListener('click', function(){
    var index = 0
    var is_valid = 0
    slides.forEach.call(slides, function() {
        var index_plus = index == 2 ? 0 : (index + 1)
        var index_minus = index == 0 ? 2 : (index - 1)
        if (is_valid == 0) {
            if (slides[index].classList.contains('slider-item-active')) {
                slides[index].classList.remove('slider-item-active')
                slides[index].classList.add('slider-item-right')    
                slides[index_minus].classList.add('slider-item-active')
                slides[index_minus].classList.remove('slider-item-left')
                slides[index_plus].classList.add('slider-item-left')
                slides[index_plus].classList.remove('slider-item-right')        
                is_valid = 1
                } else {
                    index = index + 1
            }

        }
       
        
    })
})