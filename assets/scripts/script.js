import { FixedHeader, MobileMenu, SliderViewport } from "./viewport.js"

window.onload = () => {
    FixedHeader()
    SliderViewport()
    MobileMenu()
}

window.onresize = SliderViewport
window.onscroll = FixedHeader
