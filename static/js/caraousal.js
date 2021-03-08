let next_btn = document.getElementsByClassName('next-icon-image')
    prev_btn = document.getElementsByClassName('prev-icon-image')
    image_slide = document.getElementById('image-slide-container')
    slide_swap_length = 200 + "px"
    slide_image_item = document.getElementsByClassName('slide-image-item')
    slide_image_container = document.getElementsByClassName('image-container')

    console.log(slide_swap_length,'slide swap')
    console.log(image_slide,'image-slide')
    console.log(slide_image_item,'slide-image-item')
    console.log(slide_image_container,'slide_image_container')

    next_btn[0].addEventListener('click',nextBtn)
    prev_btn[0].addEventListener('click',prevBtn)

function nextBtn() {
    console.log('inside function')
    // image_slide.style.animationName= "leftTransition"
    // image_slide.style.animationDuration= "4s"
    // image_slide.style.animationIterationCount = "3"
    // image_slide.style.right = "100px"
    // slide_image_item[0].style .right = "100px"
    slide_image_container[0].style.animationName = "leftTransition"
    slide_image_container[0].style.animationDuration = "4s"
    // slide_image_container[0].style.animationDuration = "transform 2s"
    // slide_image_container[0].style.animationDuration = "transform 2s"
}

function prevBtn () {
    console.log('inside previous button')
    // image_slide.style.right = "-100px"
    slide_image_container[0].style.transform = "translateX(190px)"
    slide_image_container[0].style.transition = "transform 2s"
}