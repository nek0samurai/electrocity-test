
let currentPos = 0;
let scrollAmount = 100;

const scrollContainer = document.querySelector('.nav__row');
const scrollHorizontal = document.querySelector('.nav');

const btnRight = document.querySelector('.btn-scroll-right');
const btnLeft = document.querySelector('.btn-scroll-left');

btnLeft.style.opacity = '0';

let maxScroll = -scrollContainer.offsetWidth + scrollHorizontal.offsetWidth;

function scrollHorizontally(val){
    currentPos += (val * scrollAmount);
    
    if(currentPos > 0){
        currentPos = 0;
        btnLeft.style.opacity = '0';
    } else {
        btnLeft.style.opacity = '1';
    }
    if(currentPos < maxScroll){
        currentPos = maxScroll
        btnRight.style.opacity = '0';
    } else{
        btnRight.style.opacity = '1';
    }
    

    scrollContainer.style.left = currentPos + 'px';
}