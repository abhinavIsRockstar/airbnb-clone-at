console.log('inside cataousal demo1.js')

let nextBtn = document.getElementById('next-button')
    prevBtn = document.getElementById('prev-button')
    image_slider = document.getElementsByClassName('image-slider')    
    console.log(image_slider,'image slider')
    image_slide1 = document.getElementById('image-slide1')
    image_slide2 = document.getElementById('image-slide2')
    image_slide3 = document.getElementById('image-slide3')
    carousel_container = document.getElementById('carousal-container')

console.log(carousel_container.children.length,'caraousal container total child')


nextBtn.addEventListener('click', nextButton)
prevBtn.addEventListener('click', prevButton)
let image_length = [4]
function nextButton () {
    console.log('inside next button')
    // image_slide1.style.animationName = "slide"
    // image_slide1.style.animationDuration= "2s"
    // image_slide1.style.aniamtionIterationCount = "2"
    
    for(let i=0;i<4;i++) {
        console.log('inside for loop')

    }
       image_slider[0].style.animationName = 'slide'
       image_slider[0].style.animationDuration = '3s' 
    // image_slide2.style.animationName = "slide1"
    // image_slide2.style.animationDuration= "2s"
    // image_slide2.style.aniamtionIterationCount = "2"

    // image_slide3.style.animationName = "slide2"
    // image_slide3.style.animationDuration= "2s"
    // image_slide3.style.aniamtionIterationCount = "1"
}

function prevButton () {
    console.log('inside previous button')
}