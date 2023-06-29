import { fadeIn, fadeOut } from "./effects.js";
import { addClass, isVisible, nextSlide, nextSlideBtn, prevSlide, prevSlideBtn, removeClass, setStyle, slideImage, slideInfo, slidePos, slides, transitionDuration } from "./variables.js";

const swapSlides = (direction) => {
    for (let index = 0; index < slides.length; index++) {
        if (isVisible(slides[index])) {
            fadeOut(slideImage(slides[index]))

            setStyle(slideInfo(slides[index]), "transform", `translateX(${direction === "next" ? 24 : -24}px)`)
            setStyle(slideInfo(nextSlide(slides[index])), "transform", "translateX(-24px)")

            fadeOut(slideInfo(slides[index]))

            setTimeout(() => {
                fadeIn(slideImage((direction === "next" ? nextSlide(slides[index]) : prevSlide(slides[index]))))

                fadeIn(slideInfo((direction === "next" ? nextSlide(slides[index]) : prevSlide(slides[index]))))
                setStyle(slideInfo((direction === "next" ? nextSlide(slides[index]) : prevSlide(slides[index]))), "transform", "")
                
                setStyle(slideInfo(slides[index]), "transform", "")

                addClass((direction === "next" ? nextSlide(slides[index]) : prevSlide(slides[index])), "active")
                removeClass(slides[index], "active")
            }, transitionDuration)

            break
        }
    }
}

const Slider = () => {
    nextSlideBtn.addEventListener("click", () => swapSlides("next"))
    prevSlideBtn.addEventListener("click", () => swapSlides("previous"))
}

export default Slider