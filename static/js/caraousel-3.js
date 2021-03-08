console.log('inside caraousel 3')

const track = document.querySelector('.carousel_track');
      slides = Array.from(track.children);
      nextButton = document.querySelector('.carousel_button--right');
      prevButton = document.querySelector('.carousel_button--left');
      dotNav = document.querySelector('.carousel_nav')
      dots = Array.from(dotNav.children);

const slideWidth= slides[0].getBoundingClientRect().width;
//console.log(slideSize);
const setSlidePosition = (slide,index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (track,currentSlide,targetSlide) => {
    track.style.transform = 'translateX(-' +targetSlide.style.left+')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot,targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides,prevButton,nextButton,targetIndex) => {
    if(targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length -1 ) {
        prevButton.classList.remove('is-hidden')
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    console.log(nextSlide,'nextSlide');
    const amountToMove = nextSlide.style.left;
    const currentDot = dotNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    // move to the next slide
   moveToSlide(track,currentSlide,nextSlide);
   updateDots(currentDot,nextDot);
   hideShowArrows(slides,prevButton,nextButton,targetIndex);
     
})

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling


    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot,prevDot);
    hideShowArrows(slides,prevButton,nextButton,targetIndex);
})

// dots to move on with the slides

dotNav.addEventListener('click', e => {
    // what indicator was clicke on?
    const targetDot = e.target.closest('button');
    // console.log(tragetDot,'tragetDot')

    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
          currentDot = dotNav.querySelector('.current-slide');
          targetIndex = dots.findIndex( dot => dot === targetDot)
          targetSlide = slides[targetIndex];


          moveToSlide(track,currentSlide,targetSlide);
          updateDots(currentDot,targetDot)
          hideShowArrows(slides,prevButton,nextButton,targetIndex);  
          
          
})

