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
const transitionProperties = (property = "all", duration = `${transitionDuration / 1000}s`, timingFunction = "ease", delay = "0s") => `${property} ${duration} ${timingFunction} ${delay}`

// HEADER
const header = getElement(".j_header")

// MOBILE MENU
const mobileMenu = getElement(".j_menu")
const mobileMenuIcon = getElement(".j_menu_icon")
const mobileMenuLightbox = getElement(".j_menu_lightbox")

// SLIDER
const sliderNav = getElement(".j_nav")
const slideImage = getElement(".j_slide_image")

const sliderNavHeight = () => sliderNav.offsetHeight
const slideImageHeight = () => slideImage.offsetHeight
const slideImageWidth = () => slideImage.offsetWidth

export {
    getElement, getElements,
    setStyle, addClass, removeClass, toggleClass, replaceClass, elementContainsClass, computedStyle, isVisible, isActive,

    layoutMobile, layoutDesktop, breakpointMobile, breakpointMobileLandscape, breakpointTablet, breakpointTabletLandscape, breakpointDesktopSD, breakpointDesktopHD1, breakpointDesktopHD2, breakpointDesktopFHD, windowSize,

    transitionDuration, transitionGap, transitionProperties,

    header,

    mobileMenu, mobileMenuIcon, mobileMenuLightbox,

    sliderNav, slideImage, sliderNavHeight, slideImageHeight, slideImageWidth,
}