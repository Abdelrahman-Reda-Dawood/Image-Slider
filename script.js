const sliderContainer = document.querySelector('.slider-container')
const sliderRight = document.querySelector('.right-slide')
const sliderLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slideLength = sliderRight.querySelectorAll('div').length

let activeSlideIndex = 0

sliderLeft.style.top = `-${(slideLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (dirction) => {
    const sliderHeight = sliderContainer.clientHeight
    if (dirction == 'up') {
        activeSlideIndex++
        if (activeSlideIndex > slideLength - 1) {
            activeSlideIndex = 0
        }
    } else if (dirction == 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slideLength - 1
        }
    }

    sliderRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`

    sliderLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`

}