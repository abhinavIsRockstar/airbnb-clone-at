console.log('inside caraousel demo2.js')

let prevBtn = document.getElementById('prev_button')
    nextBtn = document.getElementById('next_button')
    carousel_slide_image = document.getElementsByClassName('caraousel-slide')
    carousel_slide = document.querySelector('.caraousel-viewport')    
    carousel_track = Array.from(carousel_slide.children)

    console.log(carousel_slide,'carousel slide')
    console.log(carousel_track,'carousel_track')

let slideWidth = carousel_track[0].getBoundingClientRect().width;

let setSlidePosition = (slide,index) => {
    slide.style.left = slideWidth * index + 'px'; 
}

carousel_track.forEach(setSlidePosition);

console.log(slideWidth,'slidewidth')


nextBtn.addEventListener('click', e => {
    let currentSlide = carousel_slide.querySelector('.current-slide');
    let nextSlide = currentSlide.nextElementSibling;
    let amountToMove = nextSlide.style.left;
    // console.log(amountToMove,'amount to move')

    carousel_slide.style.transform = 'translateX('+amountToMove+')';
    currentSlide.classList.remove('.current-slide')
    nextSlide.classList.add('.current-slide')
})


























































// prevBtn.addEventListener('click', previousSlide)
// nextBtn.addEventListener('click', nextSlide)


// function previousSlide () {
//     console.log('inside previous slide')
    
// }


// function nextSlide () {
//     console.log('inside nextSlide')
//     console.log(carousel_slide_image[0],'carousel_slide[0]')
//     for(let i=0;i<3;i++){
//         // carousel_slide[i].style.animationName = "tostart"
//         // carousel_slide[i].style.animationDuration = '2s'
//     }

//     carousel_slide_image[0].style.animationName = "slide"
//     carousel_slide_image[0].style.animationDuration = '2s'
    
// }