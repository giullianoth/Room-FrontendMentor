import { fadeIn, fadeOut } from "./effects.js"
import { addClass, breakpointDesktopSD, header, isVisible, mobileMenu, mobileMenuIcon, mobileMenuLightbox, removeClass, replaceClass, setStyle, slideImageHeight, slideImageWidth, sliderNav, sliderNavHeight, transitionDuration, windowSize } from "./variables.js"

const FixedHeader = () => {
    if (window.scrollY > 0) {
        addClass(header, "scrolling")
    } else {        
        removeClass(header, "scrolling")
    }
}

const SliderViewport = () => {
    if (windowSize() <= breakpointDesktopSD) {
        setStyle(sliderNav, "top", `${slideImageHeight() - sliderNavHeight()}px`)
        setStyle(sliderNav, "right", "")
        setStyle(sliderNav, "left", "")
    } else {
        setStyle(sliderNav, "top", `${slideImageHeight() - sliderNavHeight()}px`)
        setStyle(sliderNav, "right", "")
        setStyle(sliderNav, "left", `${slideImageWidth()}px`)
    }
}

const MobileMenu = () => {
    mobileMenuIcon.addEventListener("click", () => {
        
        if (!isVisible(mobileMenuLightbox)) {
            fadeIn(mobileMenuLightbox)
            replaceClass(mobileMenuIcon, "fa-bars", "fa-xmark")

            setTimeout(() => {
                addClass(mobileMenu, "active")
                addClass(mobileMenuIcon, "active")
            }, transitionDuration)
        } else {
            fadeOut(mobileMenuLightbox)
            removeClass(mobileMenu, "active")
            removeClass(mobileMenuIcon, "active")
            replaceClass(mobileMenuIcon, "fa-xmark", "fa-bars")
        }
    })
}

export { SliderViewport, MobileMenu, FixedHeader }