// DOM
const getElement = (selector, parentElement = null) => (parentElement ?? document).querySelector(selector)
const getElements = (selector, parentElement = null) => (parentElement ?? document).querySelectorAll(selector)

const setStyle = (element, attr, value) => element.style[attr] = value

const addClass = (element, className) => element.classList.add(className)
const removeClass = (element, className) => element.classList.remove(className)
const toggleClass = (element, className) => element.classList.toggle(className)
const replaceClass = (element, oldClass, newClass) => element.classList.replace(oldClass, newClass)
const elementContainsClass = (element, className) => element.classList.contains(className)

const computedStyle = (element, attr) => window.getComputedStyle(element)[attr]

const isVisible = (element) => computedStyle(element, "display") !== "none"
const isActive = (element) => elementContainsClass(element, "active")

const normalArray = (arr) => {
    let newArray = []
    arr.forEach(item => newArray.push(item))
    return newArray
}

// LAYOUT AND BREAKPOINTS
const layoutMobile = 375
const layoutDesktop = 1440

const breakpointMobile = 480
const breakpointMobileLandscape = 600
const breakpointTablet = 768
const breakpointTabletLandscape = 900
const breakpointDesktopSD = 1024
const breakpointDesktopHD1 = 1366
const breakpointDesktopHD2 = layoutDesktop
const breakpointDesktopFHD = 1920

const windowSize = () => window.innerWidth

// TRANSITION
const transitionDuration = 300
const transitionGap = 10
const transitionProperties = (property = "all", duration = `${transitionDuration / 1000}s`, timingFunction = "ease", delay = "0s") =>
    `${property} ${duration} ${timingFunction} ${delay}`

// HEADER
const header = getElement(".j_header")

// MOBILE MENU
const mobileMenu = getElement(".j_menu")
const mobileMenuIcon = getElement(".j_menu_icon")
const mobileMenuLightbox = getElement(".j_menu_lightbox")

// SLIDER
const sliderNav = getElement(".j_nav")
const prevSlideBtn = getElement(".prev", sliderNav)
const nextSlideBtn = getElement(".next", sliderNav)

const slideImage = (slide) => getElement(".j_slide_image picture", slide)
const slideImageForViewport = () => normalArray(getElements(".j_slide_image")).find(image => isVisible(image.parentNode))

const slideInfo = (slide) => getElement(".j_slide_info", slide)

const sliderNavHeight = () => sliderNav.offsetHeight
const slideImageHeight = () => slideImageForViewport().offsetHeight
const slideImageWidth = () => slideImageForViewport().offsetWidth

const slides = normalArray(getElements(".j_slide"))
const slidePos = (slide) => slides.indexOf(slide)
const prevSlide = (slide) => slides[(slidePos(slide) === 0 ? slides.length - 1 : slidePos(slide) - 1)]
const nextSlide = (slide) => slides[(slidePos(slide) === slides.length - 1 ? 0 : slidePos(slide) + 1)]

export {
    getElement, getElements,
    setStyle, addClass, removeClass, toggleClass, replaceClass, elementContainsClass, computedStyle, isVisible, isActive, normalArray,

    layoutMobile, layoutDesktop, breakpointMobile, breakpointMobileLandscape, breakpointTablet, breakpointTabletLandscape, breakpointDesktopSD, breakpointDesktopHD1, breakpointDesktopHD2, breakpointDesktopFHD, windowSize,

    transitionDuration, transitionGap, transitionProperties,

    header,

    mobileMenu, mobileMenuIcon, mobileMenuLightbox,

    sliderNav, prevSlideBtn, nextSlideBtn, slideImage, slideInfo, slideImageForViewport, sliderNavHeight, slideImageHeight, slideImageWidth, slides, slidePos, prevSlide, nextSlide,
}